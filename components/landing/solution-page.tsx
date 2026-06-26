import Link from "next/link";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { ArrowRight, Check, ArrowUpRight } from "lucide-react";
import type { SolutionContent } from "@/lib/solutions-content";

interface SolutionPageProps {
  content: SolutionContent;
  ctaLabel: string;
}

export function SolutionPage({ content, ctaLabel }: SolutionPageProps) {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground select-text selection:bg-primary/10">
      <Navbar />

      <main className="flex-1 flex flex-col pt-24">

        {/* ── HERO ── */}
        <section className="w-full pt-6 pb-10 sm:pt-8 sm:pb-12 lg:pt-10 lg:pb-14 px-5 sm:px-8 lg:px-12 animate-fade-rise">
          <div className="max-w-7xl mx-auto w-full flex flex-col items-center text-center gap-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/80 border border-border/50">
              <span className="size-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
              <span className="text-[11px] font-medium text-muted-foreground tracking-wide uppercase">
                {content.eyebrow}
              </span>
            </div>

            <h1
              className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.05] text-zinc-900 dark:text-white max-w-4xl"
              style={{ letterSpacing: "-0.025em" }}
            >
              {content.title}
            </h1>

            <p className="text-[15px] text-muted-foreground max-w-[55ch] mx-auto leading-relaxed italic">
              {content.persona}
            </p>

            <Link
              href="https://app.keilhq.in/login"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent inline-flex items-center gap-2 px-6 py-3 rounded-sm text-[13px] font-semibold active:scale-[0.97] transition-transform duration-150 shadow-md"
            >
              {ctaLabel}
              <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </section>

        {/* ── THE SPRAWL ── */}
        <section className="w-full pt-10 pb-12 sm:pt-12 sm:pb-14 lg:pt-14 lg:pb-16 px-5 sm:px-8 lg:px-12 bg-zinc-50/30 dark:bg-zinc-950/10">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
            <div className="flex flex-col gap-6 text-left">
              <span className="text-[11px] font-semibold tracking-wider text-muted-foreground uppercase">
                {content.sprawl.heading}
              </span>
              <h2
                className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.05] text-zinc-900 dark:text-white"
                style={{ letterSpacing: "-0.025em" }}
              >
                Context scattered<br />across every tool
              </h2>
            </div>

            <div className="flex flex-col gap-5 w-full text-left">
              {content.sprawl.bullets.map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <ArrowUpRight className="size-4 text-muted-foreground shrink-0 mt-0.5" />
                  <p className="text-[13px] text-muted-foreground leading-relaxed">{item}</p>
                </div>
              ))}
              <p className="text-[12px] text-muted-foreground/80 leading-relaxed pt-4 border-t border-border/40">
                {content.sprawl.research}
              </p>
            </div>
          </div>
        </section>

        {/* ── WITH KEILHQ ── */}
        <section className="w-full pt-10 pb-16 sm:pt-12 sm:pb-20 lg:pt-14 lg:pb-24 px-5 sm:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
            <div className="flex flex-col gap-6 text-left">
              <span className="text-[11px] font-semibold tracking-wider text-muted-foreground uppercase">
                {content.withKeilhq.heading}
              </span>
              <p className="text-[14px] text-muted-foreground leading-relaxed max-w-[42ch]">
                {content.withKeilhq.intro}
              </p>
            </div>

            <div className="flex flex-col gap-6 w-full text-left">
              {content.withKeilhq.benefits.map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <div className="size-5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/5 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Check className="size-3.5" />
                  </div>
                  <p className="text-[13px] text-muted-foreground leading-relaxed">{item}</p>
                </div>
              ))}

              <blockquote className="mt-4 pl-4 border-l-2 border-zinc-300 dark:border-zinc-600 flex flex-col gap-2">
                <p className="text-[14px] text-zinc-800 dark:text-zinc-200 leading-relaxed font-medium">
                  &ldquo;{content.withKeilhq.quote}&rdquo;
                </p>
                <cite className="text-[11px] text-muted-foreground not-italic">
                  — {content.withKeilhq.attribution}
                </cite>
              </blockquote>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
