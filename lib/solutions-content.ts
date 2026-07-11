export const caseStudyStats = [
  {
    value: "59 min",
    label: "lost daily searching for information across tools¹",
  },
  {
    value: "60%",
    label: 'of knowledge work is "work about work" — chasing updates, switching apps²',
  },
  {
    value: "89",
    label: "average number of apps in use at a company³",
  },
] as const;

export const caseStudyIntro = {
  eyebrow: "Case Studies",
  title: "Built for how you work, proven by how it's used",
  description:
    "Four teams, four different kinds of sprawl. Same underlying problem: the context that matters lives in a dozen tools that don't talk to each other.",
  disclaimer:
    "The scenarios below are illustrative — composed from documented industry patterns and the workflows we see across agencies, startups, dev teams, and freelancers. They're built to show how KeilHQ behaves, not to cite a specific named client.",
};

export interface SolutionContent {
  id: string;
  eyebrow: string;
  title: string;
  persona: string;
  sprawl: {
    heading: string;
    bullets: string[];
    research: string;
  };
  withKeilhq: {
    heading: string;
    intro: string;
    benefits: string[];
    quote: string;
    attribution: string;
  };
}

export const solutions: SolutionContent[] = [
  {
    id: "agencies",
    eyebrow: "Solutions · Agencies",
    title: "Managing five clients without losing the thread",
    persona: "Ops lead, 12-person digital agency, three live retainers and two project sprints",
    sprawl: {
      heading: "The sprawl",
      bullets: [
        "Client briefs in Notion, scattered across five different workspaces",
        "Status updates in Slack, one channel per client",
        "Deliverables tracked in Jira for two clients, spreadsheets for the rest",
        "Deadlines confirmed over email and never copied anywhere else",
      ],
      research:
        "Agencies report that waiting on client responses and reconciling status across tools are consistently ranked among their top operational pain points — and unintegrated tools mean the same update gets re-confirmed in three places before it's trusted.⁴",
    },
    withKeilhq: {
      heading: "With KeilHQ",
      intro:
        "KeilHQ pulls live context from each client's Slack channel, Notion brief, and task tracker into one organizational memory layer. Instead of hunting for what changed, the ops lead opens KeilHQ and gets surfaced what needs attention.",
      benefits: [
        "One view across all five client workstreams instead of five separate logins",
        "Deadline conflicts surfaced automatically before they become fire drills",
        "New account managers ramp into a client's context in hours, not weeks",
      ],
      quote:
        "I stopped reconstructing context every Monday. The thing I used to spend ninety minutes piecing together, I just get told.",
      attribution: "Representative ops-lead scenario",
    },
  },
  {
    id: "startups",
    eyebrow: "Solutions · Startups",
    title: "The speed of a startup, without losing the thread",
    persona: "Founder, 6-person early-stage startup, pre-Series A",
    sprawl: {
      heading: "The sprawl",
      bullets: [
        "Product decisions made in Google Meet calls with no consistent notes",
        "Roadmap living half in Notion, half in a founder's head",
        "Investor updates drafted from memory instead of from what actually shipped",
        "Slack threads holding decisions that never make it into docs",
      ],
      research:
        'Knowledge workers spend an average of 60% of their time on "work about work" — chasing updates, attending status meetings, and switching tools — leaving a small early team with even less room to also play archivist.²',
    },
    withKeilhq: {
      heading: "With KeilHQ",
      intro:
        "Most AI tools wait for a question. KeilHQ doesn't. It stitches together calendar, Meet transcripts, Slack, and docs into a live organizational memory layer — so the moment something changes, KeilHQ already knows, and surfaces it before anyone has to ask.",
      benefits: [
        'Decisions made on a call are captured without anyone owning "notes"',
        "Investor updates draft themselves from what actually happened that month, not from memory",
        "New hires get caught up without three onboarding calls",
      ],
      quote:
        "Most tools answer what we ask. KeilHQ tells us what we needed to know before we knew to ask.",
      attribution: "Representative founder scenario",
    },
  },
  {
    id: "dev-teams",
    eyebrow: "Solutions · Dev Teams",
    title: "Sprint planning that starts already knowing what you'd otherwise spend an hour finding",
    persona: "Engineering lead, 8-person distributed dev team",
    sprawl: {
      heading: "The sprawl",
      bullets: [
        "Tickets in Jira, technical decisions buried in Slack threads",
        "Dependencies tracked nowhere — discovered the hard way mid-sprint",
        "Design specs in Docs, API contracts in Sheets, none cross-linked",
        "Standups spent re-explaining context that was discussed last week",
      ],
      research:
        'Engineering teams report that strategic decisions get lost across chat threads and siloed docs — so finding "the why behind the what" can take hours, and tool-switching alone is estimated to cost teams over 44 hours per employee per year.',
    },
    withKeilhq: {
      heading: "With KeilHQ",
      intro:
        "Most tools wait for someone to go looking — open Jira, dig through Slack, hope the right doc surfaces. KeilHQ doesn't wait. It already links the ticket to the thread where the decision was made and the spec it depends on, so the blocker shows up before sprint planning starts, not mid-sprint when it's expensive.",
      benefits: [
        "Dependencies between tickets surfaced before sprint commitment, not after",
        '"Why did we decide this" answered automatically by linked context, not by memory',
        "Standups spend time on what's next, not on re-explaining what already happened",
        "New engineers inherit the reasoning behind a ticket, not just the ticket",
      ],
      quote:
        "Jira told us what was due. It never told us why. KeilHQ is the first tool that surfaces the why before we even ask.",
      attribution: "Representative engineering-lead scenario",
    },
  },
  {
    id: "enterprise",
    eyebrow: "Solutions · Enterprise",
    title: "An AI product system for modern enterprises",
    persona: "VP of Product / Head of Engineering, 100+ seats, enterprise infrastructure",
    sprawl: {
      heading: "The sprawl",
      bullets: [
        "Multiple Slack workspaces and fragmented task tracking across product lines",
        "Context and decisions buried in siloed docs and private channels",
        "Legacy trackers failing to align teams and emerging AI coding agents",
        "Security compliance gaps with no unified audit trails across platforms",
      ],
      research:
        "Enterprises report that lack of unified context is the primary blocker to safe and effective AI agent adoption — leaving EPD teams struggling to coordinate human and machine workflows.⁹",
    },
    withKeilhq: {
      heading: "With KeilHQ",
      intro:
        "KeilHQ provides a shared product development system where teams and agents work from the same context, priorities, and structure. Our enterprise-grade platform links every Slack thread, Jira ticket, and Notion brief to ensure unified operations.",
      benefits: [
        "Centralised organizational memory layer spanning teams and agents",
        "SSO/SAML, advanced RBAC, and SOC 2 compliance built-in",
        "99.9% uptime SLA and dedicated customer success from day one",
      ],
      quote:
        "We migrated 300 engineers off Jira in six weeks. KeilHQ gave us a single, clean audit trail across all human and AI agent actions.",
      attribution: "Representative VP of Product scenario",
    },
  },
];

export const pricingComparison = {
  eyebrow: "Why it's priced differently",
  title: "Enterprise context tools were built for enterprise budgets. KeilHQ wasn't.",
  intro:
    'Most AI work-context platforms price for headcount, not for the agency, dev team, or freelancer actually using them. The gap between "enterprise AI search" pricing and what a 5-to-15-person team can justify is the gap KeilHQ is built to close.',
  rows: [
    {
      platform: "Glean⁷",
      listPrice: "~$50+ /user/mo + ~$15/mo for AI features",
      smallTeamCost:
        "~100-seat minimum (~$60K/yr) — built for enterprise headcount, not a 10-person team",
      highlight: false,
    },
    {
      platform: "Microsoft 365 Copilot⁸",
      listPrice: "~$30 /user/mo",
      smallTeamCost:
        "Stacked on top of an existing M365 license; doesn't reach Slack, Jira, or Notion by default",
      highlight: false,
    },
    {
      platform: "KeilHQ",
      listPrice: "Priced for teams of 5–20, not enterprise floors",
      smallTeamCost:
        "Built to be affordable enough that a freelancer or a 6-person startup can justify it on day one — YC-style pricing, not enterprise procurement",
      highlight: true,
    },
  ],
};
