import IntakeForm from "@/components/IntakeForm";
import { IconUsers, IconStethoscope, IconClock } from "@/components/Icons";

export default function ReferralPartnersPage() {
  return (
    <>
      <section className="care-hero">
        <div className="care-hero-photo" style={{ backgroundImage: "url(https://www.archangelspersonalcare.com/images/quality-of-life.jpg)" }} />
        <div className="wrap">
          <span className="eyebrow" style={{ color: "#f0c968", justifyContent: "center" }}>Referral Partners</span>
          <h1>Partner with a care team you can trust.</h1>
          <p>Hospitals, discharge planners, physicians, and senior communities refer patients to Archangels for responsive, RN-supervised care.</p>
        </div>
      </section>

      <section className="section reveal">
        <div className="wrap concierge-split">
          <div className="split-photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://www.archangelspersonalcare.com/images/nurse-with-patient.jpg" alt="Certified nursing assistant providing dignified personal care to client at home" />
          </div>
          <div>
            <span className="eyebrow">Why Partners Choose Us</span>
            <h2 style={{ marginTop: 14 }}>A referral your patients will thank you for.</h2>
            <p style={{ marginTop: 16, color: "var(--ink-soft)", fontSize: 16.5 }}>
              We know a referral reflects on you. That&apos;s why every Archangels placement is
              RN-supervised from day one, with a single point of contact who keeps your team
              looped in — not a black box after handoff.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt reveal">
        <div className="wrap">
          <div className="grid-3 reveal-stagger">
            <div className="card">
              <div className="card-icon"><IconClock /></div>
              <h4>Fast Response</h4>
              <p>We can often begin care the same day a referral comes in — critical for hospital discharges and urgent transitions.</p>
            </div>
            <div className="card">
              <div className="card-icon"><IconStethoscope /></div>
              <h4>RN-Supervised Care</h4>
              <p>Every plan is overseen by a registered nurse, with clear communication back to your team on care status.</p>
            </div>
            <div className="card">
              <div className="card-icon"><IconUsers /></div>
              <h4>A Single Point of Contact</h4>
              <p>Your team gets one reliable contact at Archangels for coordination, updates, and follow-up.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="wrap reveal" style={{ paddingBottom: 90 }}>
        <div className="form-card" style={{ maxWidth: 640, margin: "60px auto 0" }}>
          <h3>Submit a Referral</h3>
          <p className="sub">Send us the details and our care coordination team will reach out within 24 business hours — sooner for urgent cases.</p>
          <IntakeForm />
        </div>
      </section>
    </>
  );
}
