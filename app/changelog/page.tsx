import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";

const entries = [
  {
    version: "v2.4.0",
    date: "May 2026",
    tag: "Major",
    tagColor: "bg-violet-100 text-violet-700",
    changes: [
      "KielHQ AI now supports multi-turn stateful conversations with full task context",
      "Meeting recorder: speaker diarization now identifies up to 8 speakers",
      "Gantt view: drag-to-reschedule with dependency chain auto-update",
      "New: public shareable task links with no login required",
    ],
  },
  {
    version: "v2.3.0",
    date: "April 2026",
    tag: "Feature",
    tagColor: "bg-blue-100 text-blue-700",
    changes: [
      "Google Calendar 2-way sync with smart conflict detection",
      "Motion docs: real-time collaborative editing for up to 50 simultaneous users",
      "Task dependencies: auto-derived Blocked state — no manual tagging",
      "50+ integrations: added Linear, Asana, ClickUp import",
    ],
  },
  {
    version: "v2.2.0",
    date: "March 2026",
    tag: "Feature",
    tagColor: "bg-blue-100 text-blue-700",
    changes: [
      "Smart Dashboard: priority buckets (Immediate, Today, Blocked, Backlog)",
      "Role-based access control: Org Owner → Admin → Member hierarchy",
      "Notification preferences: per-user customization",
      "Chat: threaded replies and unread badges",
    ],
  },
  {
    version: "v2.1.0",
    date: "February 2026",
    tag: "Improvement",
    tagColor: "bg-amber-100 text-amber-700",
    changes: [
      "Performance: dashboard load time reduced by 60%",
      "Mobile: full responsive redesign for tasks and chat",
      "Search: global search across tasks, docs, and messages",
      "Docs: lock/unlock pages to read-only",
    ],
  },
  {
    version: "v2.0.0",
    date: "January 2026",
    tag: "Major",
    tagColor: "bg-violet-100 text-violet-700",
    changes: [
      "Complete UI redesign — cleaner, faster, more focused",
      "Introduced the Clarity Engine: Objectives + Success Criteria on every task",
      "Personal mode: full value without a team",
      "AWS S3 meeting recording storage",
    ],
  },
];

export default function ChangelogPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-zinc-950">
      <Navbar />
      <main className="flex-1 pt-28 pb-0">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <div className="mb-14">
            <span className="text-xs font-semibold tracking-widest text-zinc-400 uppercase">Changelog</span>
            <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 mt-3 mb-3">
              What&apos;s new in KielHQ
            </h1>
            <p className="text-base text-zinc-500">Every update, improvement, and fix — in one place.</p>
          </div>

          <div className="flex flex-col gap-12 pb-20">
            {entries.map((entry) => (
              <div key={entry.version} className="flex flex-col gap-4 border-t border-zinc-100 pt-10 first:border-0 first:pt-0">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-zinc-950">{entry.version}</span>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${entry.tagColor}`}>{entry.tag}</span>
                  <span className="text-xs text-zinc-400 ml-auto">{entry.date}</span>
                </div>
                <ul className="flex flex-col gap-2">
                  {entry.changes.map((c, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-600">
                      <span className="text-zinc-300 mt-1 shrink-0">—</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
