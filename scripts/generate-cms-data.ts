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
  const pressItems = await reader.collections.press.all();
  await fs.writeFile(
    path.join(outDir, 'press.json'),
    JSON.stringify(pressItems, null, 2)
  );
  console.log(`  ✓ press: ${pressItems.length} items`);

  console.log('[cms:generate] Done → cms/__generated__/');
}

main().catch((err) => {
  console.error('[cms:generate] Failed:', err);
  process.exit(1);
});