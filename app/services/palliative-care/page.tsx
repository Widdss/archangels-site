import type { Metadata } from "next";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Palliative Care Support Richmond VA | Archangels Personal Care",
  description:
    "Non-skilled comfort-focused care support in Richmond, Mechanicsville & Hanover County for clients managing a serious illness, working alongside your physician-led palliative care team. Call 804-903-8133.",
  alternates: {
    canonical: "https://www.archangelspersonalcare.com/services/palliative-care",
  },
  openGraph: {
    title: "Palliative Care Support Richmond VA | Archangels Personal Care",
    description:
      "Non-skilled comfort-focused care support in Richmond, Mechanicsville & Hanover County for clients managing a serious illness, working alongside your physician-led palliative team.",
    url: "https://www.archangelspersonalcare.com/services/palliative-care",
    siteName: "Archangels Personal Care",
    type: "website",
  },
};

export default function PalliativeCarePage() {
  return (
    <ServiceDetailLayout
      slug="palliative-care"
      eyebrow="Palliative Care Support"
      title="Palliative Care Support in Richmond, VA"
      intro="Non-skilled, comfort-focused daily support for clients managing a serious illness — working alongside your physician-led palliative care team, not in place of it, so your loved one has help at home between medical visits."
      heroImg="https://www.archangelspersonalcare.com/images/quality-of-life.jpg"
      heroAlt="Caregiver providing comfort-focused support to a client"
      whoFor={[
        "Clients managing symptoms of a serious or chronic illness who need daily support",
        "Families wanting extra hands alongside an existing medical palliative team",
        "Clients not yet on hospice who need more support to remain at home",
        "Family caregivers coordinating a lot of moving pieces and needing help",
      ]}
      signs={[
        "Managing multiple symptoms and medications day to day",
        "A family stretched thin trying to coordinate everything",
        "A desire to remain at home through a serious illness",
        "Gaps between physician or palliative team visits"
      ]}
      included={[
        "Comfort-focused personal care",
        "Medication reminders, coordinated with your palliative team's plan",
        "Companionship & emotional support",
        "Respite for family caregivers",
        "Communication with family about daily observations",
        "Mobility & safety assistance",
        "Light housekeeping & meal preparation",
      ]}
      note="Archangels does not provide medical palliative care, symptom management, or clinical treatment. This is non-skilled comfort support that works alongside a physician-led palliative care team already involved in your loved one's care."
      scenario={{
        title: "Extra Support Between Medical Visits",
        text: "A caregiver arrives on a day the palliative team isn't scheduled to visit. She helps her client get comfortable, offers a medication reminder on the schedule the medical team set, and spends time talking through how the week has felt physically and emotionally. She prepares a light meal suited to a reduced appetite and lets the family know about a new symptom she noticed, so they can mention it at the next palliative appointment. Her presence fills the gap between visits with steady, familiar care.",
      }}
      steps={[
        { title: "A conversation about your situation", desc: "We learn about the illness, current care team, and where daily support is needed." },
        { title: "RN coordination with your palliative team", desc: "Our RN reviews the existing medical plan and builds a complementary non-skilled care plan." },
        { title: "Caregiver matched", desc: "Chosen for a calm, attentive, comfort-focused approach." },
        { title: "Care begins", desc: "Support fills the gaps between physician and palliative team visits." },
        { title: "Ongoing communication", desc: "We share relevant observations with family so everyone stays informed." },
      ]}
      benefits={[
        { title: "Fills the gaps between medical visits", desc: "Daily comfort and support when your medical team isn't there." },
        { title: "Coordinated, not duplicated", desc: "Care is built around your existing palliative team's plan, not separate from it." },
        { title: "Real relief for families", desc: "Respite for family caregivers managing a demanding, emotional situation." },
        { title: "Consistency and familiarity", desc: "The same caregiver builds trust and understanding of your loved one's needs over time." },
      ]}
      approach={[
        "Palliative care in the medical sense — symptom management, treatment planning — is led by your physician or a dedicated palliative care team; our role is different and complementary: non-skilled, comfort-focused daily support at home.",
        "We coordinate closely with whatever medical team is already involved, so our caregivers' daily support and observations align with the broader plan of care rather than operating separately.",
        "Care focuses on comfort, dignity, and presence — personal care assistance, companionship, medication reminders on the schedule your medical team has set, and a calm, attentive presence.",
        "This service is a good fit for families who aren't yet using hospice but need more consistent support at home while managing a serious illness.",
        "As with all of our services, the plan is reviewed regularly and adjusted as symptoms, energy levels, or the family's needs change — palliative support is rarely static, and neither is our approach to it.",
      ]}
      faqs={[
        {
          q: "Do you provide medical palliative care or symptom management?",
          a: "No — medical palliative care is provided by your physician or a dedicated palliative care team. We provide non-skilled comfort and daily-living support that works alongside them.",
        },
        {
          q: "How is this different from your End-of-Life Comfort Care service?",
          a: "This service supports clients earlier in a serious illness who are not yet on hospice. End-of-Life Comfort Care is specifically for families already working with a hospice team.",
        },
        {
          q: "Can you communicate with our palliative care team?",
          a: "Yes — our RN coordinates with your existing medical team so our non-skilled support complements their plan of care.",
        },
        {
          q: "Do you administer medication or manage symptoms?",
          a: "No — we provide medication reminders on the schedule your medical team has set, but do not administer medication or make treatment decisions.",
        },
        {
          q: "Can this scale up if our loved one moves to hospice later?",
          a: "Yes — if your family transitions to hospice, we can shift to our End-of-Life Comfort Care service, working alongside your hospice team instead.",
        },
        {
          q: "Will Archangels communicate directly with our palliative physician?",
          a: "With your permission, our RN can share relevant observations with your medical team so your palliative plan stays informed by what's happening day to day at home.",
        },
        {
          q: "Can palliative care support be combined with respite care for family caregivers?",
          a: "Yes — many families combine the two, using palliative support visits alongside occasional respite coverage so the family caregiver can also rest.",
        },
      ]}
      related={[
        { slug: "end-of-life-care", label: "End-of-Life Comfort Care" },
        { slug: "personal-care", label: "Personal Care Services" },
        { slug: "rn-supervision", label: "RN Supervision & Oversight" },
        { slug: "respite-care", label: "Respite Care & Family Support" },
      ]}
    />
  );
}
