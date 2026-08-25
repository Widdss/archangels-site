import Link from "next/link";
import GoogleReviews from "@/components/GoogleReviews";
import {
  IconShield,
  IconHeart,
  IconPill,
  IconUsers,
  IconStethoscope,
  IconClock,
  IconBolt,
  IconMoon,
} from "@/components/Icons";

const TRUST_ITEMS = [
  "VDH-Licensed Home Care Organization",
  "RN-Supervised Care Plans",
  "CNA & PCA Certified Caregivers",
  "24/7 AI Care Concierge",
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-photo" />
        <div className="hero-aura" />
        <div className="wrap hero-inner">
          <div>
            <span className="eyebrow" style={{ color: "#f0c968" }}>
              Richmond &middot; Mechanicsville &middot; Hanover County
            </span>
            <h1>Home care that still feels like home.</h1>
            <p className="hero-sub">
              Archangels Personal Care pairs RN-supervised caregivers with a 24/7 AI care
              concierge — so your family gets compassionate, professional support the moment
              you need it, day or night.
            </p>
            <div className="hero-actions">
              <Link href="/care-now" className="btn btn-primary">
                Request Care Now
              </Link>
              <Link href="/services" className="btn btn-ghost-light">
                Explore Our Services
              </Link>
            </div>
            <div className="trust-row">
              <span className="trust-item"><IconShield />Licensed HCO</span>
              <span className="trust-item"><IconStethoscope />RN Supervised</span>
              <span className="trust-item"><IconClock />Same-Day Availability</span>
              <span className="trust-item"><IconHeart />VDH Regulated</span>
            </div>
          </div>

          <div className="hero-card">
            <div className="hero-card-head">
              <span className="hero-card-dot" />
              <div>
                <div className="hero-card-title">Archangels AI Care Concierge</div>
                <div className="hero-card-sub">Online now &middot; usually replies instantly</div>
              </div>
            </div>
            <div className="chat-bubble bot">
              Hi, I&apos;m here to help. Are you looking for care for yourself or a loved one?
            </div>
            <div className="chat-bubble user">My mom, she&apos;s 82 and recently had a fall.</div>
            <div className="chat-bubble bot">
              I&apos;m sorry to hear that. We offer RN-supervised personal care and fall-prevention
              support, with same-day availability in Richmond. Want me to have our care team call
              you within the hour?
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP — scrolling marquee */}
      <section className="reveal" style={{ padding: "26px 0", background: "var(--ivory-deep)", borderBottom: "1px solid var(--line)" }}>
        <div className="wrap trust-marquee">
          <div className="trust-marquee-track">
            {[...TRUST_ITEMS, ...TRUST_ITEMS].map((t, i) => (
              <span className="trust-marquee-item" key={`${t}-${i}`}>
                <span className="dot" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO BAND */}
      <section className="section-tight reveal">
        <div className="wrap">
          <div className="photo-band">
            <div className="photo-card">
              <div className="photo-card-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/caregiver-black-with-elderly.jpg" alt="Home care professional providing personal care assistance to elderly client in Hanover County" />
              </div>
              <span className="photo-card-label"><span className="dot" />Personal care, delivered with dignity</span>
            </div>
            <div className="photo-card">
              <div className="photo-card-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/nurse-with-patient.jpg" alt="Certified nursing assistant providing dignified personal care to client at home" />
              </div>
              <span className="photo-card-label"><span className="dot" />Caregivers our families trust</span>
            </div>
            <div className="photo-card">
              <div className="photo-card-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/quality-of-life.jpg" alt="Registered nurse providing professional RN supervision and care coordination services" />
              </div>
              <span className="photo-card-label"><span className="dot" />Every plan, RN supervised</span>
            </div>
          </div>
        </div>
      </section>

      {/* AI CONCIERGE FEATURE */}
      <section className="section reveal">
        <div className="wrap concierge-split">
          <div>
            <span className="eyebrow">A New Standard in Home Care</span>
            <h2 style={{ marginTop: 14 }}>
              Leading Richmond home care into the AI era &mdash; without losing the human touch.
            </h2>
            <p style={{ marginTop: 16, color: "var(--ink-soft)", fontSize: 16.5 }}>
              Most families searching for care at 11pm just want a straight answer. Our AI Care
              Concierge is trained on our services, pricing structure, and coverage area so it
              can talk you through your options immediately — then hands off to a real member of
              our care team for anything that needs a human touch.
            </p>
            <div className="feature-list">
              <div className="feature-item">
                <div className="feature-icon"><IconBolt /></div>
                <div>
                  <h4>Instant answers, day or night</h4>
                  <p>No hold music, no next-business-day callbacks. Get real information the moment you need it.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><IconUsers /></div>
                <div>
                  <h4>Warm hand-off to our care team</h4>
                  <p>Anything urgent or personal is routed straight to a real caregiver coordinator — never left to a bot alone.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><IconMoon /></div>
                <div>
                  <h4>Built for the 2am worry</h4>
                  <p>Families researching care rarely do it during business hours. We built our concierge for exactly that moment.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="concierge-panel">
            <div style={{ fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", color: "#f0c968", fontWeight: 700, marginBottom: 14 }}>
              Ask our AI concierge
            </div>
            <div className="chat-bubble bot" style={{ background: "rgba(250,246,238,0.1)", color: "#faf6ee" }}>
              What kind of care do you offer for someone with early-stage dementia?
            </div>
            <div className="chat-bubble bot" style={{ background: "rgba(250,246,238,0.1)", color: "#faf6ee" }}>
              Do you accept long-term care insurance?
            </div>
            <div className="chat-bubble bot" style={{ background: "rgba(250,246,238,0.1)", color: "#faf6ee" }}>
              How fast could someone start if we need care this week?
            </div>
            <div style={{ marginTop: 18 }}>
              <span style={{ fontSize: 13, color: "rgba(250,246,238,0.7)" }}>
                Open the chat bubble in the corner to try it — or&nbsp;
              </span>
              <Link href="/care-now" style={{ fontSize: 13, color: "#f0c968", fontWeight: 700 }}>
                request care now →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section section-alt reveal">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">What We Offer</span>
            <h2>Care built around your family, not a checklist.</h2>
            <p>
              Every plan is delivered by CNAs and PCAs under professional RN supervision, in full
              compliance with Virginia Home Care Organization licensing.
            </p>
          </div>
          <div className="grid-4 reveal-stagger">
            <div className="card">
              <div className="card-icon"><IconHeart /></div>
              <h4>Personal Care</h4>
              <p>Bathing, grooming, dressing, mobility support and hands-on assistance with daily living.</p>
            </div>
            <div className="card">
              <div className="card-icon"><IconPill /></div>
              <h4>Medication Oversight</h4>
              <p>Medication reminders, pillbox setup, and compliance oversight by qualified professionals.</p>
            </div>
            <div className="card">
              <div className="card-icon"><IconUsers /></div>
              <h4>Companionship</h4>
              <p>Meaningful conversation, social engagement, and emotional support that fights isolation.</p>
            </div>
            <div className="card">
              <div className="card-icon"><IconStethoscope /></div>
              <h4>RN Supervision</h4>
              <p>Health assessments, care coordination, and full oversight from a registered nurse.</p>
            </div>
          </div>
          <div style={{ marginTop: 34, textAlign: "center" }}>
            <Link href="/services" className="btn btn-outline">View All Services</Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS — live-syncing Google reviews (falls back to verified real reviews) */}
      <section className="section reveal">
        <div className="wrap">
          <GoogleReviews />
        </div>
      </section>

      {/* CTA */}
      <section className="section section-tight reveal">
        <div className="wrap">
          <div className="cta-band">
            <div>
              <h3>Don&apos;t wait for a crisis to find care.</h3>
              <p>Same-day availability for families who need support right now, in Richmond, Mechanicsville, and Hanover County.</p>
            </div>
            <div className="cta-band-actions">
              <a href="tel:8049038133" className="btn" style={{ background: "#fff", color: "var(--terracotta)" }}>
                Call 804-903-8133
              </a>
              <Link href="/care-now" className="btn btn-ghost-light">
                Request Care Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
