import type { Metadata } from "next";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "24-Hour Home Care Richmond VA | Round-the-Clock In-Home Care",
  description:
    "Professional 24-hour in-home care in Richmond, Mechanicsville & Hanover County — daytime, evening, and overnight coverage with RN supervision for complex medical and care needs. Call 804-903-8133.",
  alternates: {
    canonical: "https://www.archangelspersonalcare.com/services/24-hour-care",
  },
  openGraph: {
    title: "24-Hour Home Care Richmond VA | Round-the-Clock In-Home Care",
    description:
      "Professional 24-hour in-home care in Richmond, Mechanicsville & Hanover County — daytime, evening, and overnight coverage with RN supervision.",
    url: "https://www.archangelspersonalcare.com/services/24-hour-care",
    siteName: "Archangels Personal Care",
    type: "website",
  },
};

export default function TwentyFourHourCarePage() {
  return (
    <ServiceDetailLayout
      slug="24-hour-care"
      eyebrow="24-Hour Care"
      title="24-Hour Home Care in Richmond, VA"
      intro="Round-the-clock personal assistance, monitoring, and support for seniors with complex medical and care needs — coordinated across daytime, evening, and overnight shifts with continuous RN oversight."
      heroImg="https://www.archangelspersonalcare.com/images/nurse-with-patient.jpg"
      heroAlt="Caregiver providing round-the-clock 24-hour home care"
      whoFor={[
        "Clients with advanced dementia or Alzheimer's who need continuous supervision for cognitive decline and behavioral changes",
        "Anyone in post-surgical recovery who needs around-the-clock monitoring and support",
        "Families seeking compassionate presence and comfort care during end-of-life",
        "Clients with mobility impairment or paralysis who need constant assistance with movement and positioning",
        "Individuals managing multiple medical conditions that require frequent monitoring and coordination",
        "Fall-risk or bed-bound clients who need 24/7 monitoring to prevent injury and maintain safety",
      ]}
      signs={[
        "A family caregiver is providing round-the-clock care without any relief",
        "Your loved one has had repeated falls or safety incidents overnight",
        "Someone should never be left alone at any point in the day",
        "Complex, changing medical needs require constant monitoring, not periodic visits",
      ]}
      included={[
        "Daytime coverage (6am–6pm): personal care, meals, light housekeeping, medication reminders",
        "Evening coverage (2pm–10pm): dinner prep, evening hygiene, bedtime routine, medication support",
        "Overnight coverage (10pm–6am): nighttime supervision, bathroom assistance, emergency response",
        "Consistent team of caregivers across shifts for continuity of care",
        "Full RN supervision and care coordination across all coverage windows",
        "Incontinence care, positioning, and comfort support as needed",
      ]}
      note="24-Hour Care is built from overlapping non-skilled shifts with continuous RN oversight — not a single caregiver working around the clock without rest. Skilled nursing tasks such as injections, IV therapy, or wound care remain outside our non-skilled scope."
      scenario={{
        title: "A Full Day of Coordinated Coverage",
        text: "The morning caregiver arrives at 6 a.m., reviews the overnight notes, and helps with breakfast and morning hygiene. At 2 p.m., the evening caregiver arrives for a short handoff conversation before taking over dinner prep, medication reminders, and the bedtime routine. At 10 p.m., the overnight caregiver settles in, checking in periodically and responding right away when her client needs help getting to the bathroom safely. Each shift leaves notes for the next, and the family's RN reviews the full day's documentation to make sure nothing was missed.",
      }}
      steps={[
        { title: "Consultation on care needs", desc: "We discuss why round-the-clock coverage is needed and what shift structure fits." },
        { title: "RN builds the 24-hour plan", desc: "A written plan covers all three shifts under one care standard." },
        { title: "Consistent team assigned", desc: "A small, stable team across shifts instead of rotating strangers." },
        { title: "Care begins with handoff notes", desc: "Caregivers document each shift so the next one picks up seamlessly." },
        { title: "RN reviews the plan regularly", desc: "Your RN adjusts coverage as needs change, scaling down when appropriate." },
      ]}
      benefits={[
        { title: "Rested, alert caregivers", desc: "Three coordinated shifts mean no one is stretched past what's safe." },
        { title: "Coordinated handoffs", desc: "Documented shift notes and RN oversight keep nothing falling through the cracks." },
        { title: "A small, familiar team", desc: "The same caregivers across shifts, not constantly meeting new people." },
        { title: "Built for complex situations", desc: "Regularly supports advanced dementia, post-hospital recovery, and end-of-life comfort care." },
      ]}
      approach={[
        "24-hour coverage is built from three coordinated shifts — daytime, evening, and overnight — so your loved one always has an alert, rested caregiver rather than one person stretched too thin.",
        "We prioritize keeping a small, consistent team across all three shifts, so your loved one sees familiar faces instead of a constantly rotating cast of strangers.",
        "An RN oversees the full 24-hour plan, coordinating between shifts so nothing falls through the cracks between the caregiver who leaves and the one who arrives.",
        "Coverage can start with one or two shifts and expand to full round-the-clock care as needs increase, or scale back down as a client recovers or transitions to a lighter care plan.",
        "Because 24-hour care often supports the most complex situations a family faces, our RN stays especially close to these cases — reviewing shift notes frequently and flagging any pattern worth a conversation with the family or a physician.",
      ]}
      faqs={[
        {
          q: "Is 24-hour care the same as live-in care?",
          a: "Not quite. Live-in care typically uses one caregiver who lives in the home and sleeps overnight; 24-hour care uses a rotating team across three shifts so someone is always awake and alert. We can discuss which model fits your situation on a care consultation call.",
        },
        {
          q: "Can we start with overnight-only or daytime-only coverage?",
          a: "Yes — many families start with one shift, such as overnight supervision for fall risk, and add coverage as needs grow. 24-hour care doesn't have to start as a full three-shift plan.",
        },
        {
          q: "How do caregivers hand off between shifts?",
          a: "Caregivers document care notes at the end of each shift, and our RN reviews the full picture regularly to make sure nothing is missed between the outgoing and incoming caregiver.",
        },
        {
          q: "Is 24-hour care appropriate for hospice or end-of-life support?",
          a: "We provide compassionate, non-skilled comfort care and presence during end-of-life care, working alongside any hospice team already involved. We do not provide skilled hospice nursing services ourselves.",
        },
        {
          q: "What if my loved one's needs change and they no longer need round-the-clock care?",
          a: "Care plans are reviewed regularly by our RN and can scale down to Daily or Hourly Care anytime a client's needs decrease, with no long-term contract locking you in.",
        },
        {
          q: "How quickly can 24-hour care start after a hospital discharge?",
          a: "We move quickly for discharge situations — often coordinating with hospital discharge planners to have coverage ready for the day your loved one comes home, sometimes with less than 48 hours' notice.",
        },
        {
          q: "Do the same caregivers work every day, or does the team rotate constantly?",
          a: "We build a small, consistent team assigned specifically to your case across the three shifts, rather than pulling from a large rotating pool — familiarity matters, especially for complex or cognitively demanding situations.",
        },
      ]}
      related={[
        { slug: "personal-care", label: "Personal Care Services" },
        { slug: "rn-supervision", label: "RN Supervision & Oversight" },
        { slug: "memory-care", label: "Alzheimer's & Memory Care" },
        { slug: "companionship", label: "Companionship & Social Engagement" },
        { slug: "respite-care", label: "Respite Care & Family Support" },
      ]}
    />
  );
}
