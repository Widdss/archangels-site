import Link from "next/link";

type FAQ = { q: string; a: string };
type Related = { slug: string; label: string };
type Step = { title: string; desc: string };
type Benefit = { title: string; desc: string };

export default function ServiceDetailLayout({
  eyebrow,
  title,
  intro,
  heroImg,
  heroAlt,
  whoFor,
  signs,
  included,
  steps,
  benefits,
  approach,
  note,
  faqs,
  related,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  heroImg: string;
  heroAlt: string;
  whoFor: string[];
  signs?: string[];
  included: string[];
  steps?: Step[];
  benefits?: Benefit[];
  approach: string[];
  note?: string;
  faqs: FAQ[];
  related: Related[];
}) {
  return (
    <>
      <section className="care-hero">
        <div className="care-hero-photo" style={{ backgroundImage: `url(${heroImg})` }} />
        <div className="wrap">
          <span className="eyebrow" style={{ color: "#f0c968", justifyContent: "center" }}>{eyebrow}</span>
          <h1>{title}</h1>
          <p>{intro}</p>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="section reveal">
        <div className="wrap concierge-split">
          <div>
            <span className="eyebrow">Who This Is For</span>
            <h2 style={{ marginTop: 14 }}>Is this the right fit for your family?</h2>
            <ul className="detail-list">
              {whoFor.map((w) => (
                <li key={w}>{w}</li>
              ))}
            </ul>
            <div style={{ marginTop: 30 }}>
              <Link href="/care-now" className="btn btn-primary">Request This Care</Link>
            </div>
          </div>
          <div className="split-photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={heroImg} alt={heroAlt} />
          </div>
        </div>
      </section>

      {/* SIGNS IT MIGHT BE TIME */}
      {signs && signs.length > 0 && (
        <section className="section-tight section-dark reveal">
          <div className="wrap">
            <div className="section-head" style={{ margin: "0 auto 34px" }}>
              <span className="eyebrow" style={{ justifyContent: "center", color: "#f0c968" }}>Signs It Might Be Time</span>
              <h2>When families usually reach out.</h2>
            </div>
            <div className="signs-grid reveal-stagger" style={{ maxWidth: 920, margin: "0 auto" }}>
              {signs.map((s) => (
                <div className="sign-item" key={s}>
                  <span>{s}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* WHAT'S INCLUDED */}
      <section className="section section-alt reveal">
        <div className="wrap">
          <div className="section-head" style={{ textAlign: "center", margin: "0 auto 40px" }}>
            <span className="eyebrow" style={{ justifyContent: "center" }}>What&apos;s Included</span>
            <h2>Everything covered under this service.</h2>
          </div>
          <div className="included-grid reveal-stagger" style={{ maxWidth: 900, margin: "0 auto" }}>
            {included.map((i) => (
              <div className="included-card" key={i}>
                <span className="dot" />
                <span>{i}</span>
              </div>
            ))}
          </div>
          {note && (
            <p style={{ marginTop: 26, fontSize: 13.5, color: "var(--ink-soft)", maxWidth: 860, margin: "26px auto 0" }}>
              {note}
            </p>
          )}
        </div>
      </section>

      {/* HOW IT WORKS */}
      {steps && steps.length > 0 && (
        <section className="section section-alt reveal">
          <div className="wrap">
            <div className="section-head" style={{ textAlign: "center", margin: "0 auto 10px" }}>
              <span className="eyebrow" style={{ justifyContent: "center" }}>How It Works</span>
              <h2>Getting started, step by step.</h2>
            </div>
            <div className="process-steps">
              {steps.map((s, i) => (
                <div className="process-step" key={s.title}>
                  <div className="process-step-num">{i + 1}</div>
                  <div className="process-step-body">
                    <h4>{s.title}</h4>
                    <p>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* APPROACH */}
      <section className="section reveal">
        <div className="wrap prose-center">
          <span className="eyebrow" style={{ justifyContent: "center" }}>Our Approach</span>
          <h2 style={{ marginTop: 14 }}>How we deliver this service.</h2>
          {approach.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE THIS SERVICE */}
      {benefits && benefits.length > 0 && (
        <section className="section section-tight reveal">
          <div className="wrap">
            <div className="section-head" style={{ textAlign: "center", margin: "0 auto 34px" }}>
              <span className="eyebrow" style={{ justifyContent: "center" }}>Why Families Choose This</span>
              <h2>What sets our care apart.</h2>
            </div>
            <div className="benefit-grid reveal-stagger">
              {benefits.map((b) => (
                <div className="benefit-card" key={b.title}>
                  <h4>{b.title}</h4>
                  <p>{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="section section-alt reveal">
        <div className="wrap" style={{ maxWidth: 760, margin: "0 auto" }}>
          <div className="section-head" style={{ textAlign: "center", margin: "0 auto 40px" }}>
            <span className="eyebrow" style={{ justifyContent: "center" }}>Common Questions</span>
            <h2>{title} FAQ</h2>
          </div>
          <div className="faq-list">
            {faqs.map((f) => (
              <details className="faq-item" key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="section-tight reveal">
        <div className="wrap">
          <div className="section-head" style={{ textAlign: "center", margin: "0 auto 30px" }}>
            <span className="eyebrow" style={{ justifyContent: "center" }}>Explore More</span>
            <h2>Other ways we can help.</h2>
          </div>
          <div className="related-grid">
            {related.map((r) => (
              <Link key={r.slug} href={`/services/${r.slug}`} className="related-chip">
                {r.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
