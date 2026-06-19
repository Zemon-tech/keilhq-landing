import Link from "next/link";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { Check } from "lucide-react";

export default function AgenciesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="flex-1 pt-24 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-8xl mx-auto flex flex-col gap-16">
          <div className="flex flex-col gap-5">
            <span className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest block">Solutions · Agencies</span>
            <h1 className="text-4xl sm:text-5xl font-normal tracking-tight text-zinc-900 dark:text-white leading-tight">
              KielHQ is built for how agencies actually work
            </h1>
            <p className="text-base text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-2xl">
              You manage multiple clients, multiple projects, and multiple deadlines — simultaneously. KielHQ&apos;s org/space model maps directly to how agencies work: one workspace, separate spaces per client, full visibility across all of them.
            </p>
            <Link href="#" className="inline-flex items-center gap-2 px-4.5 py-2.5 rounded-sm bg-primary text-primary-foreground text-xs font-semibold hover:opacity-90 transition-colors w-fit">
              Start Free for Your Agency
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { title: "Client spaces", desc: "One workspace, separate spaces per client. Full visibility across all of them." },
              { title: "Built-in approvals", desc: "Client-ready shareable links mean you stop chasing sign-offs over email." },
              { title: "File versioning", desc: "Track every version of every deliverable. No more v2_FINAL_final.pdf." },
              { title: "Meeting transcription", desc: "Every client call recorded, transcribed, and turned into tasks in one click." },
              { title: "Role-based access", desc: "Clients see only what they need to. Your team sees everything." },
              { title: "AI with real context", desc: "Ask KielHQ AI what&apos;s blocking any client project — and get a real answer." },
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
