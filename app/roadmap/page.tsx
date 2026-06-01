import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";

const columns = [
  {
    label: "In Progress",
    color: "bg-blue-50/50 border-blue-200/50 dark:bg-blue-950/10 dark:border-blue-900/30",
    dot: "bg-blue-500",
    items: [
      { title: "Native mobile apps (iOS & Android)", desc: "Full KielHQ experience on mobile — tasks, chat, docs, and AI." },
      { title: "AI-powered sprint planning", desc: "Let KielHQ AI suggest sprint scope based on team velocity and backlog." },
      { title: "Figma integration", desc: "Link design frames directly to tasks and docs." },
    ],
  },
  {
    label: "Planned",
    color: "bg-amber-50/50 border-amber-200/50 dark:bg-amber-950/10 dark:border-amber-900/30",
    dot: "bg-amber-500",
    items: [
      { title: "Zapier & Make integration", desc: "Connect KielHQ to 5,000+ apps via no-code automation." },
      { title: "Custom fields on tasks", desc: "Add your own metadata — dropdowns, numbers, dates, URLs." },
      { title: "Time tracking", desc: "Log time directly on tasks. Export reports for billing." },
      { title: "Client portal", desc: "Give clients a read-only view of their project space." },
    ],
  },
  {
    label: "Shipped",
    color: "bg-emerald-50/50 border-emerald-200/50 dark:bg-emerald-950/10 dark:border-emerald-900/30",
    dot: "bg-emerald-500",
    items: [
      { title: "Meeting recorder & transcription", desc: "Record, transcribe, and diarize meetings inside KielHQ." },
      { title: "Google Calendar 2-way sync", desc: "Tasks sync as calendar events. Changes reflect back instantly." },
      { title: "Smart Dashboard", desc: "AI-ranked priority buckets: Immediate, Today, Blocked, Backlog." },
      { title: "Real-time collaborative docs", desc: "Multiple team members edit the same doc simultaneously." },
    ],
  },
];

export default function RoadmapPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="flex-1 pt-32 pb-24 px-6 lg:px-12">
        <div className="max-w-8xl mx-auto">
          <div className="mb-16">
            <span className="text-xs font-semibold tracking-widest text-muted-foreground/80 uppercase">Roadmap</span>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-foreground mt-3">
              Where KielHQ is headed
            </h1>
            <p className="mt-4 text-base text-muted-foreground max-w-xl">
              A transparent look at what we&apos;re building, what&apos;s coming next, and what we&apos;ve already shipped.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {columns.map((col) => (
              <div key={col.label} className={`rounded-sm border p-6 flex flex-col gap-5 ${col.color}`}>
                <div className="flex items-center gap-2">
                  <span className={`size-2 rounded-full ${col.dot}`} />
                  <span className="text-xs font-semibold uppercase tracking-widest text-foreground/80">{col.label}</span>
                </div>
                <div className="flex flex-col gap-4">
                  {col.items.map((item) => (
                    <div key={item.title} className="bg-card rounded-sm border border-border p-4 flex flex-col gap-1.5 shadow-sm">
                      <span className="text-sm font-semibold text-foreground">{item.title}</span>
                      <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
