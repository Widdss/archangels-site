import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

function getTransporter() {
  return nodemailer.createTransport({
    host: process.env.EMAIL_SERVER_HOST,
    port: parseInt(process.env.EMAIL_SERVER_PORT || "465"),
    secure: process.env.EMAIL_SERVER_SECURE !== "false",
    auth: {
      user: process.env.EMAIL_SERVER_USER,
      pass: process.env.EMAIL_SERVER_PASSWORD,
    },
  });
}

// Contact details shown at the top of the lead email.
// "name" is what the chat intake form sends; firstName/lastName come from the Care Now form.
const FIELD_LABELS: Record<string, string> = {
  name: "Name",
  firstName: "First Name",
  lastName: "Last Name",
  email: "Email",
  phone: "Phone",
  careType: "Care Type",
  message: "Message",
};

// Where the lead came from, shown below the contact details.
const SOURCE_LABELS: Record<string, string> = {
  source: "Lead Source",
  pageUrl: "Page Submitted From",
  landingPage: "First Landing Page",
  referrer: "Referrer",
  utm_source: "UTM Source",
  utm_medium: "UTM Medium",
  utm_campaign: "UTM Campaign",
  utm_term: "UTM Term",
  gclid: "Google Click ID",
};

const TRACKED_PARAMS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "gclid"];

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderRows(labels: Record<string, string>, data: Record<string, unknown>) {
  return Object.entries(labels)
    .filter(([key]) => data[key] !== undefined && data[key] !== null && data[key] !== "")
    .map(([key, label]) => `<p><strong>${label}:</strong> ${escapeHtml(String(data[key]))}</p>`)
    .join("");
}

export async function POST(req: NextRequest) {
  let payload: Record<string, unknown>;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  try {
    const transporter = getTransporter();

    // Fill in tracking details from the request when the browser did not send them.
    const data: Record<string, unknown> = { ...payload };
    const pageUrl = req.headers.get("referer") || "";
    if (!data.pageUrl && pageUrl) data.pageUrl = pageUrl;
    try {
      const params = new URL(String(data.landingPage || data.pageUrl || "")).searchParams;
      for (const key of TRACKED_PARAMS) {
        const value = params.get(key);
        if (value && !data[key]) data[key] = value;
      }
    } catch {
      // No usable URL to read tracking parameters from.
    }

    const contactRows = renderRows(FIELD_LABELS, data);
    const sourceRows = renderRows(SOURCE_LABELS, data);

    const replyTo = typeof payload.email === "string" ? payload.email : undefined;

    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      replyTo,
      subject: "New Lead - Care Now Form (archangelspersonalcare.com)",
      html: `<h2>New Care Now Lead</h2>${contactRows}${sourceRows ? `<hr /><h3>Lead source</h3>${sourceRows}` : ""}`,
    });

    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("Lead email error:", err instanceof Error ? err.message : err);
    return NextResponse.json({ ok: true, delivered: false });
  }
}
