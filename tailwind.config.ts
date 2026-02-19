import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    // Dynamic color classes for dark mode contrast
    'text-emerald-400',
    'bg-emerald-400',
    'border-emerald-400/30',
    'bg-emerald-400/20',
    // Brand colors (dynamic usage)
    'text-ge-green',
    'text-ge-gold',
    'text-ge-dark',
    'bg-ge-green',
    'bg-ge-gold',
    'bg-ge-dark',
    'border-ge-green/20',
    'border-ge-green/30',
    'border-ge-gold/20',
    'border-ge-gold/30',
    'border-ge-dark/20',
    'border-ge-dark/30',
    'bg-ge-green/10',
    'bg-ge-green/20',
    'bg-ge-gold/10',
    'bg-ge-gold/20',
    'bg-ge-dark/10',
    'bg-ge-dark/20',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
      },
      screens: {
        sm: '100%',
        md: '100%',
        lg: '100%',
        xl: '100%',
        '2xl': '100%',
      },
    },
    extend: {
      colors: {
        // GREEN EMPIRE LLC Brand Colors
        'ge-green': '#2d6a2e',
        'ge-green-light': '#4caf50',
        'ge-green-bright': '#66bb6a',
        'ge-lime': '#8bc34a',
        'ge-gold': '#c8a951',
        'ge-gold-light': '#dbc67e',
        'ge-dark': '#1a2e1a',
        'ge-dark-light': '#2e4a2e',
        'ge-cream': '#f5f7f0',
        'ge-earth': '#5d4037',
        'ge-earth-light': '#8d6e63',
        // Shadcn/UI semantic colors
        border: 'hsl(var(--border))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        'leaf-float': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(5deg)' },
        },
        'grass-wave': {
          '0%, 100%': { transform: 'skewX(0deg)' },
          '50%': { transform: 'skewX(3deg)' },
        },
      },
      animation: {
        'leaf-float': 'leaf-float 4s ease-in-out infinite',
        'grass-wave': 'grass-wave 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
