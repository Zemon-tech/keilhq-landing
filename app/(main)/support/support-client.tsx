"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Brain,
  Check,
  CheckSquare,
  Copy,
  Database,
  ExternalLink,
  FileText,
  Lightbulb,
  MessageSquare,
  Mic,
  Newspaper,
  Plug,
  Rocket,
  Search,
  ShieldCheck,
  ChevronDown,
  Mail,
  LifeBuoy,
  Zap,
} from "lucide-react";
import { FAQ_SECTION } from "@/lib/site-content";
import { WAITLIST_URL } from "@/lib/waitlist";
import { trackStartFreeClick, trackCtaClick } from "@/lib/analytics";

const SUPPORT_EMAIL = "hello@keilhq.in";
const SUPPORT_SUBJECT = "Support%20request";
const MAILTO_HREF = `mailto:${SUPPORT_EMAIL}?subject=${SUPPORT_SUBJECT}`;
const GMAIL_HREF = `https://mail.google.com/mail/?view=cm&fs=1&to=${SUPPORT_EMAIL}&su=${SUPPORT_SUBJECT}`;

function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      // Clipboard API unavailable (permissions / non-secure context) — fallback.
      const ta = document.createElement("textarea");
      ta.value = email;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? "Email copied" : "Copy email address"}
      title={copied ? "Copied" : "Copy email address"}
      className="inline-flex items-center justify-center p-1.5 -m-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors cursor-pointer align-middle"
    >
      {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
    </button>
  );
}

/* ─── Quick topic pills (fill the search box) ─────────────────────────────── */
const quickTopics = ["Billing", "Automations", "Supervisor AI", "Meetings"];

/* ─── Resource cards ──────────────────────────────────────────────────────── */
const resources = [
  {
    title: "Contact us",
    desc: "Connect with our support team",
    href: "mailto:hello@keilhq.in?subject=Support%20request",
    external: true,
    icon: Mail,
  },
  {
    title: "Start free",
    desc: "Join the waitlist for pilot access",
    href: WAITLIST_URL,
    external: true,
    icon: Zap,
  },
  {
    title: "Request a feature",
    desc: "Suggest and vote on new features",
    href: "mailto:hello@keilhq.in?subject=Feature%20request",
    external: true,
    icon: Lightbulb,
  },
  {
    title: "Pricing",
    desc: "Plans, trials and billing answers",
    href: "/pricing",
    external: false,
    icon: BookOpen,
  },
  {
    title: "Changelog",
    desc: "Stay up to date with the latest features",
    href: "/now?tab=changelog",
    external: false,
    icon: Newspaper,
  },
  {
    title: "Product stories",
    desc: "Launches and notes from the team",
    href: "/now",
    external: false,
    icon: BookOpen,
  },
];

/* ─── Category cards ────────────────────────────────────────────────────────
   Monochrome icon chips per the brand system. Oxidized Copper is reserved
   for AI — so only the Supervisor AI category carries the copper chip. */
const categories = [
  {
    title: "Get started",
    desc: "Start using KeilHQ.",
    href: "/features/workspace",
    icon: Rocket,
    ai: false,
  },
  {
    title: "Supervisor AI",
    desc: "Use context-aware AI teammates.",
    href: "/features/smart-dashboard",
    icon: Brain,
    ai: true,
  },
  {
    title: "Meeting Intelligence",
    desc: "Record, transcribe and action meetings.",
    href: "/features/meeting-recorder",
    icon: Mic,
    ai: false,
  },
  {
    title: "Tasks & Sprints",
    desc: "Dependencies, cycles and planning.",
    href: "/features/task-management",
    icon: CheckSquare,
    ai: false,
  },
  {
    title: "Motion Docs",
    desc: "Collaborative docs wired to work.",
    href: "/features/docs-notes",
    icon: FileText,
    ai: false,
  },
  {
    title: "Team Chat",
    desc: "Communicate with your team.",
    href: "/features/team-chat",
    icon: MessageSquare,
    ai: false,
  },
  {
    title: "CRM & Finance",
    desc: "Pipelines, invoicing and ledgers.",
    href: "/features/crm",
    icon: Database,
    ai: false,
  },
  {
    title: "Integrations",
    desc: "Search and sync data from other apps.",
    href: "/features/integrations",
    icon: Plug,
    ai: false,
  },
  {
    title: "Data, privacy & security",
    desc: "Data protection, privacy and security.",
    href: "/privacy",
    icon: ShieldCheck,
    ai: false,
  },
];

function FaqRow({ q, a }: { q: string; a: string }) {
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
          className={`size-4 text-muted-foreground shrink-0 transition-transform duration-200 ${open ? "rotate-180 text-foreground" : ""
            }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${open ? "max-h-48 pb-5" : "max-h-0"
          }`}
      >
        <p className="text-[14px] text-muted-foreground leading-relaxed font-sans">{a}</p>
      </div>
    </div>
  );
}

export function SupportClient() {
  const [query, setQuery] = useState("");

  const faqs = useMemo(() => FAQ_SECTION.faqs as unknown as { question: string; answer: string }[], []);
  const filteredFaqs = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return faqs;
    return faqs.filter(
      (f) =>
        f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q)
    );
  }, [faqs, query]);

  const filteredCategories = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return categories;
    return categories.filter(
      (c) => c.title.toLowerCase().includes(q) || c.desc.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="w-full flex flex-col">
      {/* ── HERO ── */}
      <section className="w-full pt-32 lg:pt-40 pb-12 lg:pb-16 px-6 sm:px-8 lg:px-12">
        <div className="max-w-[880px] mx-auto flex flex-col items-center text-center gap-7">
          <h1 className="font-display text-[clamp(2.5rem,5vw,3.75rem)] font-semibold leading-[1.08] text-foreground tracking-tight text-balance">
            How can we help?
          </h1>

          <p className="text-[15px] sm:text-base font-normal text-muted-foreground leading-relaxed max-w-[60ch] font-sans">
            Search answers, browse guides by feature, or talk to a human on our team.
          </p>

          {/* Search — carved app input */}
          <div className="w-full max-w-[640px]">
            <div className="flex items-center gap-2 w-full pl-4 pr-2 py-2 rounded-lg bg-card border border-border/70 shadow-sm focus-within:border-foreground/30 transition-colors">
              <Search className="size-4 text-muted-foreground shrink-0" aria-hidden="true" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask me anything"
                aria-label="Search help articles"
                className="flex-1 min-w-0 bg-transparent text-[14px] text-foreground placeholder-muted-foreground focus:outline-none font-sans"
              />
              <span className="hidden sm:inline-flex items-center px-4 py-2 rounded-md btn-accent text-[13px] font-semibold font-display shrink-0">
                Search
              </span>
            </div>

            {/* Quick topics */}
            <div className="mt-4 flex items-center justify-center gap-2 flex-wrap">
              {quickTopics.map((topic) => (
                <button
                  key={topic}
                  onClick={() => setQuery(topic)}
                  className={`px-3.5 py-1.5 rounded-full text-[12px] font-medium transition-colors cursor-pointer font-sans border ${query === topic
                    ? "bg-foreground text-background border-foreground"
                    : "bg-secondary/60 hover:bg-secondary text-muted-foreground hover:text-foreground border-border/50"
                    }`}
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── RESOURCE CARDS ── */}
      <section className="w-full py-10 px-6 sm:px-8 lg:px-12">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {resources.map((r) => (
            <Link
              key={r.title}
              href={r.href}
              onClick={() => {
                const props = { location: "support_resources", label: r.title, href: r.href };
                if (r.href === WAITLIST_URL) trackStartFreeClick(props);
                else trackCtaClick(props);
              }}
              {...(r.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="group p-6 rounded-lg border border-border/50 bg-secondary/20 hover:border-foreground/20 transition-colors flex flex-col gap-1.5 text-left"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-2.5 text-[15px] font-semibold text-foreground font-display">
                  <r.icon className="size-4 text-muted-foreground" aria-hidden="true" />
                  {r.title}
                </span>
                <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
              </div>
              <span className="text-[14px] text-muted-foreground font-sans pl-[26px]">{r.desc}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <section className="w-full py-10 px-6 sm:px-8 lg:px-12">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-6">
          <div className="border-b border-border/60 pb-3">
            <span className="text-[11px] font-medium text-muted-foreground tracking-wide uppercase">
              Categories
            </span>
          </div>

          {filteredCategories.length === 0 ? (
            <p className="text-[14px] text-muted-foreground font-sans py-8 text-center">
              No categories match “{query}”. Try the FAQs below or contact us directly.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredCategories.map((c) => (
                <Link
                  key={c.title}
                  href={c.href}
                  className="group p-6 rounded-lg border border-border/50 bg-secondary/20 hover:border-foreground/20 transition-colors flex flex-col gap-4 text-left"
                >
                  <span
                    className={`size-9 rounded-md flex items-center justify-center shrink-0 border ${c.ai
                      ? "bg-[var(--color-copper)]/10 text-[var(--color-copper)] border-[var(--color-copper)]/20"
                      : "bg-muted/60 text-foreground border-border/50"
                      }`}
                  >
                    <c.icon className="size-4" />
                  </span>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[15px] font-semibold text-foreground font-display">
                        {c.title}
                      </span>
                      <ArrowRight className="size-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 transition-all shrink-0" />
                    </div>
                    <span className="text-[14px] text-muted-foreground font-sans">{c.desc}</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="w-full py-16 lg:py-24 px-6 sm:px-8 lg:px-12">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 flex flex-col gap-4">
            <span className="text-[11px] font-medium text-muted-foreground tracking-wide uppercase">
              {FAQ_SECTION.eyebrow}
            </span>
            <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] font-semibold tracking-tight text-foreground">
              {FAQ_SECTION.title}
            </h2>
            <p className="text-[15px] text-muted-foreground leading-relaxed font-sans">
              {FAQ_SECTION.description} Still stuck?{" "}
              <a
                href="mailto:hello@keilhq.in?subject=Support%20request"
                className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
              >
                Email support
              </a>
              .
            </p>
          </div>
          <div className="lg:col-span-7 flex flex-col border-t border-border/40">
            {filteredFaqs.length === 0 ? (
              <p className="text-[14px] text-muted-foreground font-sans py-8">
                No answers match “{query}”.{" "}
                <a
                  href="mailto:hello@keilhq.in?subject=Support%20request"
                  className="text-foreground underline underline-offset-4"
                >
                  Ask us directly
                </a>
                .
              </p>
            ) : (
              filteredFaqs.map((f) => <FaqRow key={f.question} q={f.question} a={f.answer} />)
            )}
          </div>
        </div>
      </section>

      {/* ── CTA — pricing-style closing band ── */}
      <section className="w-full py-28 lg:py-36 px-6 sm:px-8 lg:px-12 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-5">
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.25rem)] font-medium tracking-tight leading-[1.1] text-foreground text-balance">
            Still need help? Talk to a human.
          </h2>
          <p className="text-[15px] text-muted-foreground leading-relaxed font-sans">
            Write to us at{" "}
            <a
              href={MAILTO_HREF}
              className="text-foreground font-medium underline underline-offset-4 hover:text-muted-foreground transition-colors"
            >
              {SUPPORT_EMAIL}
            </a>{" "}
            <CopyEmailButton email={SUPPORT_EMAIL} /> — we reply within one business
            day.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 mt-2 font-display">
            <a
              href={MAILTO_HREF}
              onClick={() =>
                trackCtaClick({ location: "support_cta", label: "Email us", href: MAILTO_HREF })
              }
              className="px-5 py-2.5 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-semibold transition-transform duration-150 active:scale-[0.97] shadow-xs"
            >
              Email us
            </a>
            <a
              href={GMAIL_HREF}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackCtaClick({ location: "support_cta", label: "Open in Gmail", href: GMAIL_HREF })
              }
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-secondary hover:bg-secondary/80 text-foreground border border-border/60 text-xs font-semibold transition-transform duration-150 active:scale-[0.97]"
            >
              Open in Gmail
              <ExternalLink className="size-3.5 opacity-60" />
            </a>
            <a
              href={WAITLIST_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackStartFreeClick({ location: "support_cta", label: "Get started", href: WAITLIST_URL })
              }
              className="px-5 py-2.5 rounded-full bg-secondary hover:bg-secondary/80 text-foreground border border-border/60 text-xs font-semibold transition-transform duration-150 active:scale-[0.97]"
            >
              Get started
            </a>
          </div>
          <p className="text-[12px] text-muted-foreground font-sans">
            “Email us” needs a default mail app — otherwise use “Open in Gmail” or copy
            the address above.
          </p>
        </div>
      </section>
    </div>
  );
}
