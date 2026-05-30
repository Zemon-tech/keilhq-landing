import Link from "next/link";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { Check } from "lucide-react";

export default function StartupsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-zinc-950">
      <Navbar />
      <main className="flex-1 pt-32 pb-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto flex flex-col gap-16">
          <div className="flex flex-col gap-5">
            <span className="text-xs font-semibold tracking-widest text-zinc-400 uppercase">Solutions · Startups</span>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-950 leading-tight">
              Move fast without breaking communication
            </h1>
            <p className="text-base text-zinc-500 leading-relaxed max-w-2xl">
              Kanban boards, Gantt timelines, task dependencies, blocking logic, and a live AI assistant that knows your sprint state — KielHQ is the command center product teams actually want to use.
            </p>
            <Link href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-950 text-white text-sm font-semibold hover:bg-zinc-800 transition-colors w-fit">
              Start Free for Your Startup
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { title: "Sprint planning with AI", desc: "KielHQ AI knows your sprint state and can answer 'what's blocking us?' with real data." },
              { title: "Kanban + Gantt + Calendar", desc: "Switch between views based on how you think. No extra setup required." },
              { title: "Dependency blocking", desc: "Tasks literally cannot be marked done if their blockers are incomplete." },
              { title: "Real-time docs", desc: "Notion-quality docs with live multi-user editing — built in, not bolted on." },
              { title: "Team chat", desc: "Slack-style channels and DMs, connected to the work they belong to." },
              { title: "Free plan available", desc: "Start solo or with a small team. Scale to org mode with zero migration." },
            ].map((item) => (
              <div key={item.title} className="p-5 rounded-2xl border border-zinc-100 bg-zinc-50 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Check className="size-4 text-emerald-500 shrink-0" />
                  <span className="text-sm font-semibold text-zinc-950">{item.title}</span>
                </div>
                <p className="text-sm text-zinc-500 leading-relaxed pl-6">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
