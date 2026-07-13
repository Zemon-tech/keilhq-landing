import Image from "next/image";
import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { BackedBy } from "@/components/landing/backed-by";
import { IntegrationCloud } from "@/components/landing/integration-cloud";
import { Features, StickyScrollSection } from "@/components/landing/features";
import { LovedBy } from "@/components/landing/loved-by";
import { Footer } from "@/components/landing/footer";
import { Blogs } from "@/components/landing/blogs";
import { FinalCta } from "@/components/landing/final-cta";

// ─── Mockup image wrapper — consistent shadow + rounding ─────────────────────
const MockupImage = ({ lightSrc, darkSrc, alt }: { lightSrc: string; darkSrc: string; alt: string }) => (
  <>
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
  </>
);

const featuresData: StickyScrollSection[] = [
  {
    id: "smart-dashboard",
    badgeText: "Smart Dashboard",
    title: "Know exactly what to work on right now",
    description:
      "A 3D wheel picker cycles through six live cards — Current Focus, Blockers, Needs Reply, Next Event, Quick Capture, and Up Next — with urgent, reply, and queued stats plus a live clock.",
    visualComponent: (
      <MockupImage
        lightSrc="/mockups/light/Dashboard light.png"
        darkSrc="/mockups/dark/Dashboard Dark.png"
        alt="KeilHQ Smart Dashboard"
      />
    ),
  },
  {
    id: "ai-command-center",
    badgeText: "AI Command Center",
    title: "Your AI assistant that knows your workspace",
    description:
      "Built-in AI agents for task management, scheduling, GitHub integration, and web search. Chain-of-thought execution shows you exactly how decisions are made using your real data.",
    visualComponent: (
      <MockupImage
        lightSrc="/mockups/light/AI Light.png"
        darkSrc="/mockups/dark/AI Dark.png"
        alt="KeilHQ AI Command Center"
      />
    ),
  },
  {
    id: "tasks",
    badgeText: "Task Management",
    title: "Tasks with clarity built in — not bolted on",
    description:
      "Built-in Objectives and Success Criteria on every task. Kanban, Gantt, and Calendar views with hard dependency blocking. Tasks cannot be marked done until their blockers are resolved.",
    visualComponent: (
      <MockupImage
        lightSrc="/mockups/light/Task Overview Light.png"
        darkSrc="/mockups/dark/Task Overview Dark.png"
        alt="KeilHQ Task Management"
      />
    ),
  },
  {
    id: "motion",
    badgeText: "Motion — Docs & Notes",
    title: "Notion-quality docs, built right in",
    description:
      "Block-based rich-text editor with real-time collaborative editing, subpage hierarchies, cover images, and Notion sync. Full TipTap editor with slash commands and @mentions.",
    visualComponent: (
      <MockupImage
        lightSrc="/mockups/light/Motion Light.png"
        darkSrc="/mockups/dark/Motion Dark.png"
        alt="KeilHQ Motion Docs"
      />
    ),
  },
  {
    id: "calendar-integration",
    badgeText: "Calendar & Scheduling",
    title: "Two-way Google Calendar sync with smart scheduling",
    description:
      "Tasks automatically become calendar events. AI scheduler finds free slots and auto-schedules your unscheduled tasks. Google Meet links generated automatically for events.",
    visualComponent: (
      <MockupImage
        lightSrc="/mockups/light/Calendar overview Light.png"
        darkSrc="/mockups/dark/Calendar Overview Dark.png"
        alt="KeilHQ Calendar Integration"
      />
    ),
  },
  {
    id: "chats",
    badgeText: "Team Chat",
    title: "Real-time chat that stays connected to your work",
    description:
      "Group channels, direct messages, and emoji reactions with real-time Socket.io delivery. Chat threads link directly to tasks, documents, and calendar events they describe.",
    visualComponent: (
      <MockupImage
        lightSrc="/mockups/light/Chat Light.png"
        darkSrc="/mockups/dark/Chat Dark.png"
        alt="KeilHQ Team Chat"
      />
    ),
  },
  {
    id: "meeting-recorder",
    badgeText: "Meeting Recorder",
    title: "Stop losing what was decided in your last meeting",
    description:
      "Record audio with 5 visualizer styles, auto-transcribe with speaker diarization using Sarvam AI (23 Indian languages) or ElevenLabs. Turn decisions into tasks instantly.",
    visualComponent: (
      <MockupImage
        lightSrc="/mockups/light/Meetings Light.png"
        darkSrc="/mockups/dark/Meetings Dark.png"
        alt="KeilHQ Meeting Recorder"
      />
    ),
  },
  {
    id: "integrations",
    badgeText: "Integrations",
    title: "Connect with your entire tech stack",
    description:
      "Native integrations with Google Workspace, GitHub, Notion, and more. OAuth connections for Calendar, Drive, Gmail, Meet, Docs, Sheets. GitHub agent creates issues from tasks.",
    visualComponent: (
      <MockupImage
        lightSrc="/mockups/light/Settings Connectors Light.png"
        darkSrc="/mockups/dark/Settings Connectors Dark.png"
        alt="KeilHQ Integrations"
      />
    ),
  },
  {
    id: "notifications",
    badgeText: "Smart Notifications",
    title: "Stay in the loop without being overwhelmed",
    description:
      "Real-time WebSocket notifications with granular controls. Filter by type: Tasks, Mentions, Chat, System, Motion. Mark all read, per-type toggles, and unread badges throughout the UI.",
    visualComponent: (
      <MockupImage
        lightSrc="/mockups/light/Notifications Light.png"
        darkSrc="/mockups/dark/Notifications Dark.png"
        alt="KeilHQ Smart Notifications"
      />
    ),
  },
  {
    id: "workspace",
    badgeText: "Workspace & Teams",
    title: "Orgs, spaces, and settings — built in",
    description:
      "Multi-tenant Org → Space architecture with sidebar navigation, org switcher, onboarding wizard, full settings dialog, keyboard shortcuts, and role-based permissions at every level.",
    visualComponent: (
      <MockupImage
        lightSrc="/mockups/light/Org & Ws switching Light.png"
        darkSrc="/mockups/dark/Org & Ws Switching Dark.png"
        alt="KeilHQ Workspace"
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
        <IntegrationCloud />
        <Features data={featuresData} />
        <Blogs />
        <LovedBy />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
