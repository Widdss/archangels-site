import type { Metadata } from "next";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Palliative Care Support Richmond VA | Archangels Personal Care",
  description:
    "Compassionate, non-medical in-home palliative care support in Richmond, Mechanicsville & Hanover County. Energy conservation, gentle personal care & daily living assistance alongside medical treatments. Call 804-903-8133.",
  alternates: {
    canonical: "https://www.archangelspersonalcare.com/services/palliative-care",
  },
  openGraph: {
    title: "Palliative Care Support Richmond VA | Archangels Personal Care",
    description:
      "Compassionate, non-medical in-home palliative care support in Richmond, Mechanicsville & Hanover County, helping clients and families manage daily living during serious illness.",
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
      intro="Compassionate, non-medical daily living support, energy conservation assistance, and family relief for individuals living with serious, chronic, or complex illnesses — delivered under Registered Nurse supervision to enhance comfort and quality of life alongside ongoing medical treatments."
      heroImg="/images/quality-of-life.jpg"
      heroAlt="Compassionate caregiver offering comfort-focused daily living support to a senior"
      whoFor={[
        "Individuals actively receiving curative or life-prolonging treatments for serious illnesses (such as cancer chemotherapy, congestive heart failure, COPD, or kidney disease) who need daily living support at home",
        "Aging adults experiencing chronic fatigue, weakness, nausea, or shortness of breath that makes bathing, cooking, or household chores exhausting",
        "Seniors who want to remain in the comfort of home while managing complex chronic conditions under the guidance of their medical specialists",
        "Family members balancing demanding work schedules while trying to provide round-the-clock physical assistance and transportation to infusion clinics",
        "Individuals who require gentle personal hygiene, energy-conserving mobility techniques, and comfortable positioning throughout the day",
        "Households seeking dependable, RN-supervised non-medical support that works in seamless harmony alongside their specialty physicians and clinical teams",
      ]}
      signs={[
        "Severe physical exhaustion following outpatient treatments (such as chemotherapy, radiation, or dialysis) leaving the client unable to prepare meals or bathe",
        "Shortness of breath or rapid fatigue during minor physical exertion, such as walking from the bedroom to the kitchen or standing in the shower",
        "Unintentional weight loss, nausea, or reduced appetite because preparing nutritious food feels physically and mentally overwhelming",
        "Missed medication doses, confusion over complex prescription schedules, or difficulty opening medicine bottles due to weakness or neuropathy",
        "Family caregivers feeling chronically anxious, physically strained, and emotionally drained from managing caregiving duties without outside relief",
        "Frequent visits to the emergency room for preventable issues like dehydration, medication confusion, or balance falls at home",
      ]}
      careLevels={[
        {
          badge: "Level 1: Treatment-Day Support",
          title: "Intermittent Treatment & Infusion Day Support",
          subtitle: "Targeted care during chemotherapy, radiation, or dialysis days",
          description:
            "Designed for individuals undergoing active outpatient therapies who need transportation escort, settling-in care, and gentle support during post-treatment fatigue and nausea peaks.",
          items: [
            "Door-to-door transportation and physical accompaniment to oncology or infusion clinics",
            "Assisting with comfortable settling into bed or a recliner upon returning home",
            "Preparing light, stomach-soothing broths, crackers, smoothies, and ginger teas",
            "Providing a quiet, restful home environment with dimmed lights and soft blankets",
            "Managing household laundry, kitchen cleanup, and pharmacy prescription pickups",
          ],
        },
        {
          badge: "Level 2: Chronic Illness Support",
          title: "Daily Chronic Illness Living & Energy Conservation",
          subtitle: "Daily assistance for Congestive Heart Failure, COPD, and renal disease",
          description:
            "For individuals managing chronic conditions with daily symptoms of breathlessness, weakness, or joint pain. Caregivers pace daily living activities, assist with seated bathing, prepare sodium-controlled meals, and track daily wellness metrics.",
          items: [
            "Assisting with seated shower bathing, gentle grooming, and dressing with minimal exertion",
            "Pacing movements to prevent shortness of breath during transfers and walking",
            "Cooking fresh, heart-healthy or renal-friendly meals aligned with dietary guidelines",
            "Prompting scheduled medications according to pre-filled organizers",
            "Documenting daily fluid intake and energy levels for the supervising RN",
          ],
        },
        {
          badge: "Level 3: Advanced Symptom Care",
          title: "Comprehensive Advanced Illness Care & Family Respite",
          subtitle: "Intensive daily or 24/7 personal care and comfort positioning",
          description:
            "Designed for individuals in advanced stages of chronic illness who require extensive hands-on assistance, frequent bed repositioning, total hygiene, and continuous presence, alongside vital respite relief for exhausted family members.",
          items: [
            "Complete hands-on bed sponge baths, gentle skin hydration, and pressure relief",
            "Scheduled body repositioning with supportive pillows to ease breathing",
            "Continuous 24-Hour awake shift coverage for total nighttime and daytime safety",
            "Dedicated family respite allowing loved ones to rest, work, and recharge",
            "Close coordination alongside palliative clinical specialists and physicians",
          ],
        },
      ]}
      careCategories={[
        {
          category: "Energy Conservation & Pacing Techniques",
          description:
            "Helping clients accomplish daily living tasks without triggering severe fatigue or breathlessness.",
          tasks: [
            "Utilizing seated shower benches, grab bars, and terrycloth bathrobes to eliminate standing strain",
            "Breaking morning routines into manageable, restful stages with sitting breaks",
            "Organizing frequently used household items within easy arm's reach",
            "Steadying mobility with walkers and wheelchairs for longer household distances",
          ],
        },
        {
          category: "Gentle Personal Care & Dignified Hygiene",
          description:
            "Delivering refreshing personal cleanliness with deep respect, patience, and warmth.",
          tasks: [
            "Warm seated showers, tub baths, or relaxing bed sponge baths",
            "Gentle hair washing, skin moisturizing, and non-blade facial shaving",
            "Discreet toileting support, commode assistance, and incontinence management",
            "Dressing in comfortable, loose-fitting garments that protect sensitive skin",
          ],
        },
        {
          category: "Symptom-Friendly Nutrition & Hydration",
          description:
            "Preparing appealing, easy-to-digest meals tailored to nausea, altered taste, or dietary limits.",
          tasks: [
            "Cooking small, frequent, nutrient-dense meals and soothing soups",
            "Accommodating physician dietary restrictions (low-sodium, diabetic, pureed, renal)",
            "Providing constant hydration reminders with cool water, juices, and electrolyte drinks",
            "Cleaning up kitchen surfaces, washing dishes, and keeping refrigerators fresh",
          ],
        },
        {
          category: "Medication Reminders & Routine Structure",
          description:
            "Ensuring rigorous adherence to complex multi-medication physician regimens.",
          tasks: [
            "Prompting scheduled prescription doses from pre-filled organizers on time",
            "Offering fresh water and assisting with opening medication containers",
            "Logging medication compliance in the daily shift care record",
            "Alerting the family and supervising RN when pill organizers require refilling",
          ],
        },
        {
          category: "Observational Logging & Physician Liaison",
          description:
            "Providing objective daily wellness documentation that keeps medical teams informed.",
          tasks: [
            "Tracking daily appetite, hydration amounts, energy levels, and sleep quality",
            "Documenting mobility stability, transfer confidence, and any near-misses",
            "Sharing structured observational summaries with treating oncologists or cardiologists",
            "Keeping family members informed with transparent daily updates",
          ],
        },
      ]}
      included={[
        "Gentle, comfort-focused personal care assistance with bathing, showering, dressing, and grooming",
        "Energy conservation strategies, activity pacing, and mobility assistance designed to minimize physical exertion",
        "Preparation of small, nutritious, easy-to-digest meals tailored to appetite changes and dietary restrictions",
        "Timely medication reminders according to pre-filled organizers and hydration tracking",
        "Comfortable positioning in bed or recliners using supportive pillows to ease breathing and relieve pressure",
        "Accompaniment and safe transportation to oncology visits, infusion treatments, and medical specialist appointments",
        "Light housekeeping, client laundry, bed linen changes, and keeping living spaces clean and serene",
        "Meaningful companionship, active listening, and calm emotional presence during challenging days",
        "Essential respite care for family caregivers to prevent physical exhaustion and emotional burnout",
        "Comprehensive Registered Nurse oversight, in-home safety evaluations, and communication with family",
      ]}
      differences={[
        {
          title: "Palliative Support vs. Hospice Care",
          desc: "Palliative care can begin at ANY stage of a serious illness and is provided ALONGSIDE active curative treatments (like chemotherapy or surgery). Hospice care is specifically for the final six months of life when curative medical treatments have ceased. Archangels provides non-medical support for both.",
        },
        {
          title: "Non-Medical Palliative Support vs. Clinical Palliative Medicine",
          desc: "Clinical palliative doctors manage medical prescriptions, pain medications, and clinical interventions. Archangels provides daily in-home personal care, bathing, meal prep, and transferring that make living at home with illness manageable.",
        },
        {
          title: "In-Home Palliative Care vs. Facility Placement",
          desc: "In-home palliative care allows individuals to remain in their cherished home environment with dedicated one-on-one attention, preserving dignity, comfort, and independence throughout treatment.",
        },
      ]}
      note="Non-Medical Support Scope: Archangels Personal Care LLC provides non-medical, non-skilled personal care and companion support under Virginia Department of Health regulations. We do not provide clinical palliative medicine, pain management prescribing, or skilled nursing procedures; we coordinate our non-skilled support alongside your medical team's treatment plan."
      scenario={{
        title: "A Day of Comfort and Gentle Support During Treatment",
        text: "A client undergoing weekly chemotherapy for lung cancer receives care from an Archangels caregiver on treatment days. The caregiver arrives at 8:30 AM, drives the client to her oncology clinic in Richmond, and sits with her during the infusion session, providing reassuring companionship and a warm blanket. Upon returning home, the caregiver helps her settle into a comfortable recliner propped with supportive pillows. Knowing that the client often experiences nausea post-infusion, the caregiver prepares a light, warm ginger broth and crackers, ensures a fresh glass of water is nearby, and reminds her to take her pre-filled anti-nausea medication on schedule. While the client rests quietly, the caregiver launders bed linens, tidies the kitchen, and ensures the home is quiet, calm, and restful. When her spouse returns from work, the client is comfortable and well-cared for, allowing the family to spend a peaceful evening together without caregiving stress.",
      }}
      steps={[
        {
          title: "Palliative Support Consultation",
          desc: "Call 804-903-8133 to discuss your loved one's diagnosis, treatment schedules, daily fatigue patterns, personal care needs, and family goals.",
        },
        {
          title: "In-Home RN Comfort & Safety Evaluation",
          desc: "Our Registered Nurse meets with the client and family to evaluate physical mobility, energy conservation needs, bathroom safety, and author a customized Plan of Care.",
        },
        {
          title: "Matching an Empathetic Caregiver",
          desc: "We pair your family with a credentialed CNA or PCA who possesses specific experience supporting clients through chronic illness with warmth and patience.",
        },
        {
          title: "Coordinated Care Aligned with Treatment Days",
          desc: "Care begins on a flexible schedule synchronized with medical treatment cycles, physician visits, and peak fatigue periods to provide maximum relief.",
        },
        {
          title: "Ongoing RN Supervision & Plan Adaptability",
          desc: "Our RN regularly reassesses functional abilities, communicates with family, and adjusts care hours—scaling support up or down as treatment phases evolve.",
        },
      ]}
      benefits={[
        {
          title: "Support Alongside Active Treatments",
          desc: "Unlike hospice, palliative support is available at any stage of a serious illness while you continue to pursue curative therapies, surgeries, or clinical trials.",
        },
        {
          title: "Expertise in Energy Conservation",
          desc: "Our caregivers help clients accomplish daily living tasks with specialized pacing and equipment, preventing exhausting breathlessness and fatigue.",
        },
        {
          title: "Essential Relief for Family Caregivers",
          desc: "We take over heavy physical care, transportation, and chores so family members can focus on offering emotional love and encouragement.",
        },
        {
          title: "Full Registered Nurse Clinical Leadership",
          desc: "Every palliative care plan is overseen by a Virginia-licensed Registered Nurse, ensuring high standards of safety, hygiene, and care coordination.",
        },
      ]}
      approach={[
        "Facing a serious, chronic, or advanced illness—such as cancer, congestive heart failure (CHF), chronic obstructive pulmonary disease (COPD), advanced renal disease, or progressive neurological disorders—places immense physical and emotional stress on both the patient and their family. Managing frequent medical appointments, complex medication regimens, and debilitating symptoms like chronic fatigue, nausea, and shortness of breath can make simple daily activities overwhelming. At Archangels Personal Care LLC, our Palliative Care Support service is designed to bring non-medical comfort, practical daily living assistance, and holistic relief directly into the home.",
        "It is essential to understand that palliative care support is not the same as hospice care. While hospice is reserved for the final months of life when curative treatments have stopped, palliative care can begin at the moment of diagnosis and continues alongside active curative treatments, chemotherapy, radiation, surgery, or clinical trials. Our non-skilled palliative support focuses on optimizing quality of life, preserving personal dignity, and helping individuals remain as active, comfortable, and independent as possible in their own homes throughout their medical journey.",
        "Energy conservation is a central principle of our palliative caregiving approach. When an individual is managing a serious illness, physical energy is a precious, limited resource. Our Certified Nursing Assistants (CNAs) and Personal Care Aides (PCAs) are trained in activity pacing techniques that prevent exhaustion. We assist with seated shower bathing, using shower benches and handheld sprayers so the client never has to stand for long periods; we help with dressing, grooming, and transfers using gentle body mechanics; and we organize living spaces so that frequently needed items are always within comfortable reach.",
        "Nutrition and hydration often require creative, patient attention during illness. Treatments like chemotherapy or advanced cardiac conditions can significantly alter taste, diminish appetite, or cause nausea. Our caregivers prepare small, frequent, nutrient-dense meals and soothing broths tailored to the client's current tolerance. We maintain an unhurried, positive atmosphere during mealtimes, encourage consistent hydration with refreshing beverages, and ensure kitchen cleanliness and food safety.",
        "Under the leadership of our Virginia-licensed Registered Nurse, every palliative care plan operates with clinical oversight. Our RN conducts an in-home assessment to evaluate physical stamina, fall risks, bathroom safety, and dietary guidelines. The RN creates a personalized Plan of Care, performs regular supervisory visits in Richmond, Mechanicsville, and Hanover County, audits daily shift logs, and communicates regularly with family members and specialty medical providers. Our RN ensures that non-clinical observations—such as changes in appetite, fluid intake, or mobility—are documented and communicated effectively.",
        "We also provide vital respite care for family caregivers. Caring for a spouse or parent undergoing intensive medical treatments is physically exhausting and emotionally draining. Our compassionate caregivers step in to manage personal care, household chores, meal preparation, and clinic transportation, giving family caregivers the breathing room they need to rest, work, and maintain their own health so they can continue to be a loving source of strength for their loved one.",
      ]}
      faqs={[
        {
          q: "What is the difference between palliative care support and hospice care?",
          a: "Palliative care support can begin at any stage of a serious illness and is provided alongside active curative treatments (like chemotherapy, radiation, or surgery) to improve daily comfort and quality of life. Hospice care is specifically for individuals with a terminal prognosis of six months or less who have chosen to focus entirely on comfort rather than curative therapies. Archangels provides non-medical support for both.",
        },
        {
          q: "Can my loved one receive palliative care support while still seeing their oncologist or cardiologist?",
          a: "Yes, absolutely. Our non-medical palliative care support is designed to work in harmony with your loved one's ongoing medical treatments, helping them manage daily living at home while they continue regular visits with their oncology, cardiology, pulmonology, or nephrology teams.",
        },
        {
          q: "What specific tasks do palliative caregivers assist with?",
          a: "Caregivers assist with bathing, showering, dressing, grooming, seated hygiene, mobility transfers, fall prevention, preparing easy-to-digest meals, medication reminders, light housekeeping, laundry, transportation to infusion clinics or doctor appointments, and companionship.",
        },
        {
          q: "How do caregivers help with energy conservation for clients with COPD or CHF?",
          a: "Caregivers utilize seated shower benches, break dressing into paced steps, prepare meals, handle household chores, and assist with steadying mobility so that the client does not exhaust their breath or stamina on basic physical tasks.",
        },
        {
          q: "Can caregivers drive my loved one to chemotherapy or infusion appointments?",
          a: "Yes. Caregivers provide safe door-to-door transportation and physical accompaniment to infusion clinics, radiation appointments, and specialist visits, assisting with parking, walking support, wheelchairs, and waiting room check-ins.",
        },
        {
          q: "How does Archangels handle changes in appetite or nausea related to cancer treatments?",
          a: "Our caregivers prepare small, frequent, nutrient-dense meals and soothing broths according to the client's current cravings and tolerance. They encourage hydration with cool water, ginger teas, or electrolyte beverages and prompt pre-filled anti-nausea medications on schedule.",
        },
        {
          q: "Is non-medical palliative care support covered by health insurance or Medicare?",
          a: "Non-medical in-home personal care and companion support is typically paid privately or through Long-Term Care Insurance policies. Medicare covers clinical palliative physician consultations and home health therapy visits, but does not cover ongoing non-skilled custodial caregivers.",
        },
        {
          q: "How flexible is scheduling for palliative care support around treatment days?",
          a: "Our scheduling is completely flexible. Many clients schedule care specifically for the 2 to 3 days following chemotherapy or radiation when fatigue and symptoms are most intense, while others prefer regular daily support throughout their treatment course.",
        },
        {
          q: "How does the Registered Nurse oversee a palliative care plan?",
          a: "Our RN conducts the initial in-home assessment, writes the personalized Plan of Care, trains the assigned CNA/PCA, performs regular supervisory check-ins, audits daily shift logs, and communicates with family members and physicians to adjust care as treatment phases evolve.",
        },
        {
          q: "How does palliative support relieve family caregiver stress?",
          a: "By handling heavy physical personal care, meal preparation, household chores, and transportation, our caregivers give family members the freedom to rest, recharge, and focus on emotional support rather than exhausting physical caregiving duties.",
        },
      ]}
      related={[
        { slug: "end-of-life-care", label: "End-of-Life Comfort Care" },
        { slug: "personal-care", label: "Personal Care Services" },
        { slug: "rn-supervision", label: "RN Supervision & Oversight" },
        { slug: "24-hour-care", label: "24-Hour Care" },
        { slug: "respite-care", label: "Respite Care & Family Support" },
        { slug: "transition-care", label: "Transition to Home Care" },
      ]}
    />
  );
}
