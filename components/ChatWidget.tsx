"use client";

import { useState, useRef, useEffect, type FormEvent } from "react";
import { IconSend, IconX } from "./Icons";

const LOGO_URL = "/logo.png";

type Msg = { role: "user" | "bot"; text: string };

type VisitorInfo = {
  name: string;
  phone: string;
  careType: string;
  timeframe: string;
};

const CARE_TYPES = [
  "Personal Care",
  "Companionship",
  "Alzheimer's / Memory Care",
  "24/7 or Live-In Care",
  "Respite Care",
  "Not sure yet",
];

const TIMEFRAMES = ["This week", "This month", "Just researching"];

function greetingFor(info: VisitorInfo): Msg {
  const firstName = info.name.trim().split(/\s+/)[0] || "there";
  return {
    role: "bot",
    text: `Hi ${firstName}, thanks for sharing that. I'm the Archangels AI Care Concierge — ask me anything about our services, pricing structure, or availability in Richmond, Chesterfield, Mechanicsville, Hanover County, Henrico, and surrounding areas, and our care team will follow up with you shortly too.`,
  };
}

// Matches a structured lead-capture marker the AI is instructed to emit once it has
// gathered enough info to qualify a visitor (see SYSTEM_PROMPT in app/api/chat/route.ts).
// Example: [[LEAD name="John Smith" phone="8045551234" careType="Companionship" notes="..."]]
const LEAD_MARKER = /\[\[LEAD([^\]]*)\]\]/i;

function parseLeadMarker(text: string): { clean: string; lead: Record<string, string> | null } {
  const match = text.match(LEAD_MARKER);
  if (!match) return { clean: text, lead: null };
  const attrs: Record<string, string> = {};
  const attrRe = /(\w+)="([^"]*)"/g;
  let m;
  while ((m = attrRe.exec(match[1])) !== null) {
    attrs[m[1]] = m[2];
  }
  const clean = text.replace(LEAD_MARKER, "").trim();
  return { clean, lead: Object.keys(attrs).length ? attrs : null };
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [intakeDone, setIntakeDone] = useState(false);
  const [intakeStatus, setIntakeStatus] = useState<"idle" | "loading">("idle");
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showCallback, setShowCallback] = useState(false);
  const [callbackStatus, setCallbackStatus] = useState<"idle" | "loading" | "sent">("idle");
  const scrollRef = useRef<HTMLDivElement>(null);
  const leadCaptured = useRef(false);
  const visitorInfo = useRef<VisitorInfo | null>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  async function submitIntake(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIntakeStatus("loading");
    const data = new FormData(e.currentTarget);
    const info: VisitorInfo = {
      name: String(data.get("name") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
      careType: String(data.get("careType") || "Not sure yet"),
      timeframe: String(data.get("timeframe") || "Just researching"),
    };
    visitorInfo.current = info;
    leadCaptured.current = true;

    fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        source: "chat-intake",
        name: info.name,
        phone: info.phone,
        careType: info.careType,
        message: `Started an AI concierge chat. Timeframe: ${info.timeframe}.`,
      }),
    }).catch(() => {});

    setMessages([greetingFor(info)]);
    setIntakeDone(true);
    setIntakeStatus("idle");
  }

  async function send() {
    const text = input.trim();
    if (!text || loading) return;
    const next = [...messages, { role: "user" as const, text }];
    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: next.map((m) => ({ role: m.role, text: m.text })),
          visitor: visitorInfo.current,
        }),
      });
      const data = await res.json();
      const rawReply: string = data.reply || "Sorry, I didn't catch that — could you rephrase?";
      const { clean, lead } = parseLeadMarker(rawReply);

      setMessages((cur) => [...cur, { role: "bot", text: clean }]);

      if (lead && !leadCaptured.current) {
        leadCaptured.current = true;
        fetch("/api/lead", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            source: "chat-qualified-lead",
            name: lead.name,
            phone: lead.phone,
            careType: lead.careType,
            message: lead.notes || "Qualified via AI Care Concierge conversation.",
          }),
        }).catch(() => {});
      }
    } catch {
      setMessages((cur) => [
        ...cur,
        {
          role: "bot",
          text: "I'm having trouble connecting right now. Please call us at 804-903-8133, or leave your info below and our team will reach out.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  async function submitCallback(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setCallbackStatus("loading");
    const data = new FormData(e.currentTarget);
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "chat-widget",
          name: data.get("name"),
          phone: data.get("phone"),
          message: "Requested a callback from the AI chat concierge.",
        }),
      });
      setCallbackStatus("sent");
    } catch {
      setCallbackStatus("idle");
    }
  }

  return (
    <>
      {!open && (
        <button className="chat-launcher" onClick={() => setOpen(true)} aria-label="Open chat">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="chat-launcher-logo" src={LOGO_URL} alt="" />
        </button>
      )}

      {open && (
        <div className="chat-panel">
          <div className="chat-panel-head">
            <div className="chat-avatar-wrap">
              <div className="chat-avatar">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="chat-avatar-logo" src={LOGO_URL} alt="" />
              </div>
              <span className="chat-avatar-dot" />
            </div>
            <div>
              <strong>AI Care Concierge</strong>
              <span>Archangels Personal Care</span>
            </div>
            <button className="chat-close" onClick={() => setOpen(false)} aria-label="Close chat">
              <IconX />
            </button>
          </div>

          {!intakeDone ? (
            <div className="chat-intake">
              <p className="chat-intake-lead">
                Hi, I&apos;m the Archangels AI Care Concierge. Tell us a little about who needs care
                so we can point you in the right direction — then ask me anything.
              </p>
              <form className="chat-intake-form" onSubmit={submitIntake}>
                <input name="name" placeholder="Your name" required />
                <input name="phone" placeholder="Phone number" required />
                <select name="careType" defaultValue="Not sure yet">
                  {CARE_TYPES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
                <select name="timeframe" defaultValue="Just researching">
                  {TIMEFRAMES.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
                <button className="chat-intake-btn" type="submit" disabled={intakeStatus === "loading"}>
                  {intakeStatus === "loading" ? "Starting..." : "Start Chatting"}
                </button>
              </form>
              <p className="chat-intake-skip">
                Prefer to just call? <a href="tel:8049038133">804-903-8133</a>
              </p>
            </div>
          ) : (
            <>
              <div className="chat-messages" ref={scrollRef}>
                {messages.map((m, i) => (
                  <div key={i} className={`chat-msg ${m.role === "bot" ? "bot" : "user"}`}>
                    {m.text}
                  </div>
                ))}
                {loading && (
                  <div className="chat-msg bot chat-typing">
                    <span />
                    <span />
                    <span />
                  </div>
                )}
              </div>

              <div className="chat-input-row">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && send()}
                  placeholder="Ask a question..."
                />
                <button className="chat-send" onClick={send} disabled={loading} aria-label="Send">
                  <IconSend />
                </button>
              </div>

              <details
                className="chat-callback"
                open={showCallback}
                onToggle={(e) => setShowCallback((e.target as HTMLDetailsElement).open)}
              >
                <summary>Prefer a real person calls you back?</summary>
                {callbackStatus === "sent" ? (
                  <p style={{ fontSize: 12.5, marginTop: 8, color: "var(--pine-deep)" }}>
                    Got it — our care team will call you shortly.
                  </p>
                ) : (
                  <form className="chat-callback-form" onSubmit={submitCallback}>
                    <input name="name" placeholder="Your name" required />
                    <input name="phone" placeholder="Phone number" required />
                    <button className="chat-callback-btn" type="submit" disabled={callbackStatus === "loading"}>
                      {callbackStatus === "loading" ? "Sending..." : "Request a callback"}
                    </button>
                  </form>
                )}
              </details>
            </>
          )}
        </div>
      )}
    </>
  );
}
