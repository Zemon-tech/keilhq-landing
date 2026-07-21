# KeilHQ — Market Research & ICP Fit Matrix

> Based solely on confirmed product capabilities from the codebase. No user count, no revenue figures, no external market research reports. Where competitor comparisons are made, they are based on publicly available competitor feature pages or widely known product limitations.

---

## What KeilHQ Actually Is (from the codebase)

KeilHQ is a web-based work management platform that ships the following confirmed capabilities in one product:

- Task management with dependency tracking, subtasks, Gantt, Kanban, and calendar views
- The Clarity Engine — tasks require Objectives and Success Criteria before they can be created (database-enforced)
- Real-time team chat (channels and DMs via Socket.io)
- Block-based collaborative document editor (Motion, built on TipTap)
- Google Calendar two-way sync
- Meeting recording + AI transcription (Sarvam AI primary; ElevenLabs fallback)
- An AI assistant with 4 specialist agents (task, chat, docs, GitHub) that have real read/write access to workspace data
- GitHub integration (bidirectional: issues ↔ tasks)
- Notion integration (import/export/sync)
- Gmail read integration
- Role-based access control (server-side enforced)
- Personal mode (full product functionality without a team)
- Public shareable links for tasks and docs (no login required for recipients)
- 30-day free trial, Dodo Payments billing
- Local AI support (Ollama-compatible)

It does NOT currently ship: mobile app, Linear integration, Jira integration, Slack integration, Google Meet/Drive/Docs integration, SOC 2 or any compliance certification, or the "KeilHQ Portals" AI data integration feature (currently a PRD document only).

---

## Competitive Positioning

**The two confirmed differentiators that no direct competitor currently offers:**

1. **Clarity Engine** — No competitor (Asana, Linear, Notion, ClickUp, Monday, Basecamp) requires objectives and success criteria at task creation as a database-enforced field. They all allow tasks with a title only. This is a category-level differentiation that is architecturally real, not a marketing layer.

2. **AI with real workspace data access** — The 4-agent specialist architecture has actual tool access to tasks, docs, chat, and GitHub. Notion AI processes documents. Asana's AI makes task suggestions. Neither reads across your entire workspace in real time or can answer "what's blocking my team?" with actual task state. OpenAI/ChatGPT has no access to your tasks at all. This difference is real and confirmed from the agent code.

**Secondary differentiators (real, but competitive):**
- Meeting transcription with speaker diarization built into the workspace (not a separate tool)
- Sarvam AI's 23-language Indian language support — unique in the category for multilingual Indian teams
- Single-product consolidation at a price point below combined stack list pricing

---

## ICP Fit Matrix

| Segment | Fit | Reasoning |
|---|---|---|
| **Digital agencies (India, 5–50 people)** | **Strong** | Org/space model maps to client-by-client structure. Sarvam AI transcription unique for multilingual client calls. Public task/doc links replace client portals. Cost saving vs. fragmented stack is immediate. |
| **Tech startups (India, seed–Series B, 5–100 people)** | **Strong** | GitHub integration live and bidirectional. AI sprint awareness confirmed. Sarvam AI for Indian language calls. Free trial fits how startups evaluate tools. Price point competitive. |
| **Freelancers / solopreneurs** | **Strong** | Personal mode is a first-class, fully-functional path — not an afterthought. Calendar sync + task management is immediately useful solo. No team required. No credit card for trial. |
| **Dev teams with GitHub workflows (10–50 engineers)** | **Strong with caveat** | GitHub integration is real and bidirectional. AI can query actual sprint state. *Caveat*: teams already on Linear cannot migrate cleanly until the Linear integration ships. Acknowledge this upfront. |
| **Digital agencies (US/UK/Europe, 20–200 people)** | **Conditional** | Core capabilities apply. But: GDPR compliance documentation does not exist; SOC 2 does not exist; Slack placeholder integration is a real gap for Euro agencies embedded in Slack. Viable only for smaller agencies below the compliance threshold. |
| **SaaS product teams (US/UK/Europe)** | **Conditional** | Linear gap is a hard blocker for most US product teams. Jira gap blocks larger product teams. SOC 2 absence blocks anything above ~30 people with an IT function. Viable for small product teams on GitHub who don't use Linear. |
| **Consulting firms (boutique, 10–50 people)** | **Possible** | Client space model maps well. Meeting transcription is valuable for consultants. *Gap*: no billable hours tracking, no invoicing, no time-tracking integration. This is a real hole for this segment. |
| **Content / creative agencies** | **Possible** | Motion docs + collaborative editing + meeting transcription serve content workflows. *Gap*: no asset management (video/design files) beyond S3 uploads. No DAM-level capability. |
| **Healthcare** | **Not viable** | HIPAA documentation required. Meeting audio (which would contain PHI) processed via Sarvam AI/ElevenLabs with no documented BAA. Hard regulatory blocker. |
| **Financial services (regulated)** | **Not viable** | SOC 2 required for most regulated financial institutions. Not viable until certification is complete. |
| **Government / public sector** | **Not viable** | Same compliance gap plus procurement complexity. |
| **Enterprise (200+ employees)** | **Not viable** | No SOC 2, no SAML SSO confirmed in code, no enterprise support model. Dodo Payments may not pass procurement. |
| **Education / universities** | **Weak** | Product designed for professional team workflows. Student/faculty academic project management is not the design target. |

---

## Stage-Level Fit

| Company size | Fit | Notes |
|---|---|---|
| **Solo user** | Excellent | Personal mode, calendar sync, full AI access |
| **2–15 people** | Excellent | Below compliance threshold; consolidation story strongest |
| **15–50 people** | Strong | Some IT review expected; SOC 2 will come up |
| **50–200 people** | Conditional | Compliance documentation and live Slack/Linear/Jira integrations are gatekeeping requirements |
| **200+ people** | Not viable currently | — |

---

## What Would Expand the ICP

In priority order based on confirmed codebase gaps:

| Gap to close | Unlocks |
|---|---|
| **Publish a security trust page** (data residency, subprocessors, access controls) | Removes the most common mid-market procurement blocker; can be done without full SOC 2 |
| **Live Linear integration** | Dev teams currently on Linear — a large slice of the startup/product segment |
| **Live Slack integration** | All segments where Slack is the existing communication standard |
| **SOC 2 Type II** | Every deal above ~$5K ARR with an IT review; all regulated industry segments |
| **Mobile app** | Expands usable surface area for all users; removes the most common first-impression churn point |
| **GDPR documentation** | European agencies and startups |
| **Time tracking** | Consulting and services firms |
| **Live Jira integration** | Mid-market and enterprise product/engineering teams |

---

## Competitor Comparison (Honest, Confirmed Only)

| Competitor | What's the same | Where KeilHQ differs |
|---|---|---|
| **Notion** | Block-based docs, AI feature | KeilHQ adds task management with real dependencies, meeting transcription, real-time chat, workspace-aware AI. Notion's AI reads docs; KeilHQ's AI reads your actual task state. Notion has no Clarity Engine equivalent. |
| **Asana** | Task management with dependencies and views | KeilHQ adds docs, real-time chat, meeting transcription, workspace-aware AI. Asana has no Clarity Engine equivalent. Asana has SOC 2, HIPAA — KeilHQ does not. |
| **Linear** | Task management built for dev teams | KeilHQ adds docs, chat, transcription, workspace-aware AI. Linear has no meeting transcription, no Clarity Engine. Linear has a devoted following; KeilHQ's Linear integration is not yet live. |
| **ClickUp** | All-in-one workspace claim | KeilHQ's Clarity Engine is a genuine structural difference. KeilHQ has native meeting transcription with diarization; ClickUp does not. KeilHQ's AI has real workspace tool access; ClickUp's AI does not have equivalent. |
| **Slack** | Real-time messaging | KeilHQ includes chat plus everything else. No Slack integration exists yet — migration is all-or-nothing currently. |
