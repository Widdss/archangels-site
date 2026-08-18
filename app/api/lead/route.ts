import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export async function POST(req: NextRequest) {
  let payload: Record<string, unknown>;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  const scriptUrl = process.env.GOOGLE_SCRIPT_URL;

  if (!scriptUrl) {
    // No Apps Script endpoint configured yet — log so it's visible in Vercel logs,
    // and still return success so the visitor sees a clean confirmation.
    console.log("New lead (GOOGLE_SCRIPT_URL not set):", payload);
    return NextResponse.json({ ok: true, delivered: false });
  }

  try {
    const res = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...payload,
        receivedAt: new Date().toISOString(),
      }),
    });

    if (!res.ok) {
      console.error("Apps Script forward failed:", res.status, await res.text());
      return NextResponse.json({ ok: true, delivered: false });
    }

    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("Lead forwarding error:", err);
    return NextResponse.json({ ok: true, delivered: false });
  }
}
