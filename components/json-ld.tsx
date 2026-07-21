export function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "KeilHQ",
    "legalName": "KeilHQ Inc.",
    "alternateName": [
      "Keil",
      "Keil HQ",
      "KeilHQ",
      "Keil App",
      "Keil Workspace",
      "Keil Land",
      "Keil Platform"
    ],
    "url": "https://keilhq.com",
    "logo": "https://keilhq.com/keilhq.svg",
    "description": "KeilHQ is a work management platform combining database-enforced task clarity, real-time team chat, block-based documents, calendar sync, meeting transcription, and multi-agent AI.",
    "sameAs": [
      "https://twitter.com/keilhq",
      "https://github.com/keilhq"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "KeilHQ",
    "alternateName": [
      "Keil",
      "Keil HQ",
      "Keil App",
      "Keil Workspace"
    ],
    "url": "https://keilhq.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://keilhq.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const softwareAppSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "KeilHQ",
    "alternateName": [
      "Keil Workspace",
      "Keil App",
      "Keil HQ"
    ],
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, macOS, Windows, Linux",
    "description": "Desktop-first work management workspace featuring Clarity Engine task tracking, TipTap block documentation, real-time Socket.io chat, Sarvam AI/ElevenLabs meeting transcription, and Mastra multi-agent AI.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Clarity Engine task management with database-enforced Objectives and Success Criteria",
      "Real-time team chat with channels, direct messages, and threaded replies",
      "Motion block-based document editor with TipTap and Socket.io collaboration",
      "Google Calendar 2-way sync with task slot management",
      "In-browser meeting recording with Sarvam AI and ElevenLabs transcription",
      "Mastra multi-agent AI assistant for workspace tasks, chat, docs, and GitHub"
    ]
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
      />
    </>
  );
}
