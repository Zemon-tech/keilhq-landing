# End User (Day-to-Day) View of KeilHQ

**First reaction split by current tool stack:**

**If they're on Notion**: Motion (KeilHQ's doc editor) is TipTap block-based editing — the learning curve is minimal. They'll recognise the UI pattern within minutes. The difference they'll notice: Motion docs live inside the same workspace as their tasks and chat. Links between a doc and a task are real, not copy-pasted URLs.

**If they're on Slack**: KeilHQ's chat is real-time via Socket.io, group channels and DMs, with unread badges, mentions, and threaded replies (reply_to field confirmed in schema). The experience is functionally equivalent. The difference: a message in KeilHQ can be turned into a task directly, without leaving the conversation.

**If they're on Asana/Linear**: Kanban, Gantt, priorities, assignees, dependencies — all confirmed from code. The additional friction is the Clarity Engine: every task requires Objectives and Success Criteria. This will feel like extra work for the first week. It is intentional friction that is confirmed at the database level — you cannot skip it. The long-term payoff (no more "what does done look like?" conversations) is real but takes a few cycles to experience.

**If they're on a mobile device**: The app shows a block screen. The message in the component code is: *"Keil is currently built for desktop viewports. The mobile edition is in active development."* This is a hard wall. Shared task and doc links are the exception — those work on any device.

---

## What the End User Will Actually Experience in Week 1

**Smart Dashboard** — The dashboard auto-surfaces work into four buckets: Immediate, Today, Blocked, Backlog. This is derived from real task data (due dates, priority levels, dependency state). A user who connects their Google Calendar and has tasks with due dates will see a useful dashboard in day one. A user with no tasks yet will see an empty state.

**Keyboard shortcuts** — A comprehensive set of shortcuts is implemented (`⌘G` dashboard, `⌘Q` tasks, `⌘P` docs, `⌘J` chat, `⌘M` meeting, `⌘,` settings, etc.). This signals the product was designed for people who live in their keyboard — power users respond positively to this.

**Meeting transcription** — Recording a meeting and getting a transcript with speaker labels (Speaker 0, Speaker 1, etc.) before the end of the call is a real, confirmed flow. The one-click save to Motion (the doc editor) is also confirmed via the `save-to-motion` route. This is a genuine wow moment for the first-time user who has been manually taking meeting notes.

**AI assistant** — The AI will answer questions about the user's actual tasks, calendar, and docs. It will not answer with invented information — the agent instructions explicitly state "Always call tools for real data — never fabricate." A user asking "what's due this week?" will get an answer grounded in their actual task data, not a generic response. The rate limit (20/minute, 100/day) means it's not infinitely chatty, but is more than sufficient for normal daily use.

---

## What Will Frustrate the End User

**The Clarity Engine on day one**: Being asked for objectives and success criteria before you can create a quick task is friction. The correct frame is "this is a process guardrail, not a form to fill in" — but that reframe takes a few uses. Some users will find workarounds (minimal criteria, copy-paste, etc.). This is expected and does not break the product.

**No mobile**: If they work from their phone at all, they'll discover this immediately. There's no workaround for the main app. Shared links work on mobile, which means clients they share with will have a better mobile experience than they do.

**AI warm-up period**: The AI is most useful after the user has tasks, docs, and calendar events in the system. A new user on day one with an empty workspace will get limited value from the AI. Value increases linearly as data accumulates — set this expectation upfront in onboarding.

**Provider quirks in transcription**: The Sarvam AI batch job has a polling loop (up to a max number of polls). For short recordings, the transcription should complete quickly. For long recordings, there may be a wait. ElevenLabs is synchronous but has a file size limit in practice. Users who record very long meetings (90+ minutes) may experience variability.

---

## Their ROI (Short Horizon)

- Does the Smart Dashboard tell me what to work on this morning? — Yes, if I have tasks with due dates and priorities set.
- Does the meeting transcript mean I stop manually writing notes during client calls? — Yes, that's the confirmed flow.
- Can I find anything across tasks/docs/chat in one search? — Global search exists across all content types (confirmed in routes and frontend component `GlobalSearchDialog.tsx`).
- Does the AI actually know what's on my plate? — Yes, but not until you have real data in the workspace.

**Fastest objection**: "I already have a workflow that works. I don't want to learn a new tool and migrate everything." — Counter: personal mode works without a team and without migration. Start with your own calendar and tasks. If you don't see value in 30 days, no cost and nothing to migrate back — your data export is available even on a cancelled account (confirmed from billing routes).
