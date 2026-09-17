import { cache } from 'react';
import rawPressData from '../__generated__/press.json';
import type { UnfurledLink } from '@/lib/unfurl';

export interface PressRecord {
  slug: string;
  entry: {
    title: string;
    headline?: string | null;
    platform: 'linkedin' | 'instagram' | 'x' | 'news' | 'youtube' | 'podcast';
    url: string;
    thumbnail: string | null;
    excerpt: string | null;
    publishedDate: string | null;
    featured: boolean;
  };
  unfurled: UnfurledLink | null;
}

export const getPressItems = cache(async (): Promise<PressRecord[]> => {
  return rawPressData as PressRecord[];
});

export const getPressItem = cache(async (slug: string) => {
  const items = await getPressItems();
  const item = items.find((p) => p.slug === slug);
  if (!item) return null;
  return item as { slug: string; entry: Record<string, unknown> };
});
