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
      priceCurrency: "USD",
      description: "30-day Pro trial with all features and AI assistant access.",
    },
    {
      "@type": "Offer",
      name: "Pro Plan",
      price: "10.00",
      priceCurrency: "USD",
      billingDuration: "P1M",
      description: "For individuals & fast-moving teams. Unlimited tasks, collaborative docs, AI assistant.",
    },
    {
      "@type": "Offer",
      name: "Teams Plan",
      price: "25.00",
      priceCurrency: "USD",
      billingDuration: "P1M",
      description: "For scaling organizations. Multi-agent workspaces, meeting recording with AI transcription, CRM, and priority support.",
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
