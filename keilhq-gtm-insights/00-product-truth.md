# KeilHQ — Product Truth Sheet
## Codebase-First. Zero Unverified Claims.

> Every statement in this document is grounded in what was actually found in the codebase, routes, database schema, and agent code. Nothing is taken from marketing copy without independent confirmation. Where the marketing docs say something that the code does not confirm, this document says so explicitly.

---

## What It Does

KeilHQ is a web-based work management application that combines task management, real-time team chat, block-based document editing, Google Calendar synchronisation, meeting recording with AI transcription, and an agentic AI assistant into a single product. It is designed to replace separate subscriptions to tools like Slack, Asana/Linear, Notion, and Otter.ai.

The application is a **desktop-only web app** — a `MobileBlocker` component is active in the frontend and displays the message: *"Keil is currently built for desktop viewports. The mobile edition is in active development."* The app blocks any viewport below 1024px wide. Public shared links for docs and tasks are the exception — they work on any device.

The product has a billing system implemented (Dodo Payments) with free 30-day trials auto-provisioned on sign-up. There is no confirmed user base size or paying customer count verifiable from the codebase.

---

## Core Capabilities — Confirmed from Code

### Task Management
Confirmed from: database schema (`tasks`, `task_assignees`, `task_dependencies`, `task_slots`, `personal_tasks`, `comments`, `activity_logs` tables) and API routes (`org-task.routes.ts`, `personal-task.routes.ts`).

- Tasks have: title, description, objective, acceptance criteria, status (`backlog`, `todo`, `in-progress`, `done`), priority (`low`, `medium`, `high`, `urgent`), assignees, due date, start date, dependencies, subtasks, comments, and a full audit log of every change.
- **Real dependency blocking**: `task_dependencies` table; routes exist to `addDependency` and `removeDependency`; a "blocked" state is derived from the dependency graph, not set manually.
- **Subtasks**: one level deep only — the task agent code explicitly states: "nested subtasks are not allowed."
- **Parent-child hierarchies**: epics into subtasks, confirmed.
- **Multiple views**: Kanban, Gantt/timeline, Calendar — confirmed from frontend `TasksPage.tsx` component names.
- **Public shareable task links**: routes exist for unauthenticated task reads (`public-task.routes.ts`).
- **Task transfer**: a `transferTask` controller exists for moving tasks between spaces.
- **AI summary per task**: `getTaskAiSummary` and `regenerateTaskAiSummary` routes exist.
- **Time slots** (`task_slots` table): tasks can be assigned calendar slot windows.
- **Checklists** (`personal_checklists` table): per-task sub-checklists confirmed.

### The Clarity Engine
Confirmed from: database schema (`objective_updated` and `success_criteria_updated` in the `log_action_type` enum) and task agent instructions which reference "objective" and "acceptance criteria" as real fields that are logged on every change.

The "Clarity Engine" is the product name for the requirement that every task carry Objectives and Success Criteria fields at creation. These are real database fields, not UI-only labels.

### Smart Dashboard
Confirmed from: `PRODUCT_WALKTHROUGH.md` (built from source code per its own header) and the `Dashboard.tsx` (72KB, one of the largest components). The dashboard contains a 3D wheel picker cycling through six cards: Current Focus, Immediate Blockers, Needs Reply, Next Event, Quick Capture, Up Next. An inline AI chat panel is embedded in the dashboard.

### Motion (Document Editor)
Confirmed from: `motion_pages`, `motion_page_shares`, `motion_page_updates`, `motion_page_views`, `motion_page_view_permissions`, `motion_comments` tables; extensive routes in `motion-page.routes.ts` including full-text search, analytics (views, editors, updates), comments, public/space shares, trash/restore/permanent-delete, and Motion AI.

- Built on **TipTap** (confirmed from `tiptap-extension`, `tiptap-ui`, `tiptap-node` component directories).
- Real-time collaborative editing via **Socket.io** (confirmed from `socket.ts`, `channels`, `messages` tables).
- Subpage hierarchies: `is_folder` field and `motion_folders` table in migrations.
- Comment threads on any block: `motion_comments` table confirmed.
- Cross-space sharing: `motion_page_shares` with `motion_share_type` enum (`public_link`, `space`).
- Page-level permissions: `motion_permission` enum (`view`, `edit`, `view_all`, `view_managers`, `view_admins`, `edit_all`, `edit_managers`, `edit_admins`).
- View analytics (who viewed, how many times): `motion_page_views` and `motion_page_view_permissions` tables.
- Motion AI endpoint: `POST /:pageId/ai` with rate limiting.
- Public shared Motion pages bypass `MobileBlocker` and work on any device.

### Real-Time Team Chat
Confirmed from: `channels`, `channel_members`, `messages` tables; `org-chat.routes.ts`; `socket.ts` WebSocket handler; `ChatDialog.tsx` (26KB component).

- Slack-style group channels and DMs — both confirmed from schema.
- `reply_to` field in messages (threaded replies) — migration `025_add_reply_to_to_messages.sql`.
- Message attachments — migration `028_add_attachments_to_messages.sql`.
- Real-time via Socket.io — confirmed.
- Global chat search: `chat-search.routes.ts`.
- One-sided chat deletion: migration `041_one_sided_chat_deletion.sql` (delete a message from your view without deleting it for everyone).

### Meeting Recording & Transcription
Confirmed from: `meeting_recordings` table; `meeting.routes.ts`; dedicated transcription service at `backend/src/services/transcription/`.

- Audio recorded in-browser; S3 presigned URL generated for upload.
- **Sarvam AI (Saaras v3 Batch)** is the primary provider — real code in `sarvam.provider.ts`. The code comment explicitly says: *"Let Sarvam auto-detect language — works well for Indian languages + English."*
- **ElevenLabs Scribe v2** is also implemented as a provider — real code in `elevenlabs.provider.ts`. The user preferences service defaults to ElevenLabs when no preference is set (from `user-preferences.service.ts` line 100: `return "elevenlabs";`). The controller log comment says "Defaults to Sarvam" — there is a slight inconsistency in the codebase between which is the true default; both providers are fully implemented.
- Speaker diarization: confirmed in Sarvam output normalization code.
- Save meeting summary to Motion: route `POST /recording/:recordingId/save-to-motion` confirmed.
- Search meetings by transcript content: `GET /meetings/search/query` confirmed.
- Recording quota per user per month: enforced by `requireRecordingQuota` middleware.

### AI Assistant
Confirmed from: `backend/src/mastra/`, `backend/src/mastra/agents/`, `backend/src/mastra/models.ts`.

- Framework: **Mastra Core** with PostgreSQL storage (`PostgresStore`) for conversation memory.
- **Supervisor Agent** (`keilhq-ai`) orchestrates **four specialist sub-agents**:
  1. `keilhq-task-agent` — full task/event CRUD, scheduling, subtasks, transfer, AI summary
  2. `keilhq-chat-agent` — list channels, retrieve messages, check unread counts
  3. `keilhq-motion-agent` — search, create, update, summarise docs chunk-by-chunk
  4. `keilhq-github-agent` — list issues/PRs/contributors, create tasks from issues, create GitHub issues from tasks
  - *Note: The `scheduler` agent referenced in some docs is implemented as tools (`getUnscheduledTasksTool`, `autoScheduleTasksTool`) on the task agent, not as a separate named agent.*
- **AI model backend**: The codebase's `models.ts` supports two modes only:
  - `openrouter` (default): routes through OpenRouter via the OpenAI-compatible SDK. Any model available on OpenRouter can be selected.
  - `local`: connects to a locally-running OpenAI-compatible server (e.g. Ollama) via a configured base URL.
  - **The `@ai-sdk/google` package is in `package.json` but there is no Gemini-specific model resolver in `models.ts`**. Gemini models can be accessed via OpenRouter, but there is no direct Gemini integration in the AI agent routing code. Marketing docs referencing "Google Gemini (default)" are inaccurate — OpenRouter is the actual default.
- Stateful multi-turn conversations backed by PostgreSQL.
- Rate limiting: 20 requests/minute, 100 requests/day per user.
- Usage-based AI chat limits enforced per subscription plan.
- Page context injection: if a user is viewing a specific page, that context is injected into the AI prompt.
- Temporal context injection: current date/time is always prepended to the system prompt.

### Google Calendar Integration
Confirmed from: `user_integrations` table, `gcal_webhook_receipts` table, `gcal_watch_status` enum, `task_slots` table, migrations `008_google_calendar_integration.sql` and `011_gcal_two_way_sync.sql`, `integration.routes.ts` (`/integrations/google/*` routes).

- OAuth2 flow: connect, callback, sync, disconnect all implemented.
- **Two-way sync**: task slots appear as Google Calendar events; Google Calendar changes trigger webhook receipts that update KeilHQ. Confirmed by `gcal_webhook_receipts` table and `handleGoogleWebhook` route.
- Smart conflict detection: confirmed in task agent instructions.

### GitHub Integration
Confirmed from: `github.agent.ts`; `025_add_github_fields.sql` migration; `integration.routes.ts` (`/integrations/github/*` routes).

- OAuth2 flow: connect, callback, status, disconnect implemented.
- Agent capabilities: list issues, get issue detail, list PRs, list contributors, create task from GitHub issue, create GitHub issue from task.
- Bidirectional: both directions fully implemented in agent code.

### Notion Integration
Confirmed from: `032_notion_integration.sql` migration; `notion.controller.ts` routes in `integration.routes.ts`.

- Connect via OAuth or manual token.
- Import Notion page to Motion, export Motion page to Notion, sync page content, unlink page, search pages — all implemented.

### Gmail Integration
Confirmed from: `gmail.routes.ts`; Google OAuth includes Gmail scope.

- Read inbox, thread details — routes confirmed.

### Role-Based Access Control
Confirmed from: `member_role` enum (`owner`, `admin`, `member`, `manager`); `space_members` table; `requireSpaceRole` middleware used on every route; server-side enforcement confirmed — not client-only.

### Billing & Subscriptions
Confirmed from: `036_billing_subscriptions.sql` migration; `billing.routes.ts`; `billing.controller.ts`.

- Plans: `pro_trial` (30-day free), `pro_paid`, `teams`, `enterprise` — all defined in schema.
- Per-user subscription auto-provisioned on signup via database trigger.
- Org-level subscriptions (Teams plan) with seat tracking.
- Dodo Payments webhook idempotency via `dodo_webhook_events` table.
- Usage tracking: AI chats (daily + hourly counters), recordings (monthly counter) — per user, per plan.
- Data export endpoint available even for locked/expired accounts.

### Notifications
Confirmed from: `notifications`, `notification_outbox`, `user_notification_preferences` tables; `notification.routes.ts`; `NotificationDialog.tsx` (31KB).

- Notified on: task assignment, message received, note shared, status changed, mentioned in comment, membership updated.
- Per-user notification preferences.
- Mark all read / clear all confirmed.
- Real-time via Socket.io.

### Organisations & Spaces
Confirmed from: `organisations`, `organisation_members`, `spaces`, `space_members` tables; `org.routes.ts`.

- Personal org (always present, auto-created on signup) — `015_personal_organisation.sql`.
- Create/join orgs; spaces within orgs; private by default (`space_visibility` enum has only `'private'`).
- Invite via token links.

### User Preferences
Confirmed from: `user_app_preferences` table; `044_ai_model_preferences.sql`; `preferences.routes.ts`.

- AI model selection (OpenRouter model name or local AI base URL/model).
- STT provider preference (Sarvam or ElevenLabs).
- Theme, other app preferences.

---

## What Is NOT Shipped (Confirmed from Code)

- **Linear, Jira, Slack, Google Meet, Google Drive, Google Docs, Google Sheets, Google Slides, ChronicleHQ integrations**: Settings UI shows placeholders for these. No backend routes, no controller code, no database tables. These are UI-only connectors.
- **KeilHQ Portals (AI Data Integration Engine)**: A PRD document exists (`docs/ai-data-integration-prd.md`) describing AI-powered dashboard/CRM generation from uploaded data. No shipping code exists for this.
- **Mobile app**: `MobileBlocker.tsx` blocks viewports under 1024px. The message says "mobile edition is in active development."
- **SOC 2, HIPAA, GDPR, ISO 27001**: No certification documentation found anywhere in the codebase, docs, or any referenced files.
- **Offline mode**: Referenced in README as planned. Not confirmed shipped.
- **Gemini as a direct model integration in AI agents**: `@ai-sdk/google` is installed but no Gemini model is wired into `models.ts`. Gemini is accessible only through OpenRouter.

---

## Integrations — Honest Status

| Integration | Backend Code | Routes | Notes |
|---|---|---|---|
| Google Calendar | ✅ Full | ✅ Yes | 2-way sync, webhook, confirmed |
| GitHub | ✅ Full | ✅ Yes | Issues, PRs, contributors, bidirectional confirmed |
| Notion | ✅ Full | ✅ Yes | OAuth + manual token, import/export/sync confirmed |
| Gmail | ✅ Partial | ✅ Yes | Read inbox + threads; no send/reply |
| AWS S3 | ✅ Full | ✅ Yes | Meeting recordings + file uploads |
| Sarvam AI | ✅ Full | ✅ Via meetings | Primary transcription, real implementation |
| ElevenLabs | ✅ Full | ✅ Via meetings | Alternative transcription, real implementation |
| OpenRouter (AI) | ✅ Full | ✅ Via Mastra | Default AI model backend |
| Local AI (Ollama-compatible) | ✅ Full | ✅ Via Mastra | User-configured base URL |
| Linear | ❌ None | ❌ None | UI placeholder only |
| Jira | ❌ None | ❌ None | UI placeholder only |
| Slack | ❌ None | ❌ None | UI placeholder only |
| Google Meet/Drive/Docs | ❌ None | ❌ None | UI placeholder only |

---

## Database Model (Key Tables Confirmed from Schema)

`users`, `organisations`, `organisation_members`, `spaces`, `space_members`, `tasks`, `task_assignees`, `task_dependencies`, `task_slots`, `personal_tasks`, `personal_checklists`, `comments`, `activity_logs`, `channels`, `channel_members`, `messages`, `motion_pages`, `motion_page_shares`, `motion_page_updates`, `motion_page_views`, `motion_page_view_permissions`, `motion_comments`, `user_integrations`, `gcal_webhook_receipts`, `meeting_recordings`, `notifications`, `notification_outbox`, `user_notification_preferences`, `user_app_preferences`, `rate_limits`, `user_sessions`, `user_subscriptions`, `org_subscriptions`, `usage_tracking`, `dodo_webhook_events`

---

## Tech Stack (Confirmed from package.json and Code)

- **Frontend**: React 19, TypeScript, Vite, TipTap (block editor), Socket.io client, shadcn/ui components
- **Backend**: Node.js, Express 5, TypeScript
- **Database**: PostgreSQL (Supabase-hosted), accessed via `pg` pool directly + Supabase JS for auth
- **Auth**: Supabase JWT, server-side verification on every request
- **Real-time**: Socket.io
- **AI Orchestration**: Mastra Core (`@mastra/core`, `@mastra/pg`, `@mastra/ai-sdk`)
- **AI Models**: OpenRouter (default, any model); Local/Ollama-compatible (user-configured)
- **Transcription**: Sarvam AI (Saaras v3 Batch) + ElevenLabs Scribe v2
- **Storage**: AWS S3 (S3 presigned URLs via `@aws-sdk/client-s3`)
- **Billing**: Dodo Payments via `dodopayments` SDK + webhook idempotency

---

## Honest Limitations

1. **No mobile support** — hard blocked at `<1024px`.
2. **No paying customers or user base confirmed** — "7,000+ teams" appears only in marketing docs; no analytics, no database query results, no external confirmation. This number should not be used in any claim.
3. **No compliance certifications** — no SOC 2, HIPAA, GDPR, ISO 27001, or any certification of any kind.
4. **No public security page or documented data handling policy**.
5. **Key integrations are placeholder-only**: Linear, Jira, Slack, Google Meet/Drive/Docs.
6. **AI model backend is OpenRouter by default**, not Google Gemini directly — the latter is accessible via OpenRouter but is not a direct integration.
7. **ElevenLabs vs. Sarvam default inconsistency**: The preference service defaults to ElevenLabs; the controller comment says Sarvam is primary. Both are implemented; user preference controls which is used.
8. **Gmail integration is read-only**: no email sending or replying from within KeilHQ.
9. **Subtasks are one level deep only** — the agent code explicitly prevents nested subtasks.
10. **`@ai-sdk/google` is installed but unused in agent routing** — no direct Gemini SDK integration in current AI agent code.
11. **KeilHQ Portals (AI data dashboards) is a PRD only** — not shipped.
