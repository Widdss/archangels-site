import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

const MAX_RESUME_BYTES = 5 * 1024 * 1024; // 5MB

export async function POST(req: NextRequest) {
  let payload: Record<string, unknown>;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  const resumeBase64 = typeof payload.resumeBase64 === "string" ? payload.resumeBase64 : "";
  if (resumeBase64) {
    const approxBytes = resumeBase64.length * 0.75;
    if (approxBytes > MAX_RESUME_BYTES) {
      return NextResponse.json({ ok: false, error: "Resume file is too large (5MB max)" }, { status: 400 });
    }
  }

  const scriptUrl = process.env.GOOGLE_SCRIPT_URL;
  if (!scriptUrl) {
    console.log("New career application (GOOGLE_SCRIPT_URL not set):", {
      ...payload,
      resumeBase64: resumeBase64 ? `[${resumeBase64.length} chars omitted from log]` : undefined,
    });
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const res = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...payload, formType: "career_application", receivedAt: new Date().toISOString() }),
    });
    if (!res.ok) {
      console.error("Apps Script forward failed (careers):", res.status, await res.text());
      return NextResponse.json({ ok: true, delivered: false });
    }
    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("Career application forwarding error:", err);
    return NextResponse.json({ ok: true, delivered: false });
  }
}
