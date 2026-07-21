import { notFound } from "next/navigation";
import { getSolution } from "@/cms/helpers/solutions";
import { SolutionPage } from "@/components/landing/solution-page";

export default async function DevTeamsPage() {
  const content = await getSolution("dev-teams");
  if (!content) notFound();
  return <SolutionPage content={content} ctaLabel="Start Free for Dev Teams" />;
}
