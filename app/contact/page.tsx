import IntakeForm from "@/components/IntakeForm";

const SERVICE_AREAS = [
  "Richmond", "Mechanicsville", "Hanover County", "Henrico", "Chesterfield",
  "Ashland", "Goochland", "Powhatan", "Midlothian", "Glen Allen",
  "Petersburg", "Colonial Heights", "Hopewell", "Short Pump",
];

export default function ContactPage() {
  return (
    <>
      <section className="care-hero">
        <div className="care-hero-photo" style={{ backgroundImage: "url(/images/caregiver-black-with-elderly.jpg)" }} />
        <div className="wrap">
          <span className="eyebrow" style={{ color: "#f0c968", justifyContent: "center" }}>Contact Us</span>
          <h1>We&apos;re here to help.</h1>
          <p>Whether you&apos;re exploring care options or need support right now, reach out any time. We respond to all inquiries within 24 business hours.</p>
        </div>
      </section>

      <section className="wrap reveal" style={{ paddingBottom: 90 }}>
        <div className="care-layout">
          <div className="form-card">
            <h3>Get In Touch</h3>
            <p className="sub">Prefer a quick chat first? Use the AI Care Concierge bubble in the corner.</p>
            <IntakeForm />
          </div>

          <div className="side-panel">
            <div className="phone-card">
              <div style={{ fontSize: 13, color: "rgba(250,246,238,0.75)" }}>Call us directly</div>
              <div className="num">804-903-8133</div>
              <a href="tel:8049038133" className="btn btn-ghost-light btn-block">Call Now</a>
            </div>

            <div className="side-card">
              <h4>Email</h4>
              <p>info@archangelspersonalcare.com</p>
            </div>

            <div className="side-card">
              <h4>Office</h4>
              <p>Private Location Office &middot; Mechanicsville, VA 23111</p>
            </div>

            <div className="side-card">
              <h4>Hours</h4>
              <p>
                Administrative Office: Monday–Friday, 9am–5pm
                <br />
                Care Services: Available 24/7, including weekends and holidays
              </p>
            </div>

            <div className="split-photo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/recovery-support.jpg" alt="Registered nurse providing professional RN supervision and care coordination services" />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="section section-alt reveal">
        <div className="wrap">
          <div className="section-head" style={{ margin: "0 auto 36px" }}>
            <span className="eyebrow" style={{ justifyContent: "center" }}>Service Areas</span>
            <h2>We proudly serve clients throughout Mechanicsville, Hanover County, and surrounding Virginia areas.</h2>
          </div>
          <div className="related-grid">
            {SERVICE_AREAS.map((a) => (
              <span key={a} className="related-chip" style={{ cursor: "default" }}>
                {a}
              </span>
            ))}
          </div>
          <p style={{ marginTop: 24, fontSize: 13.5, color: "var(--ink-soft)", textAlign: "center" }}>
            * And all surrounding areas
          </p>
        </div>
      </section>
    </>
  );
}
