import { cache } from 'react';
import aiCommandCenter from '../../content/features/ai-command-center/index.json';
import smartDashboard from '../../content/features/smart-dashboard/index.json';
import taskManagement from '../../content/features/task-management/index.json';
import docsNotes from '../../content/features/docs-notes/index.json';
import calendarIntegration from '../../content/features/calendar-integration/index.json';
import teamChat from '../../content/features/team-chat/index.json';
import meetingRecorder from '../../content/features/meeting-recorder/index.json';
import integrations from '../../content/features/integrations/index.json';
import notifications from '../../content/features/notifications/index.json';
import workspace from '../../content/features/workspace/index.json';

const featuresMap: Record<string, any> = {
  "ai-command-center": aiCommandCenter,
  "smart-dashboard": smartDashboard,
  "task-management": taskManagement,
  "docs-notes": docsNotes,
  "calendar-integration": calendarIntegration,
  "team-chat": teamChat,
  "meeting-recorder": meetingRecorder,
  "integrations": integrations,
  "notifications": notifications,
  "workspace": workspace,
};

export const getFeatures = cache(async () => {
  return Object.entries(featuresMap).map(([slug, entry]) => ({ slug, entry }));
});

export const getFeature = cache(async (slug: string) => {
  return featuresMap[slug] || null;
});
