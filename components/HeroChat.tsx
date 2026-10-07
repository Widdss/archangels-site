"use client";

import { useState, useRef, useEffect } from "react";
import { IconSend } from "./Icons";

type Msg = { role: "user" | "bot"; text: string };

const INITIAL_MESSAGES: Msg[] = [
  {
    role: "bot",
    text: "Hi, I'm here to help. Are you looking for care for yourself or a loved one?",
  },
  {
    role: "user",
    text: "My mom, she's 82 and recently had a fall.",
  },
  {
    role: "bot",
    text: "I'm sorry to hear that. We offer RN-supervised personal care and fall-prevention support, with same-day availability in Richmond. Want me to have our care team call you within the hour?",
  },
];

// Matches structured lead capture marker emitted once enough information is gathered
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

export default function HeroChat() {
  const [messages, setMessages] = useState<Msg[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const engagementPinged = useRef(false);
  const leadCaptured = useRef(false);
  const [intakeDone, setIntakeDone] = useState(false);
  const [intakeSending, setIntakeSending] = useState(false);
  const visitorInfo = useRef<{ name: string; phone: string; careType: string; timeframe: string } | null>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  function submitIntake(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (intakeSending) return;
    const data = new FormData(e.currentTarget);
    const info = {
      name: String(data.get("name") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
      careType: String(data.get("careType") || "Not sure yet"),
      timeframe: String(data.get("timeframe") || "Just researching"),
    };
    if (!info.name || !info.phone) return;
    setIntakeSending(true);
    visitorInfo.current = info;
    leadCaptured.current = true;
    fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        source: "chat-intake-hero",
        name: info.name,
        phone: info.phone,
        careType: info.careType,
        message: `Started the homepage AI concierge chat. Timeframe: ${info.timeframe}.`,
        landingPage: window.location.href,
        referrer: document.referrer,
      }),
    }).catch(() => {});
    window.reportLeadConversion?.();
    const firstName = info.name.split(/\s+/)[0] || "there";
    setMessages([
      {
        role: "bot",
        text: `Hi ${firstName}, thanks for sharing that. Tell me a little about who needs care and what's going on, and I'll point you in the right direction. Our team can also call you at ${info.phone} shortly.`,
      },
    ]);
    setIntakeDone(true);
    setIntakeSending(false);
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
            source: "chat-qualified-lead-hero",
            name: lead.name,
            phone: lead.phone,
            careType: lead.careType,
            message: lead.notes || "Qualified via Hero AI Care Concierge conversation.",
          }),
        }).catch(() => {});
        window.reportLeadConversion?.();
      }
    } catch {
      setMessages((cur) => [
        ...cur,
        {
          role: "bot",
          text:
            "I'm having trouble connecting right now. Please call us at 804-903-8133, or leave your info and our team will reach out.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="hero-card">
      <div className="hero-card-head">
        <span className="hero-card-dot" />
        <div>
          <div className="hero-card-title">Archangels AI Care Concierge</div>
          <div className="hero-card-sub">Online now &middot; usually replies instantly</div>
        </div>
      </div>
      <div className="hero-chat-messages" ref={scrollRef}>
        {messages.map((m, i) => (
          <div key={i} className={`chat-bubble ${m.role === "bot" ? "bot" : "user"}`}>
            {m.text}
          </div>
        ))}
        {loading && (
          <div className="chat-bubble bot chat-typing">
            <span /><span /><span />
          </div>
        )}
      </div>
      {intakeDone ? (
        <form
        className="hero-chat-input-row"
        onSubmit={(e) => {
          e.preventDefault();
          send();
        }}
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a question..."
          aria-label="Message Archangels AI Care Concierge"
        />
        <button
          type="submit"
          disabled={loading || !input.trim()}
          aria-label="Send message"
        >
          <IconSend />
        </button>
      </form>
      ) : (
        <form onSubmit={submitIntake} style={{ display: "grid", gap: 8, padding: 12 }}>
          <div style={{ fontSize: 13, opacity: 0.85 }}>Tell us who you are so we can follow up, then ask anything.</div>
          <input name="name" placeholder="Your name" required autoComplete="name" style={{ padding: 10, borderRadius: 8, border: "1px solid #d0d5dd" }} />
          <input name="phone" type="tel" placeholder="Phone number" required autoComplete="tel" style={{ padding: 10, borderRadius: 8, border: "1px solid #d0d5dd" }} />
          <select name="careType" defaultValue="Not sure yet" style={{ padding: 10, borderRadius: 8, border: "1px solid #d0d5dd" }}>
            {["Not sure yet", "Personal care / ADLs", "Companion care", "Dementia / memory care", "Respite care", "Post-hospital / recovery"].map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <select name="timeframe" defaultValue="Just researching" style={{ padding: 10, borderRadius: 8, border: "1px solid #d0d5dd" }}>
            {["This week", "This month", "Just researching"].map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
          <button type="submit" disabled={intakeSending} style={{ padding: 10, borderRadius: 8, cursor: "pointer", fontWeight: 600 }}>
            Start chat
          </button>
          <a href="tel:8049038133" style={{ fontSize: 12, textAlign: "center" }}>Prefer to just call? 804-903-8133</a>
        </form>
      )}
    </div>
  );
}
