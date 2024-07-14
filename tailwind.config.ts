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
      height: {
        'min-h-without-header': 'calc(100svh - 4.5rem)',
      },
    },
  },
  plugins: [],
};
export default config;
