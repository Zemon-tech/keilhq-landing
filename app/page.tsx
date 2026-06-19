import Image from "next/image";
import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { BackedBy } from "@/components/landing/backed-by";
import { Vision } from "@/components/landing/vision";
import { IntegrationCloud } from "@/components/landing/integration-cloud";
import { Features, StickyScrollSection } from "@/components/landing/features";
import { LovedBy } from "@/components/landing/loved-by";
import { Footer } from "@/components/landing/footer";
import { Blogs } from "@/components/landing/blogs";

// ─── Mockup image wrapper — consistent shadow + rounding ─────────────────────
const MockupImage = ({ lightSrc, darkSrc, alt }: { lightSrc: string; darkSrc: string; alt: string }) => (
  <div className="w-full rounded-sm overflow-hidden shadow-2xl border border-border/60">
    <Image
      src={lightSrc}
      alt={alt}
      width={1200}
      height={800}
      className="w-full h-auto object-cover object-top dark:hidden"
      priority
    />
    <Image
      src={darkSrc}
      alt={alt}
      width={1200}
      height={800}
      className="w-full h-auto object-cover object-top hidden dark:block"
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
      "Ranks your work automatically — Immediate, Today, Blocked, Backlog — using real context from your tasks and calendar. Ask the inline AI what to tackle first using your actual data.",
    visualComponent: (
      <MockupImage
        lightSrc="/mockups/light/Dashboard.png"
        darkSrc="/mockups/dark/Dashboard.png"
        alt="KielHQ Smart Dashboard"
      />
    ),
  },
  {
    id: "tasks",
    badgeText: "Task Management",
    title: "Tasks with clarity built in — not bolted on",
    description:
      "Built-in Objectives and Success Criteria on every task. Kanban, Gantt, and Calendar views. Hard dependency blocking — tasks cannot be marked done until their blockers are resolved.",
    visualComponent: (
      <MockupImage
        lightSrc="/mockups/light/Tasks.png"
        darkSrc="/mockups/dark/Tasks.png"
        alt="KielHQ Task Management"
      />
    ),
  },
  {
    id: "motion",
    badgeText: "Motion — Docs & Notes",
    title: "Notion-quality docs, built right in",
    description:
      "Block-based rich-text, real-time collaborative editing, subpage hierarchies, comment threads, and public shareable links — Notion-quality, built directly into your workspace.",
    visualComponent: (
      <MockupImage
        lightSrc="/mockups/light/Motion.png"
        darkSrc="/mockups/dark/Motion.png"
        alt="KielHQ Motion Docs"
      />
    ),
  },
  {
    id: "chats",
    badgeText: "Team Chat",
    title: "Real-time chat that stays connected to your work",
    description:
      "Group channels, direct messages, unread badges, real-time delivery via Socket.io — all tied to the project they belong to. No more hunting for context in Slack.",
    visualComponent: (
      <MockupImage
        lightSrc="/mockups/light/Chat.png"
        darkSrc="/mockups/dark/Chat.png"
        alt="KielHQ Team Chat"
      />
    ),
  },
  {
    id: "meeting-recorder",
    badgeText: "Meeting Recorder",
    title: "Stop losing what was decided in your last meeting",
    description:
      "Record, auto-transcribe, and diarize meetings inside KeilHQ. Transcripts tell you who said what. Turn any decision into a task in one click — no third-party apps.",
    visualComponent: (
      <MockupImage
        lightSrc="/mockups/light/Meeting.png"
        darkSrc="/mockups/dark/Meeting.png"
        alt="KielHQ Meeting Recorder"
      />
    ),
  },
  {
    id: "notifications",
    badgeText: "Notifications",
    title: "Stay in the loop without being overwhelmed",
    description:
      "Notified on assignments, messages, status changes, and mentions. Unread badge, mark-all-read, and per-user preferences — hear only what matters to you.",
    visualComponent: (
      <MockupImage
        lightSrc="/mockups/light/Notifications.png"
        darkSrc="/mockups/dark/Notifications.png"
        alt="KielHQ Notifications"
      />
    ),
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background font-sans text-foreground selection:bg-primary/10">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Hero />
        <BackedBy />
        <Vision />
        <IntegrationCloud />
        <Features data={featuresData} />
        <Blogs />
        <LovedBy />
      </main>
      <Footer />
    </div>
  );
}
