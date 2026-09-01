export interface FeatureNavItem {
  id: string;
  title: string;
  desc: string;
  href: string;
  iconName: string;
}

export interface FeatureCategoryColumn {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  items: FeatureNavItem[];
}

export const featureNavColumns: FeatureCategoryColumn[] = [
  {
    id: "core-ai",
    title: "Supervisor AI & Core",
    subtitle: "Autonomous workspace intelligence",
    iconName: "Brain",
    items: [
      {
        id: "smart-dashboard",
        title: "Smart Dashboard",
        desc: "3D context wheel, blocker triage & Supervisor AI",
        href: "/features/smart-dashboard",
        iconName: "LayoutDashboard",
      },
      {
        id: "task-management",
        title: "Task Management",
        desc: "Strict blocker dependencies & two-way calendar sync",
        href: "/features/task-management",
        iconName: "CheckSquare",
      },
      {
        id: "docs-notes",
        title: "Motion Docs",
        desc: "Collaborative wiki with two-way Notion sync & AI",
        href: "/features/docs-notes",
        iconName: "FileText",
      },
    ],
  },
  {
    id: "intelligence-comms",
    title: "Intelligence & Comms",
    subtitle: "Real-time voice, sync & messaging",
    iconName: "Sparkles",
    items: [
      {
        id: "meeting-recorder",
        title: "Meeting Intelligence",
        desc: "Speaker diarization, AI summaries & auto-task creation",
        href: "/features/meeting-recorder",
        iconName: "Mic",
      },
      {
        id: "team-chat",
        title: "Team Chat",
        desc: "Real-time channels, direct messages & threaded replies",
        href: "/features/team-chat",
        iconName: "MessageSquare",
      },
      {
        id: "integrations",
        title: "Integrations & APIs",
        desc: "Two-way sync with Google, GitHub, Notion & Slack",
        href: "/features/integrations",
        iconName: "Plug",
      },
    ],
  },
  {
    id: "business-engine",
    title: "Business Engine",
    subtitle: "Revenue, finance & governance",
    iconName: "ShieldCheck",
    items: [
      {
        id: "crm",
        title: "Relational CRM",
        desc: "Custom deal pipelines, omnichannel leads & call intelligence",
        href: "/features/crm",
        iconName: "Database",
      },
      {
        id: "finance",
        title: "Finance & Bookkeeping",
        desc: "Multi-book ledgers, invoicing, bank sync & payroll",
        href: "/features/finance",
        iconName: "Receipt",
      },
      {
        id: "workspace",
        title: "Org & RBAC",
        desc: "Multi-space hierarchy & granular role-based access control",
        href: "/features/workspace",
        iconName: "Shield",
      },
    ],
  },
];

// Flat array for backward compatibility and mobile navigation
export const featureNavItems: FeatureNavItem[] = featureNavColumns.flatMap((col) => col.items);

export const featureHrefById: Record<string, string> = Object.fromEntries(
  featureNavItems.map((item) => [item.id, item.href])
);
