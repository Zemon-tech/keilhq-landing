import { cache } from 'react';
import keystaticConfig from '../../keystatic.config';

export const getReader = cache(async () => {
  if (typeof window === 'undefined') {
    try {
      // Safely check if we are in an environment with full fs support (like local Node/build agent)
      const fs = await import('fs');
      if (!fs || typeof fs.readFileSync !== 'function') {
        return null;
      }

      // Webpack / Turbopack ignore directive to prevent bundling Node-only reader inside Client Component chunks
      const { createReader } = await import(
        /* webpackIgnore: true */
        '@keystatic/core/reader' as any
      );
      return createReader(process.cwd(), keystaticConfig);
    } catch (e) {
      console.warn('Keystatic filesystem reader is not available in this environment:', e);
      return null;
    }
  }
  return null;
});
