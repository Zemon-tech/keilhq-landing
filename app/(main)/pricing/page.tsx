import type { Metadata } from "next";
import { PricingClient } from "./pricing-client";

const PAGE_TITLE = "Pricing — Simple Plans for Every Team";
const PAGE_DESCRIPTION =
  "KeilHQ is free to start. Simple, transparent pricing for teams of all sizes — currently onboarding pilot teams from the waitlist.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "https://keilhq.in/pricing",
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: "https://keilhq.in/pricing",
    siteName: "KeilHQ",
    images: [
      {
        url: "/brand/keilhq-rise.png",
        width: 1600,
        height: 1000,
        alt: "KeilHQ Pricing",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ["/brand/keilhq-rise.png"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://keilhq.in" },
    { "@type": "ListItem", position: 2, name: "Pricing", item: "https://keilhq.in/pricing" },
  ],
};

const softwarePricingSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://keilhq.in/#software",
  name: "KeilHQ",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web (Desktop-First)",
  description: PAGE_DESCRIPTION,
  offers: [
    {
      "@type": "Offer",
      name: "Free Trial",
      price: "0",
      priceCurrency: "INR",
      description: "1-month free trial with all features and AI assistant access. No credit card required.",
    },
    {
      "@type": "Offer",
      name: "Personal Plan",
      price: "1800.00",
      priceCurrency: "INR",
      billingDuration: "P1M",
      description: "For individuals & fast-moving professionals. First month at ₹500 intro pricing applicable after the 1-month free trial, then ₹1,800/mo regular pricing.",
    },
    {
      "@type": "Offer",
      name: "Teams Plan",
      price: "5000.00",
      priceCurrency: "INR",
      billingDuration: "P1M",
      description: "For scaling squads. Includes 5 seats. First month at ₹1,500 intro pricing applicable after the 1-month free trial, then ₹5,000/mo regular pricing. ₹1,000/extra seat/mo up to 20 seats.",
    },
    {
      "@type": "Offer",
      name: "Enterprise Plan",
      priceCurrency: "INR",
      description: "Custom volume pricing for teams with 20+ members, tailored SLAs, on-prem database options, and dedicated account support.",
    },
  ],
};

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwarePricingSchema) }}
      />
      <PricingClient />
    </>
  );
}
