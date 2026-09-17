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
