import Link from "next/link";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { Check } from "lucide-react";

export default function FreelancersPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="flex-1 pt-24 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-8xl mx-auto flex flex-col gap-16">
          <div className="flex flex-col gap-5">
            <span className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest block">Solutions · Freelancers</span>
            <h1 className="text-4xl sm:text-5xl font-normal tracking-tight text-zinc-900 dark:text-white leading-tight">
              Manage your projects, notes, calendar, and clients — in one place
            </h1>
            <p className="text-base text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl">
              Start in personal mode — no team required. Upgrade to org mode the moment you bring someone on board. No migration. No friction.
            </p>
            <Link href="#" className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-sm bg-primary text-primary-foreground text-xs font-semibold hover:opacity-90 transition-colors w-fit">
              Start Free — No Card Required
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { title: "Personal mode", desc: "Full value even without a team. Manage your projects, notes, and calendar solo." },
              { title: "Client docs", desc: "Share docs with clients via public links — no login required on their end." },
              { title: "Meeting transcripts", desc: "Record client calls and get transcripts with speaker identification automatically." },
              { title: "Calendar sync", desc: "Connect Google Calendar. Tasks sync as events. Your schedule respects your workload." },
              { title: "Scale to a team", desc: "Bring on a collaborator and switch to org mode instantly — zero migration." },
              { title: "Free plan", desc: "Start free. No credit card. No time limit. Upgrade when you&apos;re ready." },
            ].map((item) => (
              <div key={item.title} className="p-5 rounded-sm border border-zinc-200/80 dark:border-white/5 bg-zinc-50/20 dark:bg-[#0e0e0e]/20 flex flex-col gap-2 shadow-sm transition-colors duration-300">
                <div className="flex items-center gap-2">
                  <Check className="size-4 text-emerald-500 shrink-0" />
                  <span className="text-sm font-semibold text-zinc-900 dark:text-white">{item.title}</span>
                </div>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed pl-6">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
