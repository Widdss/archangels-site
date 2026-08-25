import type { Metadata } from "next";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Parkinson's Care Support Richmond VA | Archangels Personal Care",
  description:
    "Specialized, RN-supervised non-skilled Parkinson's care in Richmond, Mechanicsville & Hanover County — tremor-adapted personal care, fall prevention, medication schedule reminders & mobility support. Call 804-903-8133.",
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
      eyebrow="Parkinson's Care Support"
      title="Parkinson's Care Support in Richmond, VA"
      intro="Patient, specialized non-skilled home care tailored to the motor fluctuations, mobility challenges, and daily living needs of individuals living with Parkinson's disease — delivered under experienced Registered Nurse supervision across Richmond, Mechanicsville, and Hanover County."
      heroImg="/images/caregiver-black-with-elderly.jpg"
      heroAlt="Caregiver patiently assisting an older adult managing Parkinson's mobility challenges"
      whoFor={[
        "Individuals diagnosed with Parkinson's disease experiencing motor symptoms such as resting tremors, muscle rigidity, slow movement (bradykinesia), or postural instability",
        "Aging adults who face freezing episodes, shuffling gait, or balance hesitation when walking through doorways or making turns at home",
        "Seniors who find buttoning shirts, tying shoes, managing zippers, or using dining utensils increasingly frustrating and exhausting due to tremors",
        "Individuals whose medication regimen requires strict timing adherence to manage 'on' and 'off' motor fluctuation periods throughout the day",
        "Clients participating in physical, occupational, or speech therapy (such as LSVT BIG or LOUD) who benefit from daily home encouragement and routine practice",
        "Family caregivers experiencing physical strain and constant anxiety from providing around-the-clock transfer assistance and fall-risk monitoring",
      ]}
      signs={[
        "Increased incidence of near-misses, stumbling, loss of balance, or difficulty recovering posture when rising from a chair or turning around",
        "Freezing of gait where feet feel 'glued to the floor,' particularly when crossing thresholds, entering narrow hallways, or approaching chairs",
        "Noticeable frustration during meals, spills, dropping cups, or taking an unusually long time to finish a plate due to hand tremors and stiffness",
        "Skipping or delaying doses of prescribed Parkinson's medications because tracking multi-dose daily schedules has become confusing or difficult",
        "Dressing and morning grooming taking upwards of an hour, leaving the individual physically drained and exhausted before the day has begun",
        "Family members feeling anxious leaving their loved one home alone due to unpredictable motor fluctuations and sudden mobility loss",
      ]}
      careLevels={[
        {
          badge: "Stage 1: Mild / Early",
          title: "Early-Stage Parkinson's Mobility & Routine Support",
          subtitle: "Pacing daily living tasks, tremor adaptation, and medication adherence",
          description:
            "During early Parkinson's, individuals remain largely independent but benefit from unhurried assistance with fine motor tasks (buttons, zippers, handwriting), precisely timed medication reminders, and companionship during daily walking exercises.",
          items: [
            "Paced assistance with morning hygiene and grooming without rushing",
            "Utilizing adaptive buttonhooks, velcro closures, and zipper pulls",
            "Strictly timed medication reminders aligned with neurological schedules",
            "Accompaniment on gentle daily neighborhood walks to maintain stride length",
            "Nutritious breakfast and meal preparation supporting digestive regularity",
          ],
        },
        {
          badge: "Stage 2: Fluctuating / Mid",
          title: "Mid-Stage Parkinson's & 'On/Off' Cycle Management",
          subtitle: "Hands-on transfer assistance, freezing cueing, and fall prevention",
          description:
            "As motor fluctuations become more pronounced, mobility shifts dramatically between medication doses. Caregivers provide steady transfer assistance during 'off' periods, visual/verbal cueing to overcome freezing episodes, and full shower support.",
          items: [
            "Synchronizing challenging daily activities during peak 'on' medication windows",
            "Safe transfer support using gait belts between beds, recliners, and commodes",
            "Visual and auditory rhythmic cueing techniques to overcome gait freezing",
            "Hands-on shower assistance utilizing shower benches and grab bars",
            "Adaptive dining assistance using weighted utensils, non-spill cups, and soft textures",
            "Essential respite care giving family caregivers physical relief from transfer strain",
          ],
        },
        {
          badge: "Stage 3: Advanced / Complex",
          title: "Advanced Parkinson's & Comprehensive Daily Care",
          subtitle: "Total physical assistance, wheelchair mobility, and 24/7 supervision",
          description:
            "In advanced Parkinson's, severe muscle rigidity, postural instability, and cognitive slowing require comprehensive hands-on support. Caregivers provide total physical hygiene, wheelchair transfer support, pureed diet assistance, and overnight vigilance.",
          items: [
            "Complete physical bed sponge bathing, gentle grooming, and skin breakdown prevention",
            "Frequent body repositioning in bed or specialized recliners to ease stiffness",
            "Patient dining and hydration pacing with swallow-safe food preparations",
            "Safe wheelchair ambulation and door-to-door transportation to neurology clinics",
            "Continuous 24-Hour awake shift rotation for round-the-clock home safety",
          ],
        },
      ]}
      careCategories={[
        {
          category: "Motor Fluctuation & Medication Timing Pacing",
          description:
            "Structuring daily living activities around dopamine replacement medication cycles to maximize ease of movement.",
          tasks: [
            "Prompting exact medication dosing intervals to prevent motor 'off' slumps",
            "Scheduling bathing, dressing, and mobility walks during peak 'on' hours",
            "Allowing thirty minutes post-medication for muscle stiffness to ease before transfers",
            "Documenting daily motor response patterns for the supervising RN and neurologist",
          ],
        },
        {
          category: "Tremor-Adapted Personal Care & Dressing",
          description:
            "Providing patient, dignified assistance with tasks hindered by resting tremors and fine motor stiffness.",
          tasks: [
            "Assisting with upper and lower body clothing, compression socks, and footwear",
            "Utilizing adaptive dressing aids like buttonhooks, zipper pulls, and elastic laces",
            "Providing steadying support for toothbrushing, electric shaving, and hair grooming",
            "Maintaining an unhurried, calming demeanor that prevents tremor exacerbation",
          ],
        },
        {
          category: "Gait Freezing Mitigation & Safe Transfers",
          description:
            "Utilizing evidence-based movement strategies to break freezing episodes and prevent catastrophic falls.",
          tasks: [
            "Guiding wide, arcing turns instead of pivoting to prevent balance loss",
            "Using rhythmic verbal counting ('one-two-one-two') to initiate walking rhythm",
            "Placing visual cues on floors across doorways and thresholds to prompt stepping",
            "Employing two-point gait belt transfer techniques for chair and commode transitions",
          ],
        },
        {
          category: "Dining Assistance & Adaptive Utensils",
          description:
            "Making mealtime safe, dignified, and enjoyable despite tremors and chewing/swallowing fatigue.",
          tasks: [
            "Preparing foods in manageable, bite-sized pieces or soft textures",
            "Setting the table with weighted utensils, non-slip placemats, and ergonomic cups",
            "Encouraging slow, deliberate swallowing and upright posture during meals",
            "Tracking daily hydration and fiber intake to support healthy digestion",
          ],
        },
        {
          category: "Therapy Exercise Reinforcement (LSVT BIG & LOUD)",
          description:
            "Reinforcing non-clinical movement and vocal exercises prescribed by your physical and speech therapists.",
          tasks: [
            "Encouraging daily large-amplitude movement practice (BIG arm swings and high steps)",
            "Promoting vocal volume exercises during conversation and reading aloud",
            "Assisting with safe indoor walking drills in clutter-free hallways",
            "Logging physical activity milestones in the daily care log",
          ],
        },
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
      differences={[
        {
          title: "Specialized Parkinson's Care vs. General Home Care",
          desc: "General caregivers may inadvertently rush seniors or pull during transfers. Our Parkinson's caregivers are trained in tremor adaptation, freezing cueing techniques, and synchronization with dopamine medication schedules.",
        },
        {
          title: "Non-Skilled Parkinson's Care vs. Physical/Occupational Therapy",
          desc: "Physical and occupational therapists provide clinical rehabilitation evaluations and design exercise regimens. Archangels provides daily hands-on personal care, transferring, and routine reinforcement between therapy sessions.",
        },
        {
          title: "In-Home Parkinson's Support vs. Facility Placement",
          desc: "Parkinson's symptoms fluctuate hourly and thrive on custom one-on-one timing. In-home care ensures your loved one receives personalized assistance on their exact timeline rather than waiting on communal facility staffing.",
        },
      ]}
      note="Service scope: care is non-skilled and non-clinical. We do not provide physical therapy, occupational therapy, or medication administration — we coordinate around any care your neurologist or therapy team has ordered."
      scenario={{
        title: "A Morning Visit Paced Around Parkinson's Rhythms",
        text: "A caregiver arrives at 7:30 AM, knowing that mornings require patience due to overnight muscle stiffness. She begins by offering a warm glass of water and reminding the client to take his morning dose of carbidopa/levodopa, which was pre-filled in his organizer. Rather than rushing him out of bed, she gives the medication thirty minutes to take effect while tidying the bedroom and warming towels in the bathroom. When his motor function improves, she assists him with a safe shower, using a shower chair and grab bars. For dressing, she allows him to button his shirt using an adaptive buttonhook, providing steadying support without taking over the task. In the kitchen, she serves scrambled eggs and oatmeal with weighted utensils that dampen hand tremors. When they practice a short walk to the sunroom, she uses rhythmic vocal cues to guide him smoothly through the doorway, completely avoiding a freezing episode.",
      }}
      steps={[
        {
          title: "Parkinson's Care Consultation",
          desc: "Call 804-903-8133 to discuss your loved one's specific symptoms, motor fluctuation cycles, tremor patterns, therapy routines, and scheduling preferences.",
        },
        {
          title: "In-Home RN Parkinson's Assessment",
          desc: "Our Registered Nurse evaluates balance, transfer mechanics, doorway freeze risks, medication schedules, and home safety to build a personalized Plan of Care.",
        },
        {
          title: "Matching a Patient, Experienced Caregiver",
          desc: "We assign a CNA or PCA with specific experience in Parkinson's support who understands the importance of unhurried pacing, dignity, and specialized transfer techniques.",
        },
        {
          title: "Establishing a Rhythmic Daily Schedule",
          desc: "Care begins on a consistent schedule coordinated around medication timing, therapy exercises, and personal energy peaks to maximize independence and comfort.",
        },
        {
          title: "Ongoing RN Monitoring & Clinical Adaptation",
          desc: "Because Parkinson's progresses over time, our RN regularly reassesses functional abilities, updates transfer protocols, and adjusts care hours as needs evolve.",
        },
      ]}
      benefits={[
        {
          title: "Care Paced to Your Loved One's Speed",
          desc: "Our caregivers are trained never to rush. We provide the patient, unhurried time required for individuals with Parkinson's to accomplish tasks with pride.",
        },
        {
          title: "Strict Precision for Medication Reminders",
          desc: "We understand that Parkinson's medications rely on precise timing to prevent motor 'off' periods, providing consistent prompts exactly when scheduled.",
        },
        {
          title: "Specialized Freezing & Mobility Techniques",
          desc: "Caregivers utilize visual and auditory cueing techniques, wide-arc turning methods, and gait belts to help clients navigate freeze episodes safely.",
        },
        {
          title: "Collaboration with Your Therapy Team",
          desc: "We reinforce non-clinical home exercise recommendations from your physical, occupational, and speech therapists, helping maintain functional gains.",
        },
      ]}
      approach={[
        "Living with Parkinson's disease is an unpredictable, daily journey. Symptoms can fluctuate dramatically not just from month to month, but from hour to hour based on medication cycles, stress levels, sleep quality, and fatigue. When an individual experiences sudden 'off' periods—where movement becomes rigid, speech softens, and feet freeze to the floor—simple daily tasks like getting out of a chair or buttoning a shirt can feel insurmountable. At Archangels Personal Care LLC, our Parkinson's care support is designed around deep clinical understanding, unshakeable patience, and respect for an individual's self-worth.",
        "The cornerstone of effective Parkinson's caregiving is unhurried pacing. When a caregiver tries to rush someone with Parkinson's through a shower or dressing routine, the resulting anxiety frequently triggers muscle rigidity and worsens tremors. Our Certified Nursing Assistants (CNAs) and Personal Care Aides (PCAs) are trained to operate at the client's natural speed. We encourage clients to do as much as they safely can for themselves, stepping in with steadying hands, adaptive dressing techniques, or weighted utensils only when needed to conserve energy and prevent frustration.",
        "Medication timing precision is vital for individuals managing Parkinson's disease. Medications like carbidopa/levodopa must be taken on exact schedules to maintain therapeutic blood levels and avoid debilitating motor 'off' episodes. While our caregivers operate strictly within non-skilled guidelines (providing reminders rather than clinical administration), our care plans are synchronized around these medication windows. Caregivers schedule challenging activities—like bathing, transfers, and walks—during peak 'on' times when mobility is at its best.",
        "Fall prevention and mobility management require specialized techniques in Parkinson's care. Postural instability and gait freezing often occur when navigating tight spaces, crossing floor thresholds, or making sharp turns. Our caregivers are trained in evidence-based movement strategies: encouraging wide, arcing turns instead of pivoting on one foot, using rhythmic verbal cues (such as counting 'one-two-one-two') to break freezing episodes, and utilizing gait belts to provide secure stability during transfers without pulling on sensitive shoulder joints.",
        "Our Registered Nurse supervision model ensures that your loved one's care plan evolves alongside the progression of the disease. During regular supervisory visits in Richmond, Mechanicsville, and Hanover County, the RN evaluates gait changes, speech clarity, swallowing observations, and skin integrity. The RN updates transfer instructions, suggests adaptive equipment modifications (such as bed rails or raised toilet seats), and communicates closely with the family to ensure complete alignment.",
        "We coordinate smoothly alongside your existing medical and therapeutic providers. While Archangels does not provide skilled physical, occupational, or speech therapy, our caregivers enthusiastically encourage clients to practice their prescribed home exercises—such as LSVT BIG movement extensions or vocal volume exercises—incorporating them naturally into the daily routine so that therapeutic progress achieved in the clinic is maintained at home.",
      ]}
      faqs={[
        {
          q: "How do your caregivers handle Parkinson's 'freezing of gait' episodes?",
          a: "Our caregivers are trained in non-confrontational cueing techniques to help clients overcome freezing episodes safely. Rather than pulling or pushing the client (which increases fall risk), caregivers encourage the client to pause, take a deep breath, rock gently from side to side, or step over a visual target (such as the caregiver's foot or a line on the floor) while using rhythmic verbal cues to restart walking.",
        },
        {
          q: "Why is medication timing so critical in Parkinson's care, and how do you support it?",
          a: "Parkinson's medications work to replace or mimic dopamine in the brain, and delays of even 30 to 45 minutes can cause a client to slide into a rigid motor 'off' state where movement becomes extremely difficult. Our caregivers provide diligent, timed medication reminders according to pre-filled organizers and schedule daily living activities during peak 'on' medication windows.",
        },
        {
          q: "Do you provide physical therapy or occupational therapy for Parkinson's?",
          a: "No. Archangels provides non-skilled personal care, mobility assistance, and companionship under RN supervision. We do not provide skilled physical, occupational, or speech therapy. However, our caregivers can reinforce and encourage non-clinical home exercise routines prescribed by your licensed therapy team.",
        },
        {
          q: "How do caregivers assist with dining when a client has severe hand tremors?",
          a: "Caregivers help by preparing meals in easy-to-manage bite-sized portions, using adaptive weighted utensils and non-slip dishware that dampen tremors, offering cups with specialized lids and handles, and providing gentle, dignified feeding assistance whenever tremors or fatigue make self-feeding difficult.",
        },
        {
          q: "Can Parkinson's care support start with just a few hours a week?",
          a: "Yes. Many families begin with 3 to 4 hours per visit a few days a week to assist during challenging morning routines or evening transitions. As the condition progresses, hours can be easily increased to daily care or 24/7 coverage with no long-term contract lock-in.",
        },
        {
          q: "What training do your caregivers receive regarding Parkinson's disease?",
          a: "Our caregivers receive specific instruction on the motor and non-motor symptoms of Parkinson's, understanding 'on/off' medication cycles, patient transfer techniques, fall prevention strategies, gait freezing cueing methods, and communication approaches tailored to softened speech or facial masking.",
        },
        {
          q: "Can caregivers assist with transportation to neurology appointments?",
          a: "Yes. Caregivers provide safe door-to-door transportation and physical accompaniment to neurology appointments, movement disorder clinics, and physical therapy sessions, assisting with wheelchair transfers, doors, and waiting room navigation.",
        },
        {
          q: "How do you handle changes in mood, anxiety, or cognitive changes related to Parkinson's?",
          a: "Parkinson's can involve non-motor symptoms such as anxiety, depression, apathy, or Parkinson's-related dementia. Our caregivers provide a calm, reassuring, and patient presence, using gentle redirection, empathetic validation, and predictable daily routines to reduce stress.",
        },
        {
          q: "How does Archangels coordinate with our neurologist or movement disorder specialist?",
          a: "With family consent, our supervising Registered Nurse can compile and share observational logs detailing motor fluctuation patterns, fall incidents, appetite, and daily functional trends with your neurologist, providing valuable real-world context for clinical medication adjustments.",
        },
        {
          q: "How does this service provide relief for spousal caregivers?",
          a: "Caring for a spouse with Parkinson's can be physically demanding and emotionally exhausting. Our caregivers take over heavy physical lifting, transfer duties, and daily hygiene, giving spousal caregivers the freedom to rest, run errands, and enjoy meaningful companionship with their partner without physical strain.",
        },
      ]}
      related={[
        { slug: "personal-care", label: "Personal Care Services" },
        { slug: "rn-supervision", label: "RN Supervision & Oversight" },
        { slug: "24-hour-care", label: "24-Hour Care" },
        { slug: "respite-care", label: "Respite Care & Family Support" },
        { slug: "transition-care", label: "Transition to Home Care" },
        { slug: "companionship", label: "Companionship & Social Engagement" },
      ]}
    />
  );
}
