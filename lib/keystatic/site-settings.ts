import { cache } from 'react';
import { getReader } from './reader';

export const getSiteSettings = cache(async () => {
  const reader = await getReader();
  if (!reader) return null;
  return await reader.singletons.siteSettings.read();
});
