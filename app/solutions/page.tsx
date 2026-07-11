import Link from "next/link";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { ArrowRight } from "lucide-react";
import { caseStudyIntro, caseStudyStats, solutions } from "@/lib/solutions-content";

const solutionLinks = [
  { href: "/solutions/agencies", label: "Agencies", desc: "Manage multiple clients without losing the thread" },
  { href: "/solutions/startups", label: "Startups", desc: "Move fast without losing organizational memory" },
  { href: "/solutions/dev-teams", label: "Dev Teams", desc: "Sprint planning with context already linked" },
  { href: "/enterprise", label: "Enterprise", desc: "Security, compliance, and dedicated support for organizations" },
];

export default function SolutionsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground select-text selection:bg-primary/10">
      <Navbar />

      <main className="flex-1 flex flex-col">
        <section className="w-full pt-28 lg:pt-32 pb-16 lg:pb-20 xl:pb-24 px-5 sm:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto w-full flex flex-col items-center text-center gap-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/80 border border-border/50">
              <span className="size-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
              <span className="text-[11px] font-medium text-muted-foreground tracking-wide uppercase">
                {caseStudyIntro.eyebrow}
              </span>
            </div>

            <h1
              className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.05] text-zinc-900 dark:text-white max-w-4xl"
              style={{ letterSpacing: "-0.025em" }}
            >
              {caseStudyIntro.title}
            </h1>

            <p className="text-[16px] text-muted-foreground max-w-[60ch] mx-auto leading-relaxed">
              {caseStudyIntro.description}
            </p>

            <p className="text-[12px] text-muted-foreground/70 max-w-[70ch] mx-auto leading-relaxed">
              {caseStudyIntro.disclaimer}
            </p>
          </div>
        </section>

        <section className="w-full py-12 lg:py-16 px-5 sm:px-8 lg:px-12 bg-zinc-50/30 dark:bg-zinc-950/10 border-y border-border/40">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
            {caseStudyStats.map((stat) => (
              <div key={stat.value} className="flex flex-col gap-2">
                <span className="font-display text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white tracking-tight">
                  {stat.value}
                </span>
                <span className="text-[13px] text-muted-foreground leading-relaxed max-w-[28ch] mx-auto">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="w-full py-12 lg:py-16 px-5 sm:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-6">
            {solutionLinks.map((item, idx) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex flex-col gap-3 p-6 bg-background border border-border/60 dark:border-white/5 rounded-sm shadow-sm hover:border-border hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                    0{idx + 1} — {item.label}
                  </span>
                  <ArrowRight className="size-4 text-muted-foreground group-hover:translate-x-0.5 transition-transform" />
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

      <Footer />
    </div>
  );
}
