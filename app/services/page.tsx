import Link from "next/link";
import {
  IconHeart,
  IconStethoscope,
  IconUsers,
  IconMoon,
  IconClock,
  IconInfinity,
  IconPill,
  IconShield,
  IconBolt,
} from "@/components/Icons";

type ServiceCard = {
  id: string;
  icon: (props?: any) => JSX.Element;
  title: string;
  teaser: string;
  points: string[];
  note?: string;
};

const SERVICES: ServiceCard[] = [
  {
    id: "personal-care",
    icon: IconHeart,
    title: "Personal Care Services",
    teaser: "Hands-on help with daily living, delivered with dignity.",
    points: [
      "Bathing, grooming & dressing",
      "Toileting & incontinence care",
      "Transferring & mobility assistance",
      "Feeding assistance",
      "Meal preparation",
      "Light housekeeping & laundry",
      "Medication reminders & fall prevention",
      "Companion care & emotional support",
    ],
  },
  {
    id: "rn-supervision",
    icon: IconStethoscope,
    title: "RN Supervision & Oversight",
    teaser: "Every care plan is overseen by a registered nurse.",
    points: [
      "Supervision of non-skilled CNA/PCA care",
      "Medication compliance oversight & pillbox setup",
      "Health and wellness assessments",
      "Care plan development & coordination",
      "Communication with families and physicians",
    ],
    note:
      "Service scope: limited to supervision, care coordination, and medication compliance support within non-skilled home care guidelines. Skilled nursing — injections, IV therapy, wound care, or clinical treatment — is not provided.",
  },
  {
    id: "memory-care",
    icon: IconMoon,
    title: "Alzheimer's & Memory Care",
    teaser: "Specialized, patient support for memory loss and cognitive decline.",
    points: [
      "Safe environment management & fall prevention",
      "Assistance with ADLs & personal care",
      "Medication reminders & management oversight",
      "Behavioral support & redirection techniques",
      "Companionship & emotional support",
      "Respite care for family caregivers",
    ],
    note:
      "All dementia care is delivered under professional RN supervision by caregivers trained in dementia care techniques and compassionate communication.",
  },
  {
    id: "companionship",
    icon: IconUsers,
    title: "Companionship & Social Engagement",
    teaser: "Meaningful connection that fights isolation.",
    points: [
      "Friendly conversation and social interaction",
      "Accompanying to social events and outings",
      "Hobby and activity support",
      "Reading, games, and entertainment",
      "Emotional support and active listening",
    ],
  },
  {
    id: "respite-care",
    icon: IconClock,
    title: "Respite Care & Family Support",
    teaser: "Relief for family caregivers, without compromising care.",
    points: [
      "Flexible hourly or extended respite support",
      "Coverage for daytime or overnight care",
      "Continuity of care with established caregivers",
      "Comprehensive care coordination",
      "Peace of mind and caregiver support resources",
    ],
  },
  {
    id: "24-hour-care",
    icon: IconInfinity,
    title: "24-Hour Care",
    teaser: "Round-the-clock support across coordinated day, evening & overnight shifts.",
    points: [
      "Daytime coverage: personal care, meals, medication reminders",
      "Evening coverage: dinner, hygiene, bedtime routine",
      "Overnight coverage: supervision & emergency response",
      "Consistent caregiver team across all shifts",
      "Full RN oversight coordinating every shift",
    ],
  },
  {
    id: "parkinsons-care",
    icon: IconPill,
    title: "Parkinson's Care Support",
    teaser: "Patient, tremor-aware assistance and fall-risk mobility support.",
    points: [
      "Fall-risk-aware mobility & transfer assistance",
      "Dressing & grooming assistance adapted for tremors",
      "Medication reminders on a consistent schedule",
      "Exercise & walk companionship",
      "Respite for family caregivers",
    ],
    note: "Non-skilled, non-clinical care that coordinates around any neurology or therapy care already ordered.",
  },
  {
    id: "veterans-care",
    icon: IconShield,
    title: "Veterans In-Home Care",
    teaser: "Respectful care for veterans and their spouses, with resource guidance.",
    points: [
      "Personal care & assistance with daily living",
      "RN supervision & care plan oversight",
      "Guidance toward VA Aid & Attendance resources",
      "Care can start immediately, no waiting on VA approval",
      "Caregivers respectful of military culture",
    ],
    note: "Archangels is not a VA benefits office and does not provide legal or benefits advice.",
  },
  {
    id: "end-of-life-care",
    icon: IconMoon,
    title: "End-of-Life Comfort Care",
    teaser: "Non-medical comfort and presence, working alongside your hospice team.",
    points: [
      "Comfort-focused personal care",
      "Companionship & calm, steady presence",
      "Respite for family caregivers",
      "Coordination alongside your hospice team",
      "Flexible scheduling around hospice visits",
    ],
    note: "Non-medical comfort and companion care — does not replace hospice, palliative, or skilled nursing services.",
  },
  {
    id: "live-in-care",
    icon: IconInfinity,
    title: "Live-In Care",
    teaser: "One consistent, familiar caregiver residing in the home.",
    points: [
      "A live-in caregiver present in the home, with required rest breaks",
      "Daytime ADL assistance & overnight availability",
      "Meal preparation & light housekeeping",
      "RN oversight of the overall care plan",
      "An alternative to rotating-shift 24-Hour Care",
    ],
  },
  {
    id: "transition-care",
    icon: IconBolt,
    title: "Transition to Home Care",
    teaser: "Fast-start support for the critical days after hospital discharge.",
    points: [
      "Coordination with hospital discharge planners",
      "Rapid start — sometimes within 48 hours",
      "Safety-focused personal care during recovery",
      "Mobility & fall-prevention assistance",
      "RN check-ins during the vulnerable recovery window",
    ],
  },
  {
    id: "palliative-care",
    icon: IconHeart,
    title: "Palliative Care Support",
    teaser: "Comfort-focused daily support alongside your medical palliative team.",
    points: [
      "Comfort-focused personal care",
      "Medication reminders coordinated with your care team",
      "Companionship & emotional support",
      "Respite for family caregivers",
      "Communication with family about daily observations",
    ],
    note: "Non-skilled comfort support that works alongside a physician-led palliative care team, not in place of it.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="care-hero">
        <div className="care-hero-photo" />
        <div className="wrap">
          <span className="eyebrow" style={{ color: "#f0c968", justifyContent: "center" }}>Our Services</span>
          <h1>Care built around your family, not a checklist.</h1>
          <p>RN-supervised, VDH-licensed services delivered by CNAs and PCAs throughout the Richmond metro area.</p>
        </div>
      </section>

      {/* TYPES OF CARE — comprehensive top-of-page list for SEO + fast scanning */}
      <section className="section-tight reveal" aria-label="Types of home care services we provide">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Types Of Care We Provide</span>
            <h2>Every kind of non-skilled home care support, in one place.</h2>
            <p>
              Search however you&apos;re searching — every one of these is a real, dedicated service
              page, not just a mention. We deliver all of this throughout Richmond, Mechanicsville,
              and Hanover County.
            </p>
          </div>
          <div className="related-grid">
            <Link href="/services/personal-care" className="related-chip">Personal Care Services</Link>
            <Link href="/services/personal-care" className="related-chip">Bathing &amp; Dressing Assistance</Link>
            <Link href="/services/personal-care" className="related-chip">Activities of Daily Living (ADL) Support</Link>
            <Link href="/services/rn-supervision" className="related-chip">RN Supervision &amp; Care Coordination</Link>
            <Link href="/services/rn-supervision" className="related-chip">Medication Management &amp; Compliance</Link>
            <Link href="/services/memory-care" className="related-chip">Alzheimer&apos;s Care</Link>
            <Link href="/services/memory-care" className="related-chip">Dementia Care</Link>
            <Link href="/services/companionship" className="related-chip">Companion Care</Link>
            <Link href="/services/respite-care" className="related-chip">Respite Care</Link>
            <Link href="/services/respite-care" className="related-chip">Family Caregiver Relief</Link>
            <Link href="/services/24-hour-care" className="related-chip">24-Hour Home Care</Link>
            <Link href="/services/live-in-care" className="related-chip">Live-In Care</Link>
            <Link href="/services/parkinsons-care" className="related-chip">Parkinson&apos;s Care</Link>
            <Link href="/services/veterans-care" className="related-chip">Veterans In-Home Care</Link>
            <Link href="/services/end-of-life-care" className="related-chip">End-of-Life Care</Link>
            <Link href="/services/palliative-care" className="related-chip">Palliative Care Support</Link>
            <Link href="/services/transition-care" className="related-chip">Transition to Home Care</Link>
            <Link href="/services/transition-care" className="related-chip">Post-Hospital &amp; Post-Surgical Recovery</Link>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW — explains all services in prose before the cards */}
      <section className="section-tight reveal">
        <div className="wrap prose-center">
          <span className="eyebrow" style={{ justifyContent: "center" }}>What We Offer, In Full</span>
          <h2 style={{ marginTop: 14 }}>Twelve dedicated services, every one RN-supervised.</h2>
          <p>
            Archangels Personal Care provides twelve distinct, RN-supervised home care services
            throughout Richmond, Mechanicsville, and Hanover County — from foundational{" "}
            <strong>Personal Care Services</strong> and <strong>RN Supervision &amp; Oversight</strong>,
            to specialized support like <strong>Alzheimer&apos;s &amp; Memory Care</strong>,{" "}
            <strong>Parkinson&apos;s Care Support</strong>, <strong>Veterans In-Home Care</strong>,{" "}
            <strong>End-of-Life Comfort Care</strong>, and <strong>Palliative Care Support</strong>,
            plus flexible coverage models including <strong>Companionship &amp; Social Engagement</strong>,{" "}
            <strong>Respite Care &amp; Family Support</strong>, <strong>Live-In Care</strong>,{" "}
            <strong>24-Hour Care</strong>, and fast-start <strong>Transition to Home Care</strong> for
            the days right after a hospital discharge.
          </p>
          <p>
            Every one of these has its own dedicated page below with the full breakdown &mdash; who it&apos;s
            for, signs it might be time, everything included, our approach, and answers to the questions
            families ask most.
          </p>
        </div>
      </section>

      {/* FULL-DETAIL INTERACTIVE SERVICES */}
      <section className="section section-alt reveal">
        <div className="wrap">
          <div className="flip-section-head">
            <span className="eyebrow">Every Service, Fully Explained</span>
            <h2 style={{ marginTop: 14 }}>Twelve services, explained in full.</h2>
            <p style={{ marginTop: 14, fontSize: 15.5, color: "var(--ink-soft)" }}>
              Hover any card for a quick preview, or open the full page for complete details, FAQs, and
              what to expect.
            </p>
          </div>

          <div className="flip-grid reveal-stagger">
            {SERVICES.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.id} id={s.id} className="flip-card" style={{ scrollMarginTop: 100 }}>
                  <div className="flip-card-inner">
                    <div className="flip-card-face flip-card-front">
                      <div className="card-icon">
                        <Icon />
                      </div>
                      <h4>{s.title}</h4>
                      <p>{s.teaser}</p>
                      <Link href={`/services/${s.id}`} className="flip-more-link-front">
                        View full service page →
                      </Link>
                      <span className="flip-hint">Hover to preview</span>
                    </div>
                    <div className="flip-card-face flip-card-back">
                      <h4>{s.title}</h4>
                      <ul>
                        {s.points.map((p) => (
                          <li key={p}>{p}</li>
                        ))}
                      </ul>
                      {s.note && <p className="flip-note">{s.note}</p>}
                      <div className="flip-card-back-footer">
                        <Link href={`/services/${s.id}`} className="flip-more-link">
                          View full details &amp; FAQs →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CARE PACKAGES — kept light, no boxed cards */}
      <section className="section-tight reveal">
        <div className="wrap prose-center">
          <span className="eyebrow" style={{ justifyContent: "center" }}>Care Packages</span>
          <h2 style={{ marginTop: 14 }}>Choose the level of support that fits.</h2>
          <p>
            <strong>Hourly Care</strong> &mdash; flexible support when you need it, minimum 3-hour
            visits, no long-term commitment. <strong>Daily Care</strong> &mdash; consistent
            daytime support with 8&ndash;12 hour shifts and a consistent caregiver.{" "}
            <strong>Live-In Care</strong> &mdash; one consistent caregiver residing in the home.{" "}
            <strong>24/7 Care</strong> &mdash; round-the-clock rotating-shift support from a team of
            caregivers, with full RN supervision throughout.
          </p>
          <p style={{ marginTop: 18, fontSize: 13.5 }}>
            Service scope: RN services are limited to supervision, care coordination, and
            medication compliance support within non-skilled home care guidelines. Skilled nursing
            services — including injections, IV therapy, wound care, or clinical treatment — are
            not provided.
          </p>
        </div>
      </section>

      <section className="section-tight reveal">
        <div className="wrap">
          <div className="split-photo" style={{ maxWidth: 900, margin: "0 auto" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://www.archangelspersonalcare.com/images/nurse-with-patient.jpg" alt="Registered nurse providing RN-supervised home care services in Richmond VA" />
          </div>
        </div>
      </section>

      <section className="section section-tight reveal">
        <div className="wrap">
          <div className="cta-band">
            <div>
              <h3>Ready to get started?</h3>
              <p>Our team is available 24 hours a day to answer your questions.</p>
            </div>
            <div className="cta-band-actions">
              <a href="tel:8049038133" className="btn" style={{ background: "#fff", color: "var(--terracotta)" }}>Call 804-903-8133</a>
              <Link href="/care-now" className="btn btn-ghost-light">Request Care Now</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
