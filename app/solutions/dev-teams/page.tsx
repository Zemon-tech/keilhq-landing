import Link from "next/link";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { Check } from "lucide-react";

export default function DevTeamsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="flex-1 pt-32 pb-24 px-6 lg:px-12">
        <div className="max-w-8xl mx-auto flex flex-col gap-16">
          <div className="flex flex-col gap-5">
            <span className="text-xs font-semibold tracking-widest text-muted-foreground/80 uppercase">Solutions · Dev Teams</span>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-foreground leading-tight">
              Stop context-switching between GitHub and 4 other tabs
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
              Connect commits to tasks. Review diffs without leaving your workflow context. Dependency tracking, sprint planning, Gantt views, and Git context all in one board.
            </p>
            <Link href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-colors w-fit">
              Start Free for Dev Teams
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { title: "GitHub integration", desc: "Connect commits and PRs directly to tasks. See Git context without leaving KielHQ." },
              { title: "Dependency blocking", desc: "Automatically derived Blocked state — no manual tagging, the system figures it out." },
              { title: "Sprint planning", desc: "Kanban, Gantt, and Calendar views. Switch based on how your team thinks." },
              { title: "Meeting-to-task", desc: "Turn standup decisions into tasks in one click from the meeting transcript." },
              { title: "AI workload summaries", desc: "Ask KielHQ AI what's blocking the team and get an answer grounded in real data." },
              { title: "Real-time notifications", desc: "Get notified on status changes, mentions, and blocked tasks — instantly." },
            ].map((item) => (
              <div key={item.title} className="p-5 rounded-sm border border-border bg-card flex flex-col gap-2 shadow-sm">
                <div className="flex items-center gap-2">
                  <Check className="size-4 text-emerald-500 shrink-0" />
                  <span className="text-sm font-semibold text-foreground">{item.title}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed pl-6">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
