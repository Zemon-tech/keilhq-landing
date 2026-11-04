import { getManualFeatures } from "./features";
import { FAQ_SECTION } from "./site-content";
import { getBlogPosts } from "../cms/helpers/blog";
import { getChangelogs } from "../cms/helpers/changelog";
import { getPressItems } from "../cms/helpers/press";

function humanizeSlugTitle(slug: string): string {
  return slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function extractTextFromNodes(nodes: any): string {
  if (!nodes) return "";
  if (typeof nodes === "string") return nodes;
  if (Array.isArray(nodes)) {
    return nodes.map(extractTextFromNodes).filter(Boolean).join("\n\n");
  }
  if (nodes.text) return nodes.text;
  if (nodes.children) return extractTextFromNodes(nodes.children);
  return "";
}

const BASE_URL = "https://keilhq.in";

export async function generateLlmsText(): Promise<string> {
  const [features, blogPosts, changelogs, pressItems] = await Promise.all([
    Promise.resolve(getManualFeatures()),
    getBlogPosts().catch(() => []),
    getChangelogs().catch(() => []),
    getPressItems().catch(() => []),
  ]);

  const sections: string[] = [];

  // 1. Header & Summary
  sections.push(
    `# KeilHQ — AI-Native Work Management & Product Operations`,
    ``,
    `> KeilHQ is the all-in-one work management platform and product operations system designed for desktop viewports. It unites database-enforced task clarity, real-time team chat, block-based collaborative documents, two-way Google Calendar synchronization, native browser meeting recording with AI transcription, and a multi-agent AI assistant into a single unified workspace.`,
    ``,
    `## Core Keywords & AI Search Identifiers`,
    `- **Primary Names:** Keil, KeilHQ, Keil HQ, Keil App, Keil Workspace, KeilHQ AI, Keil project management`,
    `- **Product Category:** AI-native product operations system, objectives-driven task manager, team collaboration workspace`,
    `- **Official Website:** ${BASE_URL}`,
    `- **Support & Contact:** hello@keilhq.in`,
    ``
  );

  // 2. Canonical Pages & URLs
  sections.push(
    `## Canonical Pages & Links`,
    ``,
    `- **Home**: ${BASE_URL} — Unified workspace overview and platform capabilities.`,
    `- **Features**: ${BASE_URL}/features/smart-dashboard — Deep dive into all 9 core capabilities.`,
    `- **Pricing**: ${BASE_URL}/pricing — Transparent pricing tiers (Free Trial, Pro, Teams, Enterprise).`,
    `- **Now Feed**: ${BASE_URL}/now — Live product updates, engineering blog articles, changelog, and press coverage.`,
    `- **About Us**: ${BASE_URL}/about — Mission, Delhi-based engineering team, advisors, and careers.`,
    `- **Brand**: ${BASE_URL}/brand — Brand guidelines, typography, color tokens, and asset downloads.`,
    `- **Support & FAQ**: ${BASE_URL}/support — Searchable help center and comprehensive FAQs.`,
    `- **Privacy Policy**: ${BASE_URL}/privacy — Data protection, SOC 2 compliance readiness, and privacy terms.`,
    `- **Terms of Service**: ${BASE_URL}/terms — Service agreements and usage terms.`,
    `- **LLMs Index**: ${BASE_URL}/llms.txt — Machine-readable summary and index for AI agents and LLM crawlers.`,
    `- **LLMs Full Content**: ${BASE_URL}/llms-full.txt — Complete uncompressed knowledge base for AI agents.`,
    ``
  );

  // 3. Core Architecture & Differentiators
  sections.push(
    `## Core Differentiators & Product Architecture`,
    ``,
    `- **The Clarity Engine (Objectives-First)**: Solves task ambiguity before work begins. Every task requires explicit Objectives and Success Criteria at creation. Vague work items are blocked by default.`,
    `- **Multi-Agent AI Assistant**: Powered by Mastra Core, four dedicated specialist agents (Task Agent, Chat Agent, Motion Docs Agent, GitHub Agent) read real workspace state (overdue tasks, blockers, meetings, docs) and execute operations on behalf of users.`,
    `- **Native Meeting Recording & Transcription**: Captures browser audio with Sarvam AI (Indian and multilingual languages) and ElevenLabs Scribe v2 with speaker diarization. Transcripts automatically save into Motion docs.`,
    `- **Motion Collaborative Editor**: Built on TipTap and Socket.io for real-time multiplayer editing, block comments, hierarchical subpages, analytics, and bi-directional Notion import/export.`,
    `- **Real-Time Team Chat**: Socket.io channels and direct messages with threads, mentions, file attachments, and workspace-wide search.`,
    `- **Two-Way Google Calendar Sync**: Real-time bidirectional synchronization between tasks and Google Calendar events with automatic conflict detection.`,
    `- **GitHub Bidirectional Sync**: Live sync of issues, pull requests, and commit activity linked directly to tasks.`,
    `- **Relational CRM & Deal Intelligence**: Unified deal tracking, pipeline velocity, omnichannel context, and contact history.`,
    `- **Finance & Bookkeeping**: Multi-book financial tracking, invoice management, expense tracking, and cash-flow visibility.`,
    ``
  );

  // 4. Product Specs & Viewport
  sections.push(
    `## Product Access & Requirements`,
    ``,
    `- **Target Viewport**: Desktop-first web application (optimized for screen widths >= 1024px; shared public links work seamlessly across mobile and desktop).`,
    `- **Billing & Trial**: Free 30-day Pro trial auto-provisioned upon registration. No credit card required.`,
    `- **AI Engine Support**: OpenRouter SDK integration with support for cutting-edge frontier models and optional local Ollama-compatible endpoints.`,
    ``
  );

  // 5. Pricing Plans
  sections.push(
    `## Pricing Plans`,
    ``,
    `- **Free Trial**: $0 for 30 days. Full access to Pro features, multi-agent AI assistant, unlimited tasks, and collaborative docs. No credit card required.`,
    `- **Pro Plan**: $10 per seat/month. Complete AI workspace, unlimited tasks, collaborative docs, Google Calendar sync, and standard AI queries.`,
    `- **Teams Plan**: $25 per seat/month. Multi-agent workspaces, native meeting recording with AI transcription, relational CRM, advanced permissions, and priority support.`,
    `- **Enterprise Plan**: Custom pricing. Dedicated deployment, custom LLM routing, SLA guarantees, audit logs, and SOC 2 compliance.`,
    ``
  );

  // 6. About the Company & Team
  sections.push(
    `## About KeilHQ & The Team`,
    ``,
    `- **Founding**: Founded in 2025.`,
    `- **Location**: The KeilHQ engineering and design team is purely based in Delhi, India.`,
    `- **Core Team**:`,
    `  - Shivang Kandoi — Co-Founder & CEO`,
    `  - Satyajit Jena — Co-Founder & CTO`,
    `  - Harshit Kundra — COO`,
    `  - Shivansh Tiwari — MTS`,
    `  - Adhyyan Singh — Growth`,
    `  - Shashi Ranjan — Growth`,
    `- **Advisors & Mentors**:`,
    `  - Hemant Srivastav — CEO, AIC GGSIPU`,
    `  - Sagar Sahu — Program Manager, AIC GGSIPU`,
    `  - Kuldeep Anand — Visomni`,
    `  - Raman Tehlan — Vxplain`,
    `- **Incubation & Backing**: Supported and backed by AIC GGSIPU (Atal Incubation Centre).`,
    `- **Careers**: Actively hiring engineers, product designers, and growth specialists. Contact: hello@keilhq.in.`,
    ``
  );

  // 7. Full Features Detailed
  sections.push(`## Detailed Product Features`);
  sections.push(``);
  for (const { slug, entry } of features as any[]) {
    const f = entry || {};
    const title = f.heroTitle || f.subHeroTitle || slug;
    const eyebrow = f.eyebrowText || slug;
    const desc = f.subHeroDesc || f.capabilitiesDesc || "";
    sections.push(`### ${eyebrow}: ${title}`);
    sections.push(`- **URL**: ${BASE_URL}/features/${slug}`);
    if (desc) sections.push(`- **Overview**: ${desc}`);

    if (Array.isArray(f.capabilitiesGrid) && f.capabilitiesGrid.length > 0) {
      sections.push(`- **Capabilities**:`);
      for (const cap of f.capabilitiesGrid) {
        sections.push(`  - **${cap.title}**: ${cap.desc}`);
      }
    }

    if (Array.isArray(f.checklistItems) && f.checklistItems.length > 0) {
      sections.push(`- **Key Highlights**:`);
      for (const item of f.checklistItems) {
        sections.push(`  - ${item.replace(/,\s*$/, "")}`);
      }
    }
    sections.push(``);
  }

  // 8. Blog Posts
  sections.push(`## Engineering Blog & Stories`);
  sections.push(``);
  if (blogPosts.length > 0) {
    for (const post of blogPosts as any[]) {
      const p = post.entry || {};
      const title = p.title || post.slug;
      const url = `${BASE_URL}/now/${post.slug}`;
      const author = p.author || "KeilHQ Team";
      const date = p.publishedDate || "";
      const excerpt = p.excerpt || "";
      const content = extractTextFromNodes(p.content);
      sections.push(`### ${title}`);
      sections.push(`- **URL**: ${url}`);
      sections.push(`- **Author**: ${author}`);
      if (date) sections.push(`- **Published**: ${date}`);
      if (excerpt) sections.push(`- **Summary**: ${excerpt}`);
      if (content) {
        sections.push(``, `#### Full Article`, ``, content);
      }
      sections.push(``);
    }
  } else {
    sections.push(`- No blog posts published yet.`);
    sections.push(``);
  }

  // 9. Changelog
  sections.push(`## Product Changelog & Release Notes`);
  sections.push(``);
  if (changelogs.length > 0) {
    for (const item of changelogs as any[]) {
      const title = item.title || item.slug;
      const url = `${BASE_URL}/now/${item.slug}`;
      const version = item.version || "Update";
      const date = item.date || item.dateStr || "";
      const summary = item.summaryText || "";
      const content = extractTextFromNodes(item.content);
      sections.push(`### [${version}] ${title}`);
      sections.push(`- **URL**: ${url}`);
      if (date) sections.push(`- **Date**: ${date}`);
      if (summary) sections.push(`- **Highlights**: ${summary}`);
      if (content && content !== summary) {
        sections.push(``, `#### Release Notes`, ``, content);
      }
      sections.push(``);
    }
  } else {
    sections.push(`- No changelog entries published yet.`);
    sections.push(``);
  }

  // 10. Press Coverage & Mentions
  sections.push(`## Press Coverage, Partnerships & Media`);
  sections.push(``);
  if (pressItems.length > 0) {
    for (const item of pressItems as any[]) {
      const e = item.entry || {};
      const unfurled = item.unfurled || {};
      const title = e.headline || unfurled.title || humanizeSlugTitle(e.title || item.slug);
      const url = e.url || "";
      const platform = e.platform || "Media";
      const date = e.publishedDate || "";
      const excerpt = e.excerpt || unfurled.description || "";
      sections.push(`### ${title}`);
      sections.push(`- **Source / Platform**: ${platform.toUpperCase()}`);
      if (url) sections.push(`- **Link**: ${url}`);
      if (date) sections.push(`- **Date**: ${date}`);
      if (excerpt) sections.push(`- **Summary**: ${excerpt}`);
      sections.push(``);
    }
  } else {
    sections.push(`- No press items recorded yet.`);
    sections.push(``);
  }

  // 11. Frequently Asked Questions
  sections.push(`## Frequently Asked Questions`);
  sections.push(``);
  const faqs = (FAQ_SECTION.faqs as unknown as { question: string; answer: string }[]) || [];
  for (const f of faqs) {
    sections.push(`### Q: ${f.question}`);
    sections.push(`A: ${f.answer}`);
    sections.push(``);
  }

  return sections.join("\n");
}
