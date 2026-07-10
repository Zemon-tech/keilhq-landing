"use client";

import Link from "next/link";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";
import {
  ArrowRight,
  Check,
  Calendar,
  Clock,
  Video,
  RefreshCw,
  MapPin,
  Users,
} from "lucide-react";

export default function CalendarIntegrationPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground select-text selection:bg-primary/10">
      <Navbar />

      <main className="flex-1 flex flex-col">

        {/* ── SECTION 1: HERO & INTERACTIVE MOCKUP ── */}
        <section className="w-full pt-28 lg:pt-32 pb-16 lg:pb-20 xl:pb-24 px-5 sm:px-8 lg:px-12 animate-fade-rise">
          <div className="max-w-7xl mx-auto w-full flex flex-col items-center text-center gap-10">

            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/80 border border-border/50 transition-all duration-300">
              <span className="size-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
              <span className="text-[11px] font-medium text-muted-foreground tracking-wide uppercase">
                Features · Calendar
              </span>
            </div>

            {/* Title */}
            <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.05] text-zinc-900 dark:text-white max-w-4xl" style={{ letterSpacing: "-0.025em" }}>
              Two-way Google Calendar sync with smart scheduling
            </h1>

            {/* Subtext */}
            <p className="text-[16px] text-muted-foreground max-w-[55ch] mx-auto leading-relaxed">
              Tasks automatically become calendar events. AI scheduler finds free slots and auto-schedules your unscheduled tasks. Google Meet links generated automatically for events.
            </p>

            {/* CTA button */}
            <div className="mt-2">
              <Link
                href="https://app.Keilhq.in/login"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent inline-flex items-center gap-2 px-6 py-3 rounded-sm text-[13px] font-semibold active:scale-[0.97] transition-transform duration-150 shadow-md"
              >
                Get Started Free
                <ArrowRight className="size-3.5" />
              </Link>
            </div>

            {/* Interactive Mockup: Calendar View */}
            <div className="w-full max-w-5xl mt-12 border border-border/60 dark:border-white/5 bg-secondary/10 dark:bg-white/[0.005] rounded-md p-6 sm:p-8 flex flex-col gap-6 shadow-sm select-none text-left">
              <div className="flex items-center justify-between pb-4 border-b border-border/40">
                <span className="text-sm font-semibold text-zinc-900 dark:text-white">Calendar View · March 2026</span>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <RefreshCw className="size-3 text-emerald-600" />
                    <span className="text-[10px] text-emerald-600 font-medium">Google Calendar Sync Active</span>
                  </div>
                </div>
              </div>

              {/* Calendar Grid Mockup */}
              <div className="grid grid-cols-7 gap-2">
                {/* Week header */}
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                  <div key={day} className="text-center text-[10px] font-semibold text-muted-foreground p-2">
                    {day}
                  </div>
                ))}

                {/* Calendar days with events */}
                {Array.from({ length: 35 }, (_, i) => {
                  const dayNumber = i - 6; // Start from a Monday
                  const isCurrentMonth = dayNumber >= 1 && dayNumber <= 31;
                  const hasEvent = [3, 7, 12, 15, 20, 24, 28].includes(dayNumber);

                  return (
                    <div key={i} className={`aspect-square border border-border/30 rounded-sm p-1 flex flex-col gap-1 ${isCurrentMonth ? 'bg-background' : 'bg-secondary/50'}`}>
                      {isCurrentMonth && (
                        <>
                          <span className="text-[9px] text-muted-foreground">{dayNumber}</span>
                          {hasEvent && (
                            <div className="flex flex-col gap-0.5">
                              {dayNumber === 12 && (
                                <>
                                  <div className="text-[7px] bg-blue-500 text-white px-1 py-0.5 rounded-xs">Task: Fix login bug</div>
                                  <div className="text-[7px] bg-green-500 text-white px-1 py-0.5 rounded-xs">Meeting: Sprint Review</div>
                                </>
                              )}
                              {dayNumber === 15 && (
                                <div className="text-[7px] bg-purple-500 text-white px-1 py-0.5 rounded-xs">Event: Client Demo</div>
                              )}
                              {dayNumber === 20 && (
                                <div className="text-[7px] bg-orange-500 text-white px-1 py-0.5 rounded-xs">Task: Database migration</div>
                              )}
                              {(dayNumber === 3 || dayNumber === 7 || dayNumber === 24 || dayNumber === 28) && (
                                <div className="text-[7px] bg-indigo-500 text-white px-1 py-0.5 rounded-xs">Meeting</div>
                              )}
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Legend */}
              <div className="flex items-center gap-4 text-[10px] pt-2 border-t border-border/20">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-blue-500 rounded-xs"></div>
                  <span className="text-muted-foreground">KeilHQ Tasks</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-xs"></div>
                  <span className="text-muted-foreground">Google Calendar Events</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-purple-500 rounded-xs"></div>
                  <span className="text-muted-foreground">Shared Events</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ── SECTION 2: CAPABILITIES (Grid matching Phase 2) ── */}
        <section className="w-full py-12 lg:py-16 px-5 sm:px-8 lg:px-12 bg-zinc-50/30 dark:bg-zinc-950/10">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left Column: Heading */}
            <div className="flex flex-col gap-6 text-left">
              <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.05] text-zinc-900 dark:text-white" style={{ letterSpacing: "-0.025em" }}>
                Unified scheduling.<br />Seamless sync.
              </h2>
              <p className="text-[14px] text-muted-foreground leading-relaxed max-w-[42ch]">
                KeilHQ integrates deeply with Google Calendar to provide unified time management across tasks and meetings.
              </p>
            </div>

            {/* Right Column: 4 top-border cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 w-full text-left">
              <div className="pt-6 border-t border-border/60 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <RefreshCw className="size-4 text-muted-foreground" />
                  <h3 className="font-display text-xl font-semibold text-zinc-900 dark:text-white">Two-way Sync</h3>
                </div>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  Tasks with dates automatically become Google Calendar events. GCal events appear in KeilHQ calendar view with full details.
                </p>
              </div>

              <div className="pt-6 border-t border-border/60 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <Clock className="size-4 text-muted-foreground" />
                  <h3 className="font-display text-xl font-semibold text-zinc-900 dark:text-white">Smart Scheduling</h3>
                </div>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  AI scheduler analyzes your calendar, finds free slots, and auto-schedules unscheduled tasks based on priority and time estimates.
                </p>
              </div>

              <div className="pt-6 border-t border-border/60 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <Video className="size-4 text-muted-foreground" />
                  <h3 className="font-display text-xl font-semibold text-zinc-900 dark:text-white">Google Meet Integration</h3>
                </div>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  Toggle "Schedule Google Meet" when creating events to automatically generate video links for meetings and calls.
                </p>
              </div>

              <div className="pt-6 border-t border-border/60 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <MapPin className="size-4 text-muted-foreground" />
                  <h3 className="font-display text-xl font-semibold text-zinc-900 dark:text-white">Event Details</h3>
                </div>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  Rich event creation with location, agenda, guest lists, and event types. All data syncs bidirectionally with Google Calendar.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ── SECTION 3: CHECKLIST (2-column layout matching Phase 3) ── */}
        <section className="w-full py-12 lg:py-16 px-5 sm:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left side copy */}
            <div className="flex flex-col gap-6 text-left">
              <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.05] text-zinc-900 dark:text-white" style={{ letterSpacing: "-0.025em" }}>
                One calendar.<br />Complete visibility.
              </h2>
              <p className="text-[14px] text-muted-foreground leading-relaxed max-w-[42ch]">
                See your tasks, meetings, and availability in one unified view. Never double-book or miss a deadline again.
              </p>
            </div>

            {/* Right side checklist */}
            <div className="flex flex-col gap-5 w-full text-left">
              {[
                "Multiple view modes: monthly calendar, weekly timeline, and daily agenda with drag-to-select date ranges.",
                "Click any day to create tasks or events with that date pre-filled for rapid scheduling.",
                "Event detail pane shows overview, activity comments, and full Google Calendar integration status.",
                "Manual sync button plus automatic background sync ensures your calendar is always up to date.",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="size-5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/5 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Check className="size-3.5" />
                  </div>
                  <p className="text-[13px] text-muted-foreground leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}