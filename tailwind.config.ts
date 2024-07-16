import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
      },
      padding: {
        '7/12': '60%',
      },
      height: {
        'min-h-without-header': 'calc(100svh - 4.5rem)',
        'without-header': 'calc(100svh - 4.5rem)',
      },
      width: {
        'hero-full': 'calc(100vw + 8rem)',
      },
      keyframes: {
        scroll: {
          to: { transform: 'translateX(calc(-50% - 0.5rem))' },
        },
      },
      animation: {
        scroll:
          'scroll var(--_scroll-duration, 20s) var(--_scroll-direction, reverse) linear infinite',
      },
    },
  },
  plugins: [],
};
export default config;
