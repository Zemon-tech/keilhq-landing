# KeilHQ — Case Studies

> All case studies below are **illustrative composites**. They are grounded in confirmed product capabilities from the codebase. No real named company or person is attributed. No specific outcome numbers are presented as measured data — all are labeled as plausible directional estimates based on described product behavior.
>
> **What these are NOT**: real customer case studies, audited outcomes, or testimonials. KeilHQ has no confirmed public customer base at the time of writing. These exist to help the team think through and communicate realistic value scenarios for the ICP segments the product is built for.

---

## Illustrative Example 1 — Small Digital Agency, ~12 People

**Company archetype**: 10–15 person branding and digital marketing agency managing 6–8 client accounts simultaneously. Billing across multiple clients. Currently using separate tools for task management (Trello), client communication (email + WhatsApp), meeting notes (manual), and file sharing (Google Drive).

**Before (the problem):**
The agency owner runs a client kickoff call. Decisions are made. Everyone nods. The account manager writes bullet points in WhatsApp. The developer creates a task in Trello titled "homepage redesign" with no context. Three weeks later, the designer delivered a homepage that solved the wrong problem, because nobody had written down what "done" looked like before work started.

**What KeilHQ addresses (from confirmed code):**
- Every task created in KeilHQ requires Objectives and Success Criteria — the homepage redesign task would have to answer "what are we trying to achieve?" and "how will we know when this is done?" before work begins.
- Meeting recordings + Sarvam AI transcription produce a labeled transcript (who said what) before the call ends. A `save-to-motion` route turns the transcript into a Motion doc linked to the project.
- Client-facing public task links (confirmed from `public-task.routes.ts`) let the client see task status without needing a login or sending update emails.

**Plausible directional outcome (labeled as estimate, not measured data):**
- One rework cycle prevented per sprint could save 3–5 days of developer/designer time, which at typical agency billing rates represents a meaningful margin recovery.
- Cancellation of 2–3 tool subscriptions (Trello $12/user + Otter.ai $15/user + a client portal tool) saves a portion of per-seat costs.
- The exact dollar value depends on the agency's billing model, team size, and how many rework cycles occurred previously — this cannot be stated as a guaranteed number.

**Why it matters to this segment**: Agencies live on margins and client trust. A tool that prevents "we built the wrong thing" conversations and lets clients self-serve on status updates addresses both. The org/space model (one space per client) maps directly to how agencies are actually structured.

---

## Illustrative Example 2 — Startup Engineering Team, 8 Engineers + 2 PMs

**Company archetype**: Early B2B SaaS startup, remote team. Previously using Linear (issues), Notion (PRDs), Slack (communication), and Google Calendar (scheduling separately).

**Before (the problem):**
A PM creates a Linear issue titled "improve onboarding flow." An engineer picks it up. Halfway through the sprint, it becomes clear the PM meant the signup flow and the engineer built the activation flow. Neither was wrong — the issue just didn't define what "done" looked like.

**What KeilHQ addresses (from confirmed code):**
- Clarity Engine: task requires Objectives and Success Criteria — the PM has to answer "improve onboarding flow so that [specific metric] happens" before the engineer touches it.
- GitHub agent (fully implemented, bidirectional): the engineer's PR is linked to the KeilHQ task. Issues created in GitHub can become KeilHQ tasks automatically. Tasks can generate GitHub issues.
- AI assistant: a PM can ask "what's unresolved before our Friday deadline?" and get a list from the actual task data, not a generic AI response.

**Plausible directional outcome (estimate only):**
- One sprint cycle free of a major rework incident is worth the equivalent of 2–5 engineering days, depending on scope. Whether the Clarity Engine achieves this consistently is something teams would need to measure in their own environment.
- Linear integration is not yet live — a team currently on Linear would need to either migrate tasks to KeilHQ or run both tools during a transition period. This is a real friction point that should be disclosed upfront.

**Why it matters to this segment**: PMs are held accountable for shipping the right thing. Engineers are held accountable for shipping it correctly. The Clarity Engine moves the cost of ambiguity from mid-sprint to task creation time — earlier and cheaper.

---

## Illustrative Example 3 — Multilingual Indian Startup, 20–30 People

**Company archetype**: Series A startup based in Bengaluru. Team uses English for formal work, but client calls and internal ops conversations frequently happen in Hindi, Tamil, or Kannada depending on who's on the call. Previously using Google Meet for recording (no auto-transcription) and manually writing notes afterward.

**Before (the problem):**
English-only transcription tools (Otter.ai, Fireflies) produce unreliable output for mixed-language calls. A Tamil-language section of a client call becomes "[inaudible]" in the transcript. Someone has to clean it up manually, or the decision is lost.

**What KeilHQ addresses (from confirmed code):**
Sarvam AI (Saaras v3 Batch) is explicitly implemented in the backend with the code comment: *"Let Sarvam auto-detect language — works well for Indian languages + English."* The provider normalizes speaker labels (Speaker 0, Speaker 1) for diarization. The transcript is stored and searchable, and can be saved to a Motion doc in one step.

**Plausible directional outcome (estimate only):**
- Meeting cleanup time for a mixed-language call could drop significantly if Sarvam AI's accuracy on Indian languages is materially higher than English-only tools. The accuracy difference is real per Sarvam's documented capabilities; the exact time saving depends on call volume and language mix.
- This is not a validated outcome from a KeilHQ customer — it is a plausible inference from the product capability and the known limitation of English-first transcription tools in multilingual Indian contexts.

**Why it matters to this segment**: Indian teams working in multiple languages are systemically underserved by English-first productivity tools. Sarvam AI's 23-language support with auto-detection is a genuine competitive differentiator for this segment that none of the primary competitors (Notion, Asana, Linear, Slack) currently offer.

---

## Illustrative Example 4 — Freelance Designer / Solopreneur

**Company archetype**: A solo UI/UX designer working with 3–5 active clients. Managing projects in Notion, calendar in Google Calendar, client communication over email, and task tracking in a to-do app. The tools don't talk to each other.

**Before (the problem):**
Monday morning ritual: open Notion, open calendar, open the to-do app, cross-reference all three to figure out what's actually urgent today. Takes 30–45 minutes. Some weeks a deadline is missed because it lived in only one of the three systems.

**What KeilHQ addresses (from confirmed code):**
- Personal mode (auto-provisioned on signup, confirmed from `015_personal_organisation.sql`) — full product functionality without needing a team.
- Google Calendar 2-way sync (confirmed from migration files and integration routes) — tasks with due dates appear as calendar events; calendar events appear in the task view.
- Smart Dashboard auto-ranks work into Immediate / Today / Blocked / Backlog from real task and calendar data.
- Public shareable doc links via Motion — send a client a link to their project doc instead of an email attachment that goes stale.
- Data export available even on a cancelled account (confirmed from billing routes) — no lock-in risk.

**Plausible directional outcome (estimate only):**
- Monday morning planning could be shorter if the Smart Dashboard correctly reflects the user's actual task state. Whether this happens depends on whether the user has entered their tasks and due dates into KeilHQ — empty data produces an empty dashboard.
- 2–3 tool cancellations are plausible in month one (a separate to-do app, Notion, possibly Otter.ai) — the specific saving depends on what the user currently pays.

**Why it matters to this segment**: Solopreneurs feel every tool cost personally. A product that works in personal mode from day one, with no team required, and that visibly reduces the number of tools needed is immediately compelling. The 30-day free trial with no credit card removes all risk from trying it.
