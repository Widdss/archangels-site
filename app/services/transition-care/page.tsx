import type { Metadata } from "next";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Transition to Home Care Richmond VA | Post-Hospital Support",
  description:
    "Fast-start, RN-supervised support for the critical days after hospital discharge or surgery in Richmond, Mechanicsville & Hanover County. Call 804-903-8133.",
  alternates: {
    canonical: "https://www.archangelspersonalcare.com/services/transition-care",
  },
  openGraph: {
    title: "Transition to Home Care Richmond VA | Post-Hospital Support",
    description:
      "Fast-start, RN-supervised support for the critical days after hospital discharge or surgery in Richmond, Mechanicsville & Hanover County.",
    url: "https://www.archangelspersonalcare.com/services/transition-care",
    siteName: "Archangels Personal Care",
    type: "website",
  },
};

export default function TransitionCarePage() {
  return (
    <ServiceDetailLayout
      slug="transition-care"
      eyebrow="Transition to Home Care"
      title="Transition to Home Care in Richmond, VA"
      intro="Fast-start, RN-supervised support for the critical days and weeks after a hospital discharge, surgery, or rehab-facility stay — helping your loved one recover safely at home."
      heroImg="https://www.archangelspersonalcare.com/images/nurse-with-patient.jpg"
      heroAlt="Caregiver assisting a client recovering at home after hospital discharge"
      whoFor={[
        "Anyone recently discharged from a hospital, rehab facility, or after surgery",
        "Families facing an upcoming discharge with an unclear home-safety plan",
        "Clients at higher fall risk during the recovery window",
        "Families who live far away and can't be there for the transition home",
      ]}
      signs={[
        "An upcoming discharge without a clear plan for home safety",
        "Fall risk during the early days of recovery",
        "Medication changes that are hard to keep straight",
        "No one available to be there the day your loved one comes home",
      ]}
      included={[
        "Coordination with hospital discharge planners",
        "Rapid start — sometimes within 48 hours of discharge",
        "Safety-focused personal care during recovery",
        "Mobility & fall-prevention assistance",
        "Medication reminders during a period of medication changes",
        "Meal preparation",
        "RN check-ins during the vulnerable recovery window",
      ]}
      scenario={{
        title: "The First 48 Hours Home",
        text: "A caregiver arrives the same afternoon a client is discharged from the hospital after hip surgery. She helps him get settled into a favorite recliner, sets up a system for tracking new medications, and walks through the home looking for fall hazards the discharge nurse flagged. Over the next several days, she helps with safe bathing, prepares meals that fit his new dietary instructions, and reports his progress back to the family and the RN so any concerns are caught early, while recovery is still fragile.",
      }}
      steps={[
        { title: "Call before or at discharge", desc: "The earlier we're looped in, the smoother the transition home." },
        { title: "RN coordinates with the discharge team", desc: "Our RN reviews discharge instructions and any home-safety concerns." },
        { title: "Caregiver ready for day-of-discharge start", desc: "When timing allows, care can begin the same day your loved one arrives home." },
        { title: "Support through the recovery window", desc: "Focused, safety-first care during the highest-risk early weeks." },
        { title: "RN scales support down over time", desc: "As independence returns, the plan is reduced rather than left running longer than needed." },
      ]}
      benefits={[
        { title: "Reduces readmission risk", desc: "Extra hands and safety oversight during the highest-risk recovery window." },
        { title: "Fast start when it matters most", desc: "Care can often begin within 48 hours of discharge." },
        { title: "Scales down naturally", desc: "No long commitment — support is reduced as your loved one regains independence." },
        { title: "One less thing to manage", desc: "We coordinate directly with discharge planners so your family isn't doing it alone." },
      ]}
      approach={[
        "The days right after a hospital discharge, surgery, or rehab stay are often the highest-risk window for falls, medication mix-ups, and setbacks — this service is built specifically for that period.",
        "Wherever possible, we coordinate directly with hospital discharge planners before your loved one leaves, so a caregiver can be ready to start quickly, sometimes within 48 hours.",
        "Care during this window is safety-focused: fall prevention, mobility assistance, medication reminders during a period when doses often change, and close RN check-ins.",
        "As your loved one regains independence, the RN scales support down accordingly — this is meant to bridge a recovery window, not become an open-ended commitment unless your family wants it to.",
        "Because so much can change in the first days after discharge — new medications, temporary mobility limits, follow-up appointments — our RN stays especially engaged during this window, checking in more frequently than a typical ongoing care plan would require.",
      ]}
      faqs={[
        {
          q: "How fast can you start after discharge?",
          a: "Often within 48 hours, and sometimes the same day, especially if we're looped in before discharge happens.",
        },
        {
          q: "Is this covered by insurance or Medicare?",
          a: "No — we are a private-pay non-skilled home care agency and do not bill Medicare or insurance directly.",
        },
        {
          q: "How long does support typically last?",
          a: "It varies by recovery — some families need a couple of weeks of extra support, others longer. Your RN reviews and adjusts the plan as recovery progresses.",
        },
        {
          q: "Can you coordinate directly with the hospital discharge planner?",
          a: "Yes — we're glad to speak with your discharge planner directly to align on timing and any specific home-safety instructions.",
        },
        {
          q: "Do you provide wound care or other clinical services after surgery?",
          a: "No — this is non-skilled care focused on safety, mobility, and daily living support. Clinical needs like wound care remain with your medical team or a home health agency.",
        },
        {
          q: "Can Archangels caregivers pick up prescriptions after discharge?",
          a: "Yes — caregivers can assist with picking up prescriptions and other essential errands during the recovery window as part of the care plan.",
        },
        {
          q: "What if complications come up after discharge?",
          a: "Caregivers are trained to notice and report changes right away, and our RN helps the family determine whether a call to the physician or an adjustment to the care plan is needed.",
        },
      ]}
      related={[
        { slug: "respite-care", label: "Respite Care & Family Support" },
        { slug: "personal-care", label: "Personal Care Services" },
        { slug: "rn-supervision", label: "RN Supervision & Oversight" },
        { slug: "24-hour-care", label: "24-Hour Care" },
      ]}
    />
  );
}
