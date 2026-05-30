import Image from "next/image";
import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { BackedBy } from "@/components/landing/backed-by";
import { Vision } from "@/components/landing/vision";
import { IntegrationCloud } from "@/components/landing/integration-cloud";
import { Features, StickyScrollSection } from "@/components/landing/features";
import { LovedBy } from "@/components/landing/loved-by";
import { Footer } from "@/components/landing/footer";

// ─── Mockup image wrapper — consistent shadow + rounding ─────────────────────
const MockupImage = ({ src, alt }: { src: string; alt: string }) => (
  <div className="w-full rounded-2xl overflow-hidden shadow-2xl border border-zinc-200/60">
    <Image
      src={src}
      alt={alt}
      width={1200}
      height={800}
      className="w-full h-auto object-cover object-top"
      priority
    />
  </div>
);

const featuresData: StickyScrollSection[] = [
  {
    id: "dashboard",
    badgeText: "Smart Dashboard",
    title: "Know exactly what to work on right now",
    description:
      "Stop wasting the first 20 minutes of every morning figuring out what to do. KielHQ's Smart Dashboard ranks your work automatically — Immediate, Today, Blocked, Backlog — using real context from your tasks and calendar. Inline AI chat answers \"what should I tackle first?\" with your actual data.",
    visualComponent: (
      <MockupImage src="/mockups/dashboard.png" alt="KielHQ Smart Dashboard" />
    ),
  },
  {
    id: "tasks",
    badgeText: "Task Management",
    title: "Tasks with clarity built in — not bolted on",
    description:
      "Every task in KielHQ ships with built-in Objectives and Success Criteria fields. Kanban, Gantt, and Calendar views. Real dependency blocking logic — a task literally cannot be marked done if its blockers are incomplete. No more vague asks floating around.",
    visualComponent: (
      <MockupImage src="/mockups/tasks.png" alt="KielHQ Task Management" />
    ),
  },
  {
    id: "motion",
    badgeText: "Motion — Docs & Notes",
    title: "Notion-quality docs, built right in",
    description:
      "Block-based rich-text editing, real-time collaborative editing, subpage hierarchies, comment threads on any block, and public shareable links. Stop paying for Notion — everything you need is already here, connected to the work it belongs to.",
    visualComponent: (
      <MockupImage src="/mockups/motion.png" alt="KielHQ Motion Docs" />
    ),
  },
  {
    id: "chats",
    badgeText: "Team Chat",
    title: "Real-time chat that stays connected to your work",
    description:
      "Group channels, direct messages, unread badges, and real-time delivery via Socket.io. Everything stays tied to the project it belongs to — no more \"wait, what was that Slack message about?\" moments.",
    visualComponent: (
      <MockupImage src="/mockups/chats.png" alt="KielHQ Team Chat" />
    ),
  },
  {
    id: "meeting-recorder",
    badgeText: "Meeting Recorder",
    title: "Stop losing what was decided in your last meeting",
    description:
      "Record meetings directly inside KielHQ. Audio is transcribed automatically with speaker diarization — the transcript tells you who said what. Turn meeting decisions into tasks in one click. No Otter.ai, no Fireflies, no third-party app.",
    visualComponent: (
      <MockupImage
        src="/mockups/meeting-recorder.png"
        alt="KielHQ Meeting Recorder"
      />
    ),
  },
  {
    id: "notifications",
    badgeText: "Notifications",
    title: "Stay in the loop without being overwhelmed",
    description:
      "Get notified when tasks are assigned, messages arrive, notes are shared, statuses change, or you're mentioned in a comment. Unread count badge, mark-all-read, and per-user preferences so you only hear about what matters to you.",
    visualComponent: (
      <MockupImage src="/mockups/notifications.png" alt="KielHQ Notifications" />
    ),
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-zinc-950 selection:bg-zinc-900/10">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Hero />
        <BackedBy />
        <Vision />
        <IntegrationCloud />
        <Features data={featuresData} />
        <LovedBy />
      </main>
      <Footer />
    </div>
  );
}
