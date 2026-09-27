/**
 * Build-time script: pre-compiles all Keystatic content into JSON files
 * at cms/__generated__/. These are statically imported at runtime,
 * avoiding reliance on @keystatic/core/reader (which requires node:fs).
 *
 * Run via: npx tsx scripts/generate-cms-data.ts
 * Called before `next build` in the build pipeline.
 */
import { createReader } from '@keystatic/core/reader';
import config from '../cms/config';
import fs from 'node:fs/promises';
import path from 'node:path';
import { unfurlMany, downloadImageToPublic } from './unfurl';

const repoPath = process.cwd();
const outDir = path.join(repoPath, 'cms', '__generated__');

async function main() {
  console.log('[cms:generate] Pre-compiling Keystatic content...');
  await fs.mkdir(outDir, { recursive: true });

  const reader = createReader(repoPath, config);

  // ── Blog (Markdoc) ──
  const blogPosts = await reader.collections.blog.all();
  const blogData: { slug: string; entry: Record<string, unknown> }[] = [];
  for (const post of blogPosts) {
    const content = await post.entry.content();
    blogData.push({
      slug: post.slug,
      entry: { ...post.entry, content },
    });
  }
  await fs.writeFile(
    path.join(outDir, 'blog.json'),
    JSON.stringify(blogData, null, 2)
  );
  console.log(`  ✓ blog: ${blogData.length} posts`);

  // ── Changelog (Markdoc) ──
  const changelogs = await reader.collections.changelog.all();
  const changelogData: { slug: string; entry: Record<string, unknown> }[] = [];
  for (const item of changelogs) {
    const content = await item.entry.content();
    changelogData.push({
      slug: item.slug,
      entry: { ...item.entry, content },
    });
  }
  await fs.writeFile(
    path.join(outDir, 'changelog.json'),
    JSON.stringify(changelogData, null, 2)
  );
  console.log(`  ✓ changelog: ${changelogData.length} entries`);

  // ── Press (JSON) ──
  // Each URL is unfurled (og:title / og:image / og:description, cached in
  // cms/unfurl-cache.json). Display precedence at render: CMS headline,
  // then unfurled data, then CMS thumbnail/excerpt fallbacks. Remote preview
  // images are downloaded into public/images/cms/press/ so the site serves
  // persisted files instead of rot-prone hotlinks.
  const pressItems = await reader.collections.press.all();
  const pressUrls = pressItems
    .map((item) => (item.entry as Record<string, unknown>).url)
    .filter((url): url is string => typeof url === 'string' && url.length > 0);
  const unfurled = await unfurlMany(pressUrls);
  const pressData = [];
  for (const item of pressItems) {
    const entry = { ...(item.entry as Record<string, unknown>) };
    const url = entry.url;
    const meta = typeof url === 'string' ? unfurled[url] ?? null : null;
    if (!entry.thumbnail && meta?.image) {
      const downloaded = await downloadImageToPublic(meta.image, item.slug);
      if (downloaded) entry.thumbnail = downloaded;
    }
    pressData.push({ ...item, entry, unfurled: meta });
  }
  await fs.writeFile(
    path.join(outDir, 'press.json'),
    JSON.stringify(pressData, null, 2)
  );
  console.log(`  ✓ press: ${pressData.length} items`);

  console.log('[cms:generate] Done → cms/__generated__/');

  // ── llms.txt (AI surfaces) ──
  // Regenerated on every build so crawlers and answer engines always see
  // fresh features, FAQs, posts, and changelog entries.
  await generateLlmsTxt({ blogData, changelogData });
}

async function generateLlmsTxt({
  blogData,
  changelogData,
}: {
  blogData: { slug: string; entry: Record<string, unknown> }[];
  changelogData: { slug: string; entry: Record<string, unknown> }[];
}) {
  const { getManualFeatures } = await import('../lib/features');
  const { FAQ_SECTION } = await import('../lib/site-content');

  const features = getManualFeatures();
  const featureLines = features.map(({ slug, entry }: any) => {
    const name = entry?.eyebrowText || entry?.heroTitle || slug;
    return `- ${name}: https://keilhq.in/features/${slug}`;
  });

  const faqs = (FAQ_SECTION.faqs as unknown as { question: string; answer: string }[]).map(
    (f) => `Q: ${f.question}\nA: ${f.answer}`
  );

  const postLines = blogData.map((p) => {
    const title = (p.entry.title as string) || p.slug;
    return `- ${title}: https://keilhq.in/now/${p.slug}`;
  });

  const changelogLines = changelogData.map((c) => {
    const title = (c.entry.title as string) || c.slug;
    return `- ${title}: https://keilhq.in/now/${c.slug}`;
  });

  const lines = [
    '# KeilHQ — AI-Native Work Management & Product Operations',
    '',
    '> KeilHQ is an all-in-one work management platform and product operations system designed for desktop viewports. It integrates database-enforced task clarity, real-time team chat, block-based collaborative documents, two-way Google Calendar synchronization, native meeting recording with AI transcription, and a multi-agent AI assistant into a single unified workspace.',
    '',
    '## Core Keywords & AI Search Identifiers',
    '- **Primary names:** Keil, KeilHQ, Keil HQ, Keil App, Keil Workspace, KeilHQ AI, Keil project management',
    '- **Product category:** AI-native product operations system, objectives-driven task manager, team collaboration workspace',
    '',
    '## Core Differentiators & Product Truth',
    '',
    '- **The Clarity Engine (Objectives-First)**: KeilHQ resolves project ambiguity before it starts. Every task is database-required to carry explicitly defined Objectives and Success Criteria at creation. Vague assignments are programmatically blocked.',
    '- **Multi-Agent AI Assistant**: Built on Mastra Core, four specialist sub-agents (Task Agent, Chat Agent, Motion Docs Agent, GitHub Agent) read real workspace state—overdue items, sprint blockers, calendar events, document content—and execute operations on behalf of users.',
    '- **Native Meeting Recording & Transcription**: Records audio directly in the browser and transcribes using Sarvam AI (multilingual & Indian languages) and ElevenLabs Scribe v2 with speaker diarization. Transcripts save to Motion documents in one click.',
    '- **Motion Block-Based Editor**: Built on TipTap with Socket.io real-time collaborative editing, block comments, subpage hierarchies, view analytics, and bidirectional Notion import/export.',
    '- **Real-Time Team Chat**: Socket.io channels and direct messages with threaded replies, message attachments, and cross-space search.',
    '- **Two-Way Google Calendar Sync**: Tasks and calendar slots automatically reflect as Google Calendar events, with real-time webhook updates and conflict detection.',
    '- **GitHub Bidirectional Sync**: Sync issues, pull requests, and contributors directly with KeilHQ tasks.',
    '',
    '## Brand & Aesthetics',
    '',
    '- **Brand Idea**: Human Clarity — calm over stimulation, substance over spectacle.',
    '- **Design System**: Warm Ink (`#171514`) text on Cotton Paper (`#F7F4EE`) canvas with Linen (`#F1EEE8`) cards and Limestone (`#DDD7CE`) borders.',
    '- **AI Accent**: Oxidized Copper (`#2B6F6A`) reserved exclusively for AI states.',
    '- **Typography**: DM Sans for marketing & landing surfaces, Inter for product UI. (No mono fonts used as primary UI text).',
    '',
    '## Product Access & Specs',
    '',
    '- **Viewport**: Desktop-first web application (requires >= 1024px viewport width for workspace; public shared links work on all mobile/desktop devices).',
    '- **Billing**: Free 30-day Pro trial auto-provisioned upon signup, no credit card required. Paid tiers for Pro, Teams, and Enterprise.',
    '- **AI Models**: OpenRouter SDK integration (default) and Local Ollama-compatible endpoint support.',
    '',
    '## Features',
    '',
    ...featureLines,
    '',
    '## Frequently Asked Questions',
    '',
    ...faqs.flatMap((f) => [f, '']),
    '## Latest Posts & Updates',
    '',
    ...(postLines.length ? postLines : ['- No posts yet.']),
    '',
    ...(changelogLines.length ? ['## Changelog', '', ...changelogLines, ''] : []),
    '## Canonical Pages & Links',
    '',
    '- Home: https://keilhq.in',
    '- Features: https://keilhq.in/features/smart-dashboard',
    '- Pricing: https://keilhq.in/pricing',
    '- Now (changelog, blog & press): https://keilhq.in/now',
    '- Support & FAQ: https://keilhq.in/support',
    '- About: https://keilhq.in/about',
    '- Brand: https://keilhq.in/brand',
    '- Privacy & Security: https://keilhq.in/privacy',
    '- Terms of Service: https://keilhq.in/terms',
    '- Contact: hello@keilhq.in',
    '',
  ];

  await fs.writeFile(path.join(repoPath, 'public', 'llms.txt'), lines.join('\n'));
  console.log(
    `  ✓ llms.txt: ${features.length} features, ${faqs.length} FAQs, ${postLines.length} posts, ${changelogLines.length} changelog entries`
  );
}

main().catch((err) => {
  console.error('[cms:generate] Failed:', err);
  process.exit(1);
});