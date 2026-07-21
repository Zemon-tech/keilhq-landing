import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getSolution } from "@/cms/helpers/solutions";
import { SolutionPage } from "@/components/landing/solution-page";

export const metadata: Metadata = {
  title: "Startups",
  description: "KeilHQ for fast-moving startups. Replace fragmented subscriptions to chat, task tracking, docs, and meeting tools with one clear workspace.",
};

export default async function StartupsPage() {
  const content = await getSolution("startups");
  if (!content) notFound();
  return <SolutionPage content={content!} ctaLabel="Start Free for Your Startup" />;
}
