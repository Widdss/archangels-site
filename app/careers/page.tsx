import type { Metadata } from "next";
import { IconHeart, IconUsers, IconShield, IconStethoscope } from "@/components/Icons";
import CareerApplicationForm from "@/components/CareerApplicationForm";

export const metadata: Metadata = {
  title: "CNA, PCA & RN Jobs in Richmond & Mechanicsville, VA | Archangels Personal Care Careers",
  description:
    "Join Archangels Personal Care as a CNA, PCA, or Licensed RN. Competitive pay, flexible schedules, and RN-supervised support in a VDH-licensed home care organization. Apply online today.",
};

type Position = {
  title: string;
  schedule: string;
  description: string;
  compensation: string[];
  requirements: string[];
  perks: string;
};

const POSITIONS: Position[] = [
  {
    title: "Certified Nursing Assistant (CNA)",
    schedule: "Part-time and Full-time positions available",
    description:
      "We're seeking compassionate CNAs to provide personal care, assist with activities of daily living, and support our clients' independence and dignity throughout Richmond and Mechanicsville.",
    compensation: ["Competitive hourly rates based on shift and experience"],
    requirements: [
      "Valid Virginia CNA certification",
      "Clean criminal background check (VDH barrier crimes screening)",
      "Professional references with employment verification",
      "Reliable transportation within Mechanicsville/Hanover County",
    ],
    perks: "Professional employment • Competitive hourly pay • Flexible scheduling",
  },
  {
    title: "Personal Care Aide (PCA)",
    schedule: "Part-time and Full-time positions available",
    description:
      "Join our team as a PCA to provide companionship, light housekeeping, and assistance with daily activities for our clients in Richmond, Mechanicsville, and Hanover County.",
    compensation: ["Competitive compensation based on experience"],
    requirements: [
      "PCA certification preferred or willingness to train",
      "Experience in home care helpful",
      "Reliable transportation",
      "Compassionate attitude and commitment to dignified care",
    ],
    perks: "Professional employment • Comprehensive training provided • RN supervision and support",
  },
  {
    title: "Licensed RN",
    schedule: "Part-time/PRN positions available",
    description:
      "We're looking for experienced RNs to provide RN supervision services, medication management, and care coordination in our VDH-licensed home care organization serving Richmond and Mechanicsville.",
    compensation: [],
    requirements: [
      "Current Virginia RN license in good standing",
      "Minimum 2 years healthcare experience",
      "Home care or supervisory experience preferred",
      "Strong assessment and communication skills",
    ],
    perks: "Professional employment • Flexible schedule • Professional nursing environment",
  },
];

const POSITION_FOCUS = [
  "RN supervision of CNA/PCA services",
  "Medication management oversight",
  "Care coordination and quality assurance",
];

export default function CareersPage() {
  return (
    <>
      <section className="care-hero">
        <div className="care-hero-photo" style={{ backgroundImage: "url(https://www.archangelspersonalcare.com/images/quality-of-life.jpg)" }} />
        <div className="wrap">
          <span className="eyebrow" style={{ color: "#f0c968", justifyContent: "center" }}>Careers</span>
          <h1>CNA & PCA Jobs in Richmond & Mechanicsville, VA</h1>
          <p>
            Archangels Personal Care LLC is looking for compassionate caregivers to join our team.
            We offer competitive pay, flexible schedules, and the support of a professionally
            managed VDH-licensed home care organization. All positions require successful
            background checks and reference verification in accordance with VDH regulations.
          </p>
        </div>
      </section>

      <section className="section reveal">
        <div className="wrap concierge-split">
          <div>
            <span className="eyebrow">Why Join Archangels</span>
            <h2 style={{ marginTop: 14 }}>A team that treats caregiving like the profession it is.</h2>
            <p style={{ marginTop: 16, color: "var(--ink-soft)", fontSize: 16.5 }}>
              We&apos;re looking for CNAs, PCAs, and RNs who want more than a shift — real
              relationships, real support from RN supervisors, and a schedule that works with
              your life, not against it.
            </p>
          </div>
          <div className="split-photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://www.archangelspersonalcare.com/images/nurse-with-patient.jpg" alt="Home care professional providing personal care assistance to elderly client in Hanover County" />
          </div>
        </div>
      </section>

      <section className="section section-alt reveal">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Why Work With Us</span>
            <h2>What makes Archangels different.</h2>
          </div>
          <div className="grid-4 reveal-stagger">
            <div className="card">
              <div className="card-icon"><IconShield /></div>
              <h4>Flexible Schedules</h4>
              <p>We work with you to create a schedule that fits your life and availability.</p>
            </div>
            <div className="card">
              <div className="card-icon"><IconUsers /></div>
              <h4>Professional Development</h4>
              <p>Ongoing training and opportunities to enhance your skills and advance your career.</p>
            </div>
            <div className="card">
              <div className="card-icon"><IconHeart /></div>
              <h4>Work-Life Balance</h4>
              <p>We value your personal time and strive to create sustainable work arrangements.</p>
            </div>
            <div className="card">
              <div className="card-icon"><IconStethoscope /></div>
              <h4>Supportive Leadership</h4>
              <p>Our management team is accessible, responsive, and committed to your success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* OPEN POSITIONS */}
      <section className="section reveal">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Open Positions</span>
            <h2>Every role, fully explained.</h2>
          </div>
          <div style={{ maxWidth: 820, margin: "0 auto" }}>
            {POSITIONS.map((pos) => (
              <div className="position-card" key={pos.title}>
                <div className="position-card-head">
                  <h3>{pos.title}</h3>
                  <span className="position-tag">Now Hiring</span>
                </div>
                <p className="position-sub">{pos.schedule}</p>
                <p className="position-desc">{pos.description}</p>

                <div className="position-cols">
                  {pos.title === "Licensed RN" ? (
                    <div>
                      <h5>Position Focus</h5>
                      <ul>
                        {POSITION_FOCUS.map((f) => (
                          <li key={f}>{f}</li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    pos.compensation.length > 0 && (
                      <div>
                        <h5>Compensation</h5>
                        <ul>
                          {pos.compensation.map((c) => (
                            <li key={c}>{c}</li>
                          ))}
                        </ul>
                      </div>
                    )
                  )}
                  <div>
                    <h5>Requirements</h5>
                    <ul>
                      {pos.requirements.map((r) => (
                        <li key={r}>{r}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="position-footer">
                  <span className="position-perks">{pos.perks}</span>
                  <a href="#apply" className="btn btn-outline">Apply Now</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section id="apply" className="section section-alt reveal">
        <div className="wrap">
          <div className="section-head" style={{ maxWidth: 640, margin: "0 auto 30px" }}>
            <span className="eyebrow" style={{ justifyContent: "center" }}>Apply Now</span>
            <h2>Ready to join our team?</h2>
            <p>
              Fill out the form below and attach your resume — a member of our team reviews every
              application.
            </p>
          </div>
          <div className="form-card" style={{ maxWidth: 560, margin: "0 auto" }}>
            <CareerApplicationForm />
          </div>
        </div>
      </section>

      <section className="section section-tight reveal">
        <div className="wrap">
          <div className="cta-band">
            <div>
              <h3>Prefer to talk it through first?</h3>
              <p>Call us or email to learn more about current openings for CNAs, PCAs, and RNs.</p>
            </div>
            <div className="cta-band-actions">
              <a href="tel:8049038133" className="btn" style={{ background: "#fff", color: "var(--terracotta)" }}>Call 804-903-8133</a>
              <a href="mailto:info@archangelspersonalcare.com" className="btn btn-ghost-light">Email Us</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
