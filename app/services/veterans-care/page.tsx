import type { Metadata } from "next";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Veterans In-Home Care Richmond VA | Archangels Personal Care",
  description:
    "Respectful, RN-supervised non-skilled home care for veterans and their spouses in Richmond, Mechanicsville & Hanover County, with guidance toward VA Aid & Attendance resources. Call 804-903-8133.",
  alternates: {
    canonical: "https://www.archangelspersonalcare.com/services/veterans-care",
  },
  openGraph: {
    title: "Veterans In-Home Care Richmond VA | Archangels Personal Care",
    description:
      "Respectful, RN-supervised non-skilled home care for veterans and their spouses in Richmond, Mechanicsville & Hanover County, with guidance toward VA Aid & Attendance resources.",
    url: "https://www.archangelspersonalcare.com/services/veterans-care",
    siteName: "Archangels Personal Care",
    type: "website",
  },
};

export default function VeteransCarePage() {
  return (
    <ServiceDetailLayout
      slug="veterans-care"
      eyebrow="Veterans In-Home Care"
      title="Veterans In-Home Care in Richmond, VA"
      intro="Respectful, non-skilled home care for veterans and their surviving spouses who want to stay independent at home — with caregivers who understand military culture and care coordinators who can point you toward VA benefit resources."
      heroImg="https://www.archangelspersonalcare.com/images/nurse-with-patient.jpg"
      heroAlt="Caregiver providing in-home care to a veteran"
      whoFor={[
        "Veterans who want to age in place at home rather than move to a facility",
        "Surviving spouses of veterans who may also qualify for benefits",
        "Families navigating VA paperwork alongside a growing need for daily care",
        "Anyone who wants care to start now, without waiting on a benefits decision",
      ]}
      signs={[
        "A veteran needing help with daily living tasks or mobility",
        "A family unsure how to start the VA Aid & Attendance process",
        "Care needed now, while a VA benefit application is still pending",
        "A spouse or family caregiver reaching a breaking point",
      ]}
      included={[
        "Personal care & assistance with daily living",
        "Companionship & social engagement",
        "RN supervision & care plan oversight",
        "Guidance toward VA Aid & Attendance resources",
        "Flexible private-pay billing while benefits are processed",
        "Caregivers respectful of military culture and routine",
        "Transportation & appointment escorts",
        "Respite for family caregivers",
      ]}
      note="Archangels is not a VA benefits office and does not provide legal or benefits advice. We can point families toward VA Aid & Attendance resources, but care and billing operate independently of any benefits decision."
      scenario={{
        title: "A Visit That Understands the Routine",
        text: "A caregiver arrives and greets her client the way he prefers — by the nickname his old unit used, which the family shared during the initial assessment. She helps him get dressed, prepares a simple lunch, and sits with him afterward as he talks through stories from his service years, something he doesn't get to do often. Before leaving, she reminds him about an upcoming appointment and lets the family know their VA Aid & Attendance resource conversation from last month is still something our office can help point them toward if they want it.",
      }}
      steps={[
        { title: "Consultation on service history & needs", desc: "We talk through your loved one's daily needs and background." },
        { title: "RN assessment", desc: "A registered nurse evaluates health, mobility, and home safety, and builds the initial care plan." },
        { title: "Resource pointers, if helpful", desc: "We can share where to start with VA Aid & Attendance — not legal or benefits advice, just a starting point." },
        { title: "Caregiver matched", desc: "A caregiver familiar and comfortable with veteran families is assigned." },
        { title: "Care begins", desc: "Since care is private-pay, it can start right away — no need to wait on a benefits decision." },
      ]}
      benefits={[
        { title: "No waiting on VA approval", desc: "Private-pay care can begin immediately while any benefits application is still pending." },
        { title: "Guidance toward the right resources", desc: "We point families toward VA Aid & Attendance information so you know where to start." },
        { title: "Caregivers who understand military culture", desc: "Matched for respect, patience, and familiarity with a veteran's routine and expectations." },
        { title: "Flexible as benefits kick in", desc: "Billing and scheduling adjust as your family's situation changes." },
      ]}
      approach={[
        "Many veteran families delay starting care while waiting on VA benefits to be approved — we make clear that private-pay care can start immediately, so no one has to wait to get the help they need.",
        "Care coordinators can point families toward VA Aid & Attendance and other veteran resources, though we are not a benefits office and don't provide legal or application assistance ourselves.",
        "Caregivers are matched with an understanding of military culture and routine, aiming for a respectful, comfortable fit from the first visit.",
        "Every plan includes RN oversight from day one, the same standard of care coordination every Archangels client receives, adjusted as your family's needs and benefits situation evolve.",
        "Many veterans have unique routines, preferences, and ways of talking about their history — our caregivers take time to learn what matters to each client rather than treating every visit the same way.",
      ]}
      faqs={[
        {
          q: "Do you accept VA benefits directly as payment?",
          a: "We operate as a private-pay agency. We're glad to point families toward VA Aid & Attendance and other resources that may help offset costs, but billing is handled directly with your family.",
        },
        {
          q: "Can care start while we're waiting on VA approval?",
          a: "Yes — since care is private-pay, it can begin right away without waiting for a benefits decision.",
        },
        {
          q: "Do surviving spouses of veterans qualify for help too?",
          a: "Surviving spouses may be eligible for certain VA benefits like Aid & Attendance — we can point you toward where to look, though eligibility decisions are made by the VA.",
        },
        {
          q: "Are your caregivers experienced working with veterans?",
          a: "Many of our caregivers have experience and a genuine comfort working with veteran families, and we prioritize matching based on that fit.",
        },
        {
          q: "Can you help us fill out VA paperwork?",
          a: "We're not a benefits office and don't provide legal or application assistance, but we can share general resource pointers to help your family get started in the right direction.",
        },
        {
          q: "Does Archangels serve non-veteran spouses too?",
          a: "Yes — our care plans are built around the client's needs, whether or not they served, and we're glad to support any member of a veteran family who needs assistance at home.",
        },
        {
          q: "Can care be adjusted if a veteran's needs change after starting service?",
          a: "Yes — your RN reviews the plan regularly and can adjust hours, tasks, or scheduling anytime a veteran's needs shift.",
        },
      ]}
      related={[
        { slug: "personal-care", label: "Personal Care Services" },
        { slug: "rn-supervision", label: "RN Supervision & Oversight" },
        { slug: "companionship", label: "Companionship & Social Engagement" },
        { slug: "24-hour-care", label: "24-Hour Care" },
      ]}
    />
  );
}
