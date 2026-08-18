import Link from "next/link";

const AREAS = [
  "Richmond", "Mechanicsville", "Hanover County", "Henrico", "Chesterfield",
  "Ashland", "Goochland", "Powhatan", "Midlothian", "Glen Allen",
  "Petersburg", "Colonial Heights", "Hopewell", "Short Pump",
];

export default function ServiceAreaPage() {
  return (
    <>
      <section className="care-hero">
        <div className="care-hero-photo" style={{ backgroundImage: "url(https://www.archangelspersonalcare.com/images/recovery-support.jpg)" }} />
        <div className="wrap">
          <span className="eyebrow" style={{ color: "#f0c968", justifyContent: "center" }}>Service Area</span>
          <h1>Serving families across the Richmond metro.</h1>
          <p>We proudly serve clients throughout Mechanicsville, Hanover County, and surrounding Virginia areas.</p>
        </div>
      </section>

      <section className="section reveal">
        <div className="wrap">
          <div className="grid-4 reveal-stagger">
            {AREAS.map((a) => (
              <div className="card" key={a} style={{ textAlign: "center" }}>
                <h4 style={{ marginBottom: 0 }}>{a}</h4>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 24, fontSize: 13.5, color: "var(--ink-soft)", textAlign: "center" }}>
            * And all surrounding areas — call to confirm coverage for your address.
          </p>
        </div>
      </section>

      <section className="section section-tight reveal">
        <div className="wrap">
          <div className="cta-band">
            <div>
              <h3>Not sure if we cover your area?</h3>
              <p>Give us a call or send a request — we&apos;ll let you know right away.</p>
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
