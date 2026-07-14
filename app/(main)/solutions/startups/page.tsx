import { notFound } from "next/navigation";
import { getSolution } from "@/lib/keystatic/solutions";
import { SolutionPage } from "@/components/landing/solution-page";

export default async function StartupsPage() {
  const content = await getSolution("startups");
  if (!content) notFound();
  return <SolutionPage content={content} ctaLabel="Start Free for Your Startup" />;
}
