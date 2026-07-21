import type { Metadata } from "next";
import { Faq } from "@/components/landing/faq";
import { getFaqSection } from "@/cms/helpers/faq";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about KeilHQ workspaces, Clarity Engine, billing, security, and integrations.",
};

export default async function FaqPage() {
  const faqData = await getFaqSection();

  return (
    <main className="flex-1 flex flex-col">
      <Faq data={faqData} />
    </main>
  );
}
