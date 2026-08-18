import Link from "next/link";
import { IconChevronDown } from "./Icons";
import MobileNav from "./MobileNav";

const SERVICE_LINKS = [
  { href: "/services/personal-care", label: "Personal Care" },
  { href: "/services/rn-supervision", label: "RN Supervision" },
  { href: "/services/memory-care", label: "Memory Care" },
  { href: "/services/companionship", label: "Companionship" },
  { href: "/services/respite-care", label: "Respite Care" },
  { href: "/services/24-hour-care", label: "24-Hour Care" },
  { href: "/services/live-in-care", label: "Live-In Care" },
  { href: "/services/parkinsons-care", label: "Parkinson's Care" },
  { href: "/services/veterans-care", label: "Veterans Care" },
  { href: "/services/end-of-life-care", label: "End-of-Life Care" },
  { href: "/services/palliative-care", label: "Palliative Care" },
  { href: "/services/transition-care", label: "Transition to Home" },
];

const NAV_AFTER = [
  { href: "/about", label: "About Us" },
];

const NAV_TAIL = [
  { href: "/referral-partners", label: "Referral Partners" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Link href="/" className="brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="logo-mark logo-mark-lg"
            src="https://www.archangelspersonalcare.com/logo.png"
            alt="Archangels Personal Care"
          />
        </Link>

        <nav className="nav-links">
          <Link href="/">Home</Link>
          {NAV_AFTER.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}

          <div className="nav-item-dropdown">
            <Link href="/services" className="nav-dropdown-trigger">
              Our Services
              <IconChevronDown className="nav-caret" />
            </Link>
            <div className="nav-dropdown-panel">
              <span className="nav-dropdown-eyebrow">All Services</span>
              {SERVICE_LINKS.map((s) => (
                <Link key={s.href} href={s.href} className="nav-dropdown-link">
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          {NAV_TAIL.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-cta">
          <div className="header-phone">
            <span>24-Hour Care · Private Pay</span>
            <strong>804-903-8133</strong>
          </div>
          <a href="tel:8049038133" className="btn btn-primary">
            Call Now
          </a>
          <MobileNav serviceLinks={SERVICE_LINKS} />
        </div>
      </div>
    </header>
  );
}
