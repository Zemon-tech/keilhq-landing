import { cache } from 'react';
import pressData from '../__generated__/press.json';

export const getPressItems = cache(async () => {
  return pressData as Array<{
    slug: string;
    entry: {
      title: string;
      platform: 'linkedin' | 'instagram' | 'x' | 'news';
      url: string;
      thumbnail: string | null;
      excerpt: string | null;
      publishedDate: string | null;
      featured: boolean;
    };
  }>;
});

export const getPressItem = cache(async (slug: string) => {
  const item = pressData.find((p: any) => p.slug === slug);
  if (!item) return null;
  return item as { slug: string; entry: Record<string, unknown> };
});
