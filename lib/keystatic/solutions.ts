import { cache } from 'react';
import type { SolutionContent } from '@/lib/solutions-content';
import agencies from '../../content/solutions/agencies/index.json';
import devTeams from '../../content/solutions/dev-teams/index.json';
import enterprise from '../../content/solutions/enterprise/index.json';
import startups from '../../content/solutions/startups/index.json';

const solutionsMap: Record<string, any> = {
  agencies,
  "dev-teams": devTeams,
  enterprise,
  startups,
};

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
  return Object.entries(solutionsMap).map(([slug, entry]) => transformSolution(slug, entry));
});

export const getSolution = cache(async (slug: string): Promise<SolutionContent | null> => {
  const entry = solutionsMap[slug];
  if (!entry) return null;
  return transformSolution(slug, entry);
});
