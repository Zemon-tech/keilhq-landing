import { cache } from 'react';
import keystaticConfig from '../../keystatic.config';

export const getReader = cache(async () => {
  if (typeof window === 'undefined') {
    // Webpack / Turbopack ignore directive to prevent bundling Node-only reader inside Client Component chunks
    const { createReader } = await import(
      /* webpackIgnore: true */
      '@keystatic/core/reader' as any
    );
    return createReader(process.cwd(), keystaticConfig);
  }
  return null;
});
