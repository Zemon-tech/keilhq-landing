import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";

const entries = [
  {
    version: "v2.4.0",
    date: "May 2026",
    tag: "Major",
    tagColor: "bg-blue-100/80 text-blue-800 dark:bg-blue-950/40 dark:text-blue-300",
    dotColor: "bg-blue-500",
    items: [
      "Meeting recorder now supports speaker diarization — transcripts show who said what",
      "KeilHQ AI can now create tasks directly from a conversation",
      "Gantt timeline view added to all spaces",
      "Google Calendar 2-way sync with smart conflict detection",
    ],
  },
  {
    version: "v2.3.0",
    date: "April 2026",
    tag: "Feature",
    tagColor: "bg-emerald-100/80 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300",
    dotColor: "bg-emerald-500",
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
    tagColor: "bg-emerald-100/80 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300",
    dotColor: "bg-emerald-500",
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
    tagColor: "bg-amber-100/80 text-amber-800 dark:bg-amber-950/40 dark:text-amber-300",
    dotColor: "bg-amber-500",
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
    <div className="flex flex-col min-h-screen bg-background text-foreground select-text selection:bg-primary/10">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <section className="w-full pt-28 lg:pt-32 pb-16 lg:pb-20 xl:pb-24 px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto">

          {/* ─── Header ─── */}
          <div className="mb-16">
            <h1 className="text-4xl sm:text-5xl font-normal tracking-tight text-zinc-900 dark:text-white">
              What&apos;s new in KeilHQ
            </h1>
            <p className="mt-4 text-base text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Every update, improvement, and fix — in one place.
            </p>
          </div>

          {/* ─── Timeline ─── */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-zinc-200 dark:bg-white/8" />

            <div className="flex flex-col gap-12">
              {entries.map((entry, i) => (
                <div key={entry.version} className="relative flex gap-7">

                  {/* Timeline node */}
                  <div className="relative flex flex-col items-center shrink-0" style={{ width: "15px" }}>
                    <div
                      className={`size-3.5 rounded-full mt-1 ring-2 ring-background shrink-0 ${entry.dotColor}`}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-4 flex-1 pb-2">
                    {/* Version header */}
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="text-base font-bold text-zinc-900 dark:text-white tracking-tight">
                        {entry.version}
                      </span>
                      <span
                        className={`text-[10px] font-semibold px-2 py-0.5 rounded-sm ${entry.tagColor}`}
                      >
                        {entry.tag}
                      </span>
                      <span className="text-xs text-zinc-400 dark:text-zinc-500 ml-auto">
                        {entry.date}
                      </span>
                    </div>

                    {/* Change items */}
                    <div className="flex flex-col gap-2.5">
                      {entry.items.map((item, j) => (
                        <div
                          key={j}
                          className="flex items-start gap-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed"
                        >
                          <span className="mt-[7px] size-1 rounded-full bg-zinc-300 dark:bg-zinc-600 shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
