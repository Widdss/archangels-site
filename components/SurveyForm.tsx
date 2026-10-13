"use client";

import { useState } from "react";

const RATING_QUESTIONS: { key: string; label: string }[] = [
  { key: "overall", label: "Overall, how satisfied are you with Archangels Personal Care?" },
  { key: "caregiver", label: "Professionalism and kindness of your caregiver(s)" },
  { key: "reliability", label: "Reliability and punctuality" },
  { key: "communication", label: "Communication with our office" },
  { key: "quality", label: "Quality of care your loved one receives" },
  { key: "value", label: "Value for the cost" },
];

const WANT_OPTIONS = [
  "More caregiver hours or flexible scheduling",
  "Overnight or 24-hour care",
  "Dementia / Alzheimer's care support",
  "Transportation and errands",
  "Meal preparation and nutrition help",
  "Family updates through text or an app",
  "Respite care for family caregivers",
  "Help with doctor appointments",
];

const card: React.CSSProperties = {
  maxWidth: 720,
  margin: "0 auto",
  background: "#ffffff",
  borderRadius: 16,
  padding: "28px 24px",
  boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
};
const input: React.CSSProperties = {
  width: "100%",
  padding: 12,
  borderRadius: 8,
  border: "1px solid #cbd5e1",
  fontSize: 16,
  boxSizing: "border-box",
};
const primaryBtn: React.CSSProperties = {
  padding: "14px 20px",
  borderRadius: 10,
  border: "none",
  background: "#1f3a5f",
  color: "#ffffff",
  fontSize: 16,
  fontWeight: 600,
  cursor: "pointer",
  width: "100%",
};

function ScaleRow(props: {
  label: string;
  min: number;
  max: number;
  value: number | null;
  onChange: (n: number) => void;
}) {
  const nums: number[] = [];
  for (let i = props.min; i <= props.max; i++) nums.push(i);
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ fontWeight: 600, marginBottom: 8 }}>{props.label}</div>
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
        {nums.map((n) => (
          <button
            key={n}
            type="button"
            onClick={() => props.onChange(n)}
            aria-pressed={props.value === n}
            style={{
              minWidth: 44,
              height: 44,
              borderRadius: 8,
              border: "1px solid #1f3a5f",
              background: props.value === n ? "#1f3a5f" : "#ffffff",
              color: props.value === n ? "#ffffff" : "#1f3a5f",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            {n}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function SurveyForm() {
  const [step, setStep] = useState<"info" | "survey" | "done">("info");
  const [info, setInfo] = useState({ name: "", phone: "", email: "" });
  const [ratings, setRatings] = useState<Record<string, number>>({});
  const [recommend, setRecommend] = useState<number | null>(null);
  const [wellText, setWellText] = useState("");
  const [improveText, setImproveText] = useState("");
  const [wants, setWants] = useState<string[]>([]);
  const [wantsText, setWantsText] = useState("");
  const [testimonialOk, setTestimonialOk] = useState(false);
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);

  function submitInfo(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!info.name.trim() || !info.phone.trim() || !info.email.trim()) {
      setError("Please fill in your name, phone number and email.");
      return;
    }
    setError("");
    setStep("survey");
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function submitSurvey(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending) return;
    const missing = RATING_QUESTIONS.some((q) => typeof ratings[q.key] !== "number");
    if (missing || recommend === null) {
      setError("Please answer all of the rating questions before submitting.");
      return;
    }
    setError("");
    setSending(true);
    try {
      const res = await fetch("/api/survey", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: info.name.trim(),
          phone: info.phone.trim(),
          email: info.email.trim(),
          ratings,
          recommend,
          wellText,
          improveText,
          wants,
          wantsText,
          testimonialOk,
        }),
      });
      if (!res.ok) throw new Error("send failed");
      setStep("done");
      if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setError("Sorry, something went wrong. Please try again, or call us at 804-903-8133.");
    } finally {
      setSending(false);
    }
  }

  function toggleWant(w: string) {
    setWants((cur) => (cur.includes(w) ? cur.filter((x) => x !== w) : [...cur, w]));
  }

  if (step === "done") {
    return (
      <div style={{ ...card, textAlign: "center" }}>
        <h2 style={{ marginTop: 0 }}>Thank you for choosing Archangels Personal Care!</h2>
        <p style={{ fontSize: 18, lineHeight: 1.6 }}>
          We truly appreciate you trusting us with your care. Your feedback helps us improve in the
          areas that matter most to you and your family. We will review your responses and keep
          working to serve you better.
        </p>
        <p style={{ fontSize: 16 }}>Questions or concerns? Call us anytime at 804-903-8133.</p>
      </div>
    );
  }

  if (step === "info") {
    return (
      <form onSubmit={submitInfo} style={card}>
        <h2 style={{ marginTop: 0 }}>Client Feedback Survey</h2>
        <p style={{ lineHeight: 1.6 }}>
          Thank you for being part of the Archangels Personal Care family. Please tell us who you
          are, and then share your honest feedback. It takes about 3 minutes.
        </p>
        <div style={{ display: "grid", gap: 12, marginBottom: 16 }}>
          <input
            style={input}
            placeholder="Your full name"
            autoComplete="name"
            value={info.name}
            onChange={(e) => setInfo({ ...info, name: e.target.value })}
            required
          />
          <input
            style={input}
            type="tel"
            placeholder="Phone number"
            autoComplete="tel"
            value={info.phone}
            onChange={(e) => setInfo({ ...info, phone: e.target.value })}
            required
          />
          <input
            style={input}
            type="email"
            placeholder="Email address"
            autoComplete="email"
            value={info.email}
            onChange={(e) => setInfo({ ...info, email: e.target.value })}
            required
          />
        </div>
        {error && <p style={{ color: "#b91c1c" }}>{error}</p>}
        <button type="submit" style={primaryBtn}>
          Continue to the survey
        </button>
      </form>
    );
  }

  return (
    <form onSubmit={submitSurvey} style={card}>
      <h2 style={{ marginTop: 0 }}>Hi {info.name.trim().split(/\s+/)[0]}, how are we doing?</h2>
      <p style={{ lineHeight: 1.6 }}>Rate each item from 1 (poor) to 5 (excellent).</p>

      {RATING_QUESTIONS.map((q) => (
        <ScaleRow
          key={q.key}
          label={q.label}
          min={1}
          max={5}
          value={typeof ratings[q.key] === "number" ? ratings[q.key] : null}
          onChange={(n) => setRatings({ ...ratings, [q.key]: n })}
        />
      ))}

      <ScaleRow
        label="How likely are you to recommend us to a friend or family member? (0 = not likely, 10 = extremely likely)"
        min={0}
        max={10}
        value={recommend}
        onChange={setRecommend}
      />

      <div style={{ marginBottom: 16 }}>
        <div style={{ fontWeight: 600, marginBottom: 8 }}>What do we do well?</div>
        <textarea style={{ ...input, minHeight: 90 }} value={wellText} onChange={(e) => setWellText(e.target.value)} />
      </div>

      <div style={{ marginBottom: 16 }}>
        <div style={{ fontWeight: 600, marginBottom: 8 }}>Where could we improve?</div>
        <textarea style={{ ...input, minHeight: 90 }} value={improveText} onChange={(e) => setImproveText(e.target.value)} />
      </div>

      <div style={{ marginBottom: 16 }}>
        <div style={{ fontWeight: 600, marginBottom: 8 }}>What would you like to see from us in the future?</div>
        {WANT_OPTIONS.map((w) => (
          <label key={w} style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 6 }}>
            <input type="checkbox" checked={wants.includes(w)} onChange={() => toggleWant(w)} />
            <span>{w}</span>
          </label>
        ))}
        <textarea
          style={{ ...input, minHeight: 80, marginTop: 8 }}
          placeholder="Your feedback is valued. Share any other thoughts here."
          value={wantsText}
          onChange={(e) => setWantsText(e.target.value)}
        />
      </div>

      <label style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 16 }}>
        <input type="checkbox" checked={testimonialOk} onChange={(e) => setTestimonialOk(e.target.checked)} />
        <span>You may share my feedback as a testimonial.</span>
      </label>

      {error && <p style={{ color: "#b91c1c" }}>{error}</p>}
      <button type="submit" disabled={sending} style={primaryBtn}>
        {sending ? "Submitting..." : "Submit survey"}
      </button>
    </form>
  );
}
