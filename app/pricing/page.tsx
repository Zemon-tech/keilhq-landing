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
    <div className="border-b border-zinc-200/60 dark:border-white/5 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer group"
      >
        <span className="text-sm font-medium text-zinc-900 dark:text-white group-hover:text-zinc-700 dark:group-hover:text-zinc-200 transition-colors">
          {q}
        </span>
        <ChevronDown
          className={`size-4 text-zinc-400 shrink-0 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          open ? "max-h-40 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
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

      <main className="flex-1 pt-24 pb-24 px-4 sm:px-6 lg:px-8 max-w-8xl mx-auto w-full">

        {/* ─── SECTION 1: Header ─── */}
        <div className="text-left mb-16">
          <h1 className="text-4xl sm:text-5xl font-normal tracking-tight text-zinc-900 dark:text-white">
            Pricing
          </h1>
          <p className="mt-4 text-base text-zinc-500 dark:text-zinc-400 max-w-xl leading-relaxed">
            KeilHQ supports users of every scale — from first prompt to enterprise rollout.
          </p>
        </div>

        {/* ─── SECTION 2: Pricing Tier Grid ─── */}
        <section className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">

            {/* 1. Pro Card */}
            <div className="flex flex-col bg-zinc-50/40 border border-zinc-200/90 dark:bg-[#0e0e0e]/40 dark:border-white/10 rounded-sm p-7 sm:p-8 gap-6 shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider rounded-bl-sm">
                1-Month Free Trial
              </div>

              <div className="flex flex-col gap-1.5 mt-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Pro</h3>
                  <span className="text-[10px] bg-zinc-200/60 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-2 py-0.5 rounded-sm font-medium">
                    Individual
                  </span>
                </div>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 min-h-[40px] leading-relaxed">
                  For power users and professionals who want premium AI intelligence and tools.
                </p>
              </div>

              {/* Price row with inline switcher */}
              <div className="flex items-center justify-between gap-4 min-h-[56px]">
                <div className="flex flex-col gap-0.5">
                  {proMode === "trial" ? (
                    <>
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">$0</span>
                        <span className="text-xs text-zinc-500 dark:text-zinc-400">/ trial</span>
                      </div>
                      <span className="text-[10px] text-zinc-400 dark:text-zinc-500 font-medium">30 days free</span>
                    </>
                  ) : (
                    <>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">$25</span>
                        <span className="text-xs line-through text-zinc-400 font-medium">$50</span>
                        <span className="text-xs text-zinc-500 dark:text-zinc-400">/ mo</span>
                      </div>
                      <span className="text-[10px] text-emerald-600 dark:text-emerald-500 font-medium">50% intro discount</span>
                    </>
                  )}
                </div>

                {/* Toggle */}
                <div className="flex bg-zinc-100 dark:bg-zinc-900 p-0.5 rounded-sm border border-zinc-200/80 dark:border-white/5 text-[11px] font-medium max-w-[130px] shrink-0">
                  <button
                    onClick={() => setProMode("trial")}
                    className={`px-2.5 py-1 rounded-xs transition-all cursor-pointer ${
                      proMode === "trial"
                        ? "bg-white dark:bg-zinc-800 text-zinc-950 dark:text-white shadow-xs"
                        : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200"
                    }`}
                  >
                    Trial
                  </button>
                  <button
                    onClick={() => setProMode("paid")}
                    className={`px-2.5 py-1 rounded-xs transition-all cursor-pointer ${
                      proMode === "paid"
                        ? "bg-white dark:bg-zinc-800 text-zinc-950 dark:text-white shadow-xs"
                        : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200"
                    }`}
                  >
                    Paid
                  </button>
                </div>
              </div>

              {proMode === "trial" ? (
                <Link
                  href="#"
                  className="w-full bg-zinc-950 hover:bg-zinc-900 dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-zinc-950 font-medium px-4.5 py-3 rounded-sm text-sm flex items-center justify-between transition-colors cursor-pointer shadow-sm active:scale-[0.98]"
                >
                  <span>Start 1-Month Free Trial</span>
                  <ArrowRight className="size-4" />
                </Link>
              ) : (
                <Link
                  href="#"
                  className="w-full bg-zinc-950 hover:bg-zinc-900 dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-zinc-950 font-medium px-4.5 py-3 rounded-sm text-sm flex items-center justify-between transition-colors cursor-pointer shadow-sm active:scale-[0.98]"
                >
                  <span>Get Paid Pro</span>
                  <ArrowRight className="size-4" />
                </Link>
              )}

              <hr className="border-t border-zinc-200/60 dark:border-white/5" />

              <div className="flex flex-col gap-4 flex-grow justify-between">
                <div>
                  <span className="text-xs text-zinc-700 dark:text-zinc-300 font-semibold tracking-wide uppercase block mb-3.5">
                    {proMode === "trial" ? "Trial limits (Month 1):" : "Included in paid Pro (Month 2+):"}
                  </span>

                  {proMode === "trial" ? (
                    <ul className="flex flex-col gap-3.5">
                      <li className="flex items-start gap-2.5 text-sm text-zinc-600 dark:text-zinc-400">
                        <Sparkles className="size-4 text-zinc-400 shrink-0 mt-0.5" />
                        <span><strong>25 AI chats</strong> per day</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-sm text-zinc-600 dark:text-zinc-400">
                        <Check className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>Unlimited tasks, motion pages, and chat</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-sm text-amber-600 dark:text-amber-500">
                        <Lock className="size-4 text-amber-500 shrink-0 mt-0.5" />
                        <span>Trial data will be used to train future models</span>
                      </li>
                    </ul>
                  ) : (
                    <ul className="flex flex-col gap-3.5">
                      <li className="flex items-start gap-2.5 text-sm text-zinc-600 dark:text-zinc-400">
                        <Check className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>Everything in Free Trial</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-sm text-zinc-600 dark:text-zinc-400">
                        <Sparkles className="size-4 text-zinc-400 shrink-0 mt-0.5" />
                        <span><strong>20 AI chats / hr</strong> &amp; <strong>100 chats / day</strong></span>
                      </li>
                      <li className="flex items-start gap-2.5 text-sm text-zinc-600 dark:text-zinc-400">
                        <Check className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>24x7 specialized support</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-sm text-zinc-600 dark:text-zinc-400">
                        <Check className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>First access to new beta releases &amp; features</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-sm text-emerald-600 dark:text-emerald-500 font-medium">
                        <Shield className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>Fully secure data (no model training)</span>
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            </div>

            {/* 2. Teams Card */}
            <div className="flex flex-col bg-zinc-50/20 border border-zinc-200/80 dark:bg-[#0e0e0e]/20 dark:border-white/5 rounded-sm p-7 sm:p-8 gap-6 transition-all duration-300 relative">
              <div className="flex flex-col gap-1.5 mt-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Teams</h3>
                  <span className="text-[10px] bg-zinc-200/60 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-2 py-0.5 rounded-sm font-medium">
                    Collaboration
                  </span>
                </div>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 min-h-[40px] leading-relaxed">
                  For growing squads that need aligned controls, SSO, and shared billing structures.
                </p>
              </div>

              <div className="flex items-center justify-between gap-4 min-h-[56px]">
                <div className="flex flex-col gap-0.5">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">$50</span>
                    <span className="text-xs line-through text-zinc-400 font-medium">$75</span>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400">/ user / mo</span>
                  </div>
                  <span className="text-[10px] text-emerald-600 dark:text-emerald-500 font-medium">33% team discount</span>
                </div>
                <div className="w-[130px] shrink-0" />
              </div>

              <Link
                href="#"
                className="w-full bg-[#ededed] hover:bg-[#e2e2e2] dark:bg-white/5 dark:hover:bg-white/10 dark:border dark:border-white/10 text-zinc-900 dark:text-zinc-100 font-medium px-4.5 py-3 rounded-sm text-sm flex items-center justify-between transition-colors cursor-pointer active:scale-[0.98]"
              >
                <span>Get Teams</span>
                <ArrowRight className="size-4" />
              </Link>

              <hr className="border-t border-zinc-200/60 dark:border-white/5" />

              <div className="flex flex-col gap-3.5 flex-grow">
                <span className="text-xs text-zinc-700 dark:text-zinc-300 font-semibold tracking-wide uppercase">Everything in Pro, plus:</span>
                <ul className="flex flex-col gap-3.5">
                  <li className="flex items-start gap-2.5 text-sm text-zinc-500 dark:text-zinc-400">
                    <Building2 className="size-4 text-zinc-400 shrink-0 mt-0.5" />
                    <span>Centralized billing &amp; seat management</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-zinc-500 dark:text-zinc-400">
                    <Check className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Single Sign-On (SSO) support</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-zinc-500 dark:text-zinc-400">
                    <Check className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Detailed audit &amp; activity logs</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-zinc-500 dark:text-zinc-400">
                    <Check className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Advanced workspace admin controls</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 3. Enterprise Card */}
            <div className="flex flex-col bg-zinc-50/20 border border-zinc-200/80 dark:bg-[#0e0e0e]/20 dark:border-white/5 rounded-sm p-7 sm:p-8 gap-6 transition-all duration-300 relative">
              <div className="flex flex-col gap-1.5 mt-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Enterprise</h3>
                  <span className="text-[10px] bg-zinc-200/60 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-2 py-0.5 rounded-sm font-medium">
                    Custom Scale
                  </span>
                </div>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 min-h-[40px] leading-relaxed">
                  For large-scale operations requiring custom hosting, data rules, and agreements.
                </p>
              </div>

              <div className="flex items-center justify-between gap-4 min-h-[56px]">
                <div className="flex flex-col gap-0.5">
                  <span className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">Contact Sales</span>
                  <span className="text-[10px] text-zinc-400 dark:text-zinc-500 font-medium">Custom contracts</span>
                </div>
                <div className="w-[130px] shrink-0" />
              </div>

              <Link
                href="/enterprise"
                className="w-full bg-[#ededed] hover:bg-[#e2e2e2] dark:bg-white/5 dark:hover:bg-white/10 dark:border dark:border-white/10 text-zinc-900 dark:text-zinc-100 font-medium px-4.5 py-3 rounded-sm text-sm flex items-center justify-between transition-colors cursor-pointer active:scale-[0.98]"
              >
                <span>Talk to Sales</span>
                <ArrowRight className="size-4" />
              </Link>

              <hr className="border-t border-zinc-200/60 dark:border-white/5" />

              <div className="flex flex-col gap-3.5 flex-grow">
                <span className="text-xs text-zinc-700 dark:text-zinc-300 font-semibold tracking-wide uppercase">Everything in Teams, plus:</span>
                <ul className="flex flex-col gap-3.5">
                  <li className="flex items-start gap-2.5 text-sm text-zinc-500 dark:text-zinc-400">
                    <Database className="size-4 text-zinc-400 shrink-0 mt-0.5" />
                    <span>Option to host database on-premise</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-zinc-500 dark:text-zinc-400">
                    <Check className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Priority support with dedicated agents</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-zinc-500 dark:text-zinc-400">
                    <Check className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Unlimited AI chats &amp; usage throughout</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-zinc-500 dark:text-zinc-400">
                    <Check className="size-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Custom SLAs, compliance, &amp; legal contracts</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </section>

        <div className="h-px bg-zinc-200/60 dark:bg-white/5 my-20" />

        {/* ─── SECTION 3: Detailed Feature Comparison Table ─── */}
        <section className="mb-20 overflow-x-auto select-text">
          <div className="min-w-[950px] w-full">
            <h2 className="text-2xl font-normal tracking-tight text-zinc-900 dark:text-white mb-8">
              Compare plans &amp; features
            </h2>
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-white/10 text-left">
                  <th className="py-4.5 text-sm font-semibold text-zinc-900 dark:text-white w-1/4">Features</th>
                  <th className="py-4.5 text-sm font-semibold text-zinc-900 dark:text-white w-1/5">Pro (Free Trial)</th>
                  <th className="py-4.5 text-sm font-semibold text-zinc-900 dark:text-white w-1/5">Pro (Paid)</th>
                  <th className="py-4.5 text-sm font-semibold text-zinc-900 dark:text-white w-1/5">Teams</th>
                  <th className="py-4.5 text-sm font-semibold text-zinc-900 dark:text-white w-1/5">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100/60 dark:divide-white/5">

                {/* CATEGORY: AI Capabilities */}
                <tr className="bg-zinc-100/50 dark:bg-zinc-950/40">
                  <td colSpan={5} className="py-3 px-4 text-[10px] font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
                    AI Capabilities &amp; Data Security
                  </td>
                </tr>
                <tr className="hover:bg-zinc-50/40 dark:hover:bg-white/[0.01] transition-colors">
                  <td className="py-4 px-4 text-sm text-zinc-800 dark:text-zinc-200 font-medium">Daily AI Chat Limit</td>
                  <td className="py-4 px-4 text-sm text-zinc-500 dark:text-zinc-400">25 / day</td>
                  <td className="py-4 px-4 text-sm text-zinc-500 dark:text-zinc-400">100 / day</td>
                  <td className="py-4 px-4 text-sm text-zinc-500 dark:text-zinc-400">100 / day</td>
                  <td className="py-4 px-4 text-sm text-zinc-900 dark:text-white font-semibold">Unlimited</td>
                </tr>
                <tr className="hover:bg-zinc-50/40 dark:hover:bg-white/[0.01] transition-colors">
                  <td className="py-4 px-4 text-sm text-zinc-800 dark:text-zinc-200 font-medium">Hourly AI Chat Limit</td>
                  <td className="py-4 px-4 text-sm text-zinc-300 dark:text-zinc-700"><Minus className="size-4" /></td>
                  <td className="py-4 px-4 text-sm text-zinc-500 dark:text-zinc-400">20 / hour</td>
                  <td className="py-4 px-4 text-sm text-zinc-500 dark:text-zinc-400">20 / hour</td>
                  <td className="py-4 px-4 text-sm text-zinc-900 dark:text-white font-semibold">Unlimited</td>
                </tr>
                <tr className="hover:bg-zinc-50/40 dark:hover:bg-white/[0.01] transition-colors">
                  <td className="py-4 px-4 text-sm text-zinc-800 dark:text-zinc-200 font-medium">AI Context Ingestion</td>
                  <td className="py-4 px-4 text-sm text-zinc-500 dark:text-zinc-400">Standard</td>
                  <td className="py-4 px-4 text-sm text-zinc-500 dark:text-zinc-400">Advanced</td>
                  <td className="py-4 px-4 text-sm text-zinc-500 dark:text-zinc-400">Advanced</td>
                  <td className="py-4 px-4 text-sm text-zinc-500 dark:text-zinc-400">Custom context limits</td>
                </tr>
                <tr className="hover:bg-zinc-50/40 dark:hover:bg-white/[0.01] transition-colors">
                  <td className="py-4 px-4 text-sm text-zinc-800 dark:text-zinc-200 font-medium">Data Privacy &amp; Model Training</td>
                  <td className="py-4 px-4 text-sm text-amber-600 dark:text-amber-500">Used for model training</td>
                  <td className="py-4 px-4 text-sm text-emerald-600 dark:text-emerald-500 font-medium">Secure data (No training)</td>
                  <td className="py-4 px-4 text-sm text-emerald-600 dark:text-emerald-500 font-medium">Secure data (No training)</td>
                  <td className="py-4 px-4 text-sm text-emerald-600 dark:text-emerald-500 font-medium">On-premise isolated databases</td>
                </tr>

                {/* CATEGORY: Core Workspace */}
                <tr className="bg-zinc-100/50 dark:bg-zinc-950/40">
                  <td colSpan={5} className="py-3 px-4 text-[10px] font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
                    Core Workspace Features
                  </td>
                </tr>
                <tr className="hover:bg-zinc-50/40 dark:hover:bg-white/[0.01] transition-colors">
                  <td className="py-4 px-4 text-sm text-zinc-800 dark:text-zinc-200 font-medium">Smart Dashboard Task Ranking</td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                </tr>
                <tr className="hover:bg-zinc-50/40 dark:hover:bg-white/[0.01] transition-colors">
                  <td className="py-4 px-4 text-sm text-zinc-800 dark:text-zinc-200 font-medium">Task Management (Kanban &amp; Gantt)</td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                </tr>
                <tr className="hover:bg-zinc-50/40 dark:hover:bg-white/[0.01] transition-colors">
                  <td className="py-4 px-4 text-sm text-zinc-800 dark:text-zinc-200 font-medium">Dependency Blocking Logic</td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                </tr>
                <tr className="hover:bg-zinc-50/40 dark:hover:bg-white/[0.01] transition-colors">
                  <td className="py-4 px-4 text-sm text-zinc-800 dark:text-zinc-200 font-medium">Motion Docs &amp; Block Editor</td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                </tr>
                <tr className="hover:bg-zinc-50/40 dark:hover:bg-white/[0.01] transition-colors">
                  <td className="py-4 px-4 text-sm text-zinc-800 dark:text-zinc-200 font-medium">Real-time Collaborative Editing</td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                </tr>
                <tr className="hover:bg-zinc-50/40 dark:hover:bg-white/[0.01] transition-colors">
                  <td className="py-4 px-4 text-sm text-zinc-800 dark:text-zinc-200 font-medium">Team Chat &amp; Socket Channels</td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                </tr>
                <tr className="hover:bg-zinc-50/40 dark:hover:bg-white/[0.01] transition-colors">
                  <td className="py-4 px-4 text-sm text-zinc-800 dark:text-zinc-200 font-medium">Smart Notifications &amp; Preferences</td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                </tr>
                <tr className="hover:bg-zinc-50/40 dark:hover:bg-white/[0.01] transition-colors">
                  <td className="py-4 px-4 text-sm text-zinc-800 dark:text-zinc-200 font-medium">Audio Meeting Recorder</td>
                  <td className="py-4 px-4 text-sm text-zinc-400">Limited (3 / month)</td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                </tr>
                <tr className="hover:bg-zinc-50/40 dark:hover:bg-white/[0.01] transition-colors">
                  <td className="py-4 px-4 text-sm text-zinc-800 dark:text-zinc-200 font-medium">Transcription Speaker Diarization</td>
                  <td className="py-4 px-4 text-zinc-300 dark:text-zinc-700"><Minus className="size-4" /></td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                </tr>

                {/* CATEGORY: Collaboration & Admin */}
                <tr className="bg-zinc-100/50 dark:bg-zinc-950/40">
                  <td colSpan={5} className="py-3 px-4 text-[10px] font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
                    Collaboration &amp; Administration
                  </td>
                </tr>
                <tr className="hover:bg-zinc-50/40 dark:hover:bg-white/[0.01] transition-colors">
                  <td className="py-4 px-4 text-sm text-zinc-800 dark:text-zinc-200 font-medium">Centralized Seat Billing</td>
                  <td className="py-4 px-4 text-zinc-300 dark:text-zinc-700"><Minus className="size-4" /></td>
                  <td className="py-4 px-4 text-zinc-300 dark:text-zinc-700"><Minus className="size-4" /></td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                </tr>
                <tr className="hover:bg-zinc-50/40 dark:hover:bg-white/[0.01] transition-colors">
                  <td className="py-4 px-4 text-sm text-zinc-800 dark:text-zinc-200 font-medium">Workspace Administrator Control Panel</td>
                  <td className="py-4 px-4 text-zinc-300 dark:text-zinc-700"><Minus className="size-4" /></td>
                  <td className="py-4 px-4 text-zinc-300 dark:text-zinc-700"><Minus className="size-4" /></td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                </tr>
                <tr className="hover:bg-zinc-50/40 dark:hover:bg-white/[0.01] transition-colors">
                  <td className="py-4 px-4 text-sm text-zinc-800 dark:text-zinc-200 font-medium">SSO / SAML Security integration</td>
                  <td className="py-4 px-4 text-zinc-300 dark:text-zinc-700"><Minus className="size-4" /></td>
                  <td className="py-4 px-4 text-zinc-300 dark:text-zinc-700"><Minus className="size-4" /></td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                </tr>
                <tr className="hover:bg-zinc-50/40 dark:hover:bg-white/[0.01] transition-colors">
                  <td className="py-4 px-4 text-sm text-zinc-800 dark:text-zinc-200 font-medium">Detailed Activity Logs &amp; Audit Exports</td>
                  <td className="py-4 px-4 text-zinc-300 dark:text-zinc-700"><Minus className="size-4" /></td>
                  <td className="py-4 px-4 text-zinc-300 dark:text-zinc-700"><Minus className="size-4" /></td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                </tr>

                {/* CATEGORY: Deployment & Hosting */}
                <tr className="bg-zinc-100/50 dark:bg-zinc-950/40">
                  <td colSpan={5} className="py-3 px-4 text-[10px] font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
                    Deployment &amp; Hosting
                  </td>
                </tr>
                <tr className="hover:bg-zinc-50/40 dark:hover:bg-white/[0.01] transition-colors">
                  <td className="py-4 px-4 text-sm text-zinc-800 dark:text-zinc-200 font-medium">Cloud Serverless Deployment</td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                </tr>
                <tr className="hover:bg-zinc-50/40 dark:hover:bg-white/[0.01] transition-colors">
                  <td className="py-4 px-4 text-sm text-zinc-800 dark:text-zinc-200 font-medium">On-Premise Isolated Database Option</td>
                  <td className="py-4 px-4 text-zinc-300 dark:text-zinc-700"><Minus className="size-4" /></td>
                  <td className="py-4 px-4 text-zinc-300 dark:text-zinc-700"><Minus className="size-4" /></td>
                  <td className="py-4 px-4 text-zinc-300 dark:text-zinc-700"><Minus className="size-4" /></td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                </tr>
                <tr className="hover:bg-zinc-50/40 dark:hover:bg-white/[0.01] transition-colors">
                  <td className="py-4 px-4 text-sm text-zinc-800 dark:text-zinc-200 font-medium">Service Level Uptime SLA</td>
                  <td className="py-4 px-4 text-zinc-300 dark:text-zinc-700"><Minus className="size-4" /></td>
                  <td className="py-4 px-4 text-zinc-300 dark:text-zinc-700"><Minus className="size-4" /></td>
                  <td className="py-4 px-4 text-sm text-zinc-500 dark:text-zinc-400">99.9% Guarantee</td>
                  <td className="py-4 px-4 text-sm text-emerald-600 dark:text-emerald-500 font-semibold">Custom SLA contracts</td>
                </tr>

                {/* CATEGORY: Support & Contracts */}
                <tr className="bg-zinc-100/50 dark:bg-zinc-950/40">
                  <td colSpan={5} className="py-3 px-4 text-[10px] font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
                    Support &amp; Custom Contracts
                  </td>
                </tr>
                <tr className="hover:bg-zinc-50/40 dark:hover:bg-white/[0.01] transition-colors">
                  <td className="py-4 px-4 text-sm text-zinc-800 dark:text-zinc-200 font-medium">Support Channels</td>
                  <td className="py-4 px-4 text-sm text-zinc-500 dark:text-zinc-400">Community only</td>
                  <td className="py-4 px-4 text-sm text-zinc-500 dark:text-zinc-400">24x7 Specialized support</td>
                  <td className="py-4 px-4 text-sm text-zinc-500 dark:text-zinc-400">24x7 Specialized support</td>
                  <td className="py-4 px-4 text-sm text-emerald-600 dark:text-emerald-500 font-semibold">Priority 24/7 Response SLA</td>
                </tr>
                <tr className="hover:bg-zinc-50/40 dark:hover:bg-white/[0.01] transition-colors">
                  <td className="py-4 px-4 text-sm text-zinc-800 dark:text-zinc-200 font-medium">Dedicated Customer Success Manager</td>
                  <td className="py-4 px-4 text-zinc-300 dark:text-zinc-700"><Minus className="size-4" /></td>
                  <td className="py-4 px-4 text-zinc-300 dark:text-zinc-700"><Minus className="size-4" /></td>
                  <td className="py-4 px-4 text-zinc-300 dark:text-zinc-700"><Minus className="size-4" /></td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                </tr>
                <tr className="hover:bg-zinc-50/40 dark:hover:bg-white/[0.01] transition-colors">
                  <td className="py-4 px-4 text-sm text-zinc-800 dark:text-zinc-200 font-medium">Custom legal terms &amp; agreements</td>
                  <td className="py-4 px-4 text-zinc-300 dark:text-zinc-700"><Minus className="size-4" /></td>
                  <td className="py-4 px-4 text-zinc-300 dark:text-zinc-700"><Minus className="size-4" /></td>
                  <td className="py-4 px-4 text-zinc-300 dark:text-zinc-700"><Minus className="size-4" /></td>
                  <td className="py-4 px-4"><Check className="size-4 text-emerald-500" /></td>
                </tr>

              </tbody>
            </table>
          </div>
        </section>

        <div className="h-px bg-zinc-200/60 dark:bg-white/5 my-20" />

        {/* ─── SECTION 4: FAQ ─── */}
        <section className="mb-8 max-w-2xl">
          <h2 className="text-2xl font-normal tracking-tight text-zinc-900 dark:text-white mb-8">
            Common questions
          </h2>
          <div className="divide-y divide-zinc-200/60 dark:divide-white/5 border-t border-zinc-200/60 dark:border-white/5">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
          <p className="mt-8 text-sm text-zinc-500 dark:text-zinc-400">
            More questions?{" "}
            <Link href="/support" className="text-zinc-900 dark:text-white underline underline-offset-2 hover:opacity-70 transition-opacity">
              Visit our support center
            </Link>{" "}
            or{" "}
            <Link href="/enterprise" className="text-zinc-900 dark:text-white underline underline-offset-2 hover:opacity-70 transition-opacity">
              talk to sales
            </Link>.
          </p>
        </section>

      </main>
      <Footer />
    </div>
  );
}
