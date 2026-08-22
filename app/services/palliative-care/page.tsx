import type { Metadata } from "next";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Palliative Care Support Richmond VA | Archangels Personal Care",
  description:
    "Non-skilled comfort-focused care in Richmond, Mechanicsville & Hanover County for individuals managing serious chronic illness. Energy conservation, personal care & respite working alongside your physician-led palliative team. Call 804-903-8133.",
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
      intro="Comfort-focused, non-skilled home care supporting individuals living with serious, chronic illnesses — working in close coordination alongside your physician-led palliative medical team to relieve physical burdens, preserve energy, and enhance quality of life at home."
      heroImg="https://www.archangelspersonalcare.com/images/quality-of-life.jpg"
      heroAlt="Compassionate caregiver providing comfort-focused daily support to a senior managing chronic illness"
      whoFor={[
        "Individuals living with serious or progressive chronic illnesses—such as congestive heart failure (CHF), advanced COPD, cancer, renal disease, or ALS—who need daily home support",
        "Aging adults receiving active curative medical treatments (like chemotherapy, immunotherapy, or dialysis) who experience debilitating treatment fatigue and weakness",
        "Patients not currently enrolled in hospice who require consistent, comfort-oriented daily living assistance to remain safe and independent in their own homes",
        "Seniors managing multiple fluctuating symptoms—such as shortness of breath, chronic fatigue, nausea, or joint stiffness—that make basic self-care exhausting",
        "Family caregivers coordinating complex medical appointments, dietary restrictions, and daily routines who need dependable hands-on support",
        "Households across Richmond, Mechanicsville, and Hanover County seeking compassionate RN-supervised care that adapts as health conditions fluctuate",
      ]}
      signs={[
        "Severe physical exhaustion where taking a shower, getting dressed, or preparing a meal leaves your loved one fatigued for the rest of the day",
        "Managing multiple daily prescription medications, dietary guidelines, and symptom regimens that feel overwhelming to track without structured assistance",
        "Difficulty balancing active medical appointments and treatments with the basic physical demands of maintaining home safety and hygiene",
        "A noticeable decline in nutritional intake, appetite loss, or weight reduction because cooking and eating require too much physical exertion",
        "Family members feeling physically depleted and emotionally stressed from trying to provide continuous daily care alongside their own jobs and families",
        "Gaps of several days or weeks between outpatient medical visits where no healthcare professional is observing your loved one's day-to-day functional status",
      ]}
      included={[
        "Gentle, energy-conserving assistance with bathing, showering, sponge baths, dressing, and personal grooming",
        "Mobility support, safe transfer assistance, and fall prevention tailored to fluctuating daily energy levels",
        "Carefully timed non-skilled medication reminders aligned with your palliative physician's symptom management schedule",
        "Preparation of small, appealing, nutrient-dense meals and soothing beverages suited to reduced appetites or nausea",
        "Comfort positioning in bed or recliners using supportive pillows to ease breathing and relieve joint pressure",
        "Emotional companionship, active listening, and a calm, reassuring presence that reduces stress and anxiety",
        "Accompaniment and safe transportation coordination for outpatient oncology, cardiology, or palliative clinic visits",
        "Light household cleaning, client laundry, bed linen changes, and maintaining a peaceful, clutter-free home atmosphere",
        "Vital respite care for primary family caregivers, providing predictable relief to recharge and protect personal health",
        "Comprehensive Registered Nurse oversight, ongoing care coordination, and communication of observational logs to physicians",
      ]}
      note="Regulatory Scope & Medical Palliative Demarcation: Archangels Personal Care LLC provides non-skilled personal care, energy-conservation support, and companionship under Virginia Department of Health regulations. We do not provide clinical palliative medical care, physician diagnostics, prescription symptom management, or skilled nursing interventions. Our services operate in close collaboration alongside your physician-led palliative care team."
      scenario={{
        title: "Conserving Energy and Finding Comfort on Treatment Days",
        text: "A caregiver arrives at 9:00 AM at the home of a client undergoing outpatient chemotherapy for lung cancer in Hanover County. Understanding that post-treatment days bring severe fatigue and nausea, the caregiver focuses entirely on comfort and energy conservation. She prepares a warm, seated sponge bath with lavender-scented towels, allowing the client to feel refreshed without expending energy standing in the shower. She prepares small sips of ginger tea and a light bowl of chicken broth, offering pre-filled medication reminders on the schedule established by the palliative oncologist. In the afternoon, she props the client up with extra pillows in her favorite armchair to optimize breathing, reads chapters from a historical biography, and quietly handles the laundry and kitchen cleanup. When the client's husband returns home from work, he finds his wife comfortable, well-nourished, and resting peacefully.",
      }}
      steps={[
        {
          title: "Palliative Support Intake Conversation",
          desc: "Call 804-903-8133 to discuss your loved one's medical diagnosis, current treatment regimen, energy patterns, and specific daily living challenges.",
        },
        {
          title: "In-Home RN Assessment & Clinical Review",
          desc: "Our Registered Nurse meets with your family to evaluate physical stamina, mobility, dietary considerations, and design a non-skilled comfort Plan of Care.",
        },
        {
          title: "Matching an Attentive, Gentle Caregiver",
          desc: "We pair your loved one with a CNA or PCA chosen for their patient demeanor, understanding of chronic illness fatigue, and comfort-focused care skills.",
        },
        {
          title: "Implementing Comfort & Energy Routines",
          desc: "Care begins on a schedule that complements your medical appointments, focusing on gentle hygiene, soothing nutrition, and energy conservation.",
        },
        {
          title: "Ongoing RN Monitoring & Adaptive Scaling",
          desc: "Our RN regularly reviews care documentation, communicates with your family, and seamlessly adjusts support levels as symptoms and energy levels fluctuate.",
        },
      ]}
      benefits={[
        {
          title: "Fills the Days Between Clinical Visits",
          desc: "While palliative doctors provide medical guidance, our caregivers provide the daily hands-on comfort, meals, and hygiene that make living at home possible.",
        },
        {
          title: "Mastery in Energy Conservation Techniques",
          desc: "We help clients pace daily activities, assisting with physically demanding tasks so they preserve precious energy for moments that bring them joy.",
        },
        {
          title: "Aligned with Your Treating Physicians",
          desc: "Our RN ensures that non-skilled home routines strictly align with the dietary, mobility, and medication guidance ordered by your medical team.",
        },
        {
          title: "Seamless Support Across All Illness Stages",
          desc: "Whether your loved one is pursuing curative therapies or eventually chooses hospice care, our care team provides consistent, unbroken support.",
        },
      ]}
      approach={[
        "Living with a serious, long-term illness—such as advanced congestive heart failure, chronic obstructive pulmonary disease (COPD), cancer, or kidney disease—is physically demanding and emotionally exhausting. While medical doctors focus on managing disease progression, the daily reality of living at home often becomes overwhelming: basic tasks like standing in the shower, preparing meals, or walking to the mailbox can drain a person's entire reserve of energy. At Archangels Personal Care LLC, our Palliative Care Support is designed to relieve physical strain, conserve vital energy, and bring profound comfort and dignity into the daily home environment.",
        "It is essential for families to understand the distinct difference between palliative care and hospice care. Hospice care is reserved specifically for the final six months of life when curative medical treatments have ceased. In contrast, palliative care is appropriate at any stage of a serious illness—even from the day of initial diagnosis—and can be provided alongside active curative treatments such as chemotherapy, radiation, cardiac therapies, or dialysis. Archangels provides the non-skilled, hands-on daily support that bridges the gap between clinic visits and daily life at home.",
        "Our caregiving methodology emphasizes energy conservation. Our Certified Nursing Assistants (CNAs) and Personal Care Aides (PCAs) are trained to help clients pace their daily activities to avoid sudden exhaustion. We assist with morning hygiene, bathing, and dressing so clients do not deplete their physical stamina before the day begins. We prepare small, appealing, nutrient-rich meals and smoothies suited to clients experiencing reduced appetite or treatment-related nausea, ensuring optimal hydration and nourishment without overwhelming the digestive system.",
        "Comfort positioning and sensory care are vital aspects of palliative support. For clients managing shortness of breath or edema from congestive heart failure or COPD, our caregivers utilize positioning techniques with supportive pillows to optimize respiratory comfort and elevate limbs. Caregivers also maintain a serene, stress-free atmosphere in the home: managing room lighting, regulating temperature, providing gentle hand lotion rubs, playing relaxing music, and offering a calm, empathetic presence that eases emotional anxiety.",
        "Under the supervision of our Virginia-licensed Registered Nurse, our palliative care plans are coordinated in harmony with your outpatient medical team. Our RN conducts comprehensive in-home assessments, reviews daily shift logs, and monitors non-clinical functional trends. With family consent, our RN can share structured observational reports with treating oncologists, cardiologists, pulmonologists, or palliative care physicians, providing valuable context on how the patient is tolerating treatment at home between clinic appointments.",
        "Caring for a loved one with a serious illness places immense physical and emotional stress on spouses and adult children. Our palliative support provides primary family caregivers with essential respite care. Whether you need a few hours during the day to run errands and rest, or assistance managing the heavy physical tasks of daily transfers and hygiene, our dedicated team gives your family the breathing room needed to sustain long-term strength and emotional wellness.",
      ]}
      faqs={[
        {
          q: "What is the difference between Palliative Care Support and End-of-Life Hospice Care?",
          a: "Palliative Care Support is for individuals living with a serious or chronic illness at any stage, often while still receiving curative medical treatments like chemotherapy or cardiac therapies. End-of-Life Care is specifically designed for individuals in the final terminal stages of life who have elected hospice care and are prioritizing comfort exclusively. Archangels provides non-skilled daily support for both stages.",
        },
        {
          q: "Do you provide medical palliative treatment, pain management, or symptom diagnostics?",
          a: "No. Clinical palliative medical care—such as prescribing pain medications, managing clinical infusions, or clinical symptom diagnostics—is provided by your licensed palliative physician or medical practice. Archangels provides non-skilled personal care, mobility assistance, meal preparation, medication reminders, and comfort measures that support the medical plan.",
        },
        {
          q: "Can this service coordinate with our oncologist, cardiologist, or palliative doctor?",
          a: "Yes. With your permission, our supervising Registered Nurse can communicate with your treating medical specialists, sharing observational logs regarding functional mobility, appetite, hydration, and fatigue trends between clinic visits.",
        },
        {
          q: "How do caregivers help clients conserve physical energy during treatment?",
          a: "Caregivers take over physically demanding tasks such as standing in the shower, bending for laundry, cooking, and housecleaning. By providing hands-on assistance with personal hygiene and mobility, we allow the client to preserve their energy for recovery and quality time with family.",
        },
        {
          q: "Can caregivers assist with specialized diets for congestive heart failure or renal illness?",
          a: "Yes. Our caregivers prepare meals according to dietary guidelines established by your medical team, such as low-sodium diets for heart failure, diabetic meal planning, or soft-texture foods for clients with swallowing fatigue.",
        },
        {
          q: "What if our loved one's illness progresses and we transition to hospice care later?",
          a: "Because Archangels provides comprehensive home care across the continuum of care, we can seamlessly transition your loved one's plan from palliative support to our End-of-Life Comfort Care service, maintaining the same familiar caregivers on the case.",
        },
        {
          q: "Can caregivers provide transportation to outpatient infusion or dialysis appointments?",
          a: "Yes. Caregivers provide safe door-to-door transportation, wheelchair transfer assistance, and physical accompaniment to outpatient chemotherapy infusions, radiation appointments, dialysis centers, and doctor visits.",
        },
        {
          q: "How flexible is scheduling for palliative care support?",
          a: "Scheduling is completely flexible. Many families schedule visits around treatment days (such as the 48 hours following chemotherapy) or establish recurring 4 to 8-hour daytime shifts. You can adjust the schedule as treatment cycles change without long-term contract penalties.",
        },
        {
          q: "Can caregivers remind clients to take their palliative symptom medications?",
          a: "Yes. Caregivers provide timely medication reminders according to pre-filled pill organizers and scheduled symptom plans established by your medical team, logging each reminder in the daily care documentation.",
        },
        {
          q: "How does palliative care support benefit family caregivers?",
          a: "Family caregivers often become exhausted from balancing treatment appointments, meal preparation, personal hygiene, and emotional strain. Our service provides reliable respite and physical relief, allowing family members to rest and focus on loving support rather than physical exhaustion.",
        },
      ]}
      related={[
        { slug: "end-of-life-care", label: "End-of-Life Comfort Care" },
        { slug: "personal-care", label: "Personal Care Services" },
        { slug: "rn-supervision", label: "RN Supervision & Oversight" },
        { slug: "respite-care", label: "Respite Care & Family Support" },
        { slug: "24-hour-care", label: "24-Hour Care" },
        { slug: "transition-care", label: "Transition to Home Care" },
      ]}
    />
  );
}
