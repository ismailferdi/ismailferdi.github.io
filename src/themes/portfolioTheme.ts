import { defineTheme } from '@astryxdesign/core/theme';
import { matchaTheme } from '@astryxdesign/theme-matcha/built';

export const portfolioTheme = defineTheme({
  name: 'portfolio-matcha',
  extends: matchaTheme,
  tokens: {
    '--font-family-heading':
      '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },
});
