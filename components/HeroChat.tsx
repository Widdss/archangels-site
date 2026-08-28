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

    // Fire a one-time engagement ping on first interaction
    if (!engagementPinged.current) {
      engagementPinged.current = true;
      fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "chat-engagement-hero",
          message: `Visitor started chatting with the hero AI concierge. First message: "${text}"`,
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
    </div>
  );
}
