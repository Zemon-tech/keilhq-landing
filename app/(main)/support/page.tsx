import type { Metadata } from "next";
import { SupportClient } from "./support-client";
import { FAQ_SECTION } from "@/lib/site-content";

const PAGE_TITLE = "Support & FAQ — Help Center";
const PAGE_DESCRIPTION =
  "KeilHQ help center. Search FAQs, browse guides by feature, or contact our team at hello@keilhq.in. Get answers about tasks, chat, docs, meetings, CRM, and integrations.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: "https://keilhq.in/support",
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: "https://keilhq.in/support",
    siteName: "KeilHQ",
    images: [
      {
        url: "/brand/keilhq-rise.png",
        width: 1600,
        height: 1000,
        alt: "KeilHQ Support & FAQ",
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

function FaqJsonLd() {
  const faqs = FAQ_SECTION.faqs as unknown as { question: string; answer: string }[];
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function SupportPage() {
  return (
    <main className="flex-1 flex flex-col">
      <FaqJsonLd />
      <SupportClient />
    </main>
  );
}
