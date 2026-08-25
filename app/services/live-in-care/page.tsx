import type { Metadata } from "next";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Live-In Home Care Richmond VA | Archangels Personal Care",
  description:
    "Dedicated, RN-supervised live-in home care in Richmond, Mechanicsville & Hanover County — a trusted caregiver residing in the home providing daytime personal care, homemaking, meals, and nighttime peace of mind. Call 804-903-8133.",
  alternates: {
    canonical: "https://www.archangelspersonalcare.com/services/live-in-care",
  },
  openGraph: {
    title: "Live-In Home Care Richmond VA | Archangels Personal Care",
    description:
      "RN-supervised live-in home care across Richmond, Mechanicsville & Hanover County — a dedicated caregiver in the home offering continuous support, meals, and companionship.",
    url: "https://www.archangelspersonalcare.com/services/live-in-care",
    siteName: "Archangels Personal Care",
    type: "website",
  },
};

export default function LiveInCarePage() {
  return (
    <ServiceDetailLayout
      slug="live-in-care"
      eyebrow="Live-In Home Care"
      title="Live-In Home Care in Richmond, VA"
      intro="Continuous, dedicated in-home support provided by a professional caregiver residing in the client's home — delivering daytime personal care, delicious home-cooked meals, light housekeeping, and nighttime security under Registered Nurse oversight."
      heroImg="https://www.archangelspersonalcare.com/images/caregiver-black-with-elderly.jpg"
      heroAlt="Dedicated live-in caregiver preparing a meal and sharing conversation with an older adult"
      whoFor={[
        "Seniors who wish to remain in their own homes full-time but require steady daily living assistance, personal care, and the reassuring presence of a caregiver residing in the house",
        "Aging adults living with mild-to-moderate physical frailty, arthritis, or early memory decline who sleep soundly through the night but need assistance during daytime hours",
        "Individuals who thrive on deep personal consistency and prefer having one or two familiar, trusted caregivers rather than multiple rotating hourly workers",
        "Families seeking comprehensive daily care, homemaking, and meal preparation at a more cost-effective daily rate than continuous 24-hour hourly shift staffing",
        "Seniors living alone in Greater Richmond whose adult children live out of state and need total confidence that someone dependable is always there",
        "Clients recovering from a major illness or joint replacement who need comprehensive daily support while regaining strength and independence",
      ]}
      signs={[
        "A senior expressing deep fear or anxiety about being completely alone in the house during evening hours, even if they sleep well",
        "Difficulty managing daily living responsibilities independently, such as grocery shopping, cooking nutritious meals, managing laundry, and personal grooming",
        "Family members worrying constantly about whether their loved one ate dinner, locked the doors, or took their evening medications",
        "Multiple hourly caregiver visits throughout the week feeling disruptive, disjointed, or chaotic for a senior who craves routine consistency",
        "Facing the prospect of moving to an assisted living facility when the client's strong, heartfelt wish is to remain in their family home",
        "A living environment that can comfortably accommodate a private bedroom and regular sleep schedule for a dedicated resident caregiver",
      ]}
      careLevels={[
        {
          badge: "Arrangement 1: Primary Live-In",
          title: "Primary Live-In Caregiver Schedule",
          subtitle: "3 to 5 consecutive days of continuous resident support",
          description:
            "A dedicated primary caregiver lives in the home for 3 to 5 consecutive days per week. The caregiver assists with morning, afternoon, and evening routines, prepares three fresh meals, manages home upkeep, and sleeps in a private bedroom during an 8-hour nighttime rest period.",
          items: [
            "Complete daytime assistance with bathing, dressing, grooming, and transfers",
            "Planning, shopping for, and cooking three wholesome home-cooked meals daily",
            "Client laundry, bed linen changes, vacuuming, and kitchen sanitization",
            "Accompaniment to local social gatherings, doctor visits, and daily walks",
            "Dedicated private bedroom with 8 hours of uninterrupted sleep each night",
          ],
        },
        {
          badge: "Arrangement 2: Co-Live-In Team",
          title: "Alternating Two-Caregiver Live-In Team",
          subtitle: "7-day continuous weekly coverage shared by two trusted caregivers",
          description:
            "To cover all seven days of the week while keeping caregivers fully rested and energized, we pair two consistent live-in caregivers (e.g., Caregiver A works 4 days, Caregiver B works 3 days). This maintains deep familiarity while preventing caregiver fatigue.",
          items: [
            "Seamless 7-day coverage with only two familiar faces entering the home",
            "Structured shift transitions ensuring unbroken dietary and medication routines",
            "Comprehensive Registered Nurse oversight and regular in-home supervisory visits",
            "High continuity of care that fosters deep emotional trust and friendship",
            "Predictable, cost-effective daily rate compared to 24-hour hourly shift staffing",
          ],
        },
      ]}
      careCategories={[
        {
          category: "Daytime Personal Care & ADLs",
          description:
            "Hands-on assistance helping seniors start and finish each day feeling clean, dignified, and comfortable.",
          tasks: [
            "Assisting with warm showers, tub bathing, sponge baths, and hair grooming",
            "Helping with wardrobe selection, buttoning, compression socks, and footwear",
            "Discreet toileting support, commode assistance, and incontinence hygiene",
            "Safe transfer support and mobility guidance with gait belts throughout the home",
          ],
        },
        {
          category: "Culinary Management & Shared Dining",
          description:
            "Transforming daily nutrition into wholesome, delicious, and enjoyable shared experiences.",
          tasks: [
            "Creating customized weekly meal plans based on favorite family recipes",
            "Cooking fresh breakfasts, lunches, and dinners from scratch",
            "Accommodating dietary guidelines (diabetic, low-sodium, heart-healthy, soft diets)",
            "Sitting together at the table to share conversation during dining",
          ],
        },
        {
          category: "Homemaking, Laundry & Errand Support",
          description:
            "Keeping the home sparkling, fresh, safe, and organized without stress.",
          tasks: [
            "Washing, drying, folding, and putting away client laundry and bed linens",
            "Wiping kitchen counters, washing dishes, and sanitizing bathroom surfaces",
            "Driving and escorting to grocery stores, pharmacies, and dry cleaners",
            "Keeping all hallways and living areas clear of clutter and trip hazards",
          ],
        },
        {
          category: "Nighttime Security & Sleeping Protocols",
          description:
            "Providing a comforting, dependable presence in the house throughout the evening and overnight hours.",
          tasks: [
            "Securing all exterior doors, windows, and perimeter safety before bedtime",
            "Assisting with relaxing evening bedtime routines, tea, and tucking in",
            "Resting in a dedicated private bedroom during the 8-hour sleep period",
            "Providing immediate emergency presence if an unexpected incident occurs",
          ],
        },
      ]}
      included={[
        "Dedicated caregiver residing in the home on a structured multi-day live-in schedule",
        "Full assistance with morning, afternoon, and evening personal care, bathing, and dressing",
        "Planning, grocery shopping, and cooking three fresh, nutritious home-cooked meals daily",
        "Light housekeeping, client laundry, bed linen changes, dishwashing, and kitchen upkeep",
        "Safe transferring support, mobility ambulation assistance, and fall prevention monitoring",
        "Timely medication reminders according to pre-filled organizers and hydration prompting",
        "Meaningful companionship, engaging conversation, shared hobbies, and emotional support",
        "Accompaniment and transportation for medical appointments, shopping, and community outings",
        "Nighttime security and presence, ensuring the client is never alone in the home",
        "Comprehensive Registered Nurse oversight, care plan creation, and ongoing supervisory visits",
      ]}
      differences={[
        {
          title: "Live-In Care vs. 24-Hour Rotating Shift Care",
          desc: "In Live-In Care, a single caregiver resides in the home and sleeps 8 hours overnight in a private bedroom (best for seniors who sleep soundly). In 24-Hour Shift Care, caregivers rotate in awake shifts with someone actively awake all night (best for frequent nighttime waking or wandering).",
        },
        {
          title: "Live-In Home Care vs. Assisted Living Facility Placement",
          desc: "Live-In Care provides dedicated 1-on-1 attention in the client's cherished home, preserving lifelong routines and independence. Assisted living facilities divide staff across many residents, often resulting in long waits for assistance.",
        },
        {
          title: "Live-In Agency Care vs. Direct-Hire Live-In Domestic Staff",
          desc: "Direct hiring leaves families responsible for payroll taxes, workers' compensation insurance, background checks, and finding backup when staff is sick. Archangels handles all staffing, taxes, insurance, RN supervision, and guaranteed backup.",
        },
      ]}
      note="Household Requirements for Live-In Care: Under Virginia labor and licensing standards, live-in care requires that the client provide the caregiver with a private, furnished bedroom, access to bathroom facilities, and an uninterrupted 8-hour sleep period each night (with at least 5 continuous hours of sleep)."
      scenario={{
        title: "A Seamless Rhythm of Daily Living at Home",
        text: "A live-in caregiver wakes at 7:00 AM after a restful night in her private bedroom. She begins by preparing fresh coffee and blueberry oatmeal in the kitchen. At 7:45 AM, she greets her client, helps her comfortably out of bed, and assists with a warm shower, hair styling, and dressing in her favorite sweater. After a leisurely breakfast together, they review the day's plans. By mid-morning, the caregiver drives the client to her weekly hair salon appointment and stops by the grocery store to pick up fresh produce. In the afternoon, while the client rests and reads in the sunroom, the caregiver folds laundry, vacuums the living room, and prepares a homemade pot roast for dinner. They enjoy dinner together at 5:30 PM, watch an episode of Jeopardy, and complete evening personal hygiene. By 9:30 PM, the client is safely tucked into bed with her bedside lamp on, and the caregiver locks up the home and retires to her room for the night.",
      }}
      steps={[
        {
          title: "Live-In Suitability Discovery",
          desc: "Call 804-903-8133 to discuss your loved one's daily routine, sleeping patterns, household accommodations (private bedroom), and care priorities.",
        },
        {
          title: "In-Home RN Assessment & Home Inspection",
          desc: "Our Registered Nurse visits the home to evaluate mobility, personal care needs, bathroom safety, caregiver sleeping quarters, and author a comprehensive Plan of Care.",
        },
        {
          title: "Intentional Live-In Caregiver Matching",
          desc: "Because live-in care involves sharing living space, we carefully match a CNA or PCA based on personality, lifestyle habits, culinary skills, and mutual compatibility.",
        },
        {
          title: "Live-In Service Commences",
          desc: "Your matched caregiver arrives and seamlessly settles into the household rhythm, managing personal care, meals, housekeeping, and companionship with warmth and professionalism.",
        },
        {
          title: "Ongoing RN Supervision & Schedule Coordination",
          desc: "Our RN conducts regular in-home supervisory visits, reviews daily care logs, and manages secondary caregiver rotations to maintain unbroken weekly coverage.",
        },
      ]}
      benefits={[
        {
          title: "Deepest Caregiver Consistency",
          desc: "Having one or two dedicated resident caregivers creates profound trust, deep companionship, and an intuitive understanding of your loved one's daily habits.",
        },
        {
          title: "Cost-Effective Full-Time Coverage",
          desc: "Live-in care is billed on a flat daily rate, making comprehensive around-the-clock home presence significantly more affordable than 24 individual hourly rates.",
        },
        {
          title: "Complete Household Management",
          desc: "In addition to personal hygiene, your live-in caregiver handles daily meal preparation, grocery shopping, laundry, and light housekeeping, keeping the home spotless.",
        },
        {
          title: "A Viable Alternative to Facility Moving",
          desc: "Live-in care allows seniors who might otherwise be forced into assisted living to remain comfortably, safely, and happily in their own family homes for life.",
        },
      ]}
      approach={[
        "For many aging adults, the thought of leaving their longtime family home to move into an assisted living or nursing facility is a source of immense distress. Home is where memories were made, where neighbors are familiar, and where personal independence feels real. When a senior reaches a point where living alone is no longer safe due to physical frailty or mild memory changes, Live-In Home Care provides the ideal solution: continuous, one-on-one professional support delivered by a dedicated caregiver who resides in the home. At Archangels Personal Care LLC, our live-in care program allows seniors across Richmond, Mechanicsville, and Hanover County to age in place with comfort, dignity, and complete security.",
        "Live-in care is fundamentally different from traditional hourly home care. Instead of multiple different caregivers arriving for 4 or 8-hour shifts throughout the week, live-in care is delivered by a primary caregiver who stays in the home for consecutive days (typically 3 to 5 days at a time). This arrangement fosters deep personal rapport, mutual respect, and unmatched continuity of care. The caregiver becomes an integrated, reassuring presence who intuitively understands how the client takes their tea, their favorite television programs, their morning hygiene preferences, and their subtle non-verbal cues.",
        "A successful live-in arrangement requires careful attention to household structure and labor guidelines. Under Virginia licensing and labor regulations, a live-in caregiver must be provided with a private, furnished bedroom, adequate access to bathroom facilities, and an uninterrupted 8-hour sleep period each night (with at least 5 continuous hours of sleep). Because the caregiver sleeps through the night, live-in care is ideal for seniors who are relatively stable overnight. If a client requires frequent, active awake assistance multiple times throughout the night, our 24-Hour Rotating Shift Care service is recommended instead.",
        "Culinary care and homemaking are prominent strengths of our live-in service. Many seniors living alone experience nutritional decline because cooking for one feels like a burden. Our live-in caregivers plan balanced weekly menus based on favorite family recipes, shop for fresh ingredients, and cook three wholesome, appetizing meals every day. Caregivers also manage all light household upkeep: washing and changing bed linens, managing client laundry, wiping down kitchen and bathroom surfaces, and keeping living spaces clean, uplifting, and free of fall hazards.",
        "Every live-in care assignment operates under the direct clinical leadership of our Virginia-licensed Registered Nurse. Before care begins, our RN conducts an in-home assessment to evaluate physical mobility, bathroom safety, dietary guidelines, and emergency protocols. The RN authors an individualized Plan of Care, performs regular in-person supervisory visits, audits daily care logs, and coordinates closely with family members and primary physicians to ensure the highest standards of safety.",
        "To ensure continuous seven-day-a-week coverage without caregiver burnout, we typically pair two dedicated live-in caregivers who share the weekly schedule (for example, Caregiver A works 4 days and Caregiver B works 3 days). This structured rotation ensures that your loved one is always cared for by familiar, well-rested caregivers who bring energy, enthusiasm, and warmth to every single day.",
      ]}
      faqs={[
        {
          q: "What is the difference between Live-In Care and 24-Hour Shift Care?",
          a: "In Live-In Care, a dedicated caregiver resides in the home, assists throughout the daytime and evening, and is provided a private bedroom for 8 hours of uninterrupted sleep each night. In 24-Hour Shift Care, caregivers work rotating awake shifts (such as two 12-hour shifts) so that an alert caregiver is awake and actively monitoring the client throughout the night. Live-In Care is best for seniors who sleep soundly, while 24-Hour Shift Care is essential for those who wake frequently or wander at night.",
        },
        {
          q: "What household accommodations are required for a live-in caregiver?",
          a: "The client's home must provide a private, fully furnished bedroom with a bed, clean linens, and storage for personal belongings, as well as full access to a bathroom and kitchen facilities, and an environment that permits 8 hours of uninterrupted sleep each night.",
        },
        {
          q: "How are meals handled for the live-in caregiver?",
          a: "Typically, the live-in caregiver eats meals prepared in the home alongside the client using groceries provided by the household, or the family provides a modest food stipend. The caregiver prepares fresh, wholesome home-cooked meals for both the client and themselves.",
        },
        {
          q: "How many days per week does a live-in caregiver work?",
          a: "A single live-in caregiver typically works 3 to 5 consecutive days per week. To provide complete 7-day-a-week coverage, we assign a primary caregiver and a secondary co-caregiver who share the week, ensuring high familiarity while keeping both caregivers well-rested.",
        },
        {
          q: "What happens if the client wakes up during the night?",
          a: "A live-in caregiver can assist with occasional, brief nighttime bathroom needs (up to once or twice). However, if the client wakes frequently or requires extensive awake monitoring throughout the night, the arrangement must be transitioned to 24-Hour Shift Care to comply with labor laws and ensure caregiver alertness.",
        },
        {
          q: "How is live-in care billed compared to hourly care?",
          a: "Live-in care is billed at a flat, predictable daily rate rather than an hourly rate. This makes live-in care significantly more cost-effective for families who need comprehensive all-day support and presence compared to paying for 16 or 24 individual hourly units.",
        },
        {
          q: "What tasks are included in live-in care?",
          a: "Live-in care includes full assistance with bathing, dressing, grooming, and toileting hygiene; planning and cooking three daily meals; light housekeeping, laundry, and bed linen changes; medication reminders; mobility assistance; transportation to appointments; and companionship.",
        },
        {
          q: "How does Archangels match a live-in caregiver with my loved one?",
          a: "Because a live-in caregiver shares the living environment, personality compatibility is vital. We carefully evaluate cooking styles, daily habits, communication preferences, and personal interests to select a caregiver who will feel like a natural, harmonious fit in the home.",
        },
        {
          q: "How does the Registered Nurse supervise live-in care?",
          a: "Our RN conducts the initial in-home assessment, writes the Plan of Care, performs regular in-person supervisory visits, audits daily shift logs, and communicates regularly with family members and physicians to adjust care as needs change.",
        },
        {
          q: "Can live-in care be arranged for temporary periods, such as after surgery?",
          a: "Yes. Live-in care can be arranged on a short-term basis (e.g., 2 to 6 weeks) following a hospital discharge, stroke rehabilitation, or orthopedic surgery to provide intensive support while regaining independence, or as a permanent long-term living arrangement.",
        },
      ]}
      related={[
        { slug: "24-hour-care", label: "24-Hour Care" },
        { slug: "personal-care", label: "Personal Care Services" },
        { slug: "rn-supervision", label: "RN Supervision & Oversight" },
        { slug: "memory-care", label: "Alzheimer's & Memory Care" },
        { slug: "transition-care", label: "Transition to Home Care" },
        { slug: "companionship", label: "Companionship & Social Engagement" },
      ]}
    />
  );
}
