import { SolutionPage } from "@/components/landing/solution-page";
import { solutions } from "@/lib/solutions-content";

export default function StartupsPage() {
  const content = solutions.find((s) => s.id === "startups")!;
  return <SolutionPage content={content} ctaLabel="Start Free for Your Startup" />;
}
