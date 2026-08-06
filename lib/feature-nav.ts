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
    desc: "3D wheel picker & Supervisor AI Command Center",
    href: "/features/smart-dashboard",
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
    desc: "Google, GitHub, Slack & Notification preferences",
    href: "/features/integrations",
  },
  {
    id: "workspace",
    title: "Org & RBAC",
    desc: "Organizations, Spaces, and Role-Based Access Control",
    href: "/features/workspace",
  },
];

export const featureHrefById: Record<string, string> = Object.fromEntries(
  featureNavItems.map((item) => [item.id, item.href])
);
