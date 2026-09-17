import type { Metadata } from "next";
import { Faq } from "@/components/landing/faq";
import { FAQ_SECTION } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about KeilHQ workspaces, Clarity Engine, billing, security, and integrations.",
};

export default async function FaqPage() {
  return (
    <main className="flex-1 flex flex-col">
      <Faq data={FAQ_SECTION} />
    </main>
  );
}
