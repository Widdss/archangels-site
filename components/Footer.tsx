import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="logo-mark-footer"
                src="/logo.png"
                alt="Archangels Personal Care logo"
              />
              <strong style={{ color: "#faf6ee", fontFamily: "var(--font-display)", fontSize: 17 }}>
                Archangels Personal Care
              </strong>
            </div>
            <p style={{ fontSize: 13.5, maxWidth: 260 }}>
              A VDH-licensed, RN-supervised Home Care Organization serving Richmond, Mechanicsville
              and Hanover County — paired with a 24/7 AI care concierge.
            </p>
          </div>
          <div>
            <h5>Company</h5>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/services">Our Services</Link></li>
              <li><Link href="/referral-partners">Referral Partners</Link></li>
              <li><Link href="/careers">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h5>Get Care</h5>
            <ul>
              <li><Link href="/care-now">Request Care Now</Link></li>
              <li><Link href="/service-area">Service Area</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h5>Reach Us</h5>
            <ul>
              <li>804-903-8133</li>
              <li>Richmond · Mechanicsville · Hanover County</li>
              <li>Available 24 hours a day</li>
            </ul>
          </div>
        </div>
        <div className="footer-areas">
          <h5>Service Areas</h5>
          <p>
            {["Mechanicsville", "Hanover County", "Ashland", "Richmond", "Henrico", "Chesterfield", "Goochland", "Powhatan"].join(" • ")}
          </p>
          <span>And all surrounding areas</span>
        </div>
        <div className="footer-badges">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <a
            id="COCBadgeURL"
            href="https://www.chamberofcommerce.com/business-directory/virginia/quinton/home-health-care-service/2034422750-archangels-personal-care?source=memberwebsite"
            target="_tab"
          >
            <img
              style={{ width: "auto", height: 150 }}
              id="COCBadgeIMG"
              src="https://coc.codes/images/badge/2034422750"
              alt="Archangels Personal Care Chamber of Commerce member badge"
            />
          </a>
        </div>
        <div className="footer-bottom">
          <span>© {year} Archangels Personal Care LLC. VDH-Licensed Home Care Organization.</span>
          <span>Serving the Richmond Metro Area</span>
        </div>
      </div>
    </footer>
  );
}
