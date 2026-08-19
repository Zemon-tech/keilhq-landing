"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Minus,
  X,
  ChevronDown,
  Sparkles,
  Building2,
  Database,
  Lock,
  Shield,
  HelpCircle,
  AlertCircle,
  CheckCircle2,
  Layers,
  Brain,
  DollarSign,
} from "lucide-react";

/* ─── Detailed Linear-Style Comparison Categories ─────────────────────────── */
interface PlanFeature {
  name: string;
  free: string | boolean;
  pro: string | boolean;
  teams: string | boolean;
  enterprise: string | boolean;
  note?: string;
}

interface FeatureCategory {
  category: string;
  features: PlanFeature[];
}

const detailedFeatureCategories: FeatureCategory[] = [
  {
    category: "Core Workspace & Task Management",
    features: [
      { name: "Unified workspace members", free: "Up to 5", pro: "Unlimited", teams: "Unlimited", enterprise: "Unlimited" },
      { name: "Task management (Kanban, List, Gantt, Timeline)", free: true, pro: true, teams: true, enterprise: true },
      { name: "Motion Docs & Block Wiki Editor", free: true, pro: true, teams: true, enterprise: true },
      { name: "Built-in Team Chat & DM Channels (No Slack required)", free: true, pro: true, teams: true, enterprise: true },
      { name: "Task hierarchies, dependencies & auto-blockers", free: "Basic", pro: true, teams: true, enterprise: true },
      { name: "Custom workspace properties & custom fields", free: "3 / board", pro: "Unlimited", teams: "Unlimited", enterprise: "Unlimited" },
      { name: "File attachments & document asset storage", free: "5 GB", pro: "50 GB", teams: "250 GB / user", enterprise: "Unlimited" },
    ],
  },
  {
    category: "AI Multi-Agent & Audio Intelligence",
    features: [
      { name: "Live Meeting Bot (Auto-joins Google Meet & Zoom)", free: "5 calls / mo", pro: "Unlimited", teams: "Unlimited", enterprise: "Unlimited" },
      { name: "Real-time speech-to-text & call summarization", free: "Saaras / Whisper", pro: "High-precision STT", teams: "High-precision STT", enterprise: "Dedicated Models" },
      { name: "Auto-task generation from meeting transcripts", free: true, pro: true, teams: true, enterprise: true },
      { name: "Cross-system AI assistant (Mastra Multi-Agent)", free: "25 prompts / day", pro: "100 prompts / day", teams: "Unlimited priority", enterprise: "Custom limits" },
      { name: "Company memory & contextual awareness", free: "Basic", pro: true, teams: true, enterprise: true },
      { name: "Zero model training on customer data", free: false, pro: true, teams: true, enterprise: true, note: "Paid plans guarantee absolute data isolation" },
    ],
  },
  {
    category: "CRM & Omnichannel Deals",
    features: [
      { name: "Relational CRM pipelines & stage tracking", free: true, pro: true, teams: true, enterprise: true },
      { name: "Omnichannel lead ingest (WhatsApp, Meta, Webhooks)", free: "1 channel", pro: "All channels", teams: "All channels", enterprise: "Custom routing" },
      { name: "Contact & company timelines", free: true, pro: true, teams: true, enterprise: true },
      { name: "Activity history & call recording playback", free: "30 days", pro: "1 year", teams: "Unlimited", enterprise: "Unlimited" },
    ],
  },
  {
    category: "Finance & Operations",
    features: [
      { name: "Invoice generator & PDF dispatch", free: true, pro: true, teams: true, enterprise: true },
      { name: "Milestone-to-invoice auto-conversion", free: false, pro: true, teams: true, enterprise: true },
      { name: "Expense logging & basic ledger overview", free: true, pro: true, teams: true, enterprise: true },
    ],
  },
  {
    category: "Integrations & Platform",
    features: [
      { name: "Google Calendar 2-way live sync", free: true, pro: true, teams: true, enterprise: true },
      { name: "Google Workspace & Gmail context integration", free: true, pro: true, teams: true, enterprise: true },
      { name: "GitHub pull requests & commit linkers", free: true, pro: true, teams: true, enterprise: true },
      { name: "REST API & Webhooks access", free: "Read-only", pro: true, teams: true, enterprise: true },
    ],
  },
  {
    category: "Security, Governance & Support",
    features: [
      { name: "Single Sign-On (SAML / Okta / Google Workspace SSO)", free: false, pro: false, teams: true, enterprise: true },
      { name: "Role-Based Access Control (RBAC) & Admin hierarchy", free: "Standard", pro: "Standard", teams: "Advanced", enterprise: "Custom roles" },
      { name: "Centralized seat management & team billing", free: false, pro: false, teams: true, enterprise: true },
      { name: "Detailed audit logs & activity compliance streams", free: false, pro: false, teams: true, enterprise: true },
      { name: "SOC 2 Type II compliance controls", free: "In transit", pro: "In transit", teams: "In transit", enterprise: "Certified" },
      { name: "On-premise / Self-hosted database option", free: false, pro: false, teams: false, enterprise: true },
      { name: "Support tier", free: "Community", pro: "24/7 Priority", teams: "24/7 Dedicated", enterprise: "Dedicated account manager & SLA" },
    ],
  },
];

/* ─── Gotchas Data ────────────────────────────────────────────────────────── */
const competitorGotchas = [
  {
    platform: "KeilHQ",
    badge: "Transparent Core",
    price: "₹500 – ₹1,500 / mo",
    gotcha: "Zero seat penalty mandates. AI, team chat, rich docs, meeting recorder bot, CRM, and finance are built into the single platform core.",
    verdict: "Predictable, unified pricing",
    isKeil: true,
  },
  {
    platform: "ClickUp",
    badge: "Mandatory Workspace AI Tax",
    price: "$7 – $12 base + AI add-on",
    gotcha: "ClickUp Brain adds +$9 to +$28/user/mo and charges every single seat in your workspace, regardless of who uses it.",
    verdict: "~$21 – $40 / user / mo",
    isKeil: false,
  },
  {
    platform: "Monday.com",
    badge: "Seat Minimum Penalty",
    price: "$9 – $19 base + CRM SKU",
    gotcha: "Mandatory 3-seat minimum on all paid plans. Plus, CRM is billed as a separate product (+$12 to +$28/user/mo).",
    verdict: "~$24 – $47 / user / mo",
    isKeil: false,
  },
  {
    platform: "Zoho One",
    badge: "All-Employee Mandate",
    price: "$37 (All) / $90 (Flex)",
    gotcha: "$37/mo forces licenses for everyone on payroll (even non-users). Otherwise flexible pricing jumps to $90/user/mo.",
    verdict: "$37 – $90 / user / mo + setup",
    isKeil: false,
  },
  {
    platform: "Notion",
    badge: "Plan Lock-in",
    price: "$10 – $20 base + credits",
    gotcha: "Full AI is locked behind the $20/user/mo Business plan plus metered credits. Lacks native chat and meeting bots.",
    verdict: "~$20 – $30 / user / mo (+ Slack + Fireflies)",
    isKeil: false,
  },
  {
    platform: "Motion",
    badge: "Metered Overage Fees",
    price: "$19 – $29 / user / mo",
    gotcha: "Strict 7-day card-required trial with no permanent free tier. AI credits are metered with unexpected overage fees.",
    verdict: "~$29 – $49 / user / mo",
    isKeil: false,
  },
];

/* ─── FAQs ────────────────────────────────────────────────────────────────── */
const faqs = [
  {
    q: "Does the free trial require a credit card?",
    a: "No. The 1-month Pro trial is completely free — no credit card needed. You only enter payment details if you choose to continue after 30 days.",
  },
  {
    q: "Can I switch between monthly and annual billing at any time?",
    a: "Yes. Upgrade from Trial to Pro, or from Pro to Teams, at any point. Billing adjustments will be prorated automatically.",
  },
  {
    q: "What happens to my data if I don't upgrade after the trial?",
    a: "Your workspace is securely preserved for 30 days after a trial ends. After that, data is archived. You can export your data anytime.",
  },
  {
    q: "Is my customer and workspace data used to train AI models?",
    a: "On all paid plans (Pro, Teams, Enterprise), customer data is strictly isolated and never used to train public or foundation models.",
  },
  {
    q: "How does KeilHQ replace 5+ separate subscriptions?",
    a: "KeilHQ natively unifies Tasks, Notion-style Motion Docs, Real-Time Team Chat, Meeting Bots/STT, CRM, and Invoicing into one shared relational core.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border/40 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer group"
      >
        <span className="text-[15px] font-medium text-foreground group-hover:text-muted-foreground transition-colors font-sans">
          {q}
        </span>
        <ChevronDown
          className={`size-4 text-muted-foreground shrink-0 transition-transform duration-200 ${
            open ? "rotate-180 text-foreground" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          open ? "max-h-48 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-[14px] text-muted-foreground leading-relaxed font-sans">
          {a}
        </p>
      </div>
    </div>
  );
}

function RenderFeatureValue({ value }: { value: string | boolean }) {
  if (value === true) {
    return <Check className="size-4 text-foreground stroke-[2.5] mx-auto lg:mx-0" />;
  }
  if (value === false) {
    return <Minus className="size-4 text-muted-foreground/40 stroke-[2] mx-auto lg:mx-0" />;
  }
  return <span className="text-[13px] text-muted-foreground font-sans">{value}</span>;
}

export function PricingClient() {
  const [billingCycle, setBillingCycle] = useState<"annual" | "monthly">("annual");

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-[var(--color-copper)]/20 select-text">
      
      {/* ── 1. HEADER HERO ── */}
      <section className="w-full pt-32 pb-16 lg:pt-40 lg:pb-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center">
          
          <h1 className="font-display text-[clamp(2.5rem,5.5vw,4.25rem)] font-medium leading-[1.08] tracking-tight text-foreground text-balance">
            Product plans
          </h1>

          <p className="mt-4 text-[16px] sm:text-[17px] text-muted-foreground max-w-[54ch] leading-relaxed font-sans">
            Start free with a 30-day Pro trial. No credit card required. Upgrade as your squad scales.
          </p>

          {/* Clean Linear-style Toggle */}
          <div className="mt-8 flex items-center gap-3 text-xs font-medium font-sans">
            <span className={billingCycle === "annual" ? "text-foreground font-semibold" : "text-muted-foreground"}>
              Billed annually
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === "annual" ? "monthly" : "annual")}
              className="relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border border-border/80 bg-muted transition-colors duration-200 focus:outline-hidden"
              role="switch"
              aria-checked={billingCycle === "annual"}
            >
              <span
                className={`pointer-events-none inline-block size-5 transform rounded-full bg-foreground shadow-xs transition duration-200 ease-in-out ${
                  billingCycle === "annual" ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </button>
            <span className={billingCycle === "monthly" ? "text-foreground font-semibold" : "text-muted-foreground"}>
              Billed monthly
            </span>
          </div>

        </div>
      </section>

      {/* ── 2. 4-COLUMN FLAT LINEAR PRICING GRID ── */}
      <section className="w-full pb-24 px-6 sm:px-8 lg:px-12">
        <div className="max-w-[1200px] mx-auto">
          
          {/* Grid without heavy boxes — flat Linear border dividers */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border/60 rounded-xl overflow-hidden border border-border/60">
            
            {/* Plan 1: Free Trial */}
            <div className="bg-background p-8 flex flex-col justify-between gap-8">
              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">Free Trial</h3>
                  <p className="text-[13px] text-muted-foreground mt-1.5 leading-relaxed font-sans">
                    For individuals exploring unified AI clarity.
                  </p>
                </div>

                <div className="flex flex-col gap-0.5 font-display">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-semibold text-foreground">₹0</span>
                    <span className="text-xs text-muted-foreground font-sans">/ 30 days</span>
                  </div>
                  <span className="text-[11px] text-muted-foreground font-sans">No credit card required</span>
                </div>

                <Link
                  href="https://app.Keilhq.in/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-md bg-secondary hover:bg-secondary/80 text-foreground text-xs font-semibold text-center border border-border/60 transition-transform duration-150 active:scale-[0.97] font-display"
                >
                  Start free trial
                </Link>

                <div className="flex flex-col gap-3 pt-4 border-t border-border/40 text-[13px] text-muted-foreground font-sans">
                  <span className="text-[11px] uppercase tracking-wider text-foreground font-semibold font-display">Includes:</span>
                  <div className="flex items-center gap-2.5"><Check className="size-3.5 text-foreground shrink-0 stroke-[2.5]" /> <span>Up to 5 workspace members</span></div>
                  <div className="flex items-center gap-2.5"><Check className="size-3.5 text-foreground shrink-0 stroke-[2.5]" /> <span>Unlimited tasks &amp; docs</span></div>
                  <div className="flex items-center gap-2.5"><Check className="size-3.5 text-foreground shrink-0 stroke-[2.5]" /> <span>25 AI agent prompts / day</span></div>
                  <div className="flex items-center gap-2.5"><Check className="size-3.5 text-foreground shrink-0 stroke-[2.5]" /> <span>5 AI meeting recordings / mo</span></div>
                  <div className="flex items-center gap-2.5"><Check className="size-3.5 text-foreground shrink-0 stroke-[2.5]" /> <span>Google Calendar 2-way sync</span></div>
                </div>
              </div>
            </div>

            {/* Plan 2: Pro */}
            <div className="bg-background p-8 flex flex-col justify-between gap-8 relative">
              <div className="flex flex-col gap-6">
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-lg font-semibold text-foreground">Pro</h3>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[var(--color-copper)]/15 text-[var(--color-copper)] font-semibold uppercase tracking-wider font-display">
                      Popular
                    </span>
                  </div>
                  <p className="text-[13px] text-muted-foreground mt-1.5 leading-relaxed font-sans">
                    For power users and founders demanding high speed.
                  </p>
                </div>

                <div className="flex flex-col gap-0.5 font-display">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl font-semibold text-foreground">
                      {billingCycle === "annual" ? "₹500" : "₹750"}
                    </span>
                    <span className="text-xs text-muted-foreground font-sans">/ user / mo</span>
                  </div>
                  <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-sans">
                    {billingCycle === "annual" ? "50% discount applied" : "Billed monthly"}
                  </span>
                </div>

                <Link
                  href="https://app.Keilhq.in/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-md bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-semibold text-center transition-transform duration-150 active:scale-[0.97] font-display shadow-xs"
                >
                  Get Pro
                </Link>

                <div className="flex flex-col gap-3 pt-4 border-t border-border/40 text-[13px] text-muted-foreground font-sans">
                  <span className="text-[11px] uppercase tracking-wider text-foreground font-semibold font-display">Everything in Trial, plus:</span>
                  <div className="flex items-center gap-2.5"><Check className="size-3.5 text-foreground shrink-0 stroke-[2.5]" /> <span>Unlimited members &amp; storage</span></div>
                  <div className="flex items-center gap-2.5"><Check className="size-3.5 text-foreground shrink-0 stroke-[2.5]" /> <span>100 AI prompts / day</span></div>
                  <div className="flex items-center gap-2.5"><Check className="size-3.5 text-foreground shrink-0 stroke-[2.5]" /> <span>Unlimited live meeting bot</span></div>
                  <div className="flex items-center gap-2.5"><Check className="size-3.5 text-foreground shrink-0 stroke-[2.5]" /> <span>Full Relational CRM pipelines</span></div>
                  <div className="flex items-center gap-2.5"><Check className="size-3.5 text-foreground shrink-0 stroke-[2.5]" /> <span>Zero AI model training</span></div>
                </div>
              </div>
            </div>

            {/* Plan 3: Teams */}
            <div className="bg-background p-8 flex flex-col justify-between gap-8">
              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">Teams</h3>
                  <p className="text-[13px] text-muted-foreground mt-1.5 leading-relaxed font-sans">
                    For growing squads needing centralized controls.
                  </p>
                </div>

                <div className="flex flex-col gap-0.5 font-display">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl font-semibold text-foreground">
                      {billingCycle === "annual" ? "₹1,500" : "₹2,000"}
                    </span>
                    <span className="text-xs text-muted-foreground font-sans">/ user / mo</span>
                  </div>
                  <span className="text-[11px] text-muted-foreground font-sans">Centralized squad billing</span>
                </div>

                <Link
                  href="https://app.Keilhq.in/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-md bg-secondary hover:bg-secondary/80 text-foreground text-xs font-semibold text-center border border-border/60 transition-transform duration-150 active:scale-[0.97] font-display"
                >
                  Get Teams
                </Link>

                <div className="flex flex-col gap-3 pt-4 border-t border-border/40 text-[13px] text-muted-foreground font-sans">
                  <span className="text-[11px] uppercase tracking-wider text-foreground font-semibold font-display">Everything in Pro, plus:</span>
                  <div className="flex items-center gap-2.5"><Check className="size-3.5 text-foreground shrink-0 stroke-[2.5]" /> <span>Centralized billing &amp; seats</span></div>
                  <div className="flex items-center gap-2.5"><Check className="size-3.5 text-foreground shrink-0 stroke-[2.5]" /> <span>Single Sign-On (SAML / SSO)</span></div>
                  <div className="flex items-center gap-2.5"><Check className="size-3.5 text-foreground shrink-0 stroke-[2.5]" /> <span>Detailed audit &amp; activity logs</span></div>
                  <div className="flex items-center gap-2.5"><Check className="size-3.5 text-foreground shrink-0 stroke-[2.5]" /> <span>Advanced admin permissions</span></div>
                  <div className="flex items-center gap-2.5"><Check className="size-3.5 text-foreground shrink-0 stroke-[2.5]" /> <span>Priority 24/7 dedicated support</span></div>
                </div>
              </div>
            </div>

            {/* Plan 4: Enterprise */}
            <div className="bg-background p-8 flex flex-col justify-between gap-8">
              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">Enterprise</h3>
                  <p className="text-[13px] text-muted-foreground mt-1.5 leading-relaxed font-sans">
                    For organizations with compliance &amp; on-prem needs.
                  </p>
                </div>

                <div className="flex flex-col gap-0.5 font-display">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-semibold text-foreground">Custom</span>
                  </div>
                  <span className="text-[11px] text-muted-foreground font-sans">Custom annual contracts</span>
                </div>

                <Link
                  href="/enterprise"
                  className="w-full py-2.5 px-4 rounded-md bg-secondary hover:bg-secondary/80 text-foreground text-xs font-semibold text-center border border-border/60 transition-transform duration-150 active:scale-[0.97] font-display"
                >
                  Contact sales
                </Link>

                <div className="flex flex-col gap-3 pt-4 border-t border-border/40 text-[13px] text-muted-foreground font-sans">
                  <span className="text-[11px] uppercase tracking-wider text-foreground font-semibold font-display">Everything in Teams, plus:</span>
                  <div className="flex items-center gap-2.5"><Check className="size-3.5 text-foreground shrink-0 stroke-[2.5]" /> <span>Self-hosted / On-prem database</span></div>
                  <div className="flex items-center gap-2.5"><Check className="size-3.5 text-foreground shrink-0 stroke-[2.5]" /> <span>Custom SLAs &amp; legal contracts</span></div>
                  <div className="flex items-center gap-2.5"><Check className="size-3.5 text-foreground shrink-0 stroke-[2.5]" /> <span>Unlimited custom AI models</span></div>
                  <div className="flex items-center gap-2.5"><Check className="size-3.5 text-foreground shrink-0 stroke-[2.5]" /> <span>Dedicated account manager</span></div>
                  <div className="flex items-center gap-2.5"><Check className="size-3.5 text-foreground shrink-0 stroke-[2.5]" /> <span>SOC 2 Type II audit report</span></div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── 3. THE REALITY CHECK: 5-6 TOOL SPRAWL VS UNIFIED COCKPIT ── */}
      <section className="w-full py-24 lg:py-32 border-t border-border/40 px-6 sm:px-8 lg:px-12">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-16 text-left">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 flex flex-col gap-3">
              <span className="text-xs uppercase tracking-widest text-[var(--color-copper)] font-semibold font-display">
                The Reality Check
              </span>
              <h2 className="font-display text-[clamp(2rem,3.8vw,2.75rem)] font-medium leading-[1.1] text-foreground tracking-tight">
                What problem are we actually solving?
              </h2>
              <p className="text-[15px] text-muted-foreground leading-relaxed font-sans">
                Most growing businesses (agencies, dev shops, startups, consulting teams) run on a fractured stack of 5–6 different tools.
              </p>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-4">
              <div className="border border-border/60 rounded-lg p-6 bg-background divide-y divide-border/40 font-sans">
                <div className="flex items-center justify-between pb-3">
                  <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Fractured Software Stack</span>
                  <span className="text-xs font-mono font-medium text-destructive">~$60–$120+ / user / mo</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 pt-3 text-[13px]">
                  <div className="flex justify-between py-1 border-b border-border/20"><span>Slack (Chat)</span><span className="text-muted-foreground font-mono">$8.75</span></div>
                  <div className="flex justify-between py-1 border-b border-border/20"><span>ClickUp / Monday (Tasks)</span><span className="text-muted-foreground font-mono">$12–$19</span></div>
                  <div className="flex justify-between py-1 border-b border-border/20"><span>Notion (Docs/Wikis)</span><span className="text-muted-foreground font-mono">$10–$20</span></div>
                  <div className="flex justify-between py-1 border-b border-border/20"><span>Fireflies (Meeting AI)</span><span className="text-muted-foreground font-mono">$10–$18</span></div>
                  <div className="flex justify-between py-1 border-b border-border/20"><span>HubSpot (CRM)</span><span className="text-muted-foreground font-mono">$15–$50</span></div>
                  <div className="flex justify-between py-1 border-b border-border/20"><span>AI Subscriptions</span><span className="text-muted-foreground font-mono">$9–$28</span></div>
                </div>
                <div className="pt-4 mt-2 text-[13px] text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">The result:</strong> You pay heavy per-seat bills, your company context is trapped in disconnected tabs, and your team spends hours pasting notes between meeting bots, tasks, and Slack.
                </div>
              </div>
            </div>
          </div>

          {/* Plain English Value Bar */}
          <div className="border border-border/80 rounded-lg p-8 bg-background flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="flex flex-col gap-2 max-w-3xl">
              <span className="text-xs uppercase tracking-widest text-foreground font-semibold font-display">
                What KeilHQ does in plain English
              </span>
              <p className="text-[16px] text-muted-foreground font-sans leading-relaxed">
                KeilHQ unifies <strong className="text-foreground">Tasks + Rich Motion Docs + Team Chat + Live Meeting Bot &amp; Transcription + CRM + Invoicing</strong> into one clean workspace. Instead of 6 bills and 6 browser tabs, you have one calm cockpit where AI works across all your data without extra plug-ins.
              </p>
            </div>
            <Link
              href="https://app.Keilhq.in/login"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-xs font-semibold active:scale-[0.97] transition-transform font-display"
            >
              Start Free Trial
              <ArrowRight className="size-3.5" />
            </Link>
          </div>

        </div>
      </section>

      {/* ── 4. LINEAR-STYLE COMPLETE FEATURE COMPARISON MATRIX ── */}
      <section className="w-full pb-24 border-t border-border/40 pt-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-[1200px] mx-auto text-left">
          
          <div className="flex flex-col gap-2 mb-8">
            <h2 className="font-display text-[clamp(2rem,3.5vw,2.75rem)] font-medium leading-tight text-foreground tracking-tight">
              Compare all features
            </h2>
            <p className="text-[15px] text-muted-foreground font-sans">
              Detailed breakdown of features across all plans.
            </p>
          </div>

          {/* Table Container without redundant top border */}
          <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[760px]">
              
              {/* Sticky Table Header */}
              <thead className="sticky top-14 bg-background z-20 border-b border-border/80">
                <tr>
                  <th className="py-4 px-4 w-[36%] text-xs font-semibold uppercase tracking-wider text-muted-foreground font-display">
                    Feature
                  </th>
                  <th className="py-4 px-4 w-[16%] text-xs font-semibold uppercase tracking-wider text-foreground font-display">
                    Free Trial
                  </th>
                  <th className="py-4 px-4 w-[16%] text-xs font-semibold uppercase tracking-wider text-foreground font-display">
                    Pro
                  </th>
                  <th className="py-4 px-4 w-[16%] text-xs font-semibold uppercase tracking-wider text-foreground font-display">
                    Teams
                  </th>
                  <th className="py-4 px-4 w-[16%] text-xs font-semibold uppercase tracking-wider text-foreground font-display">
                    Enterprise
                  </th>
                </tr>
              </thead>

              {/* Categories with full display heading styling */}
              <tbody>
                {detailedFeatureCategories.map((group, gIdx) => (
                  <tr key={`group-${gIdx}`} className="contents">
                    {/* Category Title Row with Compare all features Heading Style */}
                    <tr>
                      <td
                        colSpan={5}
                        className="pt-16 pb-4 px-4 text-left border-b border-border/40"
                      >
                        <h3 className="font-display text-[clamp(1.5rem,2.8vw,2.25rem)] font-medium leading-tight text-foreground tracking-tight">
                          {group.category}
                        </h3>
                      </td>
                    </tr>

                    {/* Category Feature Rows */}
                    {group.features.map((feature, fIdx) => (
                      <tr
                        key={`f-${gIdx}-${fIdx}`}
                        className="border-b border-border/20 hover:bg-muted/20 transition-colors"
                      >
                        <td className="py-3.5 px-4 align-top">
                          <span className="text-[14px] text-foreground font-sans font-medium">{feature.name}</span>
                          {feature.note && (
                            <p className="text-[11px] text-muted-foreground/80 mt-0.5 font-sans">{feature.note}</p>
                          )}
                        </td>
                        <td className="py-3.5 px-4 align-middle">
                          <RenderFeatureValue value={feature.free} />
                        </td>
                        <td className="py-3.5 px-4 align-middle">
                          <RenderFeatureValue value={feature.pro} />
                        </td>
                        <td className="py-3.5 px-4 align-middle">
                          <RenderFeatureValue value={feature.teams} />
                        </td>
                        <td className="py-3.5 px-4 align-middle">
                          <RenderFeatureValue value={feature.enterprise} />
                        </td>
                      </tr>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* ── 5. REAL PRICING & GOTCHA BREAKDOWN ── */}
      <section className="w-full py-24 border-t border-border/40 px-6 sm:px-8 lg:px-12">
        <div className="max-w-[1200px] mx-auto text-left">
          
          <div className="flex flex-col gap-2 mb-12">
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold font-display">
              Pricing Transparency
            </span>
            <h2 className="font-display text-[clamp(2rem,3.5vw,2.75rem)] font-medium leading-tight text-foreground tracking-tight">
              Real pricing &amp; hidden costs
            </h2>
            <p className="text-[15px] text-muted-foreground font-sans">
              Base prices rarely tell the full story. Here is what suites cost after mandatory seat minimums, AI surcharges, and missing CRM/Chat tools are added.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-sans">
            {competitorGotchas.map((item) => (
              <div
                key={item.platform}
                className={`p-6 rounded-lg border flex flex-col justify-between gap-6 ${
                  item.isKeil
                    ? "border-[var(--color-copper)]/70 bg-secondary/30"
                    : "border-border/60 bg-background"
                }`}
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-base font-semibold text-foreground">{item.platform}</span>
                    <span className={`text-[10px] uppercase font-semibold px-2 py-0.5 rounded-sm tracking-wider font-display ${
                      item.isKeil ? "bg-[var(--color-copper)]/15 text-[var(--color-copper)]" : "bg-muted text-muted-foreground"
                    }`}>
                      {item.badge}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">{item.price}</span>
                  <p className="text-[13px] text-muted-foreground leading-relaxed pt-2 border-t border-border/40">
                    {item.gotcha}
                  </p>
                </div>

                <div className="pt-3 border-t border-border/40 flex flex-col gap-0.5">
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground">True Cost per Seat:</span>
                  <span className={`text-[13px] font-semibold font-display ${
                    item.isKeil ? "text-[var(--color-copper)]" : "text-foreground"
                  }`}>
                    {item.verdict}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 6. HONEST BOUNDARIES: WHO IS KEILHQ FOR? ── */}
      <section className="w-full py-24 border-t border-border/40 px-6 sm:px-8 lg:px-12">
        <div className="max-w-[1200px] mx-auto text-left">
          
          <div className="flex flex-col gap-2 mb-12">
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold font-display">
              Honest Boundaries
            </span>
            <h2 className="font-display text-[clamp(2rem,3.5vw,2.75rem)] font-medium leading-tight text-foreground tracking-tight">
              Where KeilHQ is not the right fit
            </h2>
            <p className="text-[15px] text-muted-foreground font-sans">
              To remain 100% credible with prospects, here is who we do not build for.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans">
            <div className="p-6 border border-border/60 rounded-lg flex flex-col gap-3">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider font-display">10,000+ Enterprise ERP Needs</span>
              <p className="text-[13px] text-muted-foreground leading-relaxed">
                If a Fortune 500 company requires SAP-level payroll compliance, custom multi-tier SAML SCIM across 50 legacy divisions, legacy suites like Zoho One or Microsoft 365 are designed for that.
              </p>
            </div>

            <div className="p-6 border border-border/60 rounded-lg flex flex-col gap-3">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider font-display">Pure Git-Centric Dev Tracking</span>
              <p className="text-[13px] text-muted-foreground leading-relaxed">
                If an engineering team strictly wants an issue tracker connected only to GitHub PRs without docs, chat, CRM, or meeting AI, specialized tools like Linear or Jira are pure-play dev tools.
              </p>
            </div>

            <div className="p-6 border border-[var(--color-copper)]/60 rounded-lg flex flex-col gap-3 bg-secondary/30">
              <span className="text-xs font-semibold text-[var(--color-copper)] uppercase tracking-wider font-display">KeilHQ Sweet Spot (Ideal Fit)</span>
              <p className="text-[13px] text-foreground leading-relaxed">
                Fast-moving agencies, dev studios, consulting teams, startups, and SMBs with <strong className="text-foreground">5 to 250 members</strong> who want high velocity, zero overhead, and one unified workspace.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ── 7. COMMON QUESTIONS (FAQ) — Seamless without top separator ── */}
      <section className="w-full py-24 px-6 sm:px-8 lg:px-12">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start text-left">
          
          <div className="lg:col-span-5 flex flex-col gap-4">
            <h2 className="font-display text-[clamp(2rem,3.5vw,2.75rem)] font-medium leading-tight text-foreground tracking-tight">
              Common questions
            </h2>
            <p className="text-[15px] text-muted-foreground leading-relaxed font-sans">
              Everything you need to know about billing, security, and trial parameters. Need more answers?{" "}
              <Link href="/support" className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors">
                Visit support
              </Link>{" "}
              or{" "}
              <Link href="/enterprise" className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors">
                talk to sales
              </Link>.
            </p>
          </div>

          <div className="lg:col-span-7 flex flex-col border-t border-border/40">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>

        </div>
      </section>

      {/* ── 8. AI NATIVE OPERATING SYSTEM FOR WORK (CTA BANNER) ── */}
      <section className="w-full py-28 lg:py-36 border-t border-border/40 px-6 sm:px-8 lg:px-12 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
          <h2 className="font-display text-[clamp(2.5rem,5vw,3.75rem)] font-medium tracking-tight leading-[1.08] text-foreground text-balance">
            AI Native Operating System for Work
          </h2>

          <div className="flex items-center gap-3 mt-2 font-display">
            <Link
              href="https://app.Keilhq.in/login"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-semibold transition-transform duration-150 active:scale-[0.97] shadow-xs"
            >
              Get started
            </Link>
            <Link
              href="/enterprise"
              className="px-5 py-2.5 rounded-full bg-secondary hover:bg-secondary/80 text-foreground border border-border/60 text-xs font-semibold transition-transform duration-150 active:scale-[0.97]"
            >
              Talk to sales
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
