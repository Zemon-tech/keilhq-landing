// ─── Manual site content ─────────────────────────────────────────────────────
// Keystatic is now used ONLY for Blog + Changelog.
// Everything below is edited directly in code.
// Edit values here to update navbar, footer, homepage, about, brand, FAQ.

import { WAITLIST_URL } from "./waitlist";

export const SITE_SETTINGS = {
  siteName: "KeilHQ",
  tagline: "Everything your team needs to work. Together.",
  logo: "/keilhq.svg",
  defaultSeoTitle: "KeilHQ — Your team's work, all in one place",
  defaultSeoDescription:
    "Docs, projects, CRM, chat, meetings and finance — all connected in one workspace, with AI that works across your team's work.",
  twitterUrl: "https://x.com",
  linkedinUrl: "https://www.linkedin.com/company/keil-hq/",
  githubUrl: "https://github.com",
  contactEmail: "hello@keilhq.in",
} as const;


export const HOMEPAGE = {
  heroTitle: "Everything your team needs to work. Together.",
  heroSubtitle:
    "Docs, projects, CRM, chat, meetings and more — all connected, with AI that works across your workspace.",
  heroLightImage: "/mockups/home-hero-light.png",
  heroDarkImage: "/mockups/home-hero-dark.png",
  heroCtaLabel: "Start free",
  heroCtaLink: WAITLIST_URL,
  heroSecondaryCtaLabel: "See how it works",
  heroSecondaryCtaLink: "#connected-work",
  announcementEnabled: false,
  announcementText: "",
  announcementLink: "",
  featureSections: [
    {
      id: "smart-dashboard",
      badgeText: "Ask → Find → Do",
      title: "Ask anything about your work. Get the verified source.",
      description:
        "KeilHQ connects your tasks, docs, meeting notes, customer records and chat. Ask a question and get an answer grounded in your team's actual work — with a link to exactly where it came from.",
      lightImage: "/mockups/home-dash-light.png",
      darkImage: "/mockups/home-dash-dark.png",
      alt: "KeilHQ dashboard answering a question with linked sources",
    },
    {
      id: "meeting-recorder",
      badgeText: "Meet → Decide → Execute",
      title: "Stop losing what gets decided in meetings.",
      description:
        "Meetings are captured, transcribed and turned into clear action items. KeilHQ drafts the tasks and CRM updates for one-click approval, so decisions become work instead of forgotten notes.",
      lightImage: "/mockups/home-meeting-light.png",
      darkImage: "/mockups/home-meeting-dark.png",
      alt: "KeilHQ turning a meeting transcript into tasks and CRM updates",
    },
    {
      id: "crm",
      badgeText: "Customer → Conversation → Delivery",
      title: "A customer's whole story, in one place.",
      description:
        "Deals, conversations, meetings, projects and tasks for every customer live together. Move a deal forward and the related work follows — so customer context never gets lost between teams.",
      lightImage: "/mockups/home-crm-light.png",
      darkImage: "/mockups/home-crm-dark.png",
      alt: "KeilHQ relational CRM linking a customer to projects and tasks",
    },
    {
      id: "task-management",
      badgeText: "Idea → Project → Task",
      title: "Know exactly what to work on right now.",
      description:
        "Projects and tasks stay connected to the docs, meetings and customers they came from. Dependencies keep work in order and sync with your calendar, so the next step is always clear.",
      lightImage: "/mockups/home-project-light.png",
      darkImage: "/mockups/home-project-dark.png",
      alt: "KeilHQ projects and tasks with dependencies and calendar sync",
    },
    {
      id: "docs-notes",
      badgeText: "Write → Link → Reuse",
      title: "Docs that stay connected to the work.",
      description:
        "A clean block editor for specs, SOPs and playbooks. Pages link natively to the tasks and customer records they describe, and stay searchable across your whole workspace.",
      lightImage: "/mockups/home-motion-light.png",
      darkImage: "/mockups/home-motion-dark.png",
      alt: "KeilHQ Motion docs linked to tasks and CRM records",
    },
    {
      id: "finance",
      badgeText: "Work → Invoice → Reconcile",
      title: "Finance connected to the work you deliver.",
      description:
        "Turn delivered project milestones into invoices, keep ledgers in order and reconcile bank statements — all linked to the projects and customers the money relates to.",
      lightImage: "/mockups/home-finance-light.png",
      darkImage: "/mockups/home-finance-dark.png",
      alt: "KeilHQ finance connecting invoices to delivered project work",
    },
  ],
  finalCtaTitle: "Bring your team's work together.",
  finalCtaDescription: "",
  finalCtaButtonLabel: "Start free",
  finalCtaButtonLink: WAITLIST_URL,
  finalCtaSecondaryButtonLabel: "Talk to sales",
  finalCtaSecondaryButtonLink: "mailto:hello@keilhq.in",
  finalCtaTrustText: "",
} as const;

export const FAQ_SECTION = {
  eyebrow: "Common Questions",
  title: "Frequently Asked Questions",
  description:
    "Everything you need to know about KeilHQ, our pricing, and how we handle your data.",
  faqs: [
    {
      question: "What makes KeilHQ different from other tools?",
      answer:
        "KeilHQ unifies tasks, docs, chat, and your calendar in one seamless workspace. Instead of switching between five different apps, everything is connected. Plus, our built-in AI reads your actual data to help prioritize work and unblock your team.",
    },
    {
      question: "Do I need a credit card to sign up?",
      answer:
        "No! You can get started with KeilHQ for completely free without a credit card. We offer a generous free plan perfect for individuals and small teams to experience the unified workspace.",
    },
    {
      question: "Can I import my existing data from Notion or Jira?",
      answer:
        "Yes, absolutely. We provide seamless one-click importers for major platforms like Notion, Jira, Asana, and Linear so you can bring your context over without missing a beat.",
    },
    {
      question: "How does the AI Assistant actually help?",
      answer:
        "Unlike generic AI chat bots, KeilHQ's AI is deeply integrated into your workflow. It cross-references your calendar, scans your assigned tasks, and identifies blockers automatically so you always know exactly what to tackle next.",
    },
    {
      question: "Is my team's data secure?",
      answer:
        "Security is our top priority. All data is encrypted in transit and at rest using enterprise-grade standards. We also ensure your private company data is never used to train public AI models.",
    },
  ],
} as const;
