import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const RATING_LABELS: Record<string, string> = {
  overall: "Overall satisfaction",
  caregiver: "Caregiver professionalism and kindness",
  reliability: "Reliability and punctuality",
  communication: "Communication with our office",
  quality: "Quality of care",
  value: "Value for the cost",
};

function esc(v: unknown): string {
  return String(v === undefined || v === null ? "" : v)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(req: NextRequest) {
  let p: Record<string, unknown>;
  try {
    p = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  const name = String(p.name || "").trim();
  const phone = String(p.phone || "").trim();
  const email = String(p.email || "").trim();
  if (!name || !phone || !email) {
    return NextResponse.json({ ok: false, error: "Missing contact info" }, { status: 400 });
  }

  const ratings = (p.ratings && typeof p.ratings === "object" ? p.ratings : {}) as Record<string, number>;
  const lowKeys = Object.keys(RATING_LABELS).filter(
    (k) => typeof ratings[k] === "number" && ratings[k] <= 3
  );
  const recommend = typeof p.recommend === "number" ? p.recommend : null;
  const wants = Array.isArray(p.wants) ? (p.wants as unknown[]).map((w) => String(w)) : [];

  const ratingRows = Object.keys(RATING_LABELS)
    .map((k) => {
      const v = ratings[k];
      const low = typeof v === "number" && v <= 3;
      return (
        "<p><strong>" + esc(RATING_LABELS[k]) + ":</strong> " +
        (typeof v === "number" ? v + " / 5" : "not answered") +
        (low ? " <span style='color:#b91c1c'><strong>(LOW - follow up)</strong></span>" : "") +
        "</p>"
      );
    })
    .join("");

  const html =
    "<h2>Client Survey Response</h2>" +
    (lowKeys.length
      ? "<p style='color:#b91c1c'><strong>Needs follow-up: " + lowKeys.length + " low score(s)</strong></p>"
      : "") +
    "<p><strong>Name:</strong> " + esc(name) + "</p>" +
    "<p><strong>Phone:</strong> " + esc(phone) + "</p>" +
    "<p><strong>Email:</strong> " + esc(email) + "</p>" +
    "<hr /><h3>Ratings</h3>" + ratingRows +
    "<p><strong>Likelihood to recommend (0-10):</strong> " + (recommend === null ? "not answered" : recommend) + "</p>" +
    "<hr /><h3>Comments</h3>" +
    "<p><strong>What we do well:</strong><br />" + esc(p.wellText || "-") + "</p>" +
    "<p><strong>What we could improve:</strong><br />" + esc(p.improveText || "-") + "</p>" +
    "<hr /><h3>What they would like to see from us</h3>" +
    "<p><strong>Interested in:</strong> " + (wants.length ? esc(wants.join(", ")) : "-") + "</p>" +
    "<p><strong>Other ideas:</strong><br />" + esc(p.wantsText || "-") + "</p>" +
    "<p><strong>OK to share their feedback as a testimonial:</strong> " + (p.testimonialOk ? "Yes" : "No") + "</p>";

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: parseInt(process.env.EMAIL_SERVER_PORT || "465"),
      secure: process.env.EMAIL_SERVER_SECURE !== "false",
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject:
        (lowKeys.length ? "[FOLLOW UP] " : "") +
        "Client Survey Response - " + name + " (archangelspersonalcare.com)",
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Survey email error:", err);
    return NextResponse.json({ ok: false, error: "Could not send" }, { status: 500 });
  }
}
