# Executive Report Outline — KeilHQ

> Slide-by-slide skeleton for a founder pitch, investor update, or sales presentation.
>
> **Guiding principle for this document**: Every claim in the slides must be verifiable. If a slide says something about the product that cannot be shown in a live demo or proven from the codebase, it should not be in the slide. The most credible version of this pitch is the honest one — especially for a product this early.

---

## Slide 1 — What We Built

**Title:** KeilHQ — One Workspace for Teams That Ship

**One sentence:** KeilHQ brings task management, real-time chat, collaborative docs, meeting transcription, Google Calendar, GitHub, and a workspace-aware AI assistant into a single product — with a structural rule that no work can start without a clear definition of done.

**What to confirm before this slide**: Does the live product deliver all of these surfaces in one login? Yes — confirmed from codebase.

---

## Slide 2 — The Problem

**Title:** The clarity gap is where work goes wrong.

**Content:**
- Decisions made in meetings don't make it into task trackers
- Tasks get created with a title and a due date — no context on what "done" means
- Your calendar, your tasks, your docs, and your code live in four separate tools
- Meetings are transcribed (if at all) in a fifth tool that nobody revisits
- The AI tools bolted onto each of these read only their own data — they don't know what's actually happening in your team

**Why this works:** These are recognizable problems that don't require validation data — every PM, agency owner, and team lead has experienced them. This slide doesn't need user stats; it needs a room full of people nodding.

---

## Slide 3 — Our Answer

**Title:** One product. Each surface connected to the others.

**Content (four steps, each confirmed in code):**
1. A meeting is recorded in KeilHQ → Sarvam AI or ElevenLabs transcribes it with speaker labels → decisions become tasks before the call ends, via the `save-to-motion` route
2. Tasks require Objectives and Success Criteria at creation — database-enforced, not optional
3. Tasks, docs, chat messages, and calendar events are all linked and searchable in one place — confirmed from global search and cross-linking confirmed in schema
4. The AI assistant (4 specialist agents: task, chat, docs, GitHub) can answer "what's blocking my team right now?" with actual workspace data, not a generic response

**What to NOT say here**: Do not reference "Google Gemini" as the AI backend — OpenRouter is the actual default. Do not reference "7,000 teams." Do not reference compliance certifications.

---

## Slide 4 — What's Real Today (Live Product)

**Title:** Here's what's shipped and working.

**Confirmed capabilities:**
- Task management: Kanban, Gantt, calendar views, dependencies, subtasks, assignees, priorities
- The Clarity Engine: objectives + success criteria required at task creation (database-enforced)
- Meeting recording + transcription (Sarvam AI primary; ElevenLabs fallback) with speaker diarization
- Block-based collaborative document editor (Motion, built on TipTap)
- Real-time team chat (channels, DMs, threads, Socket.io)
- Google Calendar two-way sync
- GitHub integration — bidirectional (issues ↔ tasks, PRs, contributors)
- Notion integration (import/export/sync)
- Gmail read access
- 4-agent AI assistant with real workspace data access (task, chat, docs, GitHub agents)
- OpenRouter AI backend (any compatible model); Local AI option (Ollama-compatible)
- Role-based access control, server-side enforced
- Personal mode (full product, no team required)
- Public shareable links for tasks and docs (no login required for recipients)
- 30-day free trial, Dodo Payments billing, data export on cancellation

**Not yet shipped (honest):**
- Mobile app (blocked at < 1024px viewport)
- Linear, Jira, Slack integrations (UI placeholders only — no backend code)
- SOC 2 or any compliance certification
- KeilHQ Portals / AI data integration (PRD stage only)

---

## Slide 5 — Who This Is For Right Now

**Title:** The segments we're actually built for today.

**Strong fit today:**
- Digital agencies (5–50 people) — especially multilingual Indian agencies
- Tech startups (seed–Series B, 5–100 people) with GitHub workflows
- Freelancers and solopreneurs in knowledge work
- Small dev teams using GitHub (not Linear-primary)

**Why these segments specifically:**
- They are below the compliance threshold (no SOC 2 required)
- They work with the integrations that are actually shipped (Google Calendar, GitHub, Notion)
- Their pain maps directly to the confirmed product capabilities

**Not a fit today (and why):**
- Teams requiring Linear or Jira (integrations not live)
- Teams embedded in Slack (no Slack integration; chat is a full replacement motion)
- Regulated industries (no compliance certifications)
- Enterprise (no SSO confirmed, no SOC 2, no enterprise support model)

---

## Slide 6 — The Business Case

**Title:** The cost math, labeled honestly.

**Using published list pricing only:**

| Tool | Published monthly list price/seat |
|---|---|
| Asana (Business) | ~$13 |
| Notion (Plus) | ~$12 |
| Slack (Pro) | ~$10 |
| Otter.ai (Pro) | ~$15 |
| Google Workspace (Business Starter) | ~$8 |
| **Combined** | **~$58/seat** |
| **KeilHQ Teams** | **$50/seat** |

**Caveats to say out loud:**
- Actual savings depend on negotiated rates, which may differ from list pricing
- This assumes full replacement of all five tools; adoption curves mean some tools may co-exist during a transition period
- Time-saving benefits (reduced rework, faster onboarding) are plausible but are not measured outcomes from KeilHQ customers at this stage

**The honest pitch to a CFO:** "The math is directionally compelling on list pricing. The harder case to make until we have outcome data is the productivity side. We believe the Clarity Engine prevents expensive rework cycles — that's a thesis, not a guarantee, until teams measure it in their own environment."

---

## Slide 7 — What's Next

**Title:** The gaps we're closing.

**Near-term (roadmap, no committed dates to show without engineering alignment):**
- Live Linear integration → unlocks dev teams currently on Linear
- Live Slack integration → unlocks all teams embedded in Slack workflows
- Mobile app → removes the most common first-session churn trigger
- Basic security trust page → removes the most common mid-market procurement blocker without waiting for SOC 2

**Medium-term:**
- SOC 2 certification → opens regulated industries and larger mid-market
- KeilHQ Portals (AI data integration engine) → PRD exists; not yet in development

**What to NOT promise in this slide:**
- Do not promise a timeline for any integration unless engineering has committed to one
- Do not promise "SOC 2 in progress" unless the audit engagement is actually contracted

---

## Appendix A — Tech Stack (for technical audiences)

- **Frontend**: React 19, TypeScript, Vite, TipTap, Socket.io client, shadcn/ui
- **Backend**: Node.js, Express 5, TypeScript
- **Database**: PostgreSQL on Supabase; direct `pg` pool for backend queries
- **Auth**: Supabase JWT — server-side verification on every request
- **Real-time**: Socket.io
- **AI**: Mastra Core (`@mastra/core`, `@mastra/pg`, `@mastra/ai-sdk`); OpenRouter via OpenAI-compatible SDK (default); Local/Ollama-compatible (user-configured)
- **Transcription**: Sarvam AI Saaras v3 Batch (primary); ElevenLabs Scribe v2 (fallback)
- **Storage**: AWS S3 (presigned URL uploads)
- **Billing**: Dodo Payments

---

## Appendix B — Pricing Summary

| Plan | Price | Description |
|---|---|---|
| Pro Trial | $0 / 30 days | Auto-provisioned on signup; no credit card |
| Pro | $25/month | Individual use |
| Teams | $50/seat/month | Org-level subscription with seat management |
| Enterprise | Contact sales | Not yet defined in detail |

---

## Appendix C — Confirmed Integrations Status

| Integration | Status |
|---|---|
| Google Calendar | Live — 2-way sync with webhook |
| GitHub | Live — bidirectional issues ↔ tasks |
| Notion | Live — import/export/sync |
| Gmail | Live — read-only |
| Sarvam AI | Live — primary transcription provider |
| ElevenLabs | Live — alternative transcription provider |
| OpenRouter | Live — default AI model backend |
| Local AI (Ollama) | Live — user-configured |
| Linear | Not live — UI placeholder only |
| Jira | Not live — UI placeholder only |
| Slack | Not live — UI placeholder only |
| Google Meet/Drive/Docs | Not live — UI placeholder only |
