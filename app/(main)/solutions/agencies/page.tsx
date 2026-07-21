import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getSolution } from "@/cms/helpers/solutions";
import { SolutionPage } from "@/components/landing/solution-page";

export const metadata: Metadata = {
  title: "Agencies",
  description: "KeilHQ for agencies. Manage client spaces, definition of done, meeting transcriptions, and shareable task links in one workspace.",
};

export default async function AgenciesPage() {
  const content = await getSolution("agencies");
  if (!content) notFound();
  return <SolutionPage content={content!} ctaLabel="Start Free for Your Agency" />;
}
