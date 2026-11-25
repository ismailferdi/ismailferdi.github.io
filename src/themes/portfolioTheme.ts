import { defineTheme } from '@astryxdesign/core/theme';
import { matchaTheme } from '@astryxdesign/theme-matcha/built';

export const portfolioTheme = defineTheme({
  name: 'portfolio-matcha',
  extends: matchaTheme,
  tokens: {
    '--font-family-heading':
      '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    '--text-display-2-size': 'var(--font-size-3xl)',
    '--color-background-body': ['#0B1020', '#0B1020'],
    '--color-background-surface': ['#121A2E', '#121A2E'],
    '--color-background-card': ['#121A2E', '#121A2E'],
    '--color-border': ['#4E64A3', '#4E64A3'],
    '--color-neutral': ['#E6ECFF1A', '#E6ECFF1A'],
    '--color-text-primary': ['#E6ECFF', '#E6ECFF'],
    '--color-text-secondary': ['#A9B6D6', '#A9B6D6'],
    '--color-accent': ['#5EEAD4', '#5EEAD4'],
    '--color-text-accent': ['#5EEAD4', '#5EEAD4'],
    '--color-icon-accent': ['#5EEAD4', '#5EEAD4'],
    '--color-on-accent': ['#0B1020', '#0B1020'],
    '--color-text-purple': ['#A78BFA', '#A78BFA'],
    '--color-border-purple': ['#A78BFA', '#A78BFA'],
    '--color-background-purple': ['#A78BFA20', '#A78BFA20'],
    '--focus-outline-color': ['#7DD3FC', '#7DD3FC'],
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
