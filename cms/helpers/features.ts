import { cache } from 'react';
import smartDashboard from '../../content/features/smart-dashboard/index.json';
import taskManagement from '../../content/features/task-management/index.json';
import docsNotes from '../../content/features/docs-notes/index.json';
import teamChat from '../../content/features/team-chat/index.json';
import meetingRecorder from '../../content/features/meeting-recorder/index.json';
import integrations from '../../content/features/integrations/index.json';
import workspace from '../../content/features/workspace/index.json';

const featuresMap: Record<string, any> = {
  "smart-dashboard": smartDashboard,
  "task-management": taskManagement,
  "docs-notes": docsNotes,
  "team-chat": teamChat,
  "meeting-recorder": meetingRecorder,
  "integrations": integrations,
  "workspace": workspace,
};

export const getFeatures = cache(async () => {
  return Object.entries(featuresMap).map(([slug, entry]) => ({ slug, entry }));
});

export const getFeature = cache(async (slug: string) => {
  return featuresMap[slug] || null;
});
