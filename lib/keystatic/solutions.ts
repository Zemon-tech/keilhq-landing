import { cache } from 'react';
import { getReader } from './reader';
import type { SolutionContent } from '@/lib/solutions-content';

/** Transforms the flat CMS JSON into the SolutionContent interface expected by SolutionPage */
function transformSolution(slug: string, entry: any): SolutionContent {
  return {
    id: slug,
    eyebrow: entry.eyebrow || '',
    title: entry.title || slug,
    persona: entry.persona || '',
    sprawl: {
      heading: entry.sprawlHeading || 'The sprawl',
      bullets: Array.isArray(entry.sprawlBullets) ? entry.sprawlBullets : [],
      research: entry.sprawlResearch || '',
    },
    withKeilhq: {
      heading: entry.withKeilhqHeading || 'With KeilHQ',
      intro: entry.withKeilhqIntro || '',
      benefits: Array.isArray(entry.withKeilhqBenefits) ? entry.withKeilhqBenefits : [],
      quote: entry.withKeilhqQuote || '',
      attribution: entry.withKeilhqAttribution || '',
    },
  };
}

export const getSolutions = cache(async (): Promise<SolutionContent[]> => {
  const reader = await getReader();
  if (!reader) return [];
  const items = await (reader.collections as any).solutions.all();
  return items.map((item: any) => transformSolution(item.slug, item.entry));
});

export const getSolution = cache(async (slug: string): Promise<SolutionContent | null> => {
  const reader = await getReader();
  if (!reader) return null;
  const entry = await (reader.collections as any).solutions.read(slug);
  if (!entry) return null;
  return transformSolution(slug, entry);
});
