import type { Metadata } from "next";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "End-of-Life Comfort Care Richmond VA | Archangels Personal Care",
  description:
    "Compassionate, non-medical end-of-life comfort and companion care in Richmond, Mechanicsville & Hanover County. Attentive bedside support, gentle personal care, and family respite working alongside your hospice team. Call 804-903-8133.",
  alternates: {
    canonical: "https://www.archangelspersonalcare.com/services/end-of-life-care",
  },
  openGraph: {
    title: "End-of-Life Comfort Care Richmond VA | Archangels Personal Care",
    description:
      "Compassionate, non-medical end-of-life comfort and companion care in Richmond, Mechanicsville & Hanover County, working alongside your hospice team.",
    url: "https://www.archangelspersonalcare.com/services/end-of-life-care",
    siteName: "Archangels Personal Care",
    type: "website",
  },
};

export default function EndOfLifeCarePage() {
  return (
    <ServiceDetailLayout
      slug="end-of-life-care"
      eyebrow="End-of-Life Comfort Care"
      title="End-of-Life Comfort Care in Richmond, VA"
      intro="Compassionate, non-medical comfort support and bedside presence for clients and families navigating the final stages of life — working in seamless harmony alongside your licensed hospice team to ensure serenity, dignity, and warmth in the comfort of home."
      heroImg="https://www.archangelspersonalcare.com/images/quality-of-life.jpg"
      heroAlt="Compassionate caregiver offering peaceful, comfort-focused bedside presence to an older adult"
      whoFor={[
        "Families with a loved one enrolled in hospice care who need continuous non-medical bedside presence between intermittent hospice nurse visits",
        "Aging adults in the advanced stages of a terminal illness who wish to spend their final days surrounded by peace, dignity, and family at home",
        "Family members experiencing profound emotional grief, physical exhaustion, and sleeplessness from trying to manage 24/7 caregiving alone",
        "Individuals who require gentle, comfort-focused personal care, gentle repositioning in bed, and dedicated skin care to maintain comfort",
        "Family members living out of town who need reassurance that a compassionate, attentive caregiver is sitting bedside with their loved one",
        "Households seeking calm, experienced non-skilled support to assist with household upkeep, meal preparation, and family emotional respite",
      ]}
      signs={[
        "Hospice nurse visits occurring for only an hour or two several times a week, leaving long hours where the family is alone and overwhelmed",
        "Family members feeling physically and emotionally depleted from waking up throughout the night to adjust pillows, sheets, and comfort",
        "A loved one experiencing increasing weakness, spending most of the day resting in bed, and requiring gentle hands-on assistance for repositioning",
        "Difficulty for family members to balance practical care tasks—like laundry, dishes, and personal hygiene—with being emotionally present",
        "A sudden decline in a loved one's condition, creating an immediate need for continuous daytime, overnight, or 24-hour bedside care",
        "Family caregivers feeling anxious or fearful about being alone in the room during periods of irregular breathing or physical transitions",
      ]}
      included={[
        "Gentle, dignity-centered personal hygiene, bed sponge baths, oral mouth moisture care, and skin hydration",
        "Calm, soothing bedside presence, active listening, reading aloud, and playing comforting music or spiritual readings",
        "Frequent, gentle repositioning in bed using soft pillows and draw sheets to relieve pressure points and maximize physical comfort",
        "Collaborative communication and non-skilled coordination alongside your licensed hospice nurses and social workers",
        "Essential respite care for exhausted family members, allowing loved ones to sleep, rest, and process emotional grief",
        "Light household upkeep, washing linens, sanitizing bedside areas, tidying the kitchen, and preparing nourishing snacks for family visitors",
        "Monitoring and maintaining a serene, peaceful room environment with soft lighting, optimal room temperature, and quiet surroundings",
        "Timely non-skilled medication reminders aligned with the hospice nurse's pre-measured schedules and symptom plans",
        "Flexible scheduling, offering daytime blocks, awake overnight bedside vigilance, or continuous 24-hour shift coverage",
        "Comprehensive Registered Nurse oversight, providing clinical coordination and compassionate family support throughout",
      ]}
      note="Regulatory Scope & Hospice Collaboration: Archangels Personal Care LLC is a licensed Home Care Organization providing non-medical personal care, comfort assistance, and companionship. We do not provide skilled hospice nursing, physician medical services, intravenous pain management, or curative treatments. Our services work in close harmony alongside your chosen licensed hospice provider."
      scenario={{
        title: "A Peaceful Evening of Dedicated Bedside Comfort",
        text: "At 6:00 PM, an Archangels caregiver arrives at a home in Richmond where a client is resting comfortably in a hospital bed in the sunroom. The client's hospice nurse visited earlier in the afternoon, leaving instructions for rest. The caregiver gently greets the exhausted daughter, encouraging her to go upstairs for a full night of uninterrupted sleep while she takes over bedside care. Over the evening, the caregiver maintains a serene atmosphere: dimming the overhead lights, playing soft instrumental music, and using gentle oral swabs with cool water to keep the client's lips and mouth moisturized. Every two hours, she gently repositions the client's pillows to ease pressure and smooths the bedsheets. When the client awakens briefly, the caregiver holds her hand and speaks with a calm, reassuring voice. By morning, the daughter returns downstairs rested and at peace, finding her mother serene, clean, and comfortable.",
      }}
      steps={[
        {
          title: "Compassionate Intake Conversation",
          desc: "Call 804-903-8133 to speak directly with our care leadership. We listen with deep empathy to your family's situation, hospice timeline, and immediate comfort needs.",
        },
        {
          title: "In-Home RN Coordination & Assessment",
          desc: "Our Registered Nurse meets with the family and reviews the existing hospice care plan, designing a non-skilled comfort plan that complements your hospice nurse's schedule.",
        },
        {
          title: "Matching an Empathetic, Gentle Caregiver",
          desc: "We hand-select a caregiver with specialized experience in end-of-life comfort, emotional maturity, and a calm, soothing presence.",
        },
        {
          title: "Care Begins Rapidly Around Hospice Shifts",
          desc: "Care begins on your desired schedule—daytime, overnight, or 24/7—filling the long gaps between hospice visits with attentive, dignified care.",
        },
        {
          title: "Continuous Adaptation & Family Support",
          desc: "As your loved one's condition shifts, our RN stays in close contact, adjusting coverage hours and bedside protocols to maintain maximum comfort and peace.",
        },
      ]}
      benefits={[
        {
          title: "Fills the Critical Gaps in Hospice Coverage",
          desc: "Hospice visits are intermittent; our caregivers provide the continuous bedside presence and hands-on help needed between hospice visits.",
        },
        {
          title: "Allowing Families to Be Family Again",
          desc: "By taking on the physical burden of personal hygiene, repositioning, and laundry, we allow you to focus entirely on loving and being present with your family member.",
        },
        {
          title: "Caregivers Chosen for Quiet Serenity",
          desc: "Our end-of-life caregivers are selected for their gentle temperaments, emotional maturity, and ability to create a peaceful, dignified atmosphere.",
        },
        {
          title: "Rapid Deployment for Urgent Situations",
          desc: "We recognize that end-of-life timelines can accelerate quickly; we can often arrange comfort care within 24 hours of your initial inquiry.",
        },
      ]}
      approach={[
        "The final chapter of a person's life is a sacred, deeply emotional time. When a loved one reaches the stage of advanced illness where curative treatments have ceased and comfort is the sole priority, the home should be a sanctuary of peace, dignity, and love. However, the physical reality of managing continuous bedside care—frequent turning, bed sponge bathing, mouth care, and sleepless nights—often leaves family members physically exhausted and emotionally overwhelmed. At Archangels Personal Care LLC, our End-of-Life Comfort Care service is designed to lift the physical burden of caregiving so families can focus on what matters most: spending precious, meaningful moments together.",
        "A critical distinction for families to understand is the difference between hospice care and non-medical home care. Hospice care is a specialized medical benefit, typically covered by Medicare, where a team of clinical professionals (hospice registered nurses, physicians, social workers, and chaplains) visits the home periodically—often for 45 to 60 minutes a few times per week—to manage medical symptoms, adjust prescriptions, and provide clinical oversight. However, hospice does not provide continuous daily caregiving. Archangels works in close partnership alongside your chosen hospice provider, filling the long hours between hospice visits with attentive, hands-on personal care, gentle hygiene, and continuous bedside vigilance.",
        "Our non-skilled comfort care focuses entirely on preserving physical ease and emotional serenity. Our caregivers provide gentle bed sponge baths that refresh the client without causing exertion; apply hydrating skin lotions; provide frequent mouth care using moist oral swabs to prevent dry lips; gently reposition pillows and limbs to relieve pressure points; and keep bed linens immaculately clean and smooth. Caregivers also tend to the sensory environment: keeping room lighting soft, managing noise levels, playing favorite music, reading beloved scriptures or poetry, or simply sitting in quiet, comforting companionship.",
        "Caregiver matching is approached with exceptional sensitivity for end-of-life care. We assign Certified Nursing Assistants (CNAs) and Personal Care Aides (PCAs) who possess emotional maturity, a naturally calm demeanor, and specific experience supporting families through bereavement. These caregivers understand how to be quietly attentive without being intrusive, knowing when to step forward with a gentle touch and when to step back to give the family private, sacred moments together.",
        "Under the supervision of our Virginia-licensed Registered Nurse, our care plans are synchronized with your hospice nurse's clinical orders. Our RN communicates directly with family representatives and coordinates with the hospice team regarding non-clinical observations such as changes in breathing patterns, skin color, or comfort levels. Our RN also ensures that medication reminder protocols strictly follow the hospice team's pre-packaged schedules.",
        "End-of-life care needs often evolve rapidly from day to day. A family that initially requested four hours of daytime respite may suddenly realize that awake overnight supervision or 24/7 continuous coverage is needed as a loved one's strength declines. Our flexible care coordination model allows us to scale coverage up smoothly without administrative delays or rigid contract lock-ins, providing your family with a steady, compassionate safety net until the very end.",
      ]}
      faqs={[
        {
          q: "What is the difference between hospice care and Archangels End-of-Life Comfort Care?",
          a: "Hospice care is a specialized medical service provided by a licensed hospice agency that includes clinical nursing visits, physician oversight, prescription pain medications, and medical equipment. Archangels provides non-medical personal care, bedside companionship, gentle repositioning, hygiene assistance, and family respite that fills the long hours between scheduled hospice nurse visits. We coordinate together to support the patient and family.",
        },
        {
          q: "Can Archangels provide care if my loved one is not enrolled in hospice?",
          a: "Yes. While many of our clients in this service are enrolled with a hospice agency, enrollment is not required. We provide comfort-focused personal care, gentle hygiene, and companionship for any individual in the advanced stages of an illness who prioritizes comfort and dignity at home.",
        },
        {
          q: "How quickly can end-of-life comfort care begin?",
          a: "We recognize that comfort care needs can arise suddenly. In most cases across Richmond, Mechanicsville, and Hanover County, our RN can complete an in-home assessment and place a compassionate caregiver within 24 hours of your initial call, and often same-day for urgent end-of-life situations.",
        },
        {
          q: "Can you provide 24-hour around-the-clock bedside care during a loved one's final days?",
          a: "Yes. We frequently provide continuous 24-hour coverage utilizing coordinated shifts of awake, alert caregivers so that your loved one has gentle, attentive bedside presence at all times of the day and night.",
        },
        {
          q: "How do your caregivers coordinate with our hospice nurses?",
          a: "Our caregivers follow the non-medical comfort plan established under RN oversight and respect the clinical guidelines set by your hospice team. Caregivers can relay non-clinical observations (such as changes in comfort or breathing rhythm) to the family, who can then update the hospice nurse during clinical check-ins.",
        },
        {
          q: "Can caregivers administer hospice pain medications or injections?",
          a: "Under Virginia non-skilled home care licensing regulations, our caregivers do not administer clinical injections, adjust IV lines, or administer liquid narcotic drops directly. Caregivers provide medication reminders according to pre-filled organizers or assist family members in keeping track of administration times directed by the hospice nurse.",
        },
        {
          q: "Is end-of-life comfort care covered by Medicare or hospice benefits?",
          a: "The Medicare Hospice Benefit covers the clinical hospice team, medical supplies, and medications related to the terminal illness, but it generally does not cover continuous non-skilled private-duty custodial care. Our comfort care is paid privately or through Long-Term Care Insurance policies.",
        },
        {
          q: "What specific comfort measures do caregivers perform for bed-bound clients?",
          a: "Comfort measures include gentle oral care using moist swabs, applying lip balm, gentle repositioning with pillows, smoothing bed linens, applying soothing skin lotion, adjusting room lighting and temperature, playing soft music, reading aloud, and holding hands in calming presence.",
        },
        {
          q: "How does this service support family members emotionally?",
          a: "By managing the physical care tasks, laundry, and room upkeep, our caregivers give family members the emotional freedom to rest, process grief, and focus entirely on being present, sharing memories, and expressing love without feeling like exhausted clinical staff.",
        },
        {
          q: "Can we adjust or cancel care on short notice if our loved one's condition changes?",
          a: "Yes. We understand the unpredictable nature of end-of-life care and treat every family with maximum flexibility and grace. You are never locked into rigid long-term contracts, and schedules can be adjusted immediately as your family's needs require.",
        },
      ]}
      related={[
        { slug: "respite-care", label: "Respite Care & Family Support" },
        { slug: "24-hour-care", label: "24-Hour Care" },
        { slug: "palliative-care", label: "Palliative Care Support" },
        { slug: "personal-care", label: "Personal Care Services" },
        { slug: "rn-supervision", label: "RN Supervision & Oversight" },
        { slug: "companionship", label: "Companionship & Social Engagement" },
      ]}
    />
  );
}
