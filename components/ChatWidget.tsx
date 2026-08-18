"use client";

import { useState, useRef, useEffect, type FormEvent } from "react";
import { IconSend, IconX } from "./Icons";

const LOGO_URL = "https://www.archangelspersonalcare.com/logo.png";

type Msg = { role: "user" | "bot"; text: string };

const GREETING: Msg = {
  role: "bot",
  text:
    "Hi, I'm the Archangels AI Care Concierge. I can answer questions about our services, pricing structure, and availability in Richmond, Mechanicsville, and Hanover County. What can I help with?",
};

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
  const [messages, setMessages] = useState<Msg[]>([GREETING]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showCallback, setShowCallback] = useState(false);
  const [callbackStatus, setCallbackStatus] = useState<"idle" | "loading" | "sent">("idle");
  const scrollRef = useRef<HTMLDivElement>(null);
  const engagementPinged = useRef(false);
  const leadCaptured = useRef(false);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;
    const next = [...messages, { role: "user" as const, text }];
    setMessages(next);
    setInput("");
    setLoading(true);

    // Fire a one-time, lightweight "someone is talking to the concierge" notification
    // on first interaction, independent of whether a full lead ever gets captured.
    if (!engagementPinged.current) {
      engagementPinged.current = true;
      fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "chat-engagement",
          message: `Visitor started chatting with the AI concierge. First message: "${text}"`,
        }),
      }).catch(() => {});
    }

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: next.map((m) => ({ role: m.role, text: m.text })),
        }),
      });
      const data = await res.json();
      const rawReply: string = data.reply || "Sorry, I didn't catch that — could you rephrase?";
      const { clean, lead } = parseLeadMarker(rawReply);

      setMessages((cur) => [...cur, { role: "bot", text: clean }]);

      // The AI has gathered enough (name/phone/care need) to qualify this as a real
      // lead — auto-submit it once per session so a coordinator gets notified.
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
          text:
            "I'm having trouble connecting right now. Please call us at 804-903-8133, or leave your info below and our team will reach out.",
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

          <div className="chat-messages" ref={scrollRef}>
            {messages.map((m, i) => (
              <div key={i} className={`chat-msg ${m.role === "bot" ? "bot" : "user"}`}>
                {m.text}
              </div>
            ))}
            {loading && (
              <div className="chat-msg bot chat-typing">
                <span /><span /><span />
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

          <details className="chat-callback" open={showCallback} onToggle={(e) => setShowCallback((e.target as HTMLDetailsElement).open)}>
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
        </div>
      )}
    </>
  );
}
