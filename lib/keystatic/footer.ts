import { cache } from 'react';
import { getReader } from './reader';

export const getFooter = cache(async () => {
  const reader = await getReader();
  if (!reader) return null;
  return await reader.singletons.footer.read();
});
