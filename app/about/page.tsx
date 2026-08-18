import Link from "next/link";
import { IconShield, IconUsers, IconHeart, IconStethoscope } from "@/components/Icons";

const VALUES = [
  { title: "Compassion", body: "We approach every client with genuine care and empathy, ensuring each visit is delivered with kindness." },
  { title: "Respect", body: "We honor the dignity, preferences, and independence of each individual we serve." },
  { title: "Trust", body: "We build relationships based on reliability, transparency, and consistent quality care." },
  { title: "Excellence", body: "We strive for the highest standards in care delivery and professional conduct." },
];

export default function AboutPage() {
  return (
    <>
      <section className="care-hero">
        <div className="care-hero-photo" style={{ backgroundImage: "url(https://www.archangelspersonalcare.com/images/quality-of-life.jpg)" }} />
        <div className="wrap">
          <span className="eyebrow" style={{ color: "#f0c968", justifyContent: "center" }}>About Us</span>
          <h1>Mechanicsville&apos;s VDH-regulated Home Care Organization.</h1>
          <p>Dignified, professional care with 24-hour availability and private-pay options.</p>
        </div>
      </section>

      <section className="section reveal">
        <div className="wrap concierge-split">
          <div>
            <span className="eyebrow">Who We Are</span>
            <h2 style={{ marginTop: 14 }}>Care from people who show up, every time.</h2>
            <p style={{ marginTop: 16, color: "var(--ink-soft)", fontSize: 16.5 }}>
              Archangels Personal Care LLC is a Mechanicsville-based home care organization
              committed to delivering professional, compassionate personal care services. We
              understand that inviting caregivers into your home requires trust — that&apos;s why
              we carefully select and train every team member, conducting comprehensive
              background checks and ongoing professional development.
            </p>
            <p style={{ marginTop: 14, color: "var(--ink-soft)", fontSize: 16.5 }}>
              We&apos;re regulated by the Virginia Department of Health under 12VAC5-381, and we
              maintain full compliance with all VDH requirements — including supervision
              standards, quality assurance protocols, and ongoing regulatory inspections.
            </p>
            <div className="split-photo" style={{ marginTop: 26 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://www.archangelspersonalcare.com/images/caregiver-black-with-elderly.jpg" alt="Home care professional providing personal care assistance to elderly client in Hanover County" />
            </div>
          </div>
          <div className="concierge-panel">
            <div style={{ fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", color: "#f0c968", fontWeight: 700, marginBottom: 16 }}>
              What Makes Us Different
            </div>
            <div className="feature-list" style={{ marginTop: 0 }}>
              {[
                ["Professional RN Supervision", "Registered nurses oversee all personal care services for quality assurance and safety."],
                ["Personalized Care Matching", "We select caregivers based on each client's needs, preferences, and personality fit."],
                ["VDH-Regulated HCO", "Regulated and inspected by the Virginia Department of Health for quality standards."],
                ["Flexible Payment Options", "Private-pay model with select third-party payers including MedLife."],
              ].map(([t, b]) => (
                <div className="feature-item" key={t}>
                  <div className="feature-icon" style={{ background: "rgba(250,246,238,0.12)", color: "#f0c968" }}><IconShield /></div>
                  <div>
                    <h4 style={{ color: "#faf6ee" }}>{t}</h4>
                    <p style={{ color: "rgba(250,246,238,0.75)" }}>{b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt reveal">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Our Values</span>
            <h2>What guides every visit.</h2>
          </div>
          <div className="grid-4 reveal-stagger">
            {VALUES.map((v) => (
              <div className="card" key={v.title}>
                <div className="card-icon"><IconHeart /></div>
                <h4>{v.title}</h4>
                <p>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section reveal">
        <div className="wrap grid-3 reveal-stagger" style={{ gridTemplateColumns: "1fr 1fr" }}>
          <div className="testimonial" style={{ paddingTop: 32 }}>
            <span className="eyebrow">Our Mission</span>
            <p className="quote" style={{ marginTop: 14, fontSize: 17 }}>
              &ldquo;Delivering dignified, professional personal care services to families
              throughout Mechanicsville, Hanover County, and the Richmond metro area.&rdquo;
            </p>
          </div>
          <div className="testimonial" style={{ paddingTop: 32 }}>
            <span className="eyebrow">Our Vision</span>
            <p className="quote" style={{ marginTop: 14, fontSize: 17 }}>
              &ldquo;To be Virginia&apos;s most trusted home care provider, where families feel
              supported and clients feel seen, heard, and safe.&rdquo;
            </p>
          </div>
        </div>
      </section>

      <section className="section section-tight reveal">
        <div className="wrap">
          <div className="cta-band">
            <div>
              <h3>Let&apos;s talk about your family&apos;s needs.</h3>
              <p>Schedule a free care consultation — no obligation.</p>
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
