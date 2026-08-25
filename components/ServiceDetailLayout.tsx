import Link from "next/link";
import Breadcrumbs from "./Breadcrumbs";

export type FAQ = { q: string; a: string };
export type Related = { slug: string; label: string };
export type Step = { title: string; desc: string };
export type Benefit = { title: string; desc: string };
export type Scenario = { title: string; text: string };
export type CareLevel = {
  title: string;
  subtitle?: string;
  badge?: string;
  description: string;
  items?: string[];
  image?: string;
};
export type CareCategory = {
  category: string;
  description: string;
  tasks: string[];
};
export type CareDifference = {
  title: string;
  desc: string;
};

const SITE_URL = "https://www.archangelspersonalcare.com";

const DEFAULT_STAGGERED_IMAGES = [
  "https://www.archangelspersonalcare.com/images/nurse-with-patient.jpg",
  "https://www.archangelspersonalcare.com/images/caregiver-black-with-elderly.jpg",
  "https://www.archangelspersonalcare.com/images/quality-of-life.jpg",
  "https://www.archangelspersonalcare.com/images/recovery-support.jpg",
];

export default function ServiceDetailLayout({
  slug,
  eyebrow,
  title,
  intro,
  heroImg,
  heroAlt,
  whoFor,
  signs,
  careLevels,
  careCategories,
  included,
  differences,
  scenario,
  steps,
  benefits,
  approach,
  note,
  faqs,
  related,
}: {
  slug: string;
  eyebrow: string;
  title: string;
  intro: string;
  heroImg: string;
  heroAlt: string;
  whoFor: string[];
  signs?: string[];
  careLevels?: CareLevel[];
  careCategories?: CareCategory[];
  included: string[];
  differences?: CareDifference[];
  scenario?: Scenario;
  steps?: Step[];
  benefits?: Benefit[];
  approach: string[];
  note?: string;
  faqs: FAQ[];
  related: Related[];
}) {
  const pageUrl = `${SITE_URL}/services/${slug}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: title,
    name: title,
    description: intro,
    url: pageUrl,
    areaServed: {
      "@type": "City",
      name: "Richmond, Mechanicsville, Hanover County, Virginia",
    },
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: "Archangels Personal Care LLC",
      telephone: "+1-804-903-8133",
      url: SITE_URL,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <>
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: title },
        ]}
      />

      {/* HERO */}
      <section className="care-hero">
        <div className="care-hero-photo" style={{ backgroundImage: `url(${heroImg})` }} />
        <div className="wrap">
          <span className="eyebrow" style={{ color: "#f0c968", justifyContent: "center" }}>{eyebrow}</span>
          <h1>{title}</h1>
          <p>{intro}</p>
        </div>
      </section>

      {/* WHO IT'S FOR (EDITORIAL SPLIT) */}
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
            <div style={{ marginTop: 32 }}>
              <Link href="/care-now" className="btn btn-primary">Schedule a Free Care Consultation</Link>
            </div>
          </div>
          <div className="split-photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={heroImg} alt={heroAlt} />
          </div>
        </div>
      </section>

      {/* SIGNS IT MIGHT BE TIME (UNBOXED DARK BAND) */}
      {signs && signs.length > 0 && (
        <section className="section-tight section-dark reveal">
          <div className="wrap">
            <div className="section-head" style={{ margin: "0 auto 36px" }}>
              <span className="eyebrow" style={{ justifyContent: "center", color: "#f0c968" }}>Signs Your Loved One May Need This Service</span>
              <h2>When families usually reach out.</h2>
            </div>
            <div className="signs-editorial-grid reveal-stagger">
              {signs.map((s) => (
                <div className="sign-editorial-row" key={s}>
                  <span className="sign-editorial-dot" />
                  <span>{s}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* STAGGERED EDITORIAL CARE PROGRESSION (ZIG-ZAG WITH PHOTOGRAPHY) */}
      {careLevels && careLevels.length > 0 && (
        <section className="section reveal">
          <div className="wrap">
            <div className="section-head" style={{ textAlign: "center", margin: "0 auto 56px" }}>
              <span className="eyebrow" style={{ justifyContent: "center" }}>Levels of Care & Progression</span>
              <h2>Care tailored to every stage of need.</h2>
              <p>Explore how our support adapts to different care requirements, ensuring complete clarity without confusion.</p>
            </div>

            <div className="staggered-care-container">
              {careLevels.map((lvl, index) => {
                const isEven = index % 2 === 1;
                const rowImg = lvl.image || DEFAULT_STAGGERED_IMAGES[index % DEFAULT_STAGGERED_IMAGES.length];

                return (
                  <div className={`staggered-row ${isEven ? "reverse" : ""} reveal`} key={lvl.title}>
                    {!isEven && (
                      <div className="staggered-photo-wrap">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={rowImg} alt={`${lvl.title} - Archangels Personal Care`} />
                      </div>
                    )}

                    <div className="staggered-content">
                      {lvl.badge && <span className="staggered-badge accent">{lvl.badge}</span>}
                      <h3 className="staggered-title">{lvl.title}</h3>
                      {lvl.subtitle && <span className="staggered-subtitle">{lvl.subtitle}</span>}
                      <p className="staggered-desc">{lvl.description}</p>
                      {lvl.items && lvl.items.length > 0 && (
                        <ul className="staggered-checklist">
                          {lvl.items.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {isEven && (
                      <div className="staggered-photo-wrap">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={rowImg} alt={`${lvl.title} - Archangels Personal Care`} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* COMPREHENSIVE SERVICE PILLARS (UNBOXED EDITORIAL FLOW) */}
      {careCategories && careCategories.length > 0 && (
        <section className="section section-alt reveal">
          <div className="wrap">
            <div className="section-head" style={{ textAlign: "center", margin: "0 auto 48px" }}>
              <span className="eyebrow" style={{ justifyContent: "center" }}>Comprehensive Service Pillars</span>
              <h2>Detailed breakdown of care activities.</h2>
              <p>Everything you need to know about the daily tasks, assistance, and support covered under this service.</p>
            </div>
            <div className="pillars-editorial-container reveal-stagger">
              {careCategories.map((cat) => (
                <div className="pillar-editorial-item" key={cat.category}>
                  <h3>{cat.category}</h3>
                  <p>{cat.description}</p>
                  <ul className="pillar-tasks-list">
                    {cat.tasks.map((task) => (
                      <li key={task}>{task}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* WHAT'S INCLUDED (CLEAN UNBOXED 2-COLUMN LIST) */}
      <section className="section reveal">
        <div className="wrap">
          <div className="section-head" style={{ textAlign: "center", margin: "0 auto 40px" }}>
            <span className="eyebrow" style={{ justifyContent: "center" }}>How Our Caregivers Can Help</span>
            <h2>Everything covered under this service.</h2>
          </div>
          <ul className="included-editorial-list reveal-stagger">
            {included.map((i) => (
              <li className="included-editorial-item" key={i}>
                <span className="included-editorial-icon">✓</span>
                <span>{i}</span>
              </li>
            ))}
          </ul>
          {note && (
            <p style={{ marginTop: 28, fontSize: 13.5, color: "var(--ink-soft)", maxWidth: 860, margin: "28px auto 0", textAlign: "center" }}>
              {note}
            </p>
          )}
        </div>
      </section>

      {/* UNDERSTANDING YOUR OPTIONS / COMPARISON (UNBOXED EDITORIAL COLUMNS) */}
      {differences && differences.length > 0 && (
        <section className="section-tight section-alt reveal">
          <div className="wrap">
            <div className="section-head" style={{ textAlign: "center", margin: "0 auto 40px" }}>
              <span className="eyebrow" style={{ justifyContent: "center" }}>Understanding Your Options</span>
              <h2>How this service compares to other care levels.</h2>
            </div>
            <div className="comparison-editorial-grid reveal-stagger">
              {differences.map((diff) => (
                <div className="comparison-editorial-col" key={diff.title}>
                  <h4>{diff.title}</h4>
                  <p>{diff.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* WHAT CARE MAY LOOK LIKE (AMBIENT VIGNETTE) */}
      {scenario && (
        <section className="section-tight reveal">
          <div className="wrap">
            <div className="section-head" style={{ textAlign: "center", margin: "0 auto 30px" }}>
              <span className="eyebrow" style={{ justifyContent: "center" }}>What Care May Look Like</span>
              <h2>A realistic look at a visit.</h2>
            </div>
            <div className="scenario-ambient">
              <h3>{scenario.title}</h3>
              <p>{scenario.text}</p>
            </div>
          </div>
        </section>
      )}

      {/* HOW IT WORKS (VERTICAL TIMELINE) */}
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
          <span className="eyebrow" style={{ justifyContent: "center" }}>Our Approach & Personalized Care Plans</span>
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
              <span className="eyebrow" style={{ justifyContent: "center" }}>Why Families Choose Archangels</span>
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
            <span className="eyebrow" style={{ justifyContent: "center" }}>Related Home Care Services</span>
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
              <h3>You Don&apos;t Have to Navigate Care Alone</h3>
              <p>Our team is available 24 hours a day to answer your questions and help you explore a care plan built around your family&apos;s needs.</p>
            </div>
            <div className="cta-band-actions">
              <Link href="/care-now" className="btn" style={{ background: "#fff", color: "var(--terracotta)" }}>Schedule a Free Consultation</Link>
              <a href="tel:8049038133" className="btn btn-ghost-light">Call 804-903-8133</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
