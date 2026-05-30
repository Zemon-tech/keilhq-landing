import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";

const entries = [
  {
    version: "v2.4.0",
    date: "May 2026",
    tag: "Major",
    tagColor: "bg-blue-100 text-blue-700",
    items: [
      "Meeting recorder now supports speaker diarization — transcripts show who said what",
      "KielHQ AI can now create tasks directly from a conversation",
      "Gantt timeline view added to all spaces",
      "Google Calendar 2-way sync with smart conflict detection",
    ],
  },
  {
    version: "v2.3.0",
    date: "April 2026",
    tag: "Feature",
    tagColor: "bg-emerald-100 text-emerald-700",
    items: [
      "Motion (docs) now supports real-time collaborative editing",
      "Public shareable links for tasks and docs — no login required",
      "Lock/unlock pages to freeze docs to read-only",
      "Notification preferences per user",
    ],
  },
  {
    version: "v2.2.0",
    date: "March 2026",
    tag: "Feature",
    tagColor: "bg-emerald-100 text-emerald-700",
    items: [
      "Smart Dashboard priority buckets: Immediate, Today, Blocked, Backlog",
      "Inline AI chat on the dashboard — ask what to tackle first",
      "Task dependency blocking logic — tasks cannot be marked done if blockers are open",
      "Derived Blocked state — automatically computed, no manual tagging",
    ],
  },
  {
    version: "v2.1.0",
    date: "February 2026",
    tag: "Improvement",
    tagColor: "bg-amber-100 text-amber-700",
    items: [
      "Improved Socket.io real-time delivery for chat and notifications",
      "Unread badge counts now sync across devices instantly",
      "Performance improvements to Kanban board rendering",
      "Bug fixes for calendar event sync loop prevention",
    ],
  },
];

export default function ChangelogPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-zinc-950">
      <Navbar />
      <main className="flex-1 pt-32 pb-24 px-6 lg:px-12">
        <div className="max-w-2xl mx-auto">
          <div className="mb-16">
            <span className="text-xs font-semibold tracking-widest text-zinc-400 uppercase">Changelog</span>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-950 mt-3">
              What&apos;s new in KielHQ
            </h1>
            <p className="mt-4 text-base text-zinc-500">
              Every update, improvement, and fix — in one place.
            </p>
          </div>

          <div className="flex flex-col gap-14">
            {entries.map((entry) => (
              <div key={entry.version} className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-bold text-zinc-950">{entry.version}</span>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${entry.tagColor}`}>
                    {entry.tag}
                  </span>
                  <span className="text-xs text-zinc-400 ml-auto">{entry.date}</span>
                </div>
                <div className="border-l-2 border-zinc-100 pl-5 flex flex-col gap-2.5">
                  {entry.items.map((item, i) => (
                    <p key={i} className="text-sm text-zinc-600 leading-relaxed">
                      — {item}
                    </p>
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
