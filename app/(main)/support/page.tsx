import type { Metadata } from "next";
import { SupportClient } from "./support-client";
import { FAQ_SECTION } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Support",
  description:
    "KeilHQ support and help center. Search FAQs, browse guides by feature, or contact our team at hello@keilhq.in.",
  alternates: {
    canonical: "https://keilhq.in/support",
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
