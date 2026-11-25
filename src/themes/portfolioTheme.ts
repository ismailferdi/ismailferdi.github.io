import { defineTheme } from '@astryxdesign/core/theme';
import { matchaTheme } from '@astryxdesign/theme-matcha/built';

export const portfolioTheme = defineTheme({
  name: 'portfolio-matcha',
  extends: matchaTheme,
  tokens: {
    '--font-family-heading':
      '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    '--text-display-2-size': 'var(--font-size-3xl)',
  },
  localTokens: {
    '--font-display':
      '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },
  adaptations: {
    rules: [
      {
        when: { width: { below: 'xl' } },
        value: {
          tokens: {
            '--text-display-2-size': 'var(--font-size-3xl)',
            '--text-display-3-size': 'var(--font-size-2xl)',
          },
        },
      },
      {
        when: { width: { below: 'md' } },
        value: {
          tokens: {
            '--text-display-2-size': 'var(--font-size-3xl)',
            '--text-display-3-size': 'var(--font-size-2xl)',
          },
        },
      },
      {
        when: { width: { below: 'sm' } },
        value: {
          tokens: {
            '--text-display-2-size': 'var(--font-size-xl)',
            '--text-display-3-size': 'var(--font-size-xl)',
          },
        },
      },
    ],
  },
});
