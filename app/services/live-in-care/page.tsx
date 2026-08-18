import type { Metadata } from "next";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Live-In Care Richmond VA | Archangels Personal Care",
  description:
    "Continuous live-in caregiver support in Richmond, Mechanicsville & Hanover County — one consistent caregiver in the home, RN-supervised, an alternative to rotating-shift 24-hour care. Call 804-903-8133.",
  alternates: {
    canonical: "https://www.archangelspersonalcare.com/services/live-in-care",
  },
  openGraph: {
    title: "Live-In Care Richmond VA | Archangels Personal Care",
    description:
      "Continuous live-in caregiver support in Richmond, Mechanicsville & Hanover County — one consistent caregiver in the home, RN-supervised.",
    url: "https://www.archangelspersonalcare.com/services/live-in-care",
    siteName: "Archangels Personal Care",
    type: "website",
  },
};

export default function LiveInCarePage() {
  return (
    <ServiceDetailLayout
      slug="live-in-care"
      eyebrow="Live-In Care"
      title="Live-In Care in Richmond, VA"
      intro="A consistent, familiar caregiver residing in the home to provide daytime assistance and overnight availability — an alternative to our rotating-shift 24-Hour Care model for households that value continuity above all."
      heroImg="https://www.archangelspersonalcare.com/images/caregiver-black-with-elderly.jpg"
      heroAlt="Live-in caregiver spending time with a client at home"
      whoFor={[
        "Families who want one consistent, familiar caregiver rather than rotating shifts",
        "Clients who are fairly independent overnight but want someone present",
        "Households with a private bedroom available for a live-in caregiver",
        "Families who prefer fewer new caregiver faces cycling through the home",
      ]}
      signs={[
        "A desire for maximum continuity over a shift-rotation model",
        "A client who sleeps through most nights with only occasional needs",
        "Family finding it hard to keep track of multiple rotating caregivers",
        "A cognitively sensitive client who does best with one familiar face",
      ]}
      included={[
        "A live-in caregiver present in the home, with required rest breaks",
        "Daytime assistance with activities of daily living",
        "Overnight availability for occasional needs",
        "Meal preparation & light housekeeping",
        "Companionship throughout the day",
        "RN oversight of the overall care plan",
      ]}
      note="Virginia labor regulations require live-in caregivers to receive adequate sleep and rest breaks. We structure schedules to stay fully compliant, which is a key difference from our rotating-shift 24-Hour Care model."
      scenario={{
        title: "A Day With a Familiar Face at Home",
        text: "The live-in caregiver starts the morning the same way she has for months — a cup of tea, a chat about the news, and help getting dressed for the day. In the afternoon, she assists with light housekeeping and prepares dinner, and in the evening she helps her client settle in for the night before taking her own required rest period. Because she's the same caregiver day after day, she notices small changes right away, like a new hesitation on the stairs, and flags it to the RN before it becomes a bigger problem.",
      }}
      steps={[
        { title: "Consultation on household fit", desc: "We discuss whether a live-in arrangement suits your home and your loved one's needs." },
        { title: "RN assessment", desc: "Includes evaluating home suitability — a private bedroom for the caregiver is required." },
        { title: "Caregiver matched", desc: "We prioritize a strong personality and routine fit, since this caregiver becomes a consistent presence." },
        { title: "Trial period", desc: "An initial period confirms the fit works well for everyone before settling into a long-term rhythm." },
        { title: "RN reviews & adjusts", desc: "Your RN checks in regularly and can transition to 24-Hour Care if overnight needs increase." },
      ]}
      benefits={[
        { title: "Deep familiarity with routines", desc: "Fewer new faces means more comfort, especially for cognitively sensitive clients." },
        { title: "Often more cost-efficient", desc: "For lower-acuity situations, live-in care can cost less than full 3-shift 24-hour coverage." },
        { title: "One relationship, not a rotation", desc: "Families build trust with one primary caregiver instead of managing several." },
        { title: "RN oversight throughout", desc: "The plan is reviewed regularly, with a clear path to 24-Hour Care if needs increase." },
      ]}
      approach={[
        "Live-In Care differs from our 24-Hour Care service: instead of rotating caregivers across three shifts, one caregiver resides in the home for an extended stretch, providing daytime assistance and being available overnight for occasional needs, with legally required rest breaks built into the schedule.",
        "This model works best for clients who are fairly independent overnight and for families who prioritize a single, familiar relationship over shift-based coverage.",
        "Every live-in arrangement starts with an honest conversation about whether your home and your loved one's needs are a good fit — a private bedroom for the caregiver is a requirement.",
        "If overnight needs increase over time, an RN can help transition the plan to our rotating-shift 24-Hour Care model, which is built for higher-acuity, overnight-intensive situations.",
        "Because live-in care centers around one relationship, we spend extra time on matching at the start — reviewing personality, interests, and daily habits so the arrangement feels comfortable for everyone in the home, not just workable on paper.",
      ]}
      faqs={[
        {
          q: "What's the difference between Live-In Care and 24-Hour Care?",
          a: "24-Hour Care uses rotating shifts with fresh caregivers around the clock, ideal for higher-acuity or overnight-intensive needs. Live-In Care keeps one consistent caregiver residing in the home, better suited to clients who are more independent overnight.",
        },
        {
          q: "Does the live-in caregiver get breaks?",
          a: "Yes — Virginia labor regulations require adequate sleep and rest breaks for live-in caregivers, and we structure every schedule to stay fully compliant.",
        },
        {
          q: "Is my home suitable for live-in care?",
          a: "A private bedroom for the caregiver is required. Our RN assessment includes evaluating whether your home is a good fit for this model.",
        },
        {
          q: "Can we switch from Live-In Care to 24-Hour Care later?",
          a: "Yes — if overnight needs increase, your RN can help transition the plan to rotating-shift 24-Hour Care.",
        },
        {
          q: "Is Live-In Care less expensive than 24-Hour Care?",
          a: "For lower-acuity situations, it's often more cost-efficient since it doesn't require three separate shifts — but the right fit depends on your loved one's specific overnight needs.",
        },
        {
          q: "What happens if the live-in caregiver needs a day off?",
          a: "We coordinate coverage with a backup caregiver familiar with your loved one's routine, so care continues without interruption.",
        },
        {
          q: "Is live-in care available on a trial basis before committing longer term?",
          a: "Yes — we recommend starting with a trial period so your family and the caregiver can confirm the arrangement is a good fit before settling into a longer-term schedule.",
        },
      ]}
      related={[
        { slug: "24-hour-care", label: "24-Hour Care" },
        { slug: "personal-care", label: "Personal Care Services" },
        { slug: "respite-care", label: "Respite Care & Family Support" },
        { slug: "rn-supervision", label: "RN Supervision & Oversight" },
      ]}
    />
  );
}
