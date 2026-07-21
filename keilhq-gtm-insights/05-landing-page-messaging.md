# KeilHQ — Landing Page Messaging Brief

> This is a briefing document based entirely on confirmed product capabilities from the codebase.
>
> **Before using anything here in actual copy**: verify that each claim reflects the current live product. Never use "7,000+ teams", the Meta/Teamwork testimonials, or "Google Gemini default" — these are not verifiable and should be stripped from all external communications until confirmed.

---

## Headline Options (Confirmed-Only)

**Option 1 — Clarity Engine angle (most differentiated)**
> "The only task management tool where a vague task can't exist."

*Basis*: Objectives and success criteria are database-enforced at task creation. No competitor requires this. This is the sharpest confirmed differentiator.

**Option 2 — AI angle (most contemporary)**
> "An AI assistant that actually reads your tasks, calendar, docs, and code — not a chatbot."

*Basis*: The 4-agent specialist architecture (task, chat, docs, GitHub) has real tool access to workspace data. This is confirmed from the Mastra agent code. The contrast with generic AI (Notion AI, ChatGPT) is real and defensible.

**Option 3 — Consolidation angle (most legible)**
> "Replace your task tracker, docs, chat, and meeting recorder. One workspace."

*Basis*: All four surfaces are confirmed shipped. This is true and verifiable.

**Option 4 — India market angle**
> "Built for teams that work in more than one language. Meeting transcription that actually understands your calls."

*Basis*: Sarvam AI Saaras v3 with Indian language support is confirmed in code. For the Indian market, this is a genuine gap in competing products.

---

## Value Props by Segment (Confirmed Only)

### Agency Owners
- One workspace, one space per client — the architecture was designed for multi-client management
- Meeting decisions become tasks before the call ends — transcription + one-click save to doc
- Clients see task status via a shareable link — no login required for them
- Clarity Engine: no "fix the thing" assignments — every task has a defined outcome before work starts

### Product Managers / Team Leads
- The only task tool that requires a definition of done before work begins — database-enforced
- Ask "what's blocking my sprint?" and get an answer from actual task data, not a generic AI response
- GitHub issues and KeilHQ tasks stay in sync — bidirectional, confirmed in code
- Meeting recordings from sprint planning → tasks, before the meeting ends

### Engineering Leads / Dev Teams
- Connect GitHub: your issues, PRs, and contributors linked to your KeilHQ tasks
- AI reads actual sprint state — confirmed from task agent tool access
- Local AI option: route AI queries to your own Ollama instance, not a third-party API
- Dependency blocking: a task marked done while its blocker is open is surfaced immediately

### Freelancers / Solopreneurs
- Personal mode works without any team — no setup beyond creating an account
- Google Calendar 2-way sync: your schedule and your tasks in one view
- Send clients a shareable link to their project doc — no attachment emails
- Free 30-day trial, no credit card; data export available if you cancel

---

## Objection Handling (Honest Script)

| Objection | Honest response |
|---|---|
| "We're already on Slack — we're not replacing it." | KeilHQ's chat is a full replacement — real-time channels and DMs via Socket.io, threaded replies, and attachments. There's no Slack integration yet — this is a migration, not an add-on. Be upfront about that. |
| "We've tried all-in-one tools and they're always worse at everything." | The block editor is TipTap (Notion-quality). The chat is Socket.io real-time (Slack-equivalent). The AI has real workspace tool access, not a generic LLM wrapper. We've focused on not compromising the core surfaces. |
| "Why not Notion AI?" | Notion AI processes your documents. KeilHQ's AI reads your actual task state — what's overdue, what's blocked, what your calendar looks like — and can create or update tasks directly. They're solving different problems. |
| "The Clarity Engine sounds like extra form-filling." | It's one additional field at task creation. The cost is 60 seconds upfront. The saving is not having the "what does done look like?" conversation mid-sprint. Whether that trade-off is worth it for your team, try it for 30 days and measure. |
| "Do you have SOC 2?" | No. We're currently the right fit for teams below the compliance threshold — agencies, startups, freelancers, and small teams. Enterprise compliance is on our roadmap. If you require SOC 2 today, we're not the right fit yet. |
| "You don't have Linear integration." | Correct — it's on our roadmap. GitHub is fully live and bidirectional today. If your dev team is on Linear and can't work without it, we're not the right fit yet. |
| "No mobile app?" | Correct — the app currently blocks viewports below 1024px. Mobile is in active development. Shared task and doc links work on any device. If mobile access is a requirement today, that's a hard gap to acknowledge. |

---

## What to Show, Not Tell

**The single most powerful demo moment**: In a prospect's own account (not a canned environment), ask the AI "what's blocking my team right now?" — the answer comes from their actual tasks. If the workspace has data, this is the clearest differentiation from every competitor. No competitor can show this.

**The second most powerful moment**: Record a 5-minute meeting inside KeilHQ. Get the transcript with speaker labels. Save it to a Motion doc in one click. Show that the entire workflow happened inside one product before the call ended.

**The third**: Show a public shareable task link opened in an incognito window with no login. The client can see status. No email needed.

---

## CTA Language (Honest Framing)

**Trial-start CTA** (cold visitor):
- *"Start free — no credit card"*
- Not "Book a demo" as primary — this is a self-serve product; adding friction hurts conversion.

**Activation email (D1 after signup)**:
- Subject: *"Try asking the AI something real"*
- Body: "Open KeilHQ and ask the AI: 'What tasks are due this week?' The answer will come from your actual workspace — not a generic response. If you don't have tasks yet, add a few first. The AI is only useful with real data."
- CTA: "Open KeilHQ"
- *Note*: Do not overpromise what the AI will do in an empty workspace — the product's value is data-dependent and honest framing builds trust.

**Upgrade prompt (trial day 20)**:
- Show the user what they've created: X tasks, Y meetings recorded, Z docs. Frame loss as leaving all of that behind.
- Do not lead with features. Lead with what's already been built in their account.
