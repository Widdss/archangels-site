"use client";

import { useState, type FormEvent } from "react";

const POSITIONS = [
  "Certified Nursing Assistant (CNA)",
  "Personal Care Aide (PCA)",
  "Licensed RN",
];

const MAX_FILE_BYTES = 5 * 1024 * 1024; // 5MB
const ACCEPTED_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      // Strip the "data:<mime>;base64," prefix, keep just the payload.
      const commaIdx = result.indexOf(",");
      resolve(commaIdx >= 0 ? result.slice(commaIdx + 1) : result);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export default function CareerApplicationForm({ defaultPosition }: { defaultPosition?: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [fileName, setFileName] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const resumeFile = data.get("resume") as File | null;

    let resumeBase64 = "";
    let resumeName = "";
    let resumeType = "";

    if (resumeFile && resumeFile.size > 0) {
      if (resumeFile.size > MAX_FILE_BYTES) {
        setStatus("error");
        setErrorMsg("That resume file is larger than 5MB. Please upload a smaller PDF or Word document.");
        return;
      }
      if (!ACCEPTED_TYPES.includes(resumeFile.type)) {
        setStatus("error");
        setErrorMsg("Please upload your resume as a PDF or Word document (.pdf, .doc, .docx).");
        return;
      }
      try {
        resumeBase64 = await fileToBase64(resumeFile);
        resumeName = resumeFile.name;
        resumeType = resumeFile.type;
      } catch {
        setStatus("error");
        setErrorMsg("We couldn't read that resume file. Please try again or a different file.");
        return;
      }
    }

    const payload = {
      source: "careers-application-form",
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      phone: data.get("phone"),
      position: data.get("position"),
      message: data.get("message"),
      resumeName,
      resumeType,
      resumeBase64,
    };

    try {
      const res = await fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
      setFileName("");
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong submitting your application. Please call us at 804-903-8133 or email info@archangelspersonalcare.com and we'll get you taken care of.");
    }
  }

  if (status === "success") {
    return (
      <div className="form-success">
        <strong>Application received.</strong>
        <br />
        Thanks for your interest in joining Archangels Personal Care. A member of our team will
        review your application and follow up soon. If you have questions in the meantime, call{" "}
        <a href="tel:8049038133" style={{ fontWeight: 700 }}>804-903-8133</a>.
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
        <label htmlFor="position">Position</label>
        <select id="position" name="position" defaultValue={defaultPosition ?? ""} required>
          <option value="" disabled>
            Select a position
          </option>
          {POSITIONS.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="resume">Resume</label>
        <div className="file-upload-field">
          <input
            id="resume"
            name="resume"
            type="file"
            accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
          />
          <p className="file-upload-hint">
            {fileName ? `Selected: ${fileName}` : "Please upload your resume in PDF or Word format (max 5MB)."}
          </p>
        </div>
      </div>

      <div className="field">
        <label htmlFor="message">Why do you want to join our team?</label>
        <textarea
          id="message"
          name="message"
          placeholder="Tell us a bit about your experience and what draws you to caregiving."
        />
      </div>

      <button type="submit" className="btn btn-primary btn-block" disabled={status === "loading"}>
        {status === "loading" ? "Submitting..." : "Submit Application"}
      </button>

      <p className="form-note">
        All positions require successful background checks and reference verification in
        accordance with VDH regulations.
      </p>
    </form>
  );
}
