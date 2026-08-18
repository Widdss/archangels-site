import type { Metadata } from "next";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Personal Care Services Richmond & Mechanicsville, VA | Archangels Personal Care",
  description:
    "CNA & PCA personal care assistance with bathing, dressing, mobility, meal prep & medication reminders. RN-supervised, VDH-licensed home care in Richmond, Mechanicsville & Hanover County. Call 804-903-8133.",
};

export default function PersonalCarePage() {
  return (
    <ServiceDetailLayout
      eyebrow="Personal Care Services"
      title="Personal Care Services in Richmond & Mechanicsville, VA"
      intro="Non-skilled personal care assistance with daily living, delivered by CNAs and PCAs under RN supervision — so your loved one stays safe, comfortable, and independent at home."
      heroImg="https://www.archangelspersonalcare.com/images/caregiver-black-with-elderly.jpg"
      heroAlt="Compassionate caregiver providing personal care services"
      whoFor={[
        "Seniors who need help with bathing, dressing, or getting around safely",
        "Anyone recovering from a hospital stay, surgery, or fall who isn't quite back to full independence",
        "Families who want a trusted, RN-supervised caregiver instead of piecing together support themselves",
        "Clients who need occasional help a few hours a week, not full-time care",
      ]}
      signs={[
        "Skipping showers or wearing the same clothes for several days",
        "Unexplained bruises, weight loss, or missed medications",
        "A recent fall, hospital stay, or new mobility limitation",
        "Family members feeling stretched too thin to help every day",
      ]}
      included={[
        "Bathing, grooming & dressing",
        "Toileting & incontinence care",
        "Transferring & mobility assistance",
        "Feeding assistance",
        "Meal preparation",
        "Light housekeeping & laundry",
        "Medication reminders & fall prevention",
        "Companion care & emotional support",
        "Grocery shopping & light errands",
        "Appointment escorts & transportation coordination",
      ]}
      steps={[
        { title: "Call or request care online", desc: "Reach us at 804-903-8133 — a real caregiver coordinator responds, usually the same day." },
        { title: "Free in-home RN assessment", desc: "An RN evaluates daily living needs, mobility, medications, and home safety." },
        { title: "Caregiver matching", desc: "We match a CNA or PCA whose experience and personality fit your loved one." },
        { title: "Care begins", desc: "Your caregiver starts on the agreed schedule, often within days." },
        { title: "Ongoing RN check-ins", desc: "Your RN reviews and adjusts the plan as needs change over time." },
      ]}
      benefits={[
        { title: "Consistent, trusted caregivers", desc: "We prioritize keeping the same CNA or PCA on your case, not a rotating cast of strangers." },
        { title: "RN oversight, built in", desc: "Every plan is supervised by a registered nurse at no extra step required from you." },
        { title: "No long-term contracts", desc: "Start small and adjust up or down anytime as needs change." },
        { title: "Support for a range of conditions", desc: "A strong fit for Parkinson's-related mobility needs and post-hospital recovery." },
      ]}
      approach={[
        "Every personal care plan starts with an in-home assessment, so the caregiver we match your family with actually fits your loved one's routine, personality, and needs — not a generic template.",
        "Caregivers are Certified Nursing Assistants (CNAs) or Personal Care Aides (PCAs), background-checked and trained specifically in non-skilled personal care under Virginia Department of Health guidelines.",
        "A registered nurse supervises every plan from day one, checking in regularly and adjusting care as needs change — so small issues get caught before they become big ones.",
        "Personal care also supports clients managing Parkinson's disease with mobility and daily-living assistance, and families navigating the weeks after a hospital discharge or surgery who need extra hands at home during recovery — always within non-skilled, non-clinical guidelines.",
        "Getting started is simple: call 804-903-8133 or request care online, our RN completes a free in-home assessment, and we match a caregiver within days — often the same week, sometimes the same day for urgent situations.",
      ]}
      faqs={[
        {
          q: "How much personal care do we actually need?",
          a: "It depends on the person. Some families start with a few hours a week for bathing and dressing help; others need daily visits. A care coordinator can walk through your specific situation on a free call and recommend a starting point — you're never locked into more than you need.",
        },
        {
          q: "Are your caregivers trained and background-checked?",
          a: "Yes. Every CNA and PCA on our team is background-checked, credentialed, and works under the ongoing supervision of a registered nurse, in full compliance with Virginia's Home Care Organization regulations.",
        },
        {
          q: "Can personal care start quickly?",
          a: "Often, yes — same-day starts are possible for urgent situations. For most families, care begins within a few days of the first call.",
        },
        {
          q: "What if my loved one refuses help?",
          a: "It's common, especially at first. We start slow, match a caregiver whose personality fits well, and let trust build over the first few visits rather than pushing a full routine on day one.",
        },
        {
          q: "Can we increase or decrease hours as needs change?",
          a: "Yes — personal care plans are reviewed and adjusted by our RN as often as needed. Many families start with a few hours a week and scale up to daily visits or full-time care over time, with no long-term contract locking you in.",
        },
        {
          q: "Do you provide personal care for people with Parkinson's disease?",
          a: "Yes — our CNAs and PCAs regularly support clients managing Parkinson's-related mobility and daily-living challenges, including fall prevention, transfers, and dressing assistance, always as non-skilled personal care under RN supervision rather than clinical treatment.",
        },
        {
          q: "Can personal care help right after a hospital stay or surgery?",
          a: "Yes — many families bring us in specifically for the recovery window after a hospital discharge or procedure, when extra hands at home make the difference between a smooth recovery and a setback. We can typically start within a day or two of your call.",
        },
      ]}
      related={[
        { slug: "rn-supervision", label: "RN Supervision & Oversight" },
        { slug: "memory-care", label: "Alzheimer's & Memory Care" },
        { slug: "companionship", label: "Companionship & Social Engagement" },
        { slug: "respite-care", label: "Respite Care & Family Support" },
        { slug: "24-hour-care", label: "24-Hour Care" },
      ]}
    />
  );
}
