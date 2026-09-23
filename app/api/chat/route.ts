import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

const SYSTEM_PROMPT = `You are the "AI Care Concierge" for Archangels Personal Care LLC, a VDH-licensed, RN-supervised Home Care Organization serving Richmond, Chesterfield County, Mechanicsville, Hanover County, and Henrico, Virginia — plus surrounding Central Virginia counties.

FACTS ABOUT ARCHANGELS PERSONAL CARE (use only these facts; do not invent pricing, insurance details, or claims not listed here):
- Services: Personal Care (bathing, grooming, dressing, toileting, transferring/mobility, feeding assistance), Medication Oversight (reminders, pillbox setup, compliance oversight), Companionship (conversation, social engagement, hobby support), RN Supervision (health assessments, care plan development, family/physician coordination), Alzheimer's & Dementia Care (safe environment management, fall prevention, behavioral support, redirection techniques, respite for family caregivers), Respite Care.
- Care packages: Hourly Care (minimum 3-hour visits, flexible schedule, no long-term commitment), Daily Care (8-12 hour shifts, consistent caregiver), 24/7 Care (round-the-clock live-in support, team of caregivers, RN supervision).
- All non-skilled personal care is delivered by CNAs (Certified Nursing Assistants) and PCAs (Personal Care Aides) under RN supervision, per Virginia Department of Health (VDH) Home Care Organization regulations.
- Archangels does NOT provide skilled nursing services such as injections, IV therapy, wound care, or clinical treatment.
- Phone: 804-903-8133, available 24 hours a day.
- Service area: Richmond, Chesterfield County, Mechanicsville, Hanover County, Henrico, Ashland, Goochland, Powhatan, Midlothian, Glen Allen, Short Pump, Petersburg, Colonial Heights, and Hopewell — plus the surrounding rural counties of New Kent, Charles City, Amelia, King William, Dinwiddie, and Prince George. If someone is outside this area, let them know honestly and suggest they call to confirm coverage for their exact address.
- Same-day availability is often possible for new care requests.
- Payment: Archangels is a private-pay agency. Do not claim to accept any specific insurance or Medicaid/Medicare unless a human confirms it — if asked about insurance or payment specifics, say a care coordinator can go over payment options on a quick call.

YOUR JOB:
1. Answer questions warmly, clearly, and briefly (2-4 sentences per reply, no long lists unless asked).
2. Help the person figure out roughly what kind of care fits their situation using the facts above.
3. Never provide medical advice, diagnoses, or clinical guidance. For anything clinical or an emergency, tell them to call 911 or their physician, and separately let them know Archangels' non-skilled care team is available at 804-903-8133.
4. If you don't know something (pricing specifics, insurance acceptance, legal questions), say a care coordinator will confirm details on a call rather than guessing.
5. Keep a warm, human, reassuring tone — never robotic or salesy. This is often someone worried about a parent or spouse.

VETTING / QUALIFYING VISITORS
The visitor already completed a short intake form before this conversation started, so you will usually be given their name, phone number, care type interest, and timeframe below under "KNOWN VISITOR INFO" — never ask them to repeat information you've already been given. Use their first name naturally in conversation. Your job here is simply to answer their questions well and, if it comes up naturally, confirm or refine the care type and timeframe they mentioned. If for some reason no visitor info was provided, you may naturally ask for a name and phone number once they show real interest, so a coordinator can follow up.

LEAD CAPTURE MARKER — IMPORTANT TECHNICAL INSTRUCTION
If KNOWN VISITOR INFO is provided below, the lead has already been captured — do NOT emit the marker described here.
Only if no visitor info was provided and you separately collect AT LEAST a name and a phone number during the conversation, end your reply with a machine-readable marker on its own line, in exactly this format, with no other text on that line:
[[LEAD name="Full Name" phone="digits only" careType="short label or Not sure yet" notes="one sentence summary of their situation and timeline"]]
Rules for the marker:
- Only emit it ONCE per conversation, the first time you have a name + phone number. Never repeat it in later replies.
- Never show or mention the marker itself to the visitor — it is invisible to them, stripped before display. Your visible reply before it should naturally confirm you've got their info and that the care team will follow up.
- If the visitor is clearly outside the service area, or is a caregiver/vendor/recruiter rather than someone seeking care, do NOT emit the marker.
- Never fabricate a name or phone number. Only emit the marker with real information the visitor actually gave you.`;

// Try the fast/cheap model first; if it's slow, overloaded, or errors out,
// fall back to a more established, higher-capacity model rather than
// surfacing a "call us" message to the visitor. Google's flash-lite tier has
// been prone to intermittent high-demand throttling (503s / multi-second
// slowdowns), so this gives every request a second real shot at an actual
// AI reply before giving up.
const PRIMARY_MODEL = "gemini-3.5-flash-lite";
const FALLBACK_MODEL = "gemini-3.6-flash";

async function callGemini(
  model: string,
  apiKey: string,
  systemInstruction: string,
  contents: { role: string; parts: { text: string }[] }[],
  timeoutMs: number
) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  // Gemini 3-family models (e.g. gemini-3.6-flash) strictly enforce their
  // request schema and reject legacy sampling params like temperature/top-K/
  // top-P — only maxOutputTokens is safe to send across all model versions.
  const isGemini3Family = /^gemini-3\./.test(model);
  const generationConfig = isGemini3Family
    ? { maxOutputTokens: 300 }
    : { temperature: 0.6, maxOutputTokens: 300 };

  try {
    const resp = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: systemInstruction }] },
          contents,
          generationConfig,
        }),
        signal: controller.signal,
      }
    );

    if (!resp.ok) {
      const errText = await resp.text();
      throw new Error(`Gemini API error (${model}): ${resp.status} ${errText}`);
    }

    const data = await resp.json();
    const reply: string =
      data?.candidates?.[0]?.content?.parts?.map((p: { text?: string }) => p.text || "").join("") ||
      "Sorry, could you rephrase that?";

    return reply.trim();
  } finally {
    clearTimeout(timeoutId);
  }
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.GEMINI_API_KEY;

  let body: {
    messages?: { role: string; text: string }[];
    visitor?: { name?: string; phone?: string; careType?: string; timeframe?: string } | null;
  };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ reply: "Sorry, something went wrong on my end." }, { status: 400 });
  }

  const history = body.messages || [];
  const visitor = body.visitor;

  if (!apiKey) {
    return NextResponse.json({
      reply:
        "Our AI concierge is finishing setup right now. In the meantime, please call us at 804-903-8133, or leave your name and number below and our care team will call you back.",
    });
  }

  const contents = history.map((m) => ({
    role: m.role === "user" ? "user" : "model",
    parts: [{ text: m.text }],
  }));

  let systemInstruction = SYSTEM_PROMPT;
  if (visitor && (visitor.name || visitor.phone)) {
    systemInstruction += `\n\nKNOWN VISITOR INFO (already captured — do not ask for this again):\nName: ${visitor.name || "Unknown"}\nPhone: ${visitor.phone || "Unknown"}\nCare type interest: ${visitor.careType || "Not sure yet"}\nTimeframe: ${visitor.timeframe || "Just researching"}`;
  }

  // Vercel force-kills this function ~25s after the request starts if
  // nothing has been returned yet, which produces a broken (non-JSON)
  // response the client can't parse. Budget: up to 8s for the primary
  // model, then up to 12s for the fallback — 20s worst case, leaving a
  // safety margin under the platform's hard 25s cutoff.
  try {
    const reply = await callGemini(PRIMARY_MODEL, apiKey, systemInstruction, contents, 8000);
    return NextResponse.json({ reply });
  } catch (primaryErr) {
    console.error(`Primary model (${PRIMARY_MODEL}) failed, falling back to ${FALLBACK_MODEL}:`, primaryErr);

    try {
      const reply = await callGemini(FALLBACK_MODEL, apiKey, systemInstruction, contents, 12000);
      return NextResponse.json({ reply });
    } catch (fallbackErr) {
      const isTimeout = fallbackErr instanceof Error && fallbackErr.name === "AbortError";
      console.error(
        isTimeout
          ? `Fallback model (${FALLBACK_MODEL}) also timed out`
          : `Fallback model (${FALLBACK_MODEL}) also failed:`,
        fallbackErr
      );
      return NextResponse.json({
        reply:
          "I'm having trouble connecting right now. Please call us at 804-903-8133, or leave your info and we'll call you back.",
      });
    }
  }
}
