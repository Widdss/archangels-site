import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const MAX_RESUME_BYTES = 5 * 1024 * 1024; // 5MB

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
    position: "Position",
    message: "Message",
};

export async function POST(req: NextRequest) {
    let payload: Record<string, unknown>;
    try {
          payload = await req.json();
    } catch {
          return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
    }

  const resumeBase64 = typeof payload.resumeBase64 === "string" ? payload.resumeBase64 : "";
    const resumeName = typeof payload.resumeName === "string" ? payload.resumeName : "resume";
    const resumeType = typeof payload.resumeType === "string" ? payload.resumeType : undefined;

  if (resumeBase64) {
        const approxBytes = resumeBase64.length * 0.75;
        if (approxBytes > MAX_RESUME_BYTES) {
                return NextResponse.json({ ok: false, error: "Resume file is too large (5MB max)" }, { status: 400 });
        }
  }

  try {
        const transporter = getTransporter();

      const rows = Object.entries(FIELD_LABELS)
          .filter(([key]) => payload[key] !== undefined && payload[key] !== "")
          .map(([key, label]) => `<p><strong>${label}:</strong> ${String(payload[key])}</p>`)
          .join("");

      const replyTo = typeof payload.email === "string" ? payload.email : undefined;

      const attachments = resumeBase64
          ? [
            {
                          filename: resumeName,
                          content: resumeBase64,
                          encoding: "base64" as const,
                          contentType: resumeType,
            },
                    ]
              : [];

      await transporter.sendMail({
              from: process.env.EMAIL_FROM,
              to: process.env.EMAIL_TO,
              replyTo,
              subject: "New Career Application - Archangels Personal Care",
              html: `<h2>New Career Application</h2>${rows}`,
              attachments,
      });

      return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
        console.error("Career application email error:", err);
        return NextResponse.json({ ok: true, delivered: false });
  }
}
