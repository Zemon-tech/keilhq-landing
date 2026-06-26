"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import {
  ArrowRight,
  Check,
  Minus,
  Shield,
  Database,
  Sparkles,
  Building2,
  Lock,
  ChevronDown,
} from "lucide-react";

import { pricingComparison } from "@/lib/solutions-content";

const faqs = [
  {
    q: "Does the free trial require a credit card?",
    a: "No. The 1-month Pro trial is completely free — no card needed. You only enter payment details if you decide to continue after 30 days.",
  },
  {
    q: "Can I switch plans at any time?",
    a: "Yes. Upgrade from Trial to Pro, or from Pro to Teams, at any point. Downgrades take effect at the end of your current billing cycle.",
  },
  {
    q: "What happens to my data if I don't upgrade?",
    a: "Your workspace is preserved for 30 days after a trial ends. After that, data is archived. Export everything before your trial expires.",
  },
  {
    q: "Is my data used to train AI models on the free trial?",
    a: "Yes — trial data may be used to improve KeilHQ's AI. On any paid plan (Pro, Teams, Enterprise), your data is fully secure and excluded from model training.",
  },
  {
    q: "What's included in the Teams plan vs Pro?",
    a: "Teams adds centralized seat billing, SSO/SAML, workspace admin controls, and detailed audit logs on top of everything in Pro.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border/50 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer group"
      >
        <span className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors">
          {q}
        </span>
        <ChevronDown
          className={`size-4 text-muted-foreground shrink-0 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          open ? "max-h-40 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-[13px] text-muted-foreground leading-relaxed">
          {a}
        </p>
      </div>
    </div>
  );
}

export default function PricingPage() {
  const [proMode, setProMode] = useState<"trial" | "paid">("trial");

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground select-text selection:bg-primary/10">
      <Navbar />

      <main className="flex-1 flex flex-col pt-24">

        {/* ── SECTION 1: HERO & PRICING TIERS ── */}
        <section className="w-full pt-6 pb-16 sm:pt-8 sm:pb-20 lg:pt-10 lg:pb-28 px-5 sm:px-8 lg:px-12 animate-fade-rise">
          <div className="max-w-7xl mx-auto w-full flex flex-col items-center text-center gap-10">
            
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/80 border border-border/50 transition-all duration-300">
              <span className="size-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
              <span className="text-[11px] font-medium text-muted-foreground tracking-wide uppercase">
                Plans · Pricing
              </span>
            </div>

            {/* Title */}
            <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.05] text-zinc-900 dark:text-white max-w-4xl" style={{ letterSpacing: "-0.025em" }}>
              Pricing plans for teams of all sizes
            </h1>

            {/* Subtext */}
            <p className="text-[16px] text-muted-foreground max-w-[50ch] mx-auto leading-relaxed">
              KeilHQ supports users of every scale — from first prompt to enterprise rollout.
            </p>

            {/* CTA Button */}
            <div className="mt-2">
              <Link 
                href="https://app.keilhq.in/login" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-accent inline-flex items-center gap-2 px-6 py-3 rounded-sm text-[13px] font-semibold active:scale-[0.97] transition-transform duration-150 shadow-md"
              >
                Get Started Free
                <ArrowRight className="size-3.5" />
              </Link>
            </div>

            {/* Pricing Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-16 w-full text-left">
              
              {/* Pro Card */}
              <div className="pt-8 border-t border-border/60 flex flex-col gap-6 relative">
                {proMode === "trial" && (
                  <div className="absolute -top-3 right-0 bg-primary text-primary-foreground px-3 py-1 text-[10px] font-semibold uppercase tracking-wider rounded-sm shadow-sm z-10">
                    1-Month Free Trial
                  </div>
                )}
                {proMode === "paid" && (
                  <div className="absolute -top-3 right-0 bg-emerald-600 text-white px-3 py-1 text-[10px] font-semibold uppercase tracking-wider rounded-sm shadow-sm z-10">
                    50% Discount
                  </div>
                )}

                <div className="flex flex-col gap-1.5 mt-2">
                  <div className="flex items-center gap-2">
                    <h3 className="font-display text-2xl font-semibold text-zinc-900 dark:text-white">Pro</h3>
                    <span className="text-[10px] bg-secondary text-muted-foreground px-2 py-0.5 rounded-sm font-medium">
                      Individual
                    </span>
                  </div>
                  <p className="text-[13px] text-muted-foreground leading-relaxed min-h-[40px]">
                    For power users and professionals who want premium AI intelligence and tools.
                  </p>
                </div>

                {/* Price Row with Toggle Switcher */}
                <div className="flex items-center justify-between gap-4 min-h-[56px] py-1">
                  <div className="flex flex-col gap-0.5">
                    {proMode === "trial" ? (
                      <>
                        <div className="flex items-baseline gap-1">
                          <span className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">$0</span>
                          <span className="text-xs text-muted-foreground">/ trial</span>
                        </div>
                        <span className="text-[10px] text-muted-foreground font-medium">30 days free</span>
                      </>
                    ) : (
                      <>
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">$25</span>
                          <span className="text-xs line-through text-muted-foreground/60 font-medium">$50</span>
                          <span className="text-xs text-muted-foreground">/ mo</span>
                        </div>
                        <span className="text-[10px] text-emerald-600 dark:text-emerald-500 font-medium font-mono">50% intro discount</span>
                      </>
                    )}
                  </div>

                  {/* Toggle Switcher */}
                  <div className="flex bg-secondary p-0.5 rounded-sm border border-border/50 text-[11px] font-medium max-w-[130px] shrink-0">
                    <button
                      onClick={() => setProMode("trial")}
                      className={`px-2.5 py-1 rounded-xs transition-all cursor-pointer ${
                        proMode === "trial"
                          ? "bg-background text-foreground shadow-xs font-semibold"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      Trial
                    </button>
                    <button
                      onClick={() => setProMode("paid")}
                      className={`px-2.5 py-1 rounded-xs transition-all cursor-pointer ${
                        proMode === "paid"
                          ? "bg-background text-foreground shadow-xs font-semibold"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      Paid
                    </button>
                  </div>
                </div>

                {/* Card CTA Button */}
                <Link
                  href="#"
                  className="h-10 px-4 bg-primary text-primary-foreground font-medium rounded-sm hover:bg-primary/90 transition-all active:scale-95 text-[13px] flex items-center justify-between shadow-xs"
                >
                  <span>{proMode === "trial" ? "Start 1-Month Free Trial" : "Get Paid Pro"}</span>
                  <ArrowRight className="size-4" />
                </Link>

                <div className="flex flex-col gap-4 mt-2">
                  <span className="text-[11px] text-muted-foreground font-semibold tracking-wider uppercase">
                    {proMode === "trial" ? "Trial limits (Month 1):" : "Included in paid Pro (Month 2+):"}
                  </span>

                  {proMode === "trial" ? (
                    <div className="flex flex-col gap-3.5">
                      <div className="flex items-start gap-3">
                        <div className="size-5 rounded-full bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 mt-0.5">
                          <Sparkles className="size-3" />
                        </div>
                        <p className="text-[13px] text-muted-foreground leading-relaxed">
                          <strong>25 AI chats</strong> per day
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="size-5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                          <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="3">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        <p className="text-[13px] text-muted-foreground leading-relaxed">
                          Unlimited tasks, motion pages, and chat
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="size-5 rounded-full bg-amber-500/10 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                          <Lock className="size-3" />
                        </div>
                        <p className="text-[13px] text-amber-600 dark:text-amber-500 leading-relaxed font-medium">
                          Trial data will be used to train future models
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-3.5">
                      <div className="flex items-start gap-3">
                        <div className="size-5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                          <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="3">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        <p className="text-[13px] text-muted-foreground leading-relaxed">
                          Everything in Free Trial
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="size-5 rounded-full bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 mt-0.5">
                          <Sparkles className="size-3" />
                        </div>
                        <p className="text-[13px] text-muted-foreground leading-relaxed">
                          <strong>20 AI chats / hr</strong> &amp; <strong>100 chats / day</strong>
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="size-5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                          <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="3">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        <p className="text-[13px] text-muted-foreground leading-relaxed">
                          24x7 specialized support
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="size-5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                          <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="3">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        <p className="text-[13px] text-muted-foreground leading-relaxed">
                          First access to new beta releases &amp; features
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="size-5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                          <Shield className="size-3.5" />
                        </div>
                        <p className="text-[13px] text-emerald-600 dark:text-emerald-500 font-medium leading-relaxed">
                          Fully secure data (no model training)
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Teams Card */}
              <div className="pt-8 border-t border-border/60 flex flex-col gap-6 relative">
                <div className="flex flex-col gap-1.5 mt-2">
                  <div className="flex items-center gap-2">
                    <h3 className="font-display text-2xl font-semibold text-zinc-900 dark:text-white">Teams</h3>
                    <span className="text-[10px] bg-secondary text-muted-foreground px-2 py-0.5 rounded-sm font-medium">
                      Collaboration
                    </span>
                  </div>
                  <p className="text-[13px] text-muted-foreground leading-relaxed min-h-[40px]">
                    For growing squads that need aligned controls, SSO, and shared billing structures.
                  </p>
                </div>

                <div className="flex items-center justify-between gap-4 min-h-[56px] py-1">
                  <div className="flex flex-col gap-0.5">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">$50</span>
                      <span className="text-xs line-through text-muted-foreground/60 font-medium">$75</span>
                      <span className="text-xs text-muted-foreground">/ user / mo</span>
                    </div>
                    <span className="text-[10px] text-emerald-600 dark:text-emerald-500 font-medium">33% team discount</span>
                  </div>
                </div>

                <Link
                  href="#"
                  className="h-10 px-4 bg-secondary text-secondary-foreground border border-border/50 hover:bg-secondary/80 font-medium rounded-sm transition-all active:scale-95 text-[13px] flex items-center justify-between shadow-xs"
                >
                  <span>Get Teams</span>
                  <ArrowRight className="size-4" />
                </Link>

                <div className="flex flex-col gap-4 mt-2">
                  <span className="text-[11px] text-muted-foreground font-semibold tracking-wider uppercase">Everything in Pro, plus:</span>
                  <div className="flex flex-col gap-3.5">
                    <div className="flex items-start gap-3">
                      <div className="size-5 rounded-full bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Building2 className="size-3.5" />
                      </div>
                      <p className="text-[13px] text-muted-foreground leading-relaxed">
                        Centralized billing &amp; seat management
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="size-5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                        <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <p className="text-[13px] text-muted-foreground leading-relaxed">
                        Single Sign-On (SSO) support
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="size-5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                        <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <p className="text-[13px] text-muted-foreground leading-relaxed">
                        Detailed audit &amp; activity logs
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="size-5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                        <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <p className="text-[13px] text-muted-foreground leading-relaxed">
                        Advanced workspace admin controls
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enterprise Card */}
              <div className="pt-8 border-t border-border/60 flex flex-col gap-6 relative">
                <div className="flex flex-col gap-1.5 mt-2">
                  <div className="flex items-center gap-2">
                    <h3 className="font-display text-2xl font-semibold text-zinc-900 dark:text-white">Enterprise</h3>
                    <span className="text-[10px] bg-secondary text-muted-foreground px-2 py-0.5 rounded-sm font-medium">
                      Custom Scale
                    </span>
                  </div>
                  <p className="text-[13px] text-muted-foreground leading-relaxed min-h-[40px]">
                    For large-scale operations requiring custom hosting, data rules, and agreements.
                  </p>
                </div>

                <div className="flex items-center justify-between gap-4 min-h-[56px] py-1">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">Contact Sales</span>
                    <span className="text-[10px] text-muted-foreground font-medium">Custom contracts</span>
                  </div>
                </div>

                <Link
                  href="/enterprise"
                  className="h-10 px-4 bg-secondary text-secondary-foreground border border-border/50 hover:bg-secondary/80 font-medium rounded-sm transition-all active:scale-95 text-[13px] flex items-center justify-between shadow-xs"
                >
                  <span>Talk to Sales</span>
                  <ArrowRight className="size-4" />
                </Link>

                <div className="flex flex-col gap-4 mt-2">
                  <span className="text-[11px] text-muted-foreground font-semibold tracking-wider uppercase">Everything in Teams, plus:</span>
                  <div className="flex flex-col gap-3.5">
                    <div className="flex items-start gap-3">
                      <div className="size-5 rounded-full bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Database className="size-3.5" />
                      </div>
                      <p className="text-[13px] text-muted-foreground leading-relaxed">
                        Option to host database on-premise
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="size-5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                        <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <p className="text-[13px] text-muted-foreground leading-relaxed">
                        Priority support with dedicated agents
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="size-5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                        <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <p className="text-[13px] text-muted-foreground leading-relaxed">
                        Unlimited AI chats &amp; usage throughout
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="size-5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                        <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <p className="text-[13px] text-muted-foreground leading-relaxed">
                        Custom SLAs, compliance, &amp; legal contracts
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ── SECTION 2: WHY IT'S PRICED DIFFERENTLY ── */}
        <section className="w-full py-16 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-12 bg-zinc-50/30 dark:bg-zinc-950/10">
          <div className="max-w-7xl mx-auto w-full flex flex-col gap-12">
            <div className="flex flex-col gap-4 text-left max-w-3xl">
              <span className="text-[11px] font-semibold tracking-wider text-muted-foreground uppercase">
                {pricingComparison.eyebrow}
              </span>
              <h2
                className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.05] text-zinc-900 dark:text-white"
                style={{ letterSpacing: "-0.025em" }}
              >
                {pricingComparison.title}
              </h2>
              <p className="text-[14px] text-muted-foreground leading-relaxed">
                {pricingComparison.intro}
              </p>
            </div>

            <div className="w-full overflow-x-auto">
              <table className="w-full min-w-[720px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-border/60">
                    <th className="py-4 pr-6 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider w-[18%]">Platform</th>
                    <th className="py-4 pr-6 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider w-[22%]">List price</th>
                    <th className="py-4 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">What it actually costs a small team</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40">
                  {pricingComparison.rows.map((row) => (
                    <tr
                      key={row.platform}
                      className={row.highlight ? "bg-background border border-border/60" : "hover:bg-secondary/20 transition-colors"}
                    >
                      <td className={`py-5 pr-6 text-sm font-semibold ${row.highlight ? "text-zinc-900 dark:text-white" : "text-zinc-800 dark:text-zinc-200"}`}>
                        {row.platform}
                      </td>
                      <td className="py-5 pr-6 text-[13px] text-muted-foreground leading-relaxed">
                        {row.listPrice}
                      </td>
                      <td className="py-5 text-[13px] text-muted-foreground leading-relaxed">
                        {row.smallTeamCost}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── SECTION 3: PRIVACY & SECURITY GRID ── */}
        <section className="w-full py-16 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-12 bg-zinc-50/30 dark:bg-zinc-950/10">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Column: Heading & Description */}
            <div className="flex flex-col gap-6 text-left">
              <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.05] text-zinc-900 dark:text-white" style={{ letterSpacing: "-0.025em" }}>
                Secure architecture.<br />Absolute data privacy.
              </h2>
              <p className="text-[14px] text-muted-foreground leading-relaxed max-w-[42ch]">
                Your security is our default. Paid tiers completely exclude workspace data from model training, while enterprise environments offer full network isolation.
              </p>
            </div>

            {/* Right Column: 4 Cards with Top Borders */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 w-full text-left">
              <div className="pt-6 border-t border-border/60 flex flex-col gap-3">
                <h3 className="font-display text-xl font-semibold text-zinc-900 dark:text-white">Zero Model Training</h3>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  We guarantee that your code, docs, meeting recordings, and prompts are never used to train foundational AI models on any paid tier.
                </p>
              </div>

              <div className="pt-6 border-t border-border/60 flex flex-col gap-3">
                <h3 className="font-display text-xl font-semibold text-zinc-900 dark:text-white">Database Isolation</h3>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  Workspace access controls enforce strict logical data segregation. Enterprise tier customers can deploy on dedicated cloud databases.
                </p>
              </div>

              <div className="pt-6 border-t border-border/60 flex flex-col gap-3">
                <h3 className="font-display text-xl font-semibold text-zinc-900 dark:text-white">SSO & Access Rules</h3>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  Lock down access through Okta, Azure AD, or custom SAML providers, and define granular workspace role assignments.
                </p>
              </div>

              <div className="pt-6 border-t border-border/60 flex flex-col gap-3">
                <h3 className="font-display text-xl font-semibold text-zinc-900 dark:text-white">Compliance Standard</h3>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  KielHQ is developed under strict security controls, built to align with SOC 2 compliance standards and secure data transit laws.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ── SECTION 3: DETAILED FEATURE COMPARISON ── */}
        <section className="w-full py-16 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-12 overflow-x-auto select-text">
          <div className="max-w-7xl mx-auto w-full min-w-[950px]">
            <h2 className="font-display text-3xl font-semibold text-zinc-900 dark:text-white mb-10 tracking-tight">
              Compare plans &amp; features
            </h2>
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border/60 text-left">
                  <th className="py-4.5 font-display text-sm font-semibold text-zinc-900 dark:text-white w-1/4">Features</th>
                  <th className="py-4.5 font-display text-sm font-semibold text-zinc-900 dark:text-white w-1/5">Pro (Free Trial)</th>
                  <th className="py-4.5 font-display text-sm font-semibold text-zinc-900 dark:text-white w-1/5">Pro (Paid)</th>
                  <th className="py-4.5 font-display text-sm font-semibold text-zinc-900 dark:text-white w-1/5">Teams</th>
                  <th className="py-4.5 font-display text-sm font-semibold text-zinc-900 dark:text-white w-1/5">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40">

                {/* CATEGORY: AI Capabilities */}
                <tr className="bg-secondary/50">
                  <td colSpan={5} className="py-3 px-4 text-[10px] font-semibold text-muted-foreground uppercase tracking-widest">
                    AI Capabilities &amp; Data Security
                  </td>
                </tr>
                <tr className="hover:bg-secondary/30 transition-colors">
                  <td className="py-4 px-4 text-sm text-zinc-800 dark:text-zinc-200 font-medium">Daily AI Chat Limit</td>
                  <td className="py-4 px-4 text-sm text-muted-foreground">25 / day</td>
                  <td className="py-4 px-4 text-sm text-muted-foreground">100 / day</td>
                  <td className="py-4 px-4 text-sm text-muted-foreground">100 / day</td>
                  <td className="py-4 px-4 text-sm text-foreground font-semibold">Unlimited</td>
                </tr>
                <tr className="hover:bg-secondary/30 transition-colors">
                  <td className="py-4 px-4 text-sm text-zinc-800 dark:text-zinc-200 font-medium">Hourly AI Chat Limit</td>
                  <td className="py-4 px-4 text-muted-foreground"><Minus className="size-4" /></td>
                  <td className="py-4 px-4 text-sm text-muted-foreground">20 / hour</td>
                  <td className="py-4 px-4 text-sm text-muted-foreground">20 / hour</td>
                  <td className="py-4 px-4 text-sm text-foreground font-semibold">Unlimited</td>
                </tr>
                <tr className="hover:bg-secondary/30 transition-colors">
                  <td className="py-4 px-4 text-sm text-zinc-800 dark:text-zinc-200 font-medium">AI Context Ingestion</td>
                  <td className="py-4 px-4 text-sm text-muted-foreground">Standard</td>
                  <td className="py-4 px-4 text-sm text-muted-foreground">Advanced</td>
                  <td className="py-4 px-4 text-sm text-muted-foreground">Advanced</td>
                  <td className="py-4 px-4 text-sm text-muted-foreground">Custom context limits</td>
                </tr>
                <tr className="hover:bg-secondary/30 transition-colors">
                  <td className="py-4 px-4 text-sm text-zinc-800 dark:text-zinc-200 font-medium">Data Privacy &amp; Model Training</td>
                  <td className="py-4 px-4 text-sm text-amber-600 dark:text-amber-500">Used for model training</td>
                  <td className="py-4 px-4 text-sm text-emerald-600 dark:text-emerald-500 font-medium">Secure data (No training)</td>
                  <td className="py-4 px-4 text-sm text-emerald-600 dark:text-emerald-500 font-medium">Secure data (No training)</td>
                  <td className="py-4 px-4 text-sm text-emerald-600 dark:text-emerald-500 font-medium">On-premise isolated databases</td>
                </tr>

                {/* CATEGORY: Core Workspace */}
                <tr className="bg-secondary/50">
                  <td colSpan={5} className="py-3 px-4 text-[10px] font-semibold text-muted-foreground uppercase tracking-widest">
                    Core Workspace Features
                  </td>
                </tr>
                <tr className="hover:bg-secondary/30 transition-colors">
                  <td className="py-4 px-4 text-sm text-zinc-800 dark:text-zinc-200 font-medium">Smart Dashboard Task Ranking</td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                </tr>
                <tr className="hover:bg-secondary/30 transition-colors">
                  <td className="py-4 px-4 text-sm text-zinc-800 dark:text-zinc-200 font-medium">Task Management (Kanban &amp; Gantt)</td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                </tr>
                <tr className="hover:bg-secondary/30 transition-colors">
                  <td className="py-4 px-4 text-sm text-zinc-800 dark:text-zinc-200 font-medium">Dependency Blocking Logic</td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                </tr>
                <tr className="hover:bg-secondary/30 transition-colors">
                  <td className="py-4 px-4 text-sm text-zinc-800 dark:text-zinc-200 font-medium">Motion Docs &amp; Block Editor</td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                </tr>
                <tr className="hover:bg-secondary/30 transition-colors">
                  <td className="py-4 px-4 text-sm text-zinc-800 dark:text-zinc-200 font-medium">Real-time Collaborative Editing</td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                </tr>
                <tr className="hover:bg-secondary/30 transition-colors">
                  <td className="py-4 px-4 text-sm text-zinc-800 dark:text-zinc-200 font-medium">Team Chat &amp; Socket Channels</td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                </tr>
                <tr className="hover:bg-secondary/30 transition-colors">
                  <td className="py-4 px-4 text-sm text-zinc-800 dark:text-zinc-200 font-medium">Smart Notifications &amp; Preferences</td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                </tr>
                <tr className="hover:bg-secondary/30 transition-colors">
                  <td className="py-4 px-4 text-sm text-zinc-800 dark:text-zinc-200 font-medium">Audio Meeting Recorder</td>
                  <td className="py-4 px-4 text-sm text-muted-foreground">Limited (3 / month)</td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                </tr>
                <tr className="hover:bg-secondary/30 transition-colors">
                  <td className="py-4 px-4 text-sm text-zinc-800 dark:text-zinc-200 font-medium">Transcription Speaker Diarization</td>
                  <td className="py-4 px-4 text-muted-foreground"><Minus className="size-4" /></td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                </tr>

                {/* CATEGORY: Collaboration & Admin */}
                <tr className="bg-secondary/50">
                  <td colSpan={5} className="py-3 px-4 text-[10px] font-semibold text-muted-foreground uppercase tracking-widest">
                    Collaboration &amp; Administration
                  </td>
                </tr>
                <tr className="hover:bg-secondary/30 transition-colors">
                  <td className="py-4 px-4 text-sm text-zinc-800 dark:text-zinc-200 font-medium">Centralized Seat Billing</td>
                  <td className="py-4 px-4 text-muted-foreground"><Minus className="size-4" /></td>
                  <td className="py-4 px-4 text-muted-foreground"><Minus className="size-4" /></td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                </tr>
                <tr className="hover:bg-secondary/30 transition-colors">
                  <td className="py-4 px-4 text-sm text-zinc-800 dark:text-zinc-200 font-medium">Workspace Administrator Control Panel</td>
                  <td className="py-4 px-4 text-muted-foreground"><Minus className="size-4" /></td>
                  <td className="py-4 px-4 text-muted-foreground"><Minus className="size-4" /></td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                </tr>
                <tr className="hover:bg-secondary/30 transition-colors">
                  <td className="py-4 px-4 text-sm text-zinc-800 dark:text-zinc-200 font-medium">SSO / SAML Security integration</td>
                  <td className="py-4 px-4 text-muted-foreground"><Minus className="size-4" /></td>
                  <td className="py-4 px-4 text-muted-foreground"><Minus className="size-4" /></td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                </tr>
                <tr className="hover:bg-secondary/30 transition-colors">
                  <td className="py-4 px-4 text-sm text-zinc-800 dark:text-zinc-200 font-medium">Detailed Activity Logs &amp; Audit Exports</td>
                  <td className="py-4 px-4 text-muted-foreground"><Minus className="size-4" /></td>
                  <td className="py-4 px-4 text-muted-foreground"><Minus className="size-4" /></td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                </tr>

                {/* CATEGORY: Deployment & Hosting */}
                <tr className="bg-secondary/50">
                  <td colSpan={5} className="py-3 px-4 text-[10px] font-semibold text-muted-foreground uppercase tracking-widest">
                    Deployment &amp; Hosting
                  </td>
                </tr>
                <tr className="hover:bg-secondary/30 transition-colors">
                  <td className="py-4 px-4 text-sm text-zinc-800 dark:text-zinc-200 font-medium">Cloud Serverless Deployment</td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                </tr>
                <tr className="hover:bg-secondary/30 transition-colors">
                  <td className="py-4 px-4 text-sm text-zinc-800 dark:text-zinc-200 font-medium">On-Premise Isolated Database Option</td>
                  <td className="py-4 px-4 text-muted-foreground"><Minus className="size-4" /></td>
                  <td className="py-4 px-4 text-muted-foreground"><Minus className="size-4" /></td>
                  <td className="py-4 px-4 text-muted-foreground"><Minus className="size-4" /></td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                </tr>
                <tr className="hover:bg-secondary/30 transition-colors">
                  <td className="py-4 px-4 text-sm text-zinc-800 dark:text-zinc-200 font-medium">Service Level Uptime SLA</td>
                  <td className="py-4 px-4 text-muted-foreground"><Minus className="size-4" /></td>
                  <td className="py-4 px-4 text-muted-foreground"><Minus className="size-4" /></td>
                  <td className="py-4 px-4 text-sm text-muted-foreground">99.9% Guarantee</td>
                  <td className="py-4 px-4 text-sm text-emerald-600 dark:text-emerald-500 font-semibold">Custom SLA contracts</td>
                </tr>

                {/* CATEGORY: Support & Contracts */}
                <tr className="bg-secondary/50">
                  <td colSpan={5} className="py-3 px-4 text-[10px] font-semibold text-muted-foreground uppercase tracking-widest">
                    Support &amp; Custom Contracts
                  </td>
                </tr>
                <tr className="hover:bg-secondary/30 transition-colors">
                  <td className="py-4 px-4 text-sm text-zinc-800 dark:text-zinc-200 font-medium">Support Channels</td>
                  <td className="py-4 px-4 text-sm text-muted-foreground">Community only</td>
                  <td className="py-4 px-4 text-sm text-muted-foreground">24x7 Specialized support</td>
                  <td className="py-4 px-4 text-sm text-muted-foreground">24x7 Specialized support</td>
                  <td className="py-4 px-4 text-sm text-emerald-600 dark:text-emerald-500 font-semibold">Priority 24/7 Response SLA</td>
                </tr>
                <tr className="hover:bg-secondary/30 transition-colors">
                  <td className="py-4 px-4 text-sm text-zinc-800 dark:text-zinc-200 font-medium">Dedicated Customer Success Manager</td>
                  <td className="py-4 px-4 text-muted-foreground"><Minus className="size-4" /></td>
                  <td className="py-4 px-4 text-muted-foreground"><Minus className="size-4" /></td>
                  <td className="py-4 px-4 text-muted-foreground"><Minus className="size-4" /></td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                </tr>
                <tr className="hover:bg-secondary/30 transition-colors">
                  <td className="py-4 px-4 text-sm text-zinc-800 dark:text-zinc-200 font-medium">Custom legal terms &amp; agreements</td>
                  <td className="py-4 px-4 text-muted-foreground"><Minus className="size-4" /></td>
                  <td className="py-4 px-4 text-muted-foreground"><Minus className="size-4" /></td>
                  <td className="py-4 px-4 text-muted-foreground"><Minus className="size-4" /></td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                </tr>

              </tbody>
            </table>
          </div>
        </section>

        {/* ── SECTION 4: FAQ ── */}
        <section className="w-full py-16 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-12 bg-zinc-50/30 dark:bg-zinc-950/10">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left side info */}
            <div className="flex flex-col gap-6 text-left">
              <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.05] text-zinc-900 dark:text-white" style={{ letterSpacing: "-0.025em" }}>
                Common<br />questions
              </h2>
              <p className="text-[14px] text-muted-foreground leading-relaxed max-w-[42ch]">
                Everything you need to know about our billing, trials, and data security guidelines. Can&apos;t find what you are looking for?{" "}
                <Link href="/support" className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors font-medium">
                  Visit support center
                </Link>{" "}
                or{" "}
                <Link href="/enterprise" className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors font-medium">
                  talk to sales
                </Link>.
              </p>
            </div>

            {/* Right side accordions */}
            <div className="flex flex-col w-full text-left border-t border-border/50">
              {faqs.map((faq) => (
                <FAQItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
