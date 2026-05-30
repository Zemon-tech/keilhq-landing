import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";

const columns = [
  {
    label: "In Progress",
    color: "bg-blue-50 border-blue-200",
    dot: "bg-blue-500",
    items: [
      { title: "AI task creation from meeting transcripts", desc: "One-click: turn any meeting decision into a task." },
      { title: "Gantt critical path highlighting", desc: "Automatically surface the longest dependency chain." },
      { title: "Custom notification rules", desc: "Set per-space triggers for any event type." },
    ],
  },
  {
    label: "Coming Soon",
    color: "bg-amber-50 border-amber-200",
    dot: "bg-amber-500",
    items: [
      { title: "Native mobile apps (iOS & Android)", desc: "Full KielHQ experience on mobile." },
      { title: "AI-generated sprint summaries", desc: "Weekly digest of what shipped, what's blocked, what's next." },
      { title: "Zapier & Make integration", desc: "Connect KielHQ to 5,000+ apps without code." },
      { title: "Time tracking", desc: "Log hours directly on tasks, export to invoices." },
    ],
  },
  {
    label: "Planned",
    color: "bg-zinc-50 border-zinc-200",
    dot: "bg-zinc-400",
    items: [
      { title: "Client portal", desc: "Invite clients to a read-only view of their project." },
      { title: "Recurring tasks", desc: "Set tasks to repeat on any schedule." },
      { title: "Custom fields", desc: "Add any data type to tasks and docs." },
      { title: "Offline mode", desc: "Work without internet, sync when reconnected." },
    ],
  },
];

export default function RoadmapPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-zinc-950">
      <Navbar />
      <main className="flex-1 pt-28 pb-0">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold tracking-widest text-zinc-400 uppercase">Roadmap</span>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-950 mt-3 mb-4">
              Where KielHQ is headed
            </h1>
            <p className="text-base text-zinc-500 max-w-lg mx-auto">
              A live view of what we&apos;re building. Have a feature request? Reach out — we read every message.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-20">
            {columns.map((col) => (
              <div key={col.label} className={`rounded-2xl border p-6 flex flex-col gap-5 ${col.color}`}>
                <div className="flex items-center gap-2">
                  <span className={`size-2 rounded-full ${col.dot}`} />
                  <span className="text-sm font-semibold text-zinc-800">{col.label}</span>
                </div>
                <div className="flex flex-col gap-4">
                  {col.items.map((item) => (
                    <div key={item.title} className="bg-white rounded-xl p-4 border border-zinc-100 flex flex-col gap-1.5 shadow-sm">
                      <span className="text-sm font-semibold text-zinc-900">{item.title}</span>
                      <span className="text-xs text-zinc-500 leading-relaxed">{item.desc}</span>
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
