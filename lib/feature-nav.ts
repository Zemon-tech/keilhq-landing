export interface FeatureNavItem {
  title: string;
  desc: string;
  href: string;
  id: string;
}

export const featureNavItems: FeatureNavItem[] = [
  {
    id: "smart-dashboard",
    title: "Smart Dashboard",
    desc: "Wheel picker & live workspace snapshot",
    href: "/features/smart-dashboard",
  },
  {
    id: "ai-command-center",
    title: "AI Command Center",
    desc: "Supervisor AI with specialized agents",
    href: "/features/ai-command-center",
  },
  {
    id: "task-management",
    title: "Task Management",
    desc: "Dependencies, sprints & clarity fields",
    href: "/features/task-management",
  },
  {
    id: "docs-notes",
    title: "Docs & Notes",
    desc: "Motion — collaborative block editor",
    href: "/features/docs-notes",
  },
  {
    id: "calendar-integration",
    title: "Calendar & Scheduling",
    desc: "Two-way Google Calendar sync",
    href: "/features/calendar-integration",
  },
  {
    id: "team-chat",
    title: "Team Chat",
    desc: "Real-time DMs and group channels",
    href: "/features/team-chat",
  },
  {
    id: "meeting-recorder",
    title: "Meeting Recorder",
    desc: "Transcribe with speaker diarization",
    href: "/features/meeting-recorder",
  },
  {
    id: "integrations",
    title: "Integrations",
    desc: "Google, GitHub, Notion & more",
    href: "/features/integrations",
  },
  {
    id: "notifications",
    title: "Notifications",
    desc: "Real-time alerts with smart filters",
    href: "/features/notifications",
  },
  {
    id: "workspace",
    title: "Workspace & Teams",
    desc: "Orgs, spaces, settings & onboarding",
    href: "/features/workspace",
  },
];

export const featureHrefById: Record<string, string> = Object.fromEntries(
  featureNavItems.map((item) => [item.id, item.href])
);
