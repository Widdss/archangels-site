import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import ScrollReveal from "@/components/ScrollReveal";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.archangelspersonalcare.com"),
  title: {
    default: "Archangels Personal Care | Home Care Richmond, Mechanicsville & Hanover County, VA",
    template: "%s | Archangels Personal Care",
  },
  description:
    "RN-supervised, VDH-licensed in-home personal care, memory care, 24-hour care, and companionship in Richmond, Mechanicsville, and Hanover County, VA. Call 804-903-8133.",
  keywords: [
    "Home Care Richmond VA",
    "In-Home Care Mechanicsville VA",
    "Personal Care Hanover County",
    "Memory Care Richmond",
    "24-Hour Home Care Richmond VA",
    "RN Supervised Home Care",
    "Senior Care Richmond Virginia",
    "Archangels Personal Care",
  ],
  authors: [{ name: "Archangels Personal Care LLC" }],
  creator: "Archangels Personal Care LLC",
  publisher: "Archangels Personal Care LLC",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Archangels Personal Care | Home Care Richmond, Mechanicsville & Hanover County, VA",
    description:
      "RN-supervised, VDH-licensed in-home personal care, memory care, 24-hour care, and companionship in Richmond, Mechanicsville, and Hanover County, VA.",
    url: "https://www.archangelspersonalcare.com",
    siteName: "Archangels Personal Care",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/caregiver-black-with-elderly.jpg",
        width: 1200,
        height: 630,
        alt: "Archangels Personal Care - Compassionate In-Home Care in Richmond, VA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Archangels Personal Care | Home Care Richmond, VA",
    description:
      "RN-supervised, VDH-licensed in-home personal care, memory care, 24-hour care, and companionship in Richmond, Mechanicsville, and Hanover County, VA.",
    images: ["/images/caregiver-black-with-elderly.jpg"],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": "https://www.archangelspersonalcare.com/#organization",
  name: "Archangels Personal Care LLC",
  legalName: "Archangels Personal Care LLC",
  url: "https://www.archangelspersonalcare.com",
  logo: "https://www.archangelspersonalcare.com/logo.png",
  image: "https://www.archangelspersonalcare.com/images/caregiver-black-with-elderly.jpg",
  telephone: "+1-804-903-8133",
  email: "info@archangelspersonalcare.com",
  description:
    "A VDH-licensed, RN-supervised Home Care Organization providing personal care, memory care, 24-hour care, and companionship across Richmond, Mechanicsville, and Hanover County, VA.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Mechanicsville",
    addressLocality: "Mechanicsville",
    addressRegion: "VA",
    postalCode: "23111",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "37.6088",
    longitude: "-77.3733",
  },
  areaServed: [
    { "@type": "City", name: "Richmond", "@id": "https://en.wikipedia.org/wiki/Richmond,_Virginia" },
    { "@type": "City", name: "Mechanicsville", "@id": "https://en.wikipedia.org/wiki/Mechanicsville,_Virginia" },
    { "@type": "AdministrativeArea", name: "Hanover County", "@id": "https://en.wikipedia.org/wiki/Hanover_County,_Virginia" },
    { "@type": "AdministrativeArea", name: "Henrico County" },
    { "@type": "AdministrativeArea", name: "Chesterfield County" },
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  sameAs: [
    "https://www.facebook.com/profile.php?id=61570834258187",
  ],
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <ChatWidget />
        <ScrollReveal />
      </body>
    </html>
  );
}
