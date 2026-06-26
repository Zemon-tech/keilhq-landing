import { SolutionPage } from "@/components/landing/solution-page";
import { solutions } from "@/lib/solutions-content";

export default function AgenciesPage() {
  const content = solutions.find((s) => s.id === "agencies")!;
  return <SolutionPage content={content} ctaLabel="Start Free for Your Agency" />;
}
