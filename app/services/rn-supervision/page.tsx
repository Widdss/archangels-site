import type { Metadata } from "next";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "RN-Supervised Home Care Richmond VA | Archangels Personal Care",
  description:
    "Every Archangels care plan is overseen by a registered nurse — health assessments, medication compliance oversight, and care coordination. VDH-licensed home care in Richmond, Mechanicsville & Hanover County.",
  alternates: {
    canonical: "https://www.archangelspersonalcare.com/services/rn-supervision",
  },
  openGraph: {
    title: "RN-Supervised Home Care Richmond VA | Archangels Personal Care",
    description:
      "Every Archangels care plan is overseen by a registered nurse — health assessments, medication compliance oversight, and care coordination in Richmond, Mechanicsville & Hanover County.",
    url: "https://www.archangelspersonalcare.com/services/rn-supervision",
    siteName: "Archangels Personal Care",
    type: "website",
  },
};

export default function RnSupervisionPage() {
  return (
    <ServiceDetailLayout
      slug="rn-supervision"
      eyebrow="RN Supervision & Oversight"
      title="RN Supervision & Care Oversight in Richmond, VA"
      intro="Our Registered Nurses provide professional oversight of every care plan, in accordance with Virginia Department of Health (VDH) Home Care Organization regulations — ensuring quality, safety, and full compliance."
      heroImg="https://www.archangelspersonalcare.com/images/nurse-with-patient.jpg"
      heroAlt="RN supervision of home care services"
      whoFor={[
        "Families who want the reassurance of a registered nurse overseeing care, not just a caregiver on their own",
        "Clients managing multiple medications who need reliable compliance oversight",
        "Anyone whose care needs may change over time and requires ongoing health assessment",
        "Families who want a single point of clinical accountability communicating with physicians",
      ]}
      signs={[
        "Multiple medications with a confusing or inconsistent schedule",
        "A recent diagnosis that changes day-to-day care needs",
        "Frequent ER visits or hospital readmissions",
        "No one currently tracking health changes on a regular basis",
      ]}
      included={[
        "Supervision of non-skilled CNA/PCA care",
        "Medication compliance oversight & pillbox setup",
        "Health and wellness assessments",
        "Care plan development & coordination",
        "Communication with families and physicians",
        "Fall-risk & home safety evaluations",
        "Ongoing plan-of-care reviews as needs change",
      ]}
      note="Service scope: RN services are limited to supervision, care coordination, and medication compliance support within non-skilled home care guidelines. Skilled nursing services — including injections, IV therapy, wound care, or clinical treatment — are not provided."
      scenario={{
        title: "Behind the Scenes of a Care Plan",
        text: "Before a single caregiver ever walks through the door, a registered nurse spends time getting to know the client's health history, current medications, and daily routine. She notes that morning stiffness makes early transfers riskier, so the care plan calls for extra time and a steadying hand at breakfast. A week later, the assigned CNA mentions a new bruise during a shift note. The RN follows up with the family the same day, adjusts the fall-prevention approach, and documents the change so every caregiver on the case knows what to watch for going forward.",
      }}
      steps={[
        { title: "Initial call or referral", desc: "You, a family member, or a discharge planner starts the conversation." },
        { title: "In-home RN assessment", desc: "Free evaluation of health history, medications, mobility, and home safety." },
        { title: "Written plan of care created", desc: "The RN documents what caregivers should do, watch for, and report." },
        { title: "CNA/PCA team assigned & briefed", desc: "Caregivers are matched and trained on the plan before the first visit." },
        { title: "Ongoing RN oversight", desc: "Wellness check-ins and physician communication continue for as long as care runs." },
      ]}
      benefits={[
        { title: "One point of clinical accountability", desc: "A single licensed RN owns the plan and answers your questions." },
        { title: "Medication safety, taken seriously", desc: "Pillbox setup, reminders, and compliance tracking reduce missed doses." },
        { title: "Plans that evolve with your loved one", desc: "The RN updates the plan as health changes — never static." },
        { title: "Help navigating veteran benefits", desc: "We can point veteran families toward VA Aid & Attendance resources." },
      ]}
      approach={[
        "Every client is assigned a registered nurse who develops the initial care plan, sets goals with the family, and stays involved for the life of the care relationship — not a one-time sign-off.",
        "RNs conduct regular wellness check-ins, adjusting the plan as conditions change, and act as the communication bridge between caregivers, family members, and physicians.",
        "Medication oversight focuses on compliance and safety — reminders, pillbox setup, and tracking — always within non-skilled home care guidelines and Virginia HCO licensing requirements.",
        "For veteran clients and their families, our care coordinators can help point you toward the VA Aid & Attendance benefit and other resources that may help cover the cost of non-skilled home care — we're not a benefits office, but we're glad to share what we know and coordinate around your VA paperwork where we can.",
        "The process starts with a free in-home RN assessment, where we evaluate health history, current medications, mobility, and home safety, then build a written plan of care that CNAs and PCAs follow under ongoing RN oversight.",
      ]}
      faqs={[
        {
          q: "What's the difference between RN supervision and skilled nursing?",
          a: "RN supervision means a registered nurse oversees the non-skilled care plan — assessments, coordination, medication compliance. It does not include skilled nursing tasks like injections, IV therapy, or wound care, which fall outside non-skilled home care licensing.",
        },
        {
          q: "How often does the RN check in?",
          a: "Frequency depends on the care plan and how your loved one's needs are trending, but every client has an assigned RN who stays engaged for as long as care continues — not just at intake.",
        },
        {
          q: "Will the RN talk to our physician?",
          a: "Yes — care plan coordination and communication with physicians is part of RN oversight, so everyone involved in your loved one's care stays on the same page.",
        },
        {
          q: "Do we need a doctor's referral to start?",
          a: "No referral is required. Our RN conducts an in-home assessment to determine the right plan, and we're happy to coordinate with your physician afterward if that's helpful.",
        },
        {
          q: "Is RN supervision included in every care package, or is it an add-on?",
          a: "It's built into every Archangels care plan — Hourly, Daily, and 24/7 — at no extra step required from you. RN oversight is part of how we deliver non-skilled care safely and in compliance with Virginia regulations, not a separate line item.",
        },
        {
          q: "Can you help our veteran family understand VA benefits for home care?",
          a: "We're not a VA benefits office, but our care coordinators are familiar with programs like VA Aid & Attendance and are glad to point veteran families toward the right resources and paperwork while your RN handles the actual care plan.",
        },
        {
          q: "What happens if a health change is noticed mid-visit?",
          a: "Caregivers are trained to report any changes immediately, and your RN evaluates whether the plan needs adjusting — whether that means more frequent visits, a conversation with your physician, or an updated care plan.",
        },
      ]}
      related={[
        { slug: "personal-care", label: "Personal Care Services" },
        { slug: "memory-care", label: "Alzheimer's & Memory Care" },
        { slug: "companionship", label: "Companionship & Social Engagement" },
        { slug: "respite-care", label: "Respite Care & Family Support" },
        { slug: "24-hour-care", label: "24-Hour Care" },
      ]}
    />
  );
}
