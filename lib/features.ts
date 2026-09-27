// ─── Manual features content ─────────────────────────────────────────────────
// Keystatic no longer manages features. Edit the JSON files under
// content/features/*/index.json directly — they are plain manual data now.
import smartDashboard from "../content/features/smart-dashboard/index.json";
import taskManagement from "../content/features/task-management/index.json";
import docsNotes from "../content/features/docs-notes/index.json";
import teamChat from "../content/features/team-chat/index.json";
import meetingRecorder from "../content/features/meeting-recorder/index.json";
import integrations from "../content/features/integrations/index.json";
import workspace from "../content/features/workspace/index.json";
import crm from "../content/features/crm/index.json";
import finance from "../content/features/finance/index.json";

const featuresMap: Record<string, any> = {
  "smart-dashboard": smartDashboard,
  "task-management": taskManagement,
  "docs-notes": docsNotes,
  "team-chat": teamChat,
  "meeting-recorder": meetingRecorder,
  integrations,
  workspace,
  crm,
  finance,
};

export function getManualFeatures() {
  return Object.entries(featuresMap).map(([slug, entry]) => ({ slug, entry }));
}

export function getManualFeature(slug: string) {
  return (featuresMap[slug] ?? null) as any | null;
}

/* ── Fallback mockup images (used until images are set manually) ── */
export const FEATURE_FALLBACK_IMAGES: Record<string, { light: string; dark: string }> = {
  "smart-dashboard":       { light: "/mockups/dashboard/dashboard-snapshot-light.png",          dark: "/mockups/dashboard/dashboard-snapshot-dark.png" },
  "task-management":       { light: "/mockups/project-tasks-events/tasks-overviewpage-light.png", dark: "/mockups/project-tasks-events/tasks-overviewpage-dark.png" },
  "docs-notes":            { light: "/mockups/motion/motion-page-light.png",                     dark: "/mockups/motion/motion-page-dark.png" },
  "team-chat":             { light: "/mockups/messages/message-light.png",                      dark: "/mockups/messages/message-dark.png" },
  "meeting-recorder":      { light: "/mockups/meeting/meetings-recorder-light.png",              dark: "/mockups/meeting/meetings-recorder-dark.png" },
  "integrations":          { light: "/mockups/integrations/integrations-light.png",             dark: "/mockups/integrations/integrations-dark.png" },
  "workspace":             { light: "/mockups/organisations/organisation-light.png",            dark: "/mockups/organisations/organisation-dark.png" },
  "crm":                   { light: "/mockups/crm/crm-overview-light.png",                      dark: "/mockups/crm/crm-overview-dark.png" },
  "finance":               { light: "/mockups/finance/finance-overview-light.png",              dark: "/mockups/finance/finance-overview-dark.png" },
};
