import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { caseStudyIntro, caseStudyStats, solutions } from "@/lib/solutions-content";

export const metadata: Metadata = {
  title: "Solutions",
  description: "KeilHQ solutions for agencies, dev teams, startups, and enterprises. One workspace for clarity, collaboration, and execution.",
};

const solutionLinks = [
  { href: "/solutions/agencies", label: "Agencies", desc: "Manage multiple clients without losing the thread" },
  { href: "/solutions/startups", label: "Startups", desc: "Move fast without losing organizational memory" },
  { href: "/solutions/dev-teams", label: "Dev Teams", desc: "Sprint planning with context already linked" },
  { href: "/enterprise", label: "Enterprise", desc: "Security, compliance, and dedicated support for organizations" },
];

export default function SolutionsPage() {
  return (
    <main className="flex-1 flex flex-col pt-32 pb-24">
      {/* ─── HERO SECTION ─── */}
      <section className="max-w-[1200px] w-full mx-auto px-6 mb-16 flex flex-col md:flex-row md:items-start justify-between gap-12 text-left">
        <div className="max-w-xl flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/80 border border-border/50 w-fit">
            <span className="text-[10px] font-semibold text-muted-foreground tracking-wider uppercase">
              Solutions Overview
            </span>
          </div>
          <h1 className="font-display text-[clamp(2.5rem,5vw,3.75rem)] font-semibold leading-[1.08] text-foreground tracking-tight">
            {caseStudyIntro.title}
          </h1>
          <p className="text-[15px] font-medium text-muted-foreground leading-relaxed">
            {caseStudyIntro.description}
          </p>
        </div>

        {/* Stats column */}
        <div className="flex flex-col gap-8 md:pt-16 shrink-0">
          {caseStudyStats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1 border-l border-zinc-200 dark:border-white/10 pl-6">
              <span className="text-3xl font-bold tracking-tight text-foreground">{stat.value}</span>
              <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── SOLUTIONS LIST ─── */}
      <section className="max-w-[1200px] w-full mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutionLinks.map((item, idx) => (
            <Link
              key={item.href}
              href={item.href}
              className="group p-8 rounded-xl border border-zinc-200/50 dark:border-white/5 bg-secondary/10 hover:border-zinc-300 dark:hover:border-white/10 transition-all flex flex-col justify-between gap-6 hover:shadow-xs text-left"
            >
              <div className="flex justify-between items-center">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                  Solution 0{idx + 1}
                </span>
                <ArrowRight className="size-4.5 text-zinc-400 group-hover:text-foreground transition-colors group-hover:translate-x-0.5" />
              </div>
              <h2 className="font-display text-xl font-semibold text-zinc-900 dark:text-white leading-snug">
                {solutions[idx]?.title}
              </h2>
              <p className="text-[13px] text-muted-foreground leading-relaxed">{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
