import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Fraunces, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import ScrollReveal from "@/components/ScrollReveal";
import ChunkErrorReload from "@/components/ChunkErrorReload";

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
    default: "Archangels Personal Care | Home Care in Richmond, Mechanicsville & Chesterfield, VA",
    template: "%s | Archangels Personal Care",
  },
  description:
    "RN-supervised, VDH-licensed in-home personal care, memory care, 24-hour care, and companionship in Richmond, Mechanicsville, Chesterfield, and Hanover County, VA — plus surrounding counties. Call 804-903-8133.",
  keywords: [
    "Home Care Richmond VA",
    "Home Care Chesterfield VA",
    "In-Home Care Mechanicsville VA",
    "Senior Care Chesterfield County",
    "Personal Care Hanover County",
    "Memory Care Richmond",
    "24-Hour Home Care Richmond VA",
    "RN Supervised Home Care",
    "Senior Care Richmond Virginia",
    "Home Care New Kent County VA",
    "In-Home Care Goochland VA",
    "Senior Care Powhatan VA",
    "Home Care Amelia County VA",
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
    title: "Archangels Personal Care | Home Care in Richmond, Mechanicsville & Chesterfield, VA",
    description:
      "RN-supervised, VDH-licensed in-home personal care, memory care, 24-hour care, and companionship in Richmond, Mechanicsville, Chesterfield, and Hanover County, VA — plus surrounding counties.",
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
    title: "Archangels Personal Care | Home Care Richmond & Chesterfield, VA",
    description:
      "RN-supervised, VDH-licensed in-home personal care, memory care, 24-hour care, and companionship in Richmond, Mechanicsville, Chesterfield, and Hanover County, VA.",
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
    "A VDH-licensed, RN-supervised Home Care Organization providing personal care, memory care, 24-hour care, and companionship across Richmond, Mechanicsville, Chesterfield, and Hanover County, VA, and surrounding Central Virginia counties.",
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
    { "@type": "AdministrativeArea", name: "Chesterfield County", "@id": "https://en.wikipedia.org/wiki/Chesterfield_County,_Virginia" },
    { "@type": "AdministrativeArea", name: "Hanover County", "@id": "https://en.wikipedia.org/wiki/Hanover_County,_Virginia" },
    { "@type": "AdministrativeArea", name: "Henrico County" },
    { "@type": "AdministrativeArea", name: "Goochland County" },
    { "@type": "AdministrativeArea", name: "Powhatan County" },
    { "@type": "AdministrativeArea", name: "New Kent County" },
    { "@type": "AdministrativeArea", name: "Charles City County" },
    { "@type": "AdministrativeArea", name: "Amelia County" },
    { "@type": "AdministrativeArea", name: "King William County" },
    { "@type": "AdministrativeArea", name: "Dinwiddie County" },
    { "@type": "AdministrativeArea", name: "Prince George County" },
    { "@type": "City", name: "Petersburg" },
    { "@type": "City", name: "Colonial Heights" },
    { "@type": "City", name: "Hopewell" },
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is home care?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Home care is professional in-home assistance with personal care services including activities of daily living, companionship, and support to help seniors and elderly individuals maintain independence at home.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide Alzheimer's and dementia care?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Archangels Personal Care provides specialized Alzheimer's and dementia care services with trained caregivers experienced in memory care, behavioral support, and safety management for individuals with cognitive decline.",
      },
    },
    {
      "@type": "Question",
      name: "Is your home care available 24 hours a day?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we offer 24-hour home care services with flexible scheduling options from hourly visits to live-in care, available 7 days a week throughout Richmond, Mechanicsville, Chesterfield, and Hanover County.",
      },
    },
    {
      "@type": "Question",
      name: "What areas do you serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We serve Richmond, Mechanicsville, Hanover County, Henrico, Chesterfield, and surrounding Central Virginia counties throughout the Richmond metropolitan region in Virginia.",
      },
    },
    {
      "@type": "Question",
      name: "Are you VDH licensed and regulated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Archangels Personal Care LLC is a VDH-regulated Home Care Organization operating under Virginia regulations with professional RN supervision and comprehensive background checks for all caregivers.",
      },
    },
    {
      "@type": "Question",
      name: "Do you accept insurance or Medicare?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We operate on a private-pay model with flexible payment options and work with select third-party payers including MedLife. Contact us to discuss payment arrangements.",
      },
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body>
        {/* Google Ads conversion tracking + dynamic phone-call tracking (parity with legacy site) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18079984856"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', 'AW-18079984856');

            // Phone Call Conversion Tracking (swaps displayed number for a Google forwarding number)
            gtag('config', 'AW-18079984856/_R7CCMSOoqocENJZmq1D', {
              'phone_conversion_number': '8049038133'
            });

            // Call this after any lead form (care-now, contact, chat intake) is submitted successfully
            window.reportLeadConversion = function () {
              gtag('event', 'conversion', {
                'send_to': 'AW-18079984856/lnuhCO3V9pwcENjZmq1D',
                'value': 1.0,
                'currency': 'USD'
              });
            };
          `}
        </Script>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <ChatWidget />
        <ScrollReveal />
        <ChunkErrorReload />
      </body>
    </html>
  );
}
