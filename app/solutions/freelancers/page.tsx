import { SolutionPage } from "@/components/landing/solution-page";
import { solutions } from "@/lib/solutions-content";

export default function FreelancersPage() {
  const content = solutions.find((s) => s.id === "freelancers")!;
  return <SolutionPage content={content} ctaLabel="Start Free for Freelancers" />;
}
