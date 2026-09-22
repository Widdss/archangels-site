import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Service Area | Home Care in Richmond, Chesterfield & Surrounding Counties, VA",
  description:
    "Archangels Personal Care serves Richmond, Chesterfield, Mechanicsville, Hanover County, Henrico, and surrounding Central Virginia counties including New Kent, Charles City, Amelia, King William, Dinwiddie, and Prince George.",
  alternates: {
    canonical: "https://www.archangelspersonalcare.com/service-area",
  },
  openGraph: {
    title: "Service Area | Archangels Personal Care",
    description:
      "RN-supervised home care throughout Richmond, Chesterfield, Mechanicsville, Hanover County, and surrounding Central Virginia counties.",
    url: "https://www.archangelspersonalcare.com/service-area",
    siteName: "Archangels Personal Care",
    type: "website",
  },
};

const AREAS = [
  "Richmond", "Chesterfield", "Mechanicsville", "Henrico", "Hanover County",
  "Ashland", "Goochland", "Powhatan", "Midlothian", "Glen Allen", "Short Pump",
  "New Kent County", "Charles City County", "Amelia County",
  "King William County", "Dinwiddie County", "Prince George County",
  "Petersburg", "Colonial Heights", "Hopewell",
];

export default function ServiceAreaPage() {
  return (
    <>
      <section className="care-hero">
        <div className="care-hero-photo" style={{ backgroundImage: "url(/images/recovery-support.jpg)" }} />
        <div className="wrap">
          <span className="eyebrow" style={{ color: "#f0c968", justifyContent: "center" }}>Service Area</span>
          <h1>Serving families across the Richmond metro.</h1>
          <p>We proudly serve families throughout Richmond, Chesterfield County, Mechanicsville, and Hanover County — plus the surrounding Central Virginia counties many home care agencies overlook.</p>
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
          <p style={{ fontSize: 16, color: "var(--ink-soft)", textAlign: "center", maxWidth: 720, margin: "0 auto" }}>
            Many home care agencies stop at the suburbs. We don&apos;t — families in New Kent,
            Charles City, Amelia, King William, Dinwiddie, and Prince George often have fewer
            local options for RN-supervised, VDH-licensed care, and we&apos;re glad to serve them
            with the same standard of care we bring to Richmond and Chesterfield.
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
