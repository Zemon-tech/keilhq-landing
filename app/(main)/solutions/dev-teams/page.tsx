import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getSolution } from "@/cms/helpers/solutions";
import { SolutionPage } from "@/components/landing/solution-page";

export const metadata: Metadata = {
  title: "Developers",
  description: "KeilHQ for engineering leads and dev teams. Bidirectional GitHub sync, dependency blocking, local AI options, and sprint context.",
};

export default async function DevTeamsPage() {
  const content = await getSolution("dev-teams");
  if (!content) notFound();
  return <SolutionPage content={content!} ctaLabel="Start Free for Dev Teams" />;
}
