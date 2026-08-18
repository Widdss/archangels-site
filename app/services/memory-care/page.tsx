import type { Metadata } from "next";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Alzheimer's & Memory Care Richmond VA | Dementia Care Services",
  description:
    "Specialized, RN-supervised Alzheimer's & dementia care in Richmond, Mechanicsville & Hanover County. Safe environment management, behavioral support, and respite for family caregivers. Call 804-903-8133.",
  alternates: {
    canonical: "https://www.archangelspersonalcare.com/services/memory-care",
  },
  openGraph: {
    title: "Alzheimer's & Memory Care Richmond VA | Dementia Care Services",
    description:
      "Specialized, RN-supervised Alzheimer's & dementia care in Richmond, Mechanicsville & Hanover County. Safe environment management, behavioral support, and family respite.",
    url: "https://www.archangelspersonalcare.com/services/memory-care",
    siteName: "Archangels Personal Care",
    type: "website",
  },
};

export default function MemoryCarePage() {
  return (
    <ServiceDetailLayout
      slug="memory-care"
      eyebrow="Memory Care"
      title="Alzheimer's & Memory Care in Richmond, VA"
      intro="Compassionate, specialized non-skilled support for individuals with Alzheimer's disease and other forms of dementia — patient, dignified care tailored to your loved one's needs, under professional RN supervision."
      heroImg="https://www.archangelspersonalcare.com/images/nurse-with-patient.jpg"
      heroAlt="Caregiver providing specialized memory care support"
      whoFor={[
        "Families navigating a recent Alzheimer's or dementia diagnosis and unsure where to start",
        "Loved ones showing memory loss, confusion, or wandering behavior who need a safer home environment",
        "Anyone whose behavioral changes require patient, trained redirection rather than confrontation",
        "Family caregivers who are exhausted and need trained relief without losing continuity of care",
      ]}
      signs={[
        "Getting lost in familiar places or forgetting the way home",
        "Repeating questions or stories within the same conversation",
        "Leaving the stove on, wandering, or other safety near-misses",
        "Increasing agitation or confusion, especially in the late afternoon or evening",
      ]}
      included={[
        "Safe environment management & fall prevention",
        "Assistance with ADLs & personal care",
        "Medication reminders & management oversight",
        "Behavioral support & redirection techniques",
        "Companionship & emotional support",
        "Respite care for family caregivers",
        "Sundowning & nighttime confusion support",
        "Consistent, familiar caregiver assignment",
      ]}
      note="All dementia care is delivered under professional RN supervision, by caregivers specifically trained in dementia care techniques and compassionate communication, in full compliance with Virginia regulations."
      scenario={{
        title: "An Afternoon Visit for a Client With Memory Loss",
        text: "A caregiver arrives in the early afternoon, a time the family has learned tends to bring more confusion. Rather than rushing through tasks, she sits down first, uses a familiar photo album to ease into conversation, and gently redirects when her client grows anxious about an errand from years ago. She helps prepare a simple snack, keeps the environment calm and free of clutter that could cause a trip, and takes a slow walk in the backyard when agitation starts to rise. By the time the visit ends, her client is calm, safe, and has enjoyed genuine company.",
      }}
      steps={[
        { title: "Free consultation & assessment", desc: "We discuss the behaviors you're seeing, then an RN assesses the home." },
        { title: "Caregiver matched for fit", desc: "A dementia-trained caregiver whose temperament fits your loved one, not just whoever's free." },
        { title: "Routine built around comfort", desc: "We learn what soothes and what triggers agitation, then build a daily rhythm." },
        { title: "Care begins", desc: "The same one or two caregivers begin visits, prioritizing familiarity." },
        { title: "Ongoing RN monitoring", desc: "Your RN adjusts the plan as needed, including a path to 24-hour care." },
      ]}
      benefits={[
        { title: "Dementia-specific training", desc: "Caregivers use redirection and de-escalation, not confrontation." },
        { title: "Consistent, familiar faces", desc: "The same caregivers each visit — familiarity meaningfully reduces agitation." },
        { title: "A genuinely safer home", desc: "Fall prevention addresses the specific risks of wandering and disorientation." },
        { title: "Room to scale as needs grow", desc: "Memory care can expand into 24-Hour Care without starting over." },
      ]}
      approach={[
        "We understand the unique challenges of memory loss and behavioral change. Our caregivers are trained in dementia-specific techniques — how to de-escalate confusion, use gentle redirection, and maintain a calm, predictable routine.",
        "Every plan starts with understanding your loved one's history, triggers, and what brings them comfort, so care feels familiar rather than clinical.",
        "Because dementia care needs can shift, RN oversight means the plan adapts as behaviors and safety needs change — with the family kept informed every step of the way.",
        "Wherever possible, we assign the same one or two caregivers consistently, since routine and familiar faces make a real difference in reducing agitation and confusion for someone living with dementia.",
        "Family communication stays central to memory care: caregivers and the RN share observations after visits, so families always know how their loved one's memory, mood, and safety are trending, not just what happened during a single shift.",
      ]}
      faqs={[
        {
          q: "My parent wanders or gets confused at night — can you help?",
          a: "Yes. Safe environment management and fall prevention are core parts of our dementia care, and caregivers are trained to respond calmly to wandering, sundowning, and nighttime confusion.",
        },
        {
          q: "Do your caregivers have specific dementia training?",
          a: "Yes — caregivers assigned to dementia care cases are trained in dementia care techniques and compassionate communication, not just general personal care.",
        },
        {
          q: "Can this help me avoid caregiver burnout?",
          a: "Absolutely — respite care for family caregivers is built into our dementia care services, so you can step back and recharge while your loved one stays in familiar, capable hands.",
        },
        {
          q: "Is a formal diagnosis required before starting dementia care?",
          a: "No — we can begin care based on the needs and behaviors you're observing. If a physician has given a diagnosis, we're glad to coordinate around it, but it's not a requirement to get started.",
        },
        {
          q: "How do you handle behavioral changes like agitation or resistance to care?",
          a: "Our caregivers are trained to redirect gently rather than confront — using calm tone, familiar routines, and distraction techniques instead of pushing through resistance. Our RN also reviews behavioral patterns during check-ins and adjusts the approach as needed.",
        },
        {
          q: "As dementia progresses, can care scale up to 24-hour coverage?",
          a: "Yes — memory care can transition into our 24-Hour Care service when round-the-clock supervision is needed, keeping the same familiar caregivers on the team wherever possible.",
        },
        {
          q: "Do you support families dealing with early-onset or younger-onset dementia?",
          a: "Yes — our approach is built around the individual's specific behaviors, safety needs, and personality rather than age, so it applies whether your loved one is 55 or 95.",
        },
        {
          q: "How do you handle a client who resists having a caregiver in the home at all?",
          a: "We go slowly — often starting with short visits framed as companionship rather than 'care,' and let trust build naturally. Our RN and caregiver both adjust the approach based on what's actually working for your loved one.",
        },
      ]}
      related={[
        { slug: "personal-care", label: "Personal Care Services" },
        { slug: "rn-supervision", label: "RN Supervision & Oversight" },
        { slug: "companionship", label: "Companionship & Social Engagement" },
        { slug: "respite-care", label: "Respite Care & Family Support" },
        { slug: "24-hour-care", label: "24-Hour Care" },
      ]}
    />
  );
}
