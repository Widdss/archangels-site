import type { Metadata } from "next";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Respite Care Richmond VA | Family Caregiver Relief | Archangels Personal Care",
  description:
    "Flexible respite care in Richmond, Mechanicsville & Hanover County gives family caregivers a break while a loved one gets professional, compassionate care. Hourly or extended coverage. Call 804-903-8133.",
  alternates: {
    canonical: "https://www.archangelspersonalcare.com/services/respite-care",
  },
  openGraph: {
    title: "Respite Care Richmond VA | Family Caregiver Relief | Archangels Personal Care",
    description:
      "Flexible respite care in Richmond, Mechanicsville & Hanover County gives family caregivers a break while a loved one gets professional, compassionate care.",
    url: "https://www.archangelspersonalcare.com/services/respite-care",
    siteName: "Archangels Personal Care",
    type: "website",
  },
};

export default function RespiteCarePage() {
  return (
    <ServiceDetailLayout
      slug="respite-care"
      eyebrow="Respite Care & Family Support"
      title="Respite Care & Family Support in Richmond, VA"
      intro="Family caregivers often experience burnout and stress. Our respite care services provide temporary relief while ensuring your loved one receives professional, compassionate non-skilled care support."
      heroImg="https://www.archangelspersonalcare.com/images/recovery-support.jpg"
      heroAlt="Respite care provider supporting family caregivers"
      whoFor={[
        "Family caregivers who need a break — for a few hours, a weekend, or longer — without worrying about care quality",
        "Households juggling caregiving with work, kids, or their own health needs",
        "Families planning travel or a temporary absence and need reliable coverage",
        "Anyone recovering from caregiver burnout who needs consistent, trustworthy relief",
      ]}
      signs={[
        "Feeling exhausted, irritable, or resentful more often than not",
        "Postponing your own doctor's appointments or self-care",
        "An upcoming trip, event, or work commitment with no coverage plan",
        "Feeling guilty about needing a break, even though you clearly do",
      ]}
      included={[
        "Flexible hourly or extended respite support",
        "Coverage for daytime or overnight care",
        "Continuity of care with established caregivers",
        "Comprehensive care coordination",
        "Peace of mind and caregiver support resources",
        "Emergency & short-notice coverage when possible",
        "Vacation & travel coverage planning",
      ]}
      note="Family-Centered Care: We work closely with families to understand your loved one's needs and provide seamless, consistent care that supports your wellbeing as a caregiver, too."
      scenario={{
        title: "A Weekend Away, Covered",
        text: "A family caregiver books a weekend trip for the first time in over a year. A caregiver her mother already knows arrives Friday evening, settles into the normal bedtime routine, and handles the Saturday morning medication reminder and breakfast just as the family usually would. Text updates go out through the weekend so the family can relax without worrying. By Sunday evening, the routine hasn't skipped a beat, and the family returns to a rested loved one and a bit of their own energy back.",
      }}
      steps={[
        { title: "Call with your timeframe", desc: "Tell us what you need coverage for and when — a few hours, a weekend, or a recurring slot." },
        { title: "We confirm caregiver availability", desc: "Wherever possible, we schedule a caregiver your loved one already knows and trusts." },
        { title: "Coverage is scheduled", desc: "You get a confirmed plan so you can actually step away without checking your phone every ten minutes." },
        { title: "Caregiver arrives, you take your break", desc: "Care continues on your loved one's normal routine while you rest, travel, or handle what you need to." },
        { title: "Adjust anytime", desc: "Turn respite into a recurring arrangement, or scale to Daily or 24/7 care if ongoing needs are growing." },
      ]}
      benefits={[
        { title: "Genuine relief, not guilt", desc: "We treat your wellbeing as part of the care plan — not an afterthought to your loved one's needs." },
        { title: "Continuity you can count on", desc: "Familiar caregivers mean respite doesn't feel disruptive to your loved one, even on short notice." },
        { title: "No rigid contracts", desc: "One-time, occasional, or recurring — respite is built around your actual life, not a fixed package." },
        { title: "Support through transitions", desc: "Ideal right after a hospital discharge or during a caregiver's own recovery." },
      ]}
      approach={[
        "Respite care is built around your schedule, not a rigid package — a few hours this week, an overnight next month, whatever relief you actually need.",
        "Wherever possible, we keep continuity with caregivers your loved one already knows, so respite coverage doesn't feel like a stranger stepping in.",
        "We treat the family caregiver as part of the care plan too — checking in on how you're doing, not just the client.",
        "Respite is also a natural fit for the weeks after a hospital discharge or surgery, when a family caregiver needs backup, and for families providing end-of-life comfort care at home who need a trusted, non-skilled presence alongside hospice so they can rest.",
        "If you know a break is coming up — a trip, a procedure, a busy work stretch — the earlier you call, the more likely we can schedule your loved one's usual caregiver instead of someone unfamiliar.",
      ]}
      faqs={[
        {
          q: "How short can a respite visit be?",
          a: "Hourly visits start at a 3-hour minimum, which is often enough for an appointment, errands, or simply a few hours to yourself. Extended and overnight coverage is also available.",
        },
        {
          q: "Can respite care become ongoing if we need it more regularly?",
          a: "Yes — many families start with occasional respite and shift to a regular schedule, or a full Daily or 24/7 care package, as needs change. Your care coordinator can help adjust the plan anytime.",
        },
        {
          q: "Will the same caregiver come each time?",
          a: "We prioritize continuity with caregivers your loved one already knows whenever possible, so respite visits feel familiar rather than disruptive.",
        },
        {
          q: "Do we have to commit to a recurring schedule?",
          a: "No — respite care can be a one-time visit, occasional, or a regular weekly slot. It's built around whatever relief actually fits your life.",
        },
        {
          q: "Can you cover a last-minute need, like an unexpected work trip?",
          a: "We'll always try. Short-notice coverage depends on caregiver availability at the time, so the sooner you call 804-903-8133, the better we can accommodate it — but reach out even for urgent situations.",
        },
        {
          q: "Can respite care support a family already working with hospice?",
          a: "Yes — we provide non-skilled, non-medical comfort care and companionship alongside a hospice team already involved, giving family caregivers a trusted break during an emotionally demanding time. We don't provide skilled hospice nursing ourselves.",
        },
        {
          q: "Is respite care available after I'm discharged from the hospital myself, if I'm the primary caregiver?",
          a: "Yes — if you're the one recovering and normally provide care for a loved one, we can step in temporarily so your household doesn't lose care coverage while you heal.",
        },
      ]}
      related={[
        { slug: "personal-care", label: "Personal Care Services" },
        { slug: "rn-supervision", label: "RN Supervision & Oversight" },
        { slug: "memory-care", label: "Alzheimer's & Memory Care" },
        { slug: "companionship", label: "Companionship & Social Engagement" },
        { slug: "24-hour-care", label: "24-Hour Care" },
      ]}
    />
  );
}
