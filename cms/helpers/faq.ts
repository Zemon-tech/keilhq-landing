import { cache } from 'react';
import faqData from '../../content/globals/faq/index.json';

export const getFaqSection = cache(async () => {
  return faqData as any;
});
