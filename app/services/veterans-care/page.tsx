import type { Metadata } from "next";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";

export const metadata: Metadata = {
  title: "Veterans In-Home Care Richmond VA | Archangels Personal Care",
  description:
    "Respectful, RN-supervised non-skilled home care for military veterans and surviving spouses across Richmond, Mechanicsville & Hanover County. Compassionate daily living support with guidance toward VA Aid & Attendance resources. Call 804-903-8133.",
  alternates: {
    canonical: "https://www.archangelspersonalcare.com/services/veterans-care",
  },
  openGraph: {
    title: "Veterans In-Home Care Richmond VA | Archangels Personal Care",
    description:
      "Respectful, RN-supervised non-skilled home care for veterans and their spouses in Richmond, Mechanicsville & Hanover County, with guidance toward VA Aid & Attendance resources.",
    url: "https://www.archangelspersonalcare.com/services/veterans-care",
    siteName: "Archangels Personal Care",
    type: "website",
  },
};

export default function VeteransCarePage() {
  return (
    <ServiceDetailLayout
      slug="veterans-care"
      eyebrow="Veterans In-Home Care"
      title="Veterans In-Home Care in Richmond, VA"
      intro="Dignified, RN-supervised non-skilled home care honoring the service and sacrifice of military veterans and their surviving spouses — delivering compassionate daily living assistance, routine consistency, and guidance toward VA Aid & Attendance resources across Richmond, Mechanicsville, and Hanover County."
      heroImg="https://www.archangelspersonalcare.com/images/nurse-with-patient.jpg"
      heroAlt="Caregiver providing respectful, compassionate in-home care to a military veteran"
      whoFor={[
        "Military veterans of the Army, Navy, Air Force, Marines, Coast Guard, or National Guard who wish to age in place safely at home with independence and dignity",
        "Surviving spouses of wartime veterans who require daily living support, personal care, or companionship in their own residences",
        "Veterans experiencing service-connected physical disabilities, chronic joint pain, or mobility limitations that make daily self-care difficult",
        "Aging veterans living with cognitive conditions, PTSD memories, or dementia who respond best to calm, structured, and respectful caregiving routines",
        "Families currently navigating the lengthy VA Aid & Attendance pension application process who need dependable in-home care starting immediately",
        "Spouses and family members providing round-the-clock care for a veteran who need dependable respite relief to prevent physical and emotional burnout",
      ]}
      signs={[
        "A proud veteran struggling with basic self-care tasks—like showering, dressing, or preparing meals—yet hesitant to ask family for help",
        "Increased fall risk, unsteady gait, or difficulty getting in and out of favorite armchairs, beds, or vehicles safely",
        "A cluttered living space, missed prescription doses, or poor nutrition because managing household duties has become physically overwhelming",
        "Family members feeling confused or intimidated by the complex paperwork and medical documentation required for VA pension benefits",
        "A caregiving spouse becoming physically exhausted and strained from managing a veteran's transfers, hygiene, and daily schedules alone",
        "Delays in getting necessary home support because the family mistakenly believes they must wait for VA pension approvals before starting care",
      ]}
      included={[
        "Respectful assistance with personal hygiene, showering, bathing, grooming, and dressing routines",
        "Mobility support, safe transfer assistance, gait stabilization, and proactive fall prevention protocols",
        "Timely medication reminders according to pre-filled organizers and physician-recommended daily schedules",
        "Nutritious, freshly prepared home-cooked meals aligned with dietary preferences and nutritional needs",
        "Meaningful companionship, active listening, and deep respect for military heritage, service stories, and personal background",
        "Accompaniment and safe transportation to VA medical centers, Hunter Holmes McGuire VA Medical Center clinic visits, and local errands",
        "Light household organizing, client laundry, bed linen changes, and keeping living spaces safe and tidy",
        "Guidance and information sharing regarding VA Aid & Attendance benefit resources and accredited VSO contacts",
        "Comprehensive Registered Nurse oversight, customized Plan of Care creation, and regular supervisory evaluations",
        "Dedicated respite care for caregiving spouses and family members providing primary support to aging veterans",
      ]}
      note="Administrative & Regulatory Scope: Archangels Personal Care LLC is an independent, private-pay licensed Home Care Organization in the Commonwealth of Virginia. We are not an official branch of the U.S. Department of Veterans Affairs and do not provide legal, financial, or formal benefits representation. We gladly share educational resource information regarding VA Aid & Attendance pensions while providing private-pay non-skilled care."
      scenario={{
        title: "A Day of Care Grounded in Respect and Honor",
        text: "A caregiver arrives promptly at 8:00 AM at the home of a retired U.S. Navy veteran in Hanover County. Knowing that structure and punctuality are deeply important to him, she greets him warmly by his preferred title. She assists him with an unhurried, safe shower, taking care to respect his modesty, and helps him fasten his favorite flannel shirt. In the kitchen, she prepares a hearty breakfast of scrambled eggs and wheat toast, placing his pre-filled morning pillbox alongside a fresh cup of coffee. As they sit together, the client shares stories about his time aboard a naval carrier, which the caregiver listens to with genuine fascination and respect. Later in the morning, she accompanies him to an outpatient follow-up at the Richmond VA Medical Center, assisting him into the vehicle with steady support. Upon returning home, she tidies the living area, ensures all walkways are clear, and logs the day's notes for the supervising RN.",
      }}
      steps={[
        {
          title: "Veterans Care Discovery Consultation",
          desc: "Call 804-903-8133 to discuss your loved one's military service background, daily living challenges, current mobility status, and scheduling preferences.",
        },
        {
          title: "In-Home RN Care & Safety Assessment",
          desc: "Our Registered Nurse meets with the veteran and family at home to evaluate physical mobility, bathroom safety, medication routines, and author a customized Plan of Care.",
        },
        {
          title: "VA Resource Information Sharing",
          desc: "We provide educational materials and pointers on VA Aid & Attendance pensions, accredited Veterans Service Officers (VSOs), and necessary documentation like the DD-214.",
        },
        {
          title: "Caregiver Matching for Cultural Fit",
          desc: "We match your family with a credentialed CNA or PCA who understands military culture, respects personal boundaries, and brings warmth and diligence to the home.",
        },
        {
          title: "Immediate Care Delivery Begins",
          desc: "Because care operates on a private-pay basis, services start immediately—often within 24 to 48 hours—without having to wait for government claims processing.",
        },
      ]}
      benefits={[
        {
          title: "Start Care Now Without Government Delays",
          desc: "Don't wait months for VA pension claims to process before getting vital help. Our private-pay model allows care to start immediately when it is needed most.",
        },
        {
          title: "Deep Respect for Military Culture",
          desc: "Our caregivers are selected and trained to honor military values: punctuality, integrity, personal dignity, structure, and respect for service history.",
        },
        {
          title: "Educational Guidance on VA Aid & Attendance",
          desc: "We point families toward reputable accredited VSOs and local resources that help qualified wartime veterans and surviving spouses access pension benefits.",
        },
        {
          title: "Full Registered Nurse Supervision",
          desc: "Every veteran care plan is supervised by a Virginia-licensed Registered Nurse, ensuring high safety standards, medication compliance, and care plan updates.",
        },
      ]}
      approach={[
        "Military veterans possess a unique sense of independence, self-discipline, and pride that has been forged through service to our nation. When an aging veteran begins to experience physical limitations, mobility loss, or chronic health struggles, accepting personal care assistance can feel challenging. Many veterans are accustomed to solving problems on their own and are reluctant to burden their children or spouses. At Archangels Personal Care LLC, our veterans in-home care program is built on a foundation of profound respect, honor, and specialized understanding of military culture.",
        "One of the greatest obstacles veteran families encounter when seeking care is the misconception that they must wait for VA pension approvals before receiving help at home. The Department of Veterans Affairs Aid & Attendance pension is a wonderful benefit for eligible wartime veterans and surviving spouses, but the formal claims process can frequently take six to twelve months or longer to finalize. Waiting for government paperwork while an aging veteran is falling or skipping meals is dangerous. Our private-pay care model allows families to initiate professional, RN-supervised care immediately. Once VA pension benefits or retroactive payouts are approved, families can utilize those funds to offset their ongoing private care expenses.",
        "While Archangels is not a VA benefits office and does not provide legal representation or file formal claims, our care coordination team has extensive experience helping families understand the general framework of VA non-service-connected pensions like Aid & Attendance. We guide families on the basic qualifying criteria (such as minimum active-duty wartime service requirements, medical necessity for ADL assistance, and financial thresholds) and connect them with accredited Veterans Service Officers (VSOs) through organizations like the American Legion, VFW, or local county veterans affairs departments who assist with official filings at no charge.",
        "Caregiver matching is especially critical when working with veterans. We pair veterans with Certified Nursing Assistants (CNAs) and Personal Care Aides (PCAs) who understand the importance of punctuality, clear communication, personal space, and structured routines. Our caregivers take the time to learn your loved one's background: what branch they served in, their rank, their duty stations, and their preferred way of doing things. For veterans who enjoy reminiscing, our caregivers offer attentive, appreciative companionship; for those who prefer quiet efficiency, our caregivers deliver discreet, professional assistance.",
        "Under the leadership of our Virginia-licensed Registered Nurse, every veteran receives a personalized Plan of Care tailored to their specific physical and cognitive needs. Our RN conducts an in-home assessment evaluating joint mobility, transfer mechanics, fall hazards, and medication reminder schedules. The RN regularly reviews shift logs, conducts supervisory visits to the home, and coordinates closely with family members and local VA outpatient clinics, such as the Hunter Holmes McGuire VA Medical Center in Richmond.",
        "We also place special emphasis on supporting surviving spouses of military veterans. Many widows and widowers of wartime service members are unaware that they may be eligible for significant VA survivor pensions that can help pay for non-skilled in-home personal care. Our team provides compassionate, dedicated daily living support for surviving spouses, helping them remain independent, secure, and dignified in their family homes.",
      ]}
      faqs={[
        {
          q: "What is the VA Aid & Attendance pension benefit?",
          a: "VA Aid & Attendance is an enhanced monthly pension benefit paid by the Department of Veterans Affairs to eligible wartime veterans and surviving spouses who require regular assistance with activities of daily living (such as bathing, dressing, mobility, or medication reminders) or are housebound. The pension provides additional tax-free monthly income to help offset the cost of in-home care or assisted living.",
        },
        {
          q: "Does Archangels accept VA benefits directly as payment?",
          a: "Archangels operates as an independent private-pay licensed home care agency. Families pay our agency directly for services rendered, and when VA Aid & Attendance benefits are approved, the VA deposits pension funds directly into the veteran's or surviving spouse's bank account to reimburse and cover their care costs. We provide detailed, itemized care logs and invoices to support your VA documentation.",
        },
        {
          q: "Can care start while our VA Aid & Attendance application is still pending?",
          a: "Yes. In fact, starting private-pay care before or during the application process is often beneficial. The VA requires medical evidence that the veteran is currently paying for daily living assistance to demonstrate medical need and unreimbursed medical expenses. Care can begin within 24 to 48 hours of contacting us.",
        },
        {
          q: "Can surviving spouses of military veterans receive in-home care support?",
          a: "Yes. Surviving spouses of wartime veterans who were married to the veteran at the time of death and have not remarried may qualify for the VA Survivors Pension with Aid & Attendance. We provide comprehensive personal care, companionship, and respite for surviving spouses throughout Richmond and Mechanicsville.",
        },
        {
          q: "Can Archangels fill out or submit our VA paperwork for us?",
          a: "Under federal law, only accredited Veterans Service Officers (VSOs), claims agents, or accredited attorneys can legally prepare and submit VA benefit claims. We are not a claims agency, but we gladly share educational information and connect you with free, accredited local VSOs (such as the American Legion, VFW, or Virginia Department of Veterans Services) while our RN provides the required medical care statements.",
        },
        {
          q: "What basic service requirements make a veteran eligible for Aid & Attendance?",
          a: "Generally, the veteran must have served at least 90 days of active duty with at least one day during an eligible wartime period (such as WWII, Korean War, Vietnam Era, or Gulf War), received an honorable or other-than-dishonorable discharge, meet specific net worth and income limits, and have a medical doctor certify the need for daily assistance with ADLs.",
        },
        {
          q: "Are your caregivers trained in working with veterans with PTSD or trauma memories?",
          a: "Our caregivers receive training in empathetic communication, trauma-informed awareness, and de-escalation techniques. They understand how to maintain a calm, predictable environment, respect personal boundaries, and avoid sudden surprises that might trigger anxiety.",
        },
        {
          q: "Can caregivers drive veterans to appointments at the Richmond VA Medical Center?",
          a: "Yes. Caregivers provide safe door-to-door transportation and accompaniment to the Hunter Holmes McGuire VA Medical Center in Richmond and local outpatient clinics, assisting with parking, walking support, wheelchair transfers, and appointment check-ins.",
        },
        {
          q: "What tasks can caregivers assist a veteran with at home?",
          a: "Caregivers assist with bathing, showering, dressing, grooming, shaving, mobility transfers, fall prevention, meal planning and cooking, medication reminders, light housekeeping, laundry, grocery errands, and meaningful companionship.",
        },
        {
          q: "How does this service provide relief for caregiving spouses of veterans?",
          a: "Many veteran spouses carry the physical burden of caregiving alone for years. Our respite care services allow spousal caregivers to step away for a few hours or days to rest, recharge, attend their own medical appointments, and protect their physical and emotional health.",
        },
      ]}
      related={[
        { slug: "personal-care", label: "Personal Care Services" },
        { slug: "rn-supervision", label: "RN Supervision & Oversight" },
        { slug: "companionship", label: "Companionship & Social Engagement" },
        { slug: "respite-care", label: "Respite Care & Family Support" },
        { slug: "24-hour-care", label: "24-Hour Care" },
        { slug: "memory-care", label: "Alzheimer's & Memory Care" },
      ]}
    />
  );
}
