import { cache } from 'react';
import aboutData from '../../content/globals/about/index.json';

export const getAboutPage = cache(async () => {
  return aboutData as any;
});
