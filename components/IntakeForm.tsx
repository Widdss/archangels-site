"use client";

import { useState, type FormEvent } from "react";

const CARE_TYPES = [
  "Hourly / Part-Time Care",
  "Daily Care (8-12 hour shifts)",
  "24/7 Live-In Care",
  "Alzheimer's / Dementia Care",
  "Companionship Care",
  "Respite Care",
  "Not Sure Yet",
];

export default function IntakeForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      source: "care-now-form",
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      phone: data.get("phone"),
      careType: data.get("careType"),
      message: data.get("message"),
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg("Something went wrong sending your request. Please call us at 804-903-8133 and we'll get you taken care of right away.");
    }
  }

  if (status === "success") {
    return (
      <div className="form-success">
        <strong>Request received.</strong>
        <br />
        A member of our care team will reach out shortly. If this is urgent, please call{" "}
        <a href="tel:8049038133" style={{ fontWeight: 700 }}>804-903-8133</a> now.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      {status === "error" && <div className="form-error">{errorMsg}</div>}

      <div className="form-row">
        <div className="field">
          <label htmlFor="firstName">First Name</label>
          <input id="firstName" name="firstName" placeholder="Your First Name" required />
        </div>
        <div className="field">
          <label htmlFor="lastName">Last Name</label>
          <input id="lastName" name="lastName" placeholder="Your Last Name" required />
        </div>
      </div>

      <div className="form-row">
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="Your Email" required />
        </div>
        <div className="field">
          <label htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" placeholder="Your Phone" required />
        </div>
      </div>

      <div className="field">
        <label htmlFor="careType">What type of care are you interested in?</label>
        <select id="careType" name="careType" defaultValue="" required>
          <option value="" disabled>
            Select an option
          </option>
          {CARE_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="message">Tell us about your care needs</label>
        <textarea
          id="message"
          name="message"
          placeholder="A few sentences about who needs care and what's going on right now helps us respond faster."
          minLength={3}
        />
      </div>

      <button type="submit" className="btn btn-primary btn-block" disabled={status === "loading"}>
        {status === "loading" ? "Sending..." : "Request Care Now"}
      </button>

      <p className="form-note">
        No obligation. A real member of our care team follows up on every request — usually the
        same day.
      </p>
    </form>
  );
}
