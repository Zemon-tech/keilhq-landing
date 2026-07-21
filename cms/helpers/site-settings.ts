import { cache } from 'react';
import siteSettingsData from '../../content/globals/site-settings/index.json';

export const getSiteSettings = cache(async () => {
  return siteSettingsData as any;
});
