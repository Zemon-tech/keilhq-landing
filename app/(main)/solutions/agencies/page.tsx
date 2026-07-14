import { notFound } from "next/navigation";
import { getSolution } from "@/lib/keystatic/solutions";
import { SolutionPage } from "@/components/landing/solution-page";

export default async function AgenciesPage() {
  const content = await getSolution("agencies");
  if (!content) notFound();
  return <SolutionPage content={content} ctaLabel="Start Free for Your Agency" />;
}
