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
      careLevels={[
        {
          badge: "Level 1: Daytime Comfort",
          title: "Daytime Bedside Comfort & Family Respite",
          subtitle: "Gentle hands-on hygiene, turning support, and family breathing room",
          description:
            "A dedicated caregiver visits for 4 to 8 hours during the day to take over physically demanding bedside tasks—sponge bathing, mouth hydration, pillow adjustments, and laundry—allowing family members to rest, eat, and spend peaceful time together.",
          items: [
            "Gentle seated or in-bed sponge bathing and refreshing personal hygiene",
            "Frequent oral mouth care with moist swabs and lip balm application",
            "Assisting with gentle turning and pillow positioning every 2 hours",
            "Tidying the bedside space, washing bed linens, and managing laundry",
            "Providing a calm, loving bedside presence while family steps away to rest",
          ],
        },
        {
          badge: "Level 2: Overnight Vigilance",
          title: "Overnight Bedside Presence & Restorative Sleep",
          subtitle: "Awake night caregiver ensuring unbroken comfort and reassurance",
          description:
            "An awake, compassionate caregiver remains at the bedside throughout the overnight hours (10:00 PM to 6:00 AM), monitoring comfort, soothing restlessness, adjusting covers, and handling all nocturnal hygiene so family members can sleep soundly.",
          items: [
            "Continuous awake bedside observation throughout the nocturnal hours",
            "Immediate response to restless movements, groans, or requests for water",
            "Gentle repositioning to relieve pressure points and optimize breathing",
            "Incontinence care and keeping bed linens immaculately clean and dry",
            "Quiet reassurance, soft lighting, and playing soothing devotional/calming music",
          ],
        },
        {
          badge: "Level 3: 24/7 Bedside Care",
          title: "Continuous 24-Hour Bedside Comfort Rotation",
          subtitle: "Around-the-clock awake shift coverage during final days",
          description:
            "When a loved one enters their final days, continuous 24-hour care ensures that an alert, compassionate caregiver is sitting bedside every minute. Caregivers rotate in fresh shifts, providing unwavering comfort and giving family unconditional support.",
          items: [
            "Seamless rotating shifts of rested caregivers present 24 hours a day",
            "Continuous non-verbal comfort: moist oral swabs, cool washcloths, hand holding",
            "Coordinating visit times with hospice nurses and chaplains",
            "Preparing light meals and coffee for visiting relatives and grandchildren",
            "Allowing family members to focus entirely on love, presence, and remembrance",
          ],
        },
      ]}
      careCategories={[
        {
          category: "Gentle Hygiene, Mouth Care & Skin Hydration",
          description:
            "Preserving physical comfort, preventing dry mouth, and maintaining refreshed skin without causing exertion.",
          tasks: [
            "Moistening lips and mouth frequently using moist oral swabs and balms",
            "Gentle bed sponge bathing with warm scented washcloths",
            "Applying soothing skin lotions and protective barrier creams",
            "Brushing hair gently and smoothing clothing for total dignity",
          ],
        },
        {
          category: "Supportive Positioning & Pressure Relief",
          description:
            "Ensuring physical ease and respiratory comfort through gentle body adjustments.",
          tasks: [
            "Gently turning and repositioning the client every two hours using draw sheets",
            "Propping upper body with soft pillows to ease labored breathing",
            "Supporting knees, heels, and arms with specialized foam cushions",
            "Smoothing sheets and eliminating wrinkles that cause skin irritation",
          ],
        },
        {
          category: "Serene Sensory Environment & Bedside Presence",
          description:
            "Creating a tranquil, peaceful room atmosphere that calms anxiety and fosters dignity.",
          tasks: [
            "Regulating room temperature, blankets, and gentle airflow",
            "Dimming bright overhead lights and using warm, ambient lamps",
            "Playing beloved hymns, classical music, or nature sounds",
            "Sitting quietly bedside, holding hands, or reading comforting passages aloud",
          ],
        },
        {
          category: "Hospice Coordination & Family Respite",
          description:
            "Working seamlessly alongside hospice professionals while supporting grieving family members.",
          tasks: [
            "Greeting hospice nurses and relaying non-clinical comfort observations",
            "Taking over all household chores, washing linens, and sanitizing bedside areas",
            "Preparing nourishing meals and beverages for visiting family members",
            "Allowing loved ones to step away to rest, shower, and process emotions",
          ],
        },
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
      differences={[
        {
          title: "Non-Medical Comfort Care vs. Hospice Medical Services",
          desc: "Hospice provides intermittent medical visits (1–2 hours a few times a week) for clinical symptom management, prescriptions, and physician oversight. Archangels provides continuous daily hands-on personal care, bed turning, hygiene, and bedside presence between hospice visits.",
        },
        {
          title: "In-Home Comfort Care vs. Inpatient Hospice Facilities",
          desc: "Inpatient hospice facilities require relocating your loved one to an institutional setting. In-home comfort care allows your loved one to spend their final days in the peace, dignity, and familiar surroundings of their own home.",
        },
        {
          title: "Professional Caregivers vs. Exhausted Family Nursing",
          desc: "Family members often become exhausted acting as full-time physical nurses. Our caregivers handle the heavy turning, bathing, and laundry so family members can simply be loving children, spouses, and grandchildren holding hands.",
        },
      ]}
      note="Archangels does not provide hospice, palliative, or skilled nursing services. This is non-medical comfort and companion care that works alongside a hospice or medical team already in place."
      scenario={{
        title: "A Quiet, Comforting Presence",
        text: "A caregiver arrives between two scheduled hospice visits, giving the family a chance to step outside for fresh air. She sits with her client, offers small comforts like adjusting a pillow or reading aloud from a favorite book, and keeps things calm and unhurried. When the hospice nurse calls to check in, the caregiver relays what she's observed that morning. By the time the family returns, their loved one is comfortable, and they've had a moment to breathe.",
      }}
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
