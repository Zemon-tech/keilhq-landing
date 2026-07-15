import { cache } from 'react';
import homepageData from '../../content/globals/homepage/index.json';

export const getHomepage = cache(async () => {
  return homepageData as any;
});
