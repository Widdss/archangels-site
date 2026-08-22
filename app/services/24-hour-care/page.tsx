import type { Metadata } from "next";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "24-Hour Home Care Richmond VA | Round-the-Clock In-Home Care",
  description:
    "Professional 24-hour in-home care in Richmond, Mechanicsville & Hanover County — daytime, evening, and awake overnight coverage with continuous RN supervision for complex care needs. Call 804-903-8133.",
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
      eyebrow="24-Hour Around-the-Clock Care"
      title="24-Hour Home Care in Richmond, VA"
      intro="Continuous, around-the-clock non-skilled personal care, attentive monitoring, and companionship delivered by a dedicated team of alert caregivers across coordinated shifts — under ongoing Registered Nurse oversight."
      heroImg="https://www.archangelspersonalcare.com/images/nurse-with-patient.jpg"
      heroAlt="Compassionate caregiver providing attentive 24-hour care to a senior at home"
      whoFor={[
        "Individuals living with advanced Alzheimer's disease, dementia, or cognitive impairment requiring constant awake supervision to prevent wandering, elopement, and confusion",
        "Seniors recovering from major orthopedic surgery, stroke, cardiac events, or severe illness who need hands-on assistance day and night during acute rehabilitation",
        "Aging adults at extreme risk for falls, disorientation, or balance instability who cannot safely be left unattended at any hour of the day or night",
        "Individuals with severe mobility impairment, progressive neuromuscular conditions, or bed-bound status requiring scheduled repositioning and personal care",
        "Families seeking compassionate non-medical presence and comfort support around the clock alongside hospice care during a loved one's final journey",
        "Exhausted family caregivers facing physical collapse from providing 24/7 care who need a professional, coordinated care team to take over",
      ]}
      signs={[
        "Repeated nighttime falls, bathroom near-misses, or wandering out of bed during the overnight hours without awareness",
        "Family members experiencing extreme sleep deprivation because they must wake up multiple times each night to assist a loved one",
        "Leaving stove burners on, unlocking exterior doors, or experiencing acute panic and disorientation when left alone even for thirty minutes",
        "A sudden medical event or surgical discharge leaving a senior completely unable to perform basic Activities of Daily Living independently",
        "Progressive cognitive decline where the client no longer recognizes environmental hazards or forgets how to summon help in an emergency",
        "Complex daily schedules involving round-the-clock personal hygiene, hydration, meals, skin care, and frequent medication reminders",
      ]}
      included={[
        "Continuous 24-hour awake coverage structured across coordinated daytime, evening, and overnight shifts",
        "Dedicated small team of familiar Certified Nursing Assistants (CNAs) and Personal Care Aides (PCAs) assigned for continuity",
        "Full assistance with morning, afternoon, and bedtime personal hygiene, bathing, dressing, and grooming",
        "Discreet toileting assistance, commode support, and scheduled incontinence management throughout day and night",
        "Safe transferring support, ambulation guidance, and scheduled turning/repositioning for bed-bound clients",
        "Nutritious meal preparation, dietary adherence, hydration prompting, and pleasant mealtime accompaniment",
        "Timely medication reminders according to physician schedules and pre-filled organizers across all shifts",
        "Light household upkeep, kitchen sanitization, client laundry, bed linen changes, and keeping clear pathways",
        "Structured shift handoffs with detailed daily documentation logs reviewed continuously by our supervising RN",
        "Comprehensive Registered Nurse oversight, ongoing care plan audits, and 24/7 on-call clinical escalation support",
      ]}
      note="Shift-Based Awake Care vs. Live-In: Our 24-Hour Care service utilizes rotating shifts of rested, awake caregivers (typically 8-hour or 12-hour shifts) to ensure someone is alert and attentive at all hours. This is distinct from live-in care, which requires dedicated caregiver sleep periods. Archangels does not provide skilled nursing services such as injections, IV therapy, or clinical wound care."
      scenario={{
        title: "A 24-Hour Cycle of Coordinated, Attentive Support",
        text: "At 7:00 AM, the daytime CNA arrives, receiving a verbal handoff from the overnight caregiver regarding sleep quality and 3:00 AM bathroom assistance. The daytime caregiver assists the client with a warm shower, prepares oatmeal and fruit, offers morning medication reminders, and engages him in a crossword puzzle before taking a guided garden walk. At 3:00 PM, the evening caregiver arrives, taking over dinner preparation, assisting with evening hygiene, and establishing a calm bedtime routine with soothing music. At 11:00 PM, the awake overnight caregiver begins her shift, conducting quiet safety checks every thirty minutes, assisting immediately when the client wakes to use the commode at 2:30 AM, and ensuring he returns to bed safely without a fall. The supervising RN audits the full 24-hour log each morning to ensure flawless continuity.",
      }}
      steps={[
        {
          title: "Urgent or Planned 24-Hour Consultation",
          desc: "Call 804-903-8133 to speak with our care coordinator. We assess your loved one's 24-hour care requirements, discharge timelines, shift preferences, and immediate safety concerns.",
        },
        {
          title: "Comprehensive In-Home RN Assessment",
          desc: "Our Registered Nurse completes an in-depth evaluation of physical mobility, cognitive status, nocturnal habits, fall risks, and bathroom layouts to design a 24-hour Plan of Care.",
        },
        {
          title: "Assembly of a Dedicated Care Team",
          desc: "We hand-select a small, cohesive team of 3 to 5 credentialed CNAs and PCAs matched to your loved one's personality and trained on the specific requirements of the care plan.",
        },
        {
          title: "Coordinated Shift Implementation",
          desc: "Care begins on a structured shift schedule (such as three 8-hour or two 12-hour shifts). Every shift transition includes standardized handoff notes to maintain unbroken continuity.",
        },
        {
          title: "Continuous RN Oversight & Plan Optimization",
          desc: "Our Registered Nurse regularly reviews shift logs, conducts supervisory visits across day and night shifts, and adjusts care levels as recovery or health conditions evolve.",
        },
      ]}
      benefits={[
        {
          title: "Alert, Rested Caregivers at All Hours",
          desc: "By utilizing rotating shifts rather than an exhausted single caregiver, our team remains fully awake, energetic, and vigilant throughout the night.",
        },
        {
          title: "Consistent Team of Familiar Faces",
          desc: "We assign a small, dedicated core team of caregivers to your loved one's schedule, ensuring familiarity, comfort, and deep understanding of personal habits.",
        },
        {
          title: "Flawless Shift Handoff Protocols",
          desc: "Standardized shift documentation and verbal transitions ensure that every detail—from appetite to nighttime bathroom trips—is accurately communicated.",
        },
        {
          title: "Scalable as Recovery Progresses",
          desc: "Start with 24-hour care after a hospital discharge and scale down to 12-hour or daytime visits as strength returns, with no rigid long-term contract penalties.",
        },
      ]}
      approach={[
        "When an aging loved one requires around-the-clock attention due to advanced dementia, severe fall risks, post-surgical recovery, or acute physical frailty, family caregivers often find themselves pushed past the point of physical exhaustion. Attempting to manage nighttime wakefulness alongside daytime caregiving is unsustainable and dangerous for both the senior and the family. At Archangels Personal Care LLC, our 24-Hour Home Care service provides a complete, professional care solution that keeps seniors safe and comfortable in their own homes 24 hours a day, 365 days a year.",
        "The defining advantage of our 24-hour care model is our awake, shift-based structure. Rather than relying on a single 'live-in' caregiver who must sleep at night, our 24-hour care is delivered by a coordinated rotation of caregivers working structured shifts—typically two 12-hour shifts or three 8-hour shifts. This ensures that the caregiver in your home is always rested, mentally alert, and actively monitoring your loved one's safety, whether it is 2:00 PM on a Tuesday or 3:00 AM on a Sunday.",
        "Continuity of care is paramount when establishing around-the-clock support. We recognize that having unfamiliar strangers rotating through the house creates anxiety, especially for seniors with cognitive decline. We carefully assemble a small, dedicated core team of 3 to 5 Certified Nursing Assistants (CNAs) and Personal Care Aides (PCAs) who are specifically assigned to your family. Over days and weeks, these caregivers build deep rapport, learn your loved one's subtle non-verbal cues, and understand their unique daily preferences.",
        "A seamless handoff protocol connects every shift. At each transition, the outgoing caregiver briefs the incoming caregiver on the client's mood, meals consumed, hydration, medication reminders, personal hygiene completed, and any physical or behavioral changes observed. Every shift maintains detailed care logs that document vital daily metrics. This rigorous communication ensures that no detail slips through the cracks between day and night.",
        "Under the leadership of our Registered Nurse, 24-hour care plans receive continuous clinical oversight in full compliance with Virginia Department of Health regulations. The RN analyzes shift documentation daily, looking for subtle patterns such as increased nighttime restlessness, reduced fluid intake, or changes in transfer stability. The RN conducts regular in-person supervisory visits, audits caregiver performance across different shift windows, and serves as the primary liaison to family members and treating physicians.",
        "Our 24-hour care plans are designed to be flexible and adaptive. Many clients begin 24-hour care following a major orthopedic surgery, stroke, or prolonged hospitalization. As rehabilitation therapies progress and physical independence is regained, our RN reassesses the client and collaborates with the family to gradually step down coverage to 12-hour day shifts or morning/evening visits. Conversely, for progressive conditions, our team provides the reliable long-term safety net families need to keep their loved ones comfortably at home for life.",
      ]}
      faqs={[
        {
          q: "What is the difference between 24-Hour Care and Live-In Care?",
          a: "24-Hour Care utilizes rotating shifts of awake caregivers (such as two 12-hour or three 8-hour shifts) so that an alert caregiver is actively monitoring the client at all times, including through the night. Live-In Care involves a single caregiver who resides in the home and requires a private bedroom and 8 hours of uninterrupted sleep each night. 24-Hour Care is recommended for clients with high overnight care needs, frequent nighttime waking, or severe wandering risks.",
        },
        {
          q: "Does the overnight caregiver stay awake all night?",
          a: "Yes. In our 24-Hour Care model, the overnight caregiver is an awake shift worker whose sole responsibility is to remain attentive, conduct quiet regular safety checks, assist with midnight toileting, and respond immediately if the client wakes or calls for help.",
        },
        {
          q: "How many different caregivers will be assigned to my loved one's 24-hour team?",
          a: "We intentionally build a small, consistent team of 3 to 5 primary caregivers who rotate across the weekly schedule. This maintains high continuity and familiarity while preventing caregiver fatigue and ensuring reliable coverage for sick days and holidays.",
        },
        {
          q: "How quickly can 24-hour care be arranged for an unexpected hospital discharge?",
          a: "We specialize in rapid-response transitions. In many cases, we can complete an RN assessment and mobilize a 24-hour care team within 24 to 48 hours of your call—often coordinating directly with hospital discharge planners to have caregivers ready the moment your loved one arrives home.",
        },
        {
          q: "How do caregivers communicate information between shifts?",
          a: "Our caregivers participate in a verbal shift handoff and maintain standardized written care logs documenting personal hygiene, meals, hydration, mobility, and medication reminders. The supervising RN reviews these logs regularly to maintain total clinical alignment.",
        },
        {
          q: "Can we start with 24-hour care and reduce hours as my loved one recovers?",
          a: "Absolutely. Our care plans are completely flexible. Many clients require 24-hour care during the first two to four weeks post-surgery and then step down to 8 or 12 hours of daytime care as strength improves, with no cancellation fees or contract penalties.",
        },
        {
          q: "Can 24-hour care support a loved one receiving hospice care at home?",
          a: "Yes. We frequently provide 24-hour non-skilled comfort care and continuous presence alongside licensed hospice teams. Our caregivers manage around-the-clock personal hygiene, gentle repositioning, and companionship, allowing family members to focus on being loving family during final days.",
        },
        {
          q: "What tasks are included in overnight 24-hour care?",
          a: "Overnight tasks include assisting with bedtime routines, preparing the client for sleep, repositioning in bed to prevent pressure points, providing immediate physical support for bathroom trips or commode use, managing incontinence care, monitoring breathing and comfort, and preparing breakfast when morning arrives.",
        },
        {
          q: "Is 24-hour care covered by Medicare or standard health insurance?",
          a: "Non-skilled 24-hour home care is typically paid privately or through Long-Term Care Insurance (LTCI) policies and VA Aid & Attendance benefits. Medicare generally does not cover continuous non-skilled custodial home care. We provide itemized documentation to assist with LTCI claims.",
        },
        {
          q: "How does the Registered Nurse oversee a 24-hour care case?",
          a: "Our RN conducts the initial in-home assessment, writes the comprehensive 24-hour Plan of Care, trains the assigned caregiver team, performs regular in-person supervisory visits during various shift times, audits daily shift logs, and communicates regularly with family and physicians.",
        },
      ]}
      related={[
        { slug: "personal-care", label: "Personal Care Services" },
        { slug: "live-in-care", label: "Live-In Care" },
        { slug: "memory-care", label: "Alzheimer's & Memory Care" },
        { slug: "rn-supervision", label: "RN Supervision & Oversight" },
        { slug: "transition-care", label: "Transition to Home Care" },
        { slug: "end-of-life-care", label: "End-of-Life Comfort Care" },
      ]}
    />
  );
}
