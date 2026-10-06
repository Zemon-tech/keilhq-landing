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

export const NAVIGATION = {
  links: [
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Now", href: "/now" },
    { label: "About", href: "/about" },
  ],
  cta: {
    label: "Start Free",
    href: WAITLIST_URL,
  },
} as const;

export const FOOTER = {
  columns: [
    {
      title: "Features",
      links: [
        { label: "Dashboard", href: "/features/smart-dashboard" },
        { label: "Task Management", href: "/features/task-management" },
        { label: "Docs & Notes", href: "/features/docs-notes" },
        { label: "Team Chat", href: "/features/team-chat" },
        { label: "Meeting Notes", href: "/features/meeting-recorder" },
        { label: "Relational CRM", href: "/features/crm" },
        { label: "Finance & Bookkeeping", href: "/features/finance" },
      ],
    },
    {
      title: "Product",
      links: [
        { label: "Pricing", href: "/pricing" },
        { label: "Now", href: "/now" },
        { label: "Changelog", href: "/now?tab=changelog" },
        { label: "Press", href: "/now?tab=press" },
        { label: "Support & FAQ", href: "/support" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About us", href: "/about" },
        { label: "Brand", href: "/brand" },
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
      ],
    },
  ],
  copyright: "KeilHQ. All rights reserved. © {year}",
  twitterUrl: "https://x.com/keilhq",
  instagramUrl: "https://www.instagram.com/zemonindia",
  linkedinUrl: "https://www.linkedin.com/company/keil-hq/",
  youtubeUrl: "https://www.youtube.com/@keilhqglobal",
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

export const LOVED_BY = {
  title: "Teams that run on connected work.",
  stat1Label: "",
  stat1Value: "",
  stat2Label: "",
  stat2Value: "",
  testimonials: [
    {
      quote:
        "A client mentioned something from an intake call six months earlier. We didn't have to scramble or remember it — KeilHQ's meeting intelligence and CRM surfaced the exact note. That wins renewals.",
      authorName: "Sagar Sahu",
      authorRole: "Program Manager, AIC GGSIPU",
      authorAvatar:
        "https://7f0c3c9283690942f12072675bea02f1.cdn.bubble.io/cdn-cgi/image/w=384,h=373,f=auto,dpr=2,fit=contain/f1780921371029x651737872941958000/51397r73ev%20%281%29.png",
      isHighlighted: false,
    },
    {
      quote:
        "The meeting intelligence and shared context layer alone justified the switch. We replaced 5 disconnected SaaS subscriptions and context actually flows between sales, delivery, and leadership.",
      authorName: "Sahil",
      authorRole: "CEO & Founder, Qeno AI",
      authorAvatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRcidjK4k8HMKHeSUCaK9WSLowqwCDTiYoOtrJGljoLQ8A2VWmGRZr8q23&s=10",
      isHighlighted: true,
    },
  ],
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

export const ABOUT_PAGE = {
  heroTitle: "Building tools for the next era of product development",
  heroSubtitle:
    "AI is fundamentally changing how products get built. We are shaping what comes next.",
  editorialTitle: "A new species of product tool",
  editorialLead:
    "Software development is at an inflection point. Artificial intelligence is fundamentally reshaping how products are built.",
  editorialParagraphs: [
    "AI increases what teams can create, but it also raises the bar for clarity and coordination. At KeilHQ, we are building the tools for this new era of product development. A purpose-built system where teams and agents operate together in a shared, structured environment.",
    "Founded in 2025, KeilHQ has become the tool of choice for thousands of fast-growing teams to plan, build, and ship their products.",
    "Our team is distributed across North America and India, and we're continuing to grow internationally. What unites us is relentless focus, fast execution, and a deep care for software craftsmanship.",
  ],
  teamTitle: "Meet the team behind KeilHQ",
  teamMembers: [
    { name: "Shivang Kandoi", role: "Co Founder and CEO", avatar: "https://zemonhouseofbuilders.in/shivang.png" },
    { name: "Satyajit Jena", role: "Co Founder and CTO", avatar: "https://zemonhouseofbuilders.in/satyajit.png" },
    { name: "Harshit Kundra", role: "COO", avatar: "https://zemonhouseofbuilders.in/harshit.png" },
    {
      name: "Shivansh Tiwari",
      role: "Software Engineer",
      avatar: "/shivansh.png",
    },
  ],
  investorsTitle: "Backed by",
  investors: [
    {
      firmName: "AIC GGSIPU",
      logo: "https://7f0c3c9283690942f12072675bea02f1.cdn.bubble.io/cdn-cgi/image/w=96,h=92,f=auto,dpr=2,fit=contain/f1707545874849x730155311730143000/WhatsApp_Image_2024-02-10_at_11.17.23_AM-removebg-preview.png",
      partnerName: "Heman Srivastav",
      partnerRole: "Ceo of AIC GGSIPU",
    },
    {
      firmName: "AIC GGSIPU",
      logo: "https://7f0c3c9283690942f12072675bea02f1.cdn.bubble.io/cdn-cgi/image/w=96,h=92,f=auto,dpr=2,fit=contain/f1707545874849x730155311730143000/WhatsApp_Image_2024-02-10_at_11.17.23_AM-removebg-preview.png",
      partnerName: "Sagar Sahu",
      partnerRole: "Program Manager at AIC GGSIPU",
    },
  ],
  mentorsTitle: "Advisors",
  mentors: [
    {
      name: "Hemant Srivastav",
      role: "CEO, AIC GGSIPU",
      avatar:
        "https://7f0c3c9283690942f12072675bea02f1.cdn.bubble.io/cdn-cgi/image/w=384,h=373,f=auto,dpr=2,fit=contain/f1706696421230x555922538285202400/Hemant%20%282%29.jpeg",
    },
    {
      name: "Sagar Sahu",
      role: "Program Manager, AIC GGSIPU",
      avatar:
        "https://7f0c3c9283690942f12072675bea02f1.cdn.bubble.io/cdn-cgi/image/w=384,h=373,f=auto,dpr=2,fit=contain/f1780921371029x651737872941958000/51397r73ev%20%281%29.png",
    },
    {
      name: "Kuldeep Anand",
      role: "Visomni",
      avatar: "https://media.contra.com/image/upload/h_1000,w_1000/mwsscqlrd7fbjscoig49.avif",
    },
    {
      name: "Raman Tehlan",
      role: "Vxplain",
      avatar: "https://ramantehlan.github.io/images/me.png",
    },
  ],
} as const;

export const BRAND_PAGE = {
  heroTitle: "A New Identity for KeilHQ",
  heroImage: "/brand/keilhq-rise.png",
  heroIntro: [
    "KeilHQ is dedicated to developing world-class software where ideas become clear — with the depth, rigor, and ambition required to lead at the frontier. What excites us is the opportunity to build tools that reflect how teams actually think, plan, reason, and solve problems.",
    "As our work has evolved, our brand identity has evolved with it. The update reflects both our mission and the quiet, focused KeilHQ we are building today. Walking into KeilHQ should feel like walking into an old library, a quiet monastery, an observatory, an architect's office, or a courtyard after rain — lowering your heart rate so the work inside can breathe.",
    "Most software stimulates: notifications, glow, badges, counters, alerts, gradients, and noise. Everything screams for attention. KeilHQ whispers. The interface should almost disappear — because the hero is never the software. The hero is the work the person is doing inside it.",
  ],
  physicalVisionTitle: "Our Vision in Physical Spaces",
  physicalVisionIntro: [
    "Physical permanence inspires our digital structure. In outdoor architecture and print campaigns, KeilHQ expresses itself through restraint and quiet confidence rather than high-decibel marketing pitch decks.",
    "When we say \"Built for Teams That Ship,\" we mean creating a workspace that respects human attention. A building constructed with quarried stone and solid timber doesn't scream for your gaze; it supports your presence. Our brand identity in physical spaces reflects that exact same durability and quiet honor.",
  ],
  physicalVisionImage: "/brand/keilhq-billboard.png",
  designPrinciplesTitle: "The Emotional DNA & Design Principles",
  designPrinciplesIntro: [
    "On open, the user should feel Arrival — not excitement. The feeling of opening a fresh notebook, walking into a quiet library, putting on noise-cancelling headphones, or sitting beside a still lake. This is the emotional bar for every onboarding moment, empty state, and first-load surface.",
    "Knowledge, done well, isn't fast — it's careful. KeilHQ treats the pursuit of understanding as something deliberate: quiet reading, patient thinking, work that is allowed to breathe. That patience is the emotional DNA behind every design decision — calm over stimulation, substance over spectacle.",
    "Our design principles dictate that nothing starts or stops instantly. Reference natural motion: leaves, water, clouds, breathing. One orchestrated moment per flow beats many scattered micro-animations. Motion should clarify spatial relationships, never perform.",
  ],
  designPrinciplesImage: "/brand/keilhq-ad-1.png",
  enterpriseIdentityTitle: "Enterprise Structural Harmony",
  enterpriseIdentityIntro: [
    "As organizations grow, clutter multiplies. KeilHQ extends its material palette into enterprise surfaces by introducing Jaipur Sandstone (#A98563) and Limestone (#DDD7CE) alongside Warm Ink (#171514) to establish quiet structural harmony across large-scale teams.",
    "Enterprise software often confuses complexity with authority. In KeilHQ, authority is earned through clarity, archival permanence, and uncompromised speed. Whether reviewing security posture, audit logs, or multi-team project streams, the interface maintains an unwavering editorial calm.",
  ],
  enterpriseIdentityImage: "/brand/keilhq-enterprise.png",
} as const;
