import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight, CalendarClock, MailOpen, Rocket } from "lucide-react";

export const metadata: Metadata = {
  title: "You're on the waitlist",
  description: "Thanks for joining the KeilHQ waitlist. We'll reach out as soon as a pilot slot opens for your team.",
  robots: {
    index: false,
    follow: false,
  },
};

const steps = [
  {
    icon: MailOpen,
    title: "We review your request",
    desc: "Our team reads every waitlist entry to understand your team size, tools, and workflow.",
  },
  {
    icon: CalendarClock,
    title: "Invite as slots open",
    desc: "Pilot invites go out in batches. We'll email you the moment a slot opens for your team.",
  },
  {
    icon: Rocket,
    title: "Onboard with us",
    desc: "We personally help pilot teams set up their workspace, import data, and go live.",
  },
];

export default function WaitlistSuccessPage() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-[var(--color-copper)]/20 select-text">
      <section className="w-full pt-32 pb-24 lg:pt-40 lg:pb-32 px-6 sm:px-8 lg:px-12">
        <div className="max-w-[720px] mx-auto flex flex-col items-center text-center">
          {/* Success mark */}
          <div className="size-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-8">
            <Check className="size-6 text-emerald-500" strokeWidth={2.5} />
          </div>

          <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold font-display mb-4">
            Waitlist confirmed
          </p>

          <h1 className="font-display text-[clamp(2.25rem,5vw,3.5rem)] font-medium leading-[1.08] tracking-tight text-foreground text-balance">
            You&apos;re on the waitlist
          </h1>

          <p className="mt-4 text-[16px] sm:text-[17px] text-muted-foreground max-w-[52ch] leading-relaxed font-sans">
            Thanks for joining. We&apos;re onboarding pilot teams in batches and
            we&apos;ll email you as soon as a slot opens for your team.
          </p>

          {/* What happens next */}
          <div className="w-full mt-14 flex flex-col gap-px bg-border/60 border border-border/60 rounded-xl overflow-hidden text-left">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="bg-background p-6 sm:p-7 flex items-start gap-4"
              >
                <div className="size-9 rounded-md bg-secondary border border-border/60 flex items-center justify-center shrink-0">
                  <step.icon className="size-4 text-foreground" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-[14px] font-semibold text-foreground font-display">
                    <span className="text-muted-foreground font-sans font-normal mr-2">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {step.title}
                  </p>
                  <p className="text-[14px] text-muted-foreground leading-relaxed font-sans">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Next actions */}
          <div className="flex flex-col sm:flex-row items-center gap-3 mt-10 font-display">
            <Link
              href="/demo"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground text-xs font-semibold transition-transform duration-150 active:scale-[0.97] shadow-xs"
            >
              Book a demo meanwhile
              <ArrowRight className="size-3.5" />
            </Link>
            <Link
              href="/"
              className="inline-flex items-center px-5 py-2.5 rounded-full bg-secondary hover:bg-secondary/80 text-foreground border border-border/60 text-xs font-semibold transition-transform duration-150 active:scale-[0.97]"
            >
              Back to home
            </Link>
          </div>

          <p className="mt-8 text-[13px] text-muted-foreground font-sans">
            Didn&apos;t mean to land here?{" "}
            <a
              href="mailto:hey@keilhq.in"
              className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
            >
              Contact us
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
