import Link from "next/link";
import { IconHeart, IconStethoscope, IconUsers, IconMoon, IconClock, IconInfinity } from "@/components/Icons";

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
              Search however you&apos;re searching — every one of these is a real service we deliver
              in Richmond, Mechanicsville, and Hanover County.
            </p>
          </div>
          <div className="related-grid">
            <a href="#personal-care" className="related-chip">Personal Care Services</a>
            <a href="#personal-care" className="related-chip">Bathing &amp; Dressing Assistance</a>
            <a href="#personal-care" className="related-chip">Activities of Daily Living (ADL) Support</a>
            <a href="#personal-care" className="related-chip">Mobility &amp; Fall Prevention Assistance</a>
            <a href="#rn-supervision" className="related-chip">RN Supervision &amp; Care Coordination</a>
            <a href="#rn-supervision" className="related-chip">Medication Management &amp; Compliance</a>
            <a href="#rn-supervision" className="related-chip">Registered Nurse Care Plans</a>
            <a href="#memory-care" className="related-chip">Alzheimer&apos;s Care</a>
            <a href="#memory-care" className="related-chip">Dementia Care</a>
            <a href="#memory-care" className="related-chip">Memory Care Support</a>
            <a href="#companionship" className="related-chip">Companion Care</a>
            <a href="#companionship" className="related-chip">Social Engagement for Seniors</a>
            <a href="#respite-care" className="related-chip">Respite Care</a>
            <a href="#respite-care" className="related-chip">Family Caregiver Relief</a>
            <a href="#respite-care" className="related-chip">Post-Surgical &amp; Recovery Support</a>
            <a href="#24-hour-care" className="related-chip">24-Hour Home Care</a>
            <a href="#24-hour-care" className="related-chip">Live-In Care</a>
            <a href="#24-hour-care" className="related-chip">Overnight &amp; Around-the-Clock Care</a>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW — explains all 5 services in prose before the cards */}
      <section className="section-tight reveal">
        <div className="wrap prose-center">
          <span className="eyebrow" style={{ justifyContent: "center" }}>What We Offer, In Full</span>
          <h2 style={{ marginTop: 14 }}>Six core services, every one delivered under RN supervision.</h2>
          <p>
            Archangels Personal Care provides six distinct, RN-supervised home care services throughout
            Richmond, Mechanicsville, and Hanover County: <strong>Personal Care Services</strong> for
            hands-on help with bathing, dressing, mobility, and daily living; <strong>RN Supervision &amp;
            Oversight</strong>, where a registered nurse builds and manages every care plan; <strong>Alzheimer&apos;s
            &amp; Memory Care</strong> for families navigating memory loss and behavioral changes;{" "}
            <strong>Companionship &amp; Social Engagement</strong> for seniors who want meaningful
            connection and reduced isolation; <strong>Respite Care &amp; Family Support</strong> so
            family caregivers can rest without compromising their loved one&apos;s care; and{" "}
            <strong>24-Hour Care</strong> for clients who need round-the-clock coverage across
            coordinated day, evening, and overnight shifts.
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
            <h2 style={{ marginTop: 14 }}>Six core services, explained in full.</h2>
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
                      <Link href={\`/services/\${s.id}\`} className="flip-more-link-front">
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
                        <Link href={\`/services/\${s.id}\`} className="flip-more-link">
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

      {/* SPECIALIZED FOCUS AREAS — non-skilled support tailored to specific situations */}
      <section className="section section-alt reveal">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Specialized Focus Areas</span>
            <h2>Support tailored to your specific situation.</h2>
            <p>
              These aren&apos;t separate service lines — they&apos;re how our six core services are
              applied for families facing a specific circumstance, always within non-skilled,
              RN-supervised home care.
            </p>
          </div>
          <div className="benefit-grid reveal-stagger">
            <div className="benefit-card">
              <h4>Parkinson&apos;s Care Support</h4>
              <p>
                Personal care and companionship tailored to Parkinson&apos;s-related mobility
                changes, tremors, and fall risk — delivered as non-skilled assistance under RN
                supervision, not clinical treatment.{" "}
                <Link href="/services/personal-care" style={{ color: "var(--terracotta)", fontWeight: 700 }}>
                  Learn more →
                </Link>
              </p>
            </div>
            <div className="benefit-card">
              <h4>Veteran &amp; Military Family Care</h4>
              <p>
                We&apos;re proud to serve veteran families and can help point you toward VA Aid
                &amp; Attendance and other resources that may help offset the cost of care, while
                our RN builds and supervises the actual care plan.{" "}
                <Link href="/services/rn-supervision" style={{ color: "var(--terracotta)", fontWeight: 700 }}>
                  Learn more →
                </Link>
              </p>
            </div>
            <div className="benefit-card">
              <h4>Post-Hospital &amp; Post-Surgical Recovery</h4>
              <p>
                Extra hands at home during the critical weeks after a hospital discharge or
                procedure, coordinated quickly — sometimes within 48 hours of a call.{" "}
                <Link href="/services/respite-care" style={{ color: "var(--terracotta)", fontWeight: 700 }}>
                  Learn more →
                </Link>
              </p>
            </div>
            <div className="benefit-card">
              <h4>End-of-Life Comfort &amp; Companion Care</h4>
              <p>
                Compassionate, non-medical presence and comfort care for clients and families
                navigating end of life, working alongside any hospice team already involved.{" "}
                <Link href="/services/24-hour-care" style={{ color: "var(--terracotta)", fontWeight: 700 }}>
                  Learn more →
                </Link>
              </p>
            </div>
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
            <strong>24/7 Care</strong> &mdash; round-the-clock live-in support from a team of
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
