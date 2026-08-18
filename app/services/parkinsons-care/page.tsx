import type { Metadata } from "next";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Parkinson's Care Support Richmond VA | Archangels Personal Care",
  description:
    "Non-skilled, RN-supervised Parkinson's care support in Richmond, Mechanicsville & Hanover County — fall-risk mobility help, tremor-aware assistance, and routine consistency. Call 804-903-8133.",
  alternates: {
    canonical: "https://www.archangelspersonalcare.com/services/parkinsons-care",
  },
  openGraph: {
    title: "Parkinson's Care Support Richmond VA | Archangels Personal Care",
    description:
      "Non-skilled, RN-supervised Parkinson's care support in Richmond, Mechanicsville & Hanover County — fall-risk mobility help, tremor-aware assistance, and routine consistency.",
    url: "https://www.archangelspersonalcare.com/services/parkinsons-care",
    siteName: "Archangels Personal Care",
    type: "website",
  },
};

export default function ParkinsonsCarePage() {
  return (
    <ServiceDetailLayout
      slug="parkinsons-care"
      eyebrow="Parkinson's Care"
      title="Parkinson's Care Support in Richmond, VA"
      intro="Patient, consistent, non-skilled support for individuals living with Parkinson's disease — helping with mobility, daily routines, and fall prevention, delivered by caregivers who understand how tremors and mobility changes affect everyday tasks."
      heroImg="https://www.archangelspersonalcare.com/images/caregiver-black-with-elderly.jpg"
      heroAlt="Caregiver assisting a client managing Parkinson's disease"
      whoFor={[
        "Individuals with Parkinson's who need help with mobility, dressing, or fall prevention",
        "Families noticing tremors or rigidity making daily tasks harder than they used to be",
        "Anyone whose medication timing has become difficult to manage consistently",
        "Family caregivers who need relief from around-the-clock vigilance",
      ]}
      signs={[
        "Increased falls or near-falls around the house",
        "Difficulty with buttons, zippers, or utensils due to tremors",
        "Medication doses becoming harder to time and track",
        "A family caregiver stretched thin trying to manage it all",
      ]}
      included={[
        "Fall-risk-aware mobility & transfer assistance",
        "Dressing and grooming assistance adapted for tremors",
        "Medication reminders on a consistent schedule",
        "Meal preparation & feeding assistance",
        "Exercise and walk companionship",
        "Safety-focused home assistance",
        "Transportation & appointment escorts",
        "Respite for family caregivers",
      ]}
      note="Service scope: care is non-skilled and non-clinical. We do not provide physical therapy, occupational therapy, or medication administration — we coordinate around any care your neurologist or therapy team has ordered."
      scenario={{
        title: "A Visit Paced Around Tremors, Not the Clock",
        text: "A caregiver arrives in the morning and takes her time helping her client button a shirt, working around the tremors rather than rushing to finish. She sets out breakfast with adaptive utensils that make eating easier and offers a medication reminder at the time the neurologist recommended. After breakfast, they take a slow, supervised walk around the block, since staying active is part of the client's care plan. The visit ends with the home checked for anything that could become a fall hazard before the caregiver heads out.",
      }}
      steps={[
        { title: "Free consultation", desc: "We talk through the specific mobility and tremor-related challenges you're seeing." },
        { title: "RN assessment", desc: "An RN evaluates fall risk, home safety, and daily routine, factoring in Parkinson's-specific needs." },
        { title: "Caregiver matched for patience & experience", desc: "We prioritize caregivers experienced with tremor-related tasks and steady, unhurried assistance." },
        { title: "Care begins, routine-first", desc: "Consistency matters a great deal with Parkinson's, so we build a stable, predictable rhythm from day one." },
        { title: "RN adjusts as symptoms change", desc: "Your RN reviews the plan regularly and adapts as the condition progresses." },
      ]}
      benefits={[
        { title: "Patience-based assistance", desc: "Caregivers trained to work at your loved one's pace, not rush through tremor-slowed tasks." },
        { title: "Consistency that matters", desc: "Routine and familiar faces genuinely help reduce frustration and fall risk." },
        { title: "RN oversight that adapts", desc: "Plans are reviewed and updated as Parkinson's symptoms change over time." },
        { title: "Real relief for family caregivers", desc: "Trusted respite so families aren't carrying every task alone." },
      ]}
      approach={[
        "Parkinson's affects everyone differently, so care starts with understanding your loved one's specific mobility challenges, tremor patterns, and daily routine rather than a one-size-fits-all plan.",
        "Caregivers are matched for patience and steadiness — helping with buttons, zippers, transfers, and meals at a pace that reduces frustration rather than rushing through it.",
        "We are not a substitute for a neurologist, physical therapist, or occupational therapist — our role is non-skilled daily support that works alongside whatever clinical care your loved one already receives.",
        "Because Parkinson's can progress, RN oversight means the plan is reviewed regularly and adjusted as mobility, tremor severity, or medication needs change, with families kept informed throughout.",
        "Care plans are personalized around what a client can still do independently, not just what they need help with — the goal is supporting dignity and confidence, not taking over tasks a client can still safely manage on their own.",
      ]}
      faqs={[
        {
          q: "Do you provide physical or occupational therapy for Parkinson's?",
          a: "No — we provide non-skilled personal care and daily-living support only. We're glad to coordinate around any physical therapy, occupational therapy, or neurology care already in place.",
        },
        {
          q: "Can caregivers help with medication timing?",
          a: "Yes — medication reminders on a consistent schedule are part of our care, though we do not administer medication or make dosing decisions, which stay with your physician.",
        },
        {
          q: "How do you handle tremors during dressing or eating?",
          a: "Caregivers are trained to assist patiently, adapting techniques like using adaptive utensils or extra time for buttons and zippers, without rushing the process.",
        },
        {
          q: "Is fall prevention a big part of this service?",
          a: "Yes — fall risk is a central focus of Parkinson's care, from mobility and transfer assistance to home safety evaluations by our RN.",
        },
        {
          q: "Can care start with just a few hours a week?",
          a: "Yes — many families start small and adjust hours up as mobility needs increase, with no long-term contract required.",
        },
        {
          q: "Will the same caregiver come each visit?",
          a: "We prioritize consistency — the same caregiver builds familiarity with your loved one's specific tremor patterns and routine, which matters a great deal with Parkinson's.",
        },
        {
          q: "Can Archangels caregivers coordinate with our physical therapist?",
          a: "Yes — while we don't provide therapy ourselves, caregivers can reinforce simple, non-clinical routines your therapy team recommends and communicate any changes back to your RN and family.",
        },
      ]}
      related={[
        { slug: "personal-care", label: "Personal Care Services" },
        { slug: "rn-supervision", label: "RN Supervision & Oversight" },
        { slug: "respite-care", label: "Respite Care & Family Support" },
        { slug: "24-hour-care", label: "24-Hour Care" },
      ]}
    />
  );
}
