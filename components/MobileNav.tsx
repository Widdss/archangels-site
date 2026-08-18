"use client";

import { useState } from "react";
import Link from "next/link";
import { IconX } from "./Icons";

type LinkItem = { href: string; label: string };

export default function MobileNav({ serviceLinks }: { serviceLinks: LinkItem[] }) {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const close = () => {
    setOpen(false);
    setServicesOpen(false);
  };

  return (
    <>
      <button
        type="button"
        className="nav-toggle"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        {open ? (
          <IconX />
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" width="22" height="22">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        )}
      </button>

      {open && (
        <div className="mobile-nav-panel">
          <div className="wrap mobile-nav-inner">
            <Link href="/" className="mobile-nav-link" onClick={close}>
              Home
            </Link>
            <Link href="/about" className="mobile-nav-link" onClick={close}>
              About Us
            </Link>

            <button
              type="button"
              className="mobile-nav-services-toggle"
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen((s) => !s)}
            >
              Our Services
              <span>{servicesOpen ? "−" : "+"}</span>
            </button>
            {servicesOpen && (
              <div className="mobile-nav-services-list">
                <Link href="/services" className="mobile-nav-sublink" onClick={close}>
                  All Services Overview
                </Link>
                {serviceLinks.map((s) => (
                  <Link key={s.href} href={s.href} className="mobile-nav-sublink" onClick={close}>
                    {s.label}
                  </Link>
                ))}
              </div>
            )}

            <Link href="/referral-partners" className="mobile-nav-link" onClick={close}>
              Referral Partners
            </Link>
            <Link href="/careers" className="mobile-nav-link" onClick={close}>
              Careers
            </Link>
            <Link href="/contact" className="mobile-nav-link" onClick={close}>
              Contact
            </Link>

            <a href="tel:8049038133" className="btn btn-primary btn-block mobile-nav-call" onClick={close}>
              Call 804-903-8133
            </a>
          </div>
        </div>
      )}
    </>
  );
}
