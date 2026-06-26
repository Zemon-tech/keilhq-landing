import { SolutionPage } from "@/components/landing/solution-page";
import { solutions } from "@/lib/solutions-content";

export default function DevTeamsPage() {
  const content = solutions.find((s) => s.id === "dev-teams")!;
  return <SolutionPage content={content} ctaLabel="Start Free for Dev Teams" />;
}
