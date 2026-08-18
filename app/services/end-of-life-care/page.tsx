import type { Metadata } from "next";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "End-of-Life Comfort Care Richmond VA | Archangels Personal Care",
  description:
    "Compassionate, non-medical end-of-life comfort and companion care in Richmond, Mechanicsville & Hanover County, working alongside your hospice team. Call 804-903-8133.",
};

export default function EndOfLifeCarePage() {
  return (
    <ServiceDetailLayout
      eyebrow="End-of-Life Comfort Care"
      title="End-of-Life Comfort Care in Richmond, VA"
      intro="Compassionate, non-medical presence and comfort care for clients and families navigating end of life — working alongside your hospice team to fill the gaps between visits with dignity and warmth."
      heroImg="https://www.archangelspersonalcare.com/images/quality-of-life.jpg"
      heroAlt="Caregiver providing comforting presence to a client and family"
      whoFor={[
        "Families with a loved one enrolled in hospice who want extra non-medical support",
        "Households wanting a steady, comforting presence beyond scheduled hospice visits",
        "Family caregivers who need respite during an emotionally demanding time",
        "Anyone prioritizing comfort, dignity, and connection over treatment",
      ]}
      signs={[
        "Hospice visits happen periodically, leaving gaps in coverage",
        "Family is exhausted, needing help with daily tasks and presence",
        "A loved one wants company and comfort, not clinical intervention",
        "Family members live far away and want reassurance someone is there",
      ]}
      included={[
        "Comfort-focused personal care",
        "Companionship & calm, steady presence",
        "Respite for family caregivers",
        "Light housekeeping",
        "Coordination alongside your hospice team",
        "Emotional support for client and family",
        "Assistance with meals & hydration comfort (non-clinical)",
        "Flexible scheduling around hospice visit times",
      ]}
      note="Archangels does not provide hospice, palliative, or skilled nursing services. This is non-medical comfort and companion care that works alongside a hospice or medical team already in place."
      steps={[
        { title: "A conversation about your situation", desc: "We listen and talk through how hospice care is currently structured and where extra support is needed." },
        { title: "RN coordination with your hospice plan", desc: "Our RN reviews how our non-medical support fits alongside your existing hospice team." },
        { title: "A calm, compassionate caregiver is matched", desc: "We prioritize temperament and steadiness for this kind of care." },
        { title: "Care begins, flexible around hospice visits", desc: "Scheduling works around your hospice team's visits rather than competing with them." },
        { title: "Support continues, adjusting as needed", desc: "We stay flexible as your family's needs shift day to day." },
      ]}
      benefits={[
        { title: "Family gets to be present, not just exhausted", desc: "Respite lets loved ones focus on being present rather than managing every task." },
        { title: "A consistent, familiar face", desc: "The same caregiver provides steady, dependable comfort during a hard time." },
        { title: "Coordination, not duplication", desc: "We work alongside your hospice team rather than overlapping with their role." },
        { title: "Dignity-centered care", desc: "Every visit is built around comfort and respect, not a checklist." },
      ]}
      approach={[
        "This is non-medical comfort and companion care — we do not provide hospice, palliative, or skilled nursing services ourselves, and we always work in coordination with whatever hospice or medical team is already involved.",
        "Our role is to fill the gaps between scheduled hospice visits with a steady, comforting presence, help with daily tasks, and genuine companionship for both the client and the family.",
        "Caregivers are chosen specifically for calm, compassionate temperaments suited to this kind of care, and scheduling is built around your hospice team's visit times rather than in competition with them.",
        "We stay in close communication with family throughout, adjusting the plan day to day as needs change during this time.",
      ]}
      faqs={[
        {
          q: "Do you provide hospice services?",
          a: "No — we provide non-medical comfort and companion care. Hospice and any clinical/medical care remain with your hospice or medical team; we coordinate alongside them.",
        },
        {
          q: "Can you start before hospice is arranged?",
          a: "Yes — our non-medical comfort care can begin independently of hospice, whenever your family needs extra support and presence.",
        },
        {
          q: "How do you coordinate with our existing hospice team?",
          a: "Our RN reviews your hospice plan and schedules our visits to complement it, and we communicate any relevant observations back to your family.",
        },
        {
          q: "Can this help with caregiver burnout during this time?",
          a: "Yes — respite for family caregivers is one of the most common reasons families reach out for this kind of support.",
        },
        {
          q: "Is this covered by hospice benefits or insurance?",
          a: "No — this is private-pay, non-medical support separate from your hospice benefit, which covers the clinical side of care.",
        },
      ]}
      related={[
        { slug: "respite-care", label: "Respite Care & Family Support" },
        { slug: "companionship", label: "Companionship & Social Engagement" },
        { slug: "24-hour-care", label: "24-Hour Care" },
        { slug: "rn-supervision", label: "RN Supervision & Oversight" },
      ]}
    />
  );
}
