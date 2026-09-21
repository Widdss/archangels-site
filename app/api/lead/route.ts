import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

function getTransporter() {
      console.log("LEAD_DEBUG config", {
              host: process.env.EMAIL_SERVER_HOST,
              port: process.env.EMAIL_SERVER_PORT,
              secure: process.env.EMAIL_SERVER_SECURE,
              userSet: Boolean(process.env.EMAIL_SERVER_USER),
              passSet: Boolean(process.env.EMAIL_SERVER_PASSWORD),
              from: process.env.EMAIL_FROM,
              to: process.env.EMAIL_TO,
      });
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
      console.log("LEAD_DEBUG POST hit");
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

        console.log("LEAD_DEBUG sending mail now");
          const info = await transporter.sendMail({
                    from: process.env.EMAIL_FROM,
                    to: process.env.EMAIL_TO,
                    replyTo,
                    subject: "New Lead - Care Now Form (archangelspersonalcare.com)",
                    html: `<h2>New Care Now Lead</h2>${rows}`,
          });
          console.log("LEAD_DEBUG sendMail result", { messageId: info.messageId, response: info.response, accepted: info.accepted, rejected: info.rejected });

        return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
          console.error("LEAD_DEBUG email error:", err instanceof Error ? err.message : err);
          return NextResponse.json({ ok: true, delivered: false });
  }
}
