import Link from "next/link";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import { Check } from "lucide-react";

export default function AgenciesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="flex-1 pt-32 pb-24 px-6 lg:px-12">
        <div className="max-w-8xl mx-auto flex flex-col gap-16">
          <div className="flex flex-col gap-5">
            <span className="text-xs font-semibold tracking-widest text-muted-foreground/80 uppercase">Solutions · Agencies</span>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-foreground leading-tight">
              KielHQ is built for how agencies actually work
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
              You manage multiple clients, multiple projects, and multiple deadlines — simultaneously. KielHQ&apos;s org/space model maps directly to how agencies work: one workspace, separate spaces per client, full visibility across all of them.
            </p>
            <Link href="#" className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-colors w-fit">
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
