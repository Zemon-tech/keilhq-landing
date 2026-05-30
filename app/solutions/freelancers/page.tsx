import Link from "next/link";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { Check } from "lucide-react";

export default function FreelancersPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-zinc-950">
      <Navbar />
      <main className="flex-1 pt-32 pb-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto flex flex-col gap-16">
          <div className="flex flex-col gap-5">
            <span className="text-xs font-semibold tracking-widest text-zinc-400 uppercase">Solutions · Freelancers</span>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-950 leading-tight">
              Manage your projects, notes, calendar, and clients — in one place
            </h1>
            <p className="text-base text-zinc-500 leading-relaxed max-w-2xl">
              Start in personal mode — no team required. Upgrade to org mode the moment you bring someone on board. No migration. No friction.
            </p>
            <Link href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-950 text-white text-sm font-semibold hover:bg-zinc-800 transition-colors w-fit">
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
