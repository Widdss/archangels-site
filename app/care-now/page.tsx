import Link from "next/link";
import IntakeForm from "@/components/IntakeForm";
import { IconShield, IconClock, IconStethoscope, IconUsers, IconHeart } from "@/components/Icons";

const SERVING_AREAS = ["Richmond", "Mechanicsville", "Hanover County", "Henrico", "Chesterfield"];

const SERVICES_PROVIDED = [
  "Bathing & Personal Hygiene",
  "Dressing & Grooming",
  "Meal Preparation",
  "Medication Reminders",
  "Companion Care",
  "Mobility Assistance",
  "Light Housekeeping",
  "Errands & Shopping",
];

const WHY_US = [
  { icon: IconHeart, title: "Compassionate Care", body: "Our team treats every client like family, with dignity and respect." },
  { icon: IconShield, title: "Fully Regulated", body: "VDH-regulated, with every caregiver background checked and reference verified." },
  { icon: IconUsers, title: "Personalized Matching", body: "We carefully match caregivers to your specific needs and preferences." },
];

const FAQS = [
  { q: "How quickly can you get a caregiver?", a: "Same-day care is available in most cases. Call 804-903-8133 to check availability for your situation." },
  { q: "Are your caregivers background checked?", a: "Yes — all caregivers are thoroughly background checked and reference verified, per VDH regulations." },
  { q: "What areas do you serve?", a: "Richmond, Mechanicsville, Hanover County, Henrico, and Chesterfield, with both hourly and live-in care options." },
  { q: "Do you work with insurance?", a: "We operate on a private-pay model and work with select third-party payers, including MedLife. Call for details." },
];

export default function CareNowPage() {
  return (
    <>
      <section className="care-hero">
        <div className="care-hero-photo" />
        <div className="wrap">
          <span className="eyebrow" style={{ color: "#f0c968", justifyContent: "center" }}>
            Trusted Care Is One Call Away — Spots Are Limited
          </span>
          <h1>Don&apos;t wait for a crisis to find care.</h1>
          <p>
            Secure compassionate, professional home care today. Same-day availability for
            families who need support right now.
          </p>
        </div>
      </section>

      <section className="wrap reveal">
        <div className="care-layout">
          <div className="form-card">
            <h3>Request Care Now</h3>
            <p className="sub">
              Tell us a bit about your situation and a real member of our care team will follow
              up — usually the same day.
            </p>
            <IntakeForm />
            <p className="form-note" style={{ marginTop: 10 }}>
              We respect your privacy. Your information is secure and will only be used to contact
              you about your care needs.
            </p>
          </div>

          <div className="side-panel">
            <div className="phone-card">
              <div style={{ fontSize: 13, color: "rgba(250,246,238,0.75)" }}>Prefer to talk now?</div>
              <div className="num">804-903-8133</div>
              <a href="tel:8049038133" className="btn btn-ghost-light btn-block">Call Us Now</a>
            </div>

            <div className="side-card">
              <h4>Or ask our AI Care Concierge</h4>
              <p>
                Use the chat bubble in the bottom-right corner for instant answers about pricing,
                availability, and what to expect — any time, day or night.
              </p>
            </div>

            <div className="side-card">
              <h4><IconShield style={{ display: "inline", width: 16, verticalAlign: "-2px", marginRight: 6 }} />
                VDH-Licensed &amp; RN Supervised
              </h4>
              <p>Every care plan is delivered under professional RN oversight in full compliance with Virginia regulations.</p>
            </div>

            <div className="side-card">
              <h4><IconClock style={{ display: "inline", width: 16, verticalAlign: "-2px", marginRight: 6 }} />
                Same-Day Availability
              </h4>
              <p>Whether it&apos;s a few hours a week or round-the-clock live-in care, we can often start right away.</p>
            </div>

            <div className="split-photo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://www.archangelspersonalcare.com/images/caregiver-black-with-elderly.jpg" alt="Certified nursing assistant providing dignified personal care to client at home" />
            </div>
          </div>
        </div>
      </section>

      {/* SERVING YOUR AREA */}
      <section className="section-tight reveal">
        <div className="wrap">
          <div className="section-head" style={{ margin: "0 auto 30px" }}>
            <span className="eyebrow" style={{ justifyContent: "center" }}>Serving Your Area</span>
            <h2>We provide care throughout Richmond, Mechanicsville, Hanover County, Henrico, and Chesterfield.</h2>
          </div>
          <div className="related-grid">
            {SERVING_AREAS.map((a) => (
              <span key={a} className="related-chip" style={{ cursor: "default" }}>{a}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CARE SERVICES PROVIDED */}
      <section className="section section-alt reveal">
        <div className="wrap">
          <div className="section-head" style={{ margin: "0 auto 36px" }}>
            <span className="eyebrow" style={{ justifyContent: "center" }}>What&apos;s Included</span>
            <h2>Care Services Provided</h2>
          </div>
          <div className="included-grid reveal-stagger" style={{ maxWidth: 900, margin: "0 auto" }}>
            {SERVICES_PROVIDED.map((s) => (
              <div className="included-card" key={s}>
                <span className="dot" />
                <span>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY FAMILIES CHOOSE ARCHANGELS */}
      <section className="section reveal">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Why Families Choose Us</span>
            <h2>Why Families Choose Archangels</h2>
          </div>
          <div className="flex-grid-4 reveal-stagger">
            {WHY_US.map((w) => (
              <div className="card" key={w.title}>
                <div className="card-icon"><w.icon /></div>
                <h4>{w.title}</h4>
                <p>{w.body}</p>
              </div>
            ))}
            <div className="card">
              <div className="card-icon"><IconStethoscope /></div>
              <h4>Flexible Payment Options</h4>
              <p>We work with you to find an affordable care solution.</p>
              <ul className="detail-list" style={{ marginTop: 14 }}>
                <li>Private-pay flexible arrangements</li>
                <li>Work with select third-party payers (MedLife)</li>
                <li>Customized care hours &amp; pricing</li>
              </ul>
            </div>
          </div>
          <div style={{ marginTop: 34, textAlign: "center" }}>
            <Link href="/care-now" className="btn btn-primary">Get a Free Rate Quote</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-alt reveal">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Common Questions</span>
            <h2>Before you reach out.</h2>
          </div>
          <div className="grid-3 reveal-stagger" style={{ gridTemplateColumns: "1fr 1fr" }}>
            {FAQS.map((f) => (
              <div className="card" key={f.q}>
                <h4>{f.q}</h4>
                <p>{f.a}</p>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 26, fontSize: 13.5, color: "var(--ink-soft)", textAlign: "center" }}>
            Have a different question? Ask our AI Care Concierge in the corner, or call 804-903-8133.
          </p>
        </div>
      </section>
    </>
  );
}
