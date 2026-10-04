/* ─── Global JSON-LD structured data ─────────────────────────────────────────
   Injected into <head> on every page via app/(main)/layout.tsx.

   Schemas included:
   1. Organization        — entity disambiguation + Knowledge Panel signals
   2. WebSite             — brand name, SearchAction, Speakable
   3. SiteNavigationElement — explicit nav structure → Google sitelinks signal
   4. SoftwareApplication — rich results eligibility for app queries

   Docs:
   https://developers.google.com/search/docs/appearance/structured-data/organization
   https://developers.google.com/search/docs/appearance/structured-data/software-app
   https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
*/

const BASE_URL = "https://keilhq.in";

export function JsonLd() {
  /* ── 1. Organization ─────────────────────────────────────────────────── */
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    name: "KeilHQ",
    legalName: "KeilHQ Inc.",
    alternateName: ["Keil", "Keil HQ", "KeilHQ", "Keil App", "Keil Workspace", "Keil Platform"],
    url: BASE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${BASE_URL}/keilhq.svg`,
      width: 48,
      height: 48,
    },
    image: `${BASE_URL}/brand/keilhq-rise.png`,
    description:
      "KeilHQ is an AI-native work platform combining task management, real-time chat, block-based docs, calendar sync, meeting transcription, CRM, finance, and multi-agent AI — all in one workspace.",
    slogan: "Human Clarity",
    foundingDate: "2025",
    // areaServed and knowsAbout signal topical authority for Google Knowledge
    // Panel and AI answer engines — per AIO/AEO best practices
    areaServed: "Worldwide",
    knowsAbout: [
      "AI-native project management",
      "task management software",
      "team collaboration tools",
      "meeting transcription AI",
      "work management platforms",
      "multi-agent AI systems",
      "product operations",
      "CRM software",
      "business finance and bookkeeping",
      "real-time team communication",
    ],
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: 15,
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@keilhq.in",
      contactType: "customer support",
      availableLanguage: ["English"],
    },
    sameAs: [
      "https://x.com/keilhq",
      "https://www.linkedin.com/company/keil-hq/",
      "https://www.youtube.com/@keilhqglobal",
      "https://github.com/keilhq",
    ],
  };

  /* ── 2. WebSite — SearchAction + Speakable ───────────────────────────── */
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    name: "KeilHQ",
    alternateName: ["Keil", "Keil HQ", "Keil App", "Keil Workspace"],
    url: BASE_URL,
    description:
      "KeilHQ brings docs, projects, CRM, chat, meetings and finance into one connected workspace, with AI that works across your team's work.",
    publisher: { "@id": `${BASE_URL}/#organization` },
    inLanguage: "en-US",
    // Sitelinks searchbox — renders a search input under the brand listing
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/support?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
    // Speakable on site level — points AI Overviews / voice search to hero content
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "[data-speakable='hero']"],
    },
  };

  /* ── 3. SiteNavigationElement — explicit nav signal for Google sitelinks */
  const siteNavigationSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${BASE_URL}/#site-navigation`,
    name: "KeilHQ Site Navigation",
    itemListElement: [
      {
        "@type": "SiteNavigationElement",
        position: 1,
        name: "Features",
        description:
          "Tasks, docs, chat, meetings, CRM, and finance — every KeilHQ feature in one place.",
        url: `${BASE_URL}/features`,
      },
      {
        "@type": "SiteNavigationElement",
        position: 2,
        name: "Pricing",
        description:
          "Simple, transparent pricing for teams of all sizes. Free to start.",
        url: `${BASE_URL}/pricing`,
      },
      {
        "@type": "SiteNavigationElement",
        position: 3,
        name: "About",
        description:
          "How KeilHQ is building the next era of work management — our mission, team, and values.",
        url: `${BASE_URL}/about`,
      },
      {
        "@type": "SiteNavigationElement",
        position: 4,
        name: "Now — Changelog & Blog",
        description:
          "Product updates, changelog, team stories, and press — everything happening at KeilHQ.",
        url: `${BASE_URL}/now`,
      },
      {
        "@type": "SiteNavigationElement",
        position: 5,
        name: "Support & FAQ",
        description:
          "Help center, FAQs, and guides for every KeilHQ feature. Contact hello@keilhq.in.",
        url: `${BASE_URL}/support`,
      },
      {
        "@type": "SiteNavigationElement",
        position: 6,
        name: "Task Management",
        description:
          "Clarity Engine — database-enforced task tracking with objectives and success criteria.",
        url: `${BASE_URL}/features/task-management`,
      },
      {
        "@type": "SiteNavigationElement",
        position: 7,
        name: "Team Chat",
        description:
          "Real-time team chat with channels, DMs, and threaded replies inside your workspace.",
        url: `${BASE_URL}/features/team-chat`,
      },
      {
        "@type": "SiteNavigationElement",
        position: 8,
        name: "Meeting Recorder",
        description:
          "In-browser meeting recording with AI transcription and automated action items.",
        url: `${BASE_URL}/features/meeting-recorder`,
      },
    ],
  };

  /* ── 4. SoftwareApplication ──────────────────────────────────────────── */
  const softwareAppSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${BASE_URL}/#software`,
    name: "KeilHQ",
    alternateName: ["Keil Workspace", "Keil App", "Keil HQ"],
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Project Management Software",
    operatingSystem: "Web, macOS, Windows, Linux",
    url: BASE_URL,
    description:
      "AI-native workspace with Clarity Engine task management, TipTap block docs, real-time Socket.io chat, Sarvam AI meeting transcription, relational CRM, bookkeeping, and Mastra multi-agent AI.",
    keywords:
      "task management, AI workspace, team collaboration, meeting transcription, project management, CRM, docs, chat, calendar sync, multi-agent AI",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "Free to start, paid plans for growing teams.",
    },
    publisher: { "@id": `${BASE_URL}/#organization` },
    screenshot: [
      {
        "@type": "ImageObject",
        url: `${BASE_URL}/brand/keilhq-rise.png`,
        caption: "KeilHQ unified workspace dashboard",
      },
    ],
    featureList: [
      "Clarity Engine task management with database-enforced Objectives and Success Criteria",
      "Real-time team chat with channels, direct messages, and threaded replies",
      "Motion block-based document editor with TipTap and Socket.io collaboration",
      "Google Calendar 2-way sync with intelligent task slot management",
      "In-browser meeting recording with Sarvam AI and ElevenLabs transcription",
      "Mastra multi-agent AI assistant for workspace tasks, chat, docs, and GitHub",
      "Relational CRM with omnichannel deal intelligence and pipeline management",
      "Finance and bookkeeping with multi-book accounting and budget tracking",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(siteNavigationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
      />
    </>
  );
}
