# KeilHQ — Buyer & User Persona Profiles

> One-page persona cards. All capabilities attributed to the product are confirmed from the codebase. No testimonials, no user counts, no unverifiable claims.

---

## Riya — The Agency Owner

**Role**: Founder or co-founder of a 5–25 person digital agency. Running 6–10 client accounts simultaneously. The person who pays the tool bills and fields client "what's the status?" emails.

**Goals:**
1. Deliver client projects on time and on brief without miscommunication
2. Give clients visibility into project status without writing update emails
3. Reduce the number of tools the team has to context-switch between

**Frustrations:**
- Meeting decisions that get recorded in WhatsApp threads and are never actioned
- Clients emailing "can you send me an update?" because they have no self-serve visibility
- Tasks created with just a title — no context on what the deliverable actually is
- Paying for Trello + Otter.ai + a separate client portal + Notion + communication tools that don't talk to each other

**What KeilHQ actually addresses (confirmed):**
- Org/space model: one space per client, confirmed from schema
- Clarity Engine: task requires objectives + success criteria — prevents "fix the thing" assignments
- Public shareable task links: clients can check status without a login — confirmed from `public-task.routes.ts`
- Meeting transcription → save to Motion doc: the decision record from the client call exists before the call ends
- Sarvam AI transcription: if client calls happen in mixed languages, this is uniquely accurate for Indian markets

**What they need to say yes:**
- See the client space + shareable link flow demoed with their own meeting type
- Confirm the free 30-day trial needs no credit card
- Talk to someone who has actually tried the agency workflow (not a canned demo)

**Where they are:** LinkedIn (agency/founder communities), YourStory, Inc42, design/agency Twitter, word-of-mouth from other agency owners.

---

## Arjun — The Product Manager

**Role**: PM at a seed-to-Series B startup. Accountable for sprint delivery and feature clarity. The person most blamed when something ships wrong.

**Goals:**
1. Ship the right features the first time, without rework cycles
2. Know what's blocked and why, without running daily standups
3. Keep engineering, design, and leadership aligned on what "done" looks like

**Frustrations:**
- Tasks in Linear or Asana with just a title and a due date — no context
- Sprint retros dominated by "we didn't understand the requirements"
- Meeting decisions that need to be manually entered into the task tracker after the call
- AI tools that respond generically, not from actual sprint state

**What KeilHQ actually addresses (confirmed):**
- Clarity Engine: objectives + success criteria required at creation — enforced in database
- GitHub integration: issues create tasks; tasks create GitHub issues — bidirectional, confirmed from agent code
- AI agent: can answer "what's blocking my sprint?" with actual task data — confirmed from task agent tool access
- Meeting transcription: decisions from sprint planning become tasks before the call ends

**Important caveat**: If they're on Linear, the Linear integration is not yet live. This is a real gap to disclose upfront.

**Where they are:** Product management Slack communities, Lenny's Newsletter, Twitter/X (PM community), ProductHunt.

---

## Priya — The Freelance Designer / Solopreneur

**Role**: Solo UI/UX designer or creative professional. 3–6 clients at any given time. Every tool cost and every lost hour is directly visible.

**Goals:**
1. Know what to work on today without spending time figuring it out
2. Keep clients informed without writing weekly status emails
3. Have all project context in one place — not split across Notion + Calendar + Gmail + a to-do app

**Frustrations:**
- Monday morning: 30–45 minutes cross-referencing calendar, tasks, and notes to find what's urgent
- Sending clients PDF attachments that are stale within a day
- Paying for multiple tool subscriptions when most features go unused solo

**What KeilHQ actually addresses (confirmed):**
- Personal mode: full product functionality without a team — confirmed from `015_personal_organisation.sql`
- Google Calendar 2-way sync: tasks with due dates appear as calendar events and vice versa — confirmed from migration files
- Smart Dashboard: auto-surfaces Immediate / Today / Blocked / Backlog from real task data
- Public shareable Motion docs: send a client a link instead of an attachment
- Data export even on cancelled accounts: no lock-in risk — confirmed from billing routes

**Where they are:** Twitter/X, Dribbble, design communities, IndieHackers.

---

## Dev — The Engineering Lead

**Role**: Tech lead or senior engineer managing a team of 3–10 engineers. Sets tooling standards. Hates context-switching. Evaluates tools by looking at the code, not the marketing page.

**Goals:**
1. Keep engineering context (code, issues, tasks) in one place
2. Eliminate the "what's the status?" interruptions during focused work
3. Evaluate and adopt tools incrementally — no forced big-bang migrations

**What KeilHQ actually addresses (confirmed):**
- GitHub agent: bidirectional issues ↔ tasks, list PRs, list contributors — all confirmed in `github.agent.ts`
- AI: "what's unresolved before the deadline?" gives a real answer from actual task state
- Dependency blocking: tasks with unresolved blockers are correctly surfaced
- Local AI option: AI queries can stay on-premise via Ollama-compatible endpoint

**What they'll find and flag:**
- Linear integration: not live. If the team is on Linear, this is a blocker. No hedging.
- `@ai-sdk/google` is installed but OpenRouter is the actual AI backend. Technical buyers will check.

**Where they are:** GitHub, Hacker News, dev Twitter/X, engineering communities, technical blogs.

---

## Meera — The Ops Manager / Team Lead

**Role**: Operations manager or team lead at a 20–100 person company. Manages team productivity, approves tooling decisions, and implements processes. Sees the overhead of running multiple tools first-hand.

**Goals:**
1. Visibility into what's blocked — without a daily standup
2. Onboard new team members fast — not two weeks of "which Notion page?"
3. Fewer tools, fewer vendor invoices, fewer renewal dates

**What KeilHQ actually addresses (confirmed):**
- Smart Dashboard shows task state (blocked, urgent, immediate) without asking team members
- Global search across tasks, docs, and chat — confirmed in frontend `GlobalSearchDialog.tsx`
- RBAC: new members can be invited with specific role permissions — no admin access needed by default
- Activity logs: every task change is logged — confirmed from `activity_logs` table and `log_action_type` enum

**What they'll ask:**
- "What happens when someone leaves the team? Can I transfer their tasks?" — Task transfer route confirmed (`transferTask` controller).
- "What if we need to export all our data?" — Data export endpoint confirmed.
- "Do you have SOC 2?" — The honest answer is no. Be direct.

**Where they are:** LinkedIn, operations-focused communities, Notion/Asana communities (conversion plays).
