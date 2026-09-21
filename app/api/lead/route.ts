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

const FIELD_LABELS: Record<string, string> = {
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    phone: "Phone",
    careType: "Care Type",
    message: "Message",
};

export async function POST(req: NextRequest) {
    let payload: Record<string, unknown>;
    try {
          payload = await req.json();
    } catch {
          return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
    }

  try {
        const transporter = getTransporter();

      const rows = Object.entries(FIELD_LABELS)
          .filter(([key]) => payload[key] !== undefined && payload[key] !== "")
          .map(([key, label]) => `<p><strong>${label}:</strong> ${String(payload[key])}</p>`)
          .join("");

      const replyTo = typeof payload.email === "string" ? payload.email : undefined;

      await transporter.sendMail({
              from: process.env.EMAIL_FROM,
              to: process.env.EMAIL_TO,
              replyTo,
              subject: "New Lead - Care Now Form (archangelspersonalcare.com)",
              html: `<h2>New Care Now Lead</h2>${rows}`,
      });

      return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
        console.error("Lead email error:", err);
        return NextResponse.json({ ok: true, delivered: false });
  }
}
