# CTO / Technical Buyer View of KeilHQ

**First reaction:** "The stack is modern and the choices are defensible. Mastra for agentic orchestration, Express 5, Supabase PostgreSQL, Socket.io, TipTap — all established, well-documented libraries. The 4-agent specialist architecture is the right pattern for a workspace tool. My concerns are data ownership, vendor risk, and what's missing."

**What a CTO will actually verify from the code (and find to be true):**

- **Multi-agent architecture is real**: Supervisor + task agent, chat agent, motion agent, GitHub agent — each with its own tool set and routing logic. This is not "AI-powered" as a marketing label; there's real agent code with real tools.
- **Rate limiting is implemented**: 20 AI requests/minute, 100/day per user. This is responsible architecture, not unlimited API call exposure.
- **Role-based access control is server-side**: `requireSpaceRole` middleware enforced on every route — it's not just UI-level permission gates. This is the right way to do it.
- **Supabase JWT verification is fast and local** — no external auth roundtrip per request.
- **GitHub integration is bidirectional**: issues → tasks and tasks → GitHub issues, all confirmed in the agent code.
- **Subtasks are intentionally one level deep**: the task agent instructions explicitly say "nested subtasks are not allowed." This is a design decision, not an omission.
- **OpenRouter is the actual AI backend** — not Google Gemini directly. Any OpenRouter-accessible model can be used. Local AI (Ollama-compatible) is also supported via a user-configurable base URL.

**What a CTO will find missing (honest gaps):**

- **No SOC 2, HIPAA, or GDPR certification or documentation** — this is a hard procurement blocker for any organization above ~30 people with an IT/security review process.
- **No public security page, data flow diagram, or vendor FAQ** — when an engineer asks "where does my data live?" the current answer is "we don't have documentation for that." That answer reads as a red flag regardless of the actual posture.
- **Linear and Jira integrations are UI-only** — no backend code exists. A CTO on a Linear-using team will discover this in the first hour of evaluation.
- **Slack integration is UI-only** — same situation. If the team's primary communication is Slack, KeilHQ's chat is a full replacement motion, not a lightweight integration.
- **`@ai-sdk/google` is installed but unused in agent routing** — Gemini is accessible via OpenRouter but not as a direct SDK integration in the current codebase. Marketing docs saying "Google Gemini (default)" are incorrect.
- **No documented SLA, uptime history, or incident response process**.
- **Dodo Payments for billing** — procurement teams expecting standard Stripe invoicing or purchase orders will need to evaluate Dodo Payments separately.

**Champion trigger:** The CTO becomes a champion when they see the GitHub integration working end-to-end in a real demo — issues to tasks and back — plus the local AI option. These two features specifically remove friction for engineering teams and address the data-ownership concern for AI queries.

**Blocker trigger:** "Tell me where my data lives. Tell me who can access it. Tell me what happens when you have an incident." — Without documented answers to these three questions, any organization with a real IT/security function will stall or reject the evaluation.

**Their ROI:** Engineering time not spent context-switching between GitHub, a project tracker, a doc tool, and a chat tool. The GitHub integration is the primary engineering-specific value proposition; the AI that can answer "what's blocking my team?" with real sprint data is the secondary one.

**Fastest objection:** "We're on Linear. Your Linear integration is placeholder-only. Come back when that's shipped."

**What proof would satisfy them:** A public architecture page or security trust document answering: data residency, subprocessor list, access controls, and a clear answer on "what data does KeilHQ send to third-party AI providers and under what conditions?" The local AI option partially addresses the AI data concern but needs documentation.

**Industry/stage variation:**
- **Small startup CTO (< 20 engineers):** Mostly concerned with cost and setup complexity. The modern stack is familiar and trustworthy. Will evaluate quickly and may be willing to overlook the compliance gap.
- **Mid-market engineering lead (20–100 engineers):** Linear/Jira integration gap is a real blocker if those are in use. GitHub integration is a strong positive signal. Will ask about SOC 2.
- **Enterprise CTO:** Will not proceed without SOC 2 and a formal vendor security review. Not a viable target segment until that work is complete.
