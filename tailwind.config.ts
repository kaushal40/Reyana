import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory:      '#FAFAF5',
        cream:      '#F5EDD8',
        sand:       '#E8D8BC',
        terracotta: { DEFAULT: '#B85C38', light: '#D4724E', dark: '#8B3A20' },
        indigo:     { DEFAULT: '#1B2B5B', light: '#2D4080', dark: '#0F1A38' },
        gold:       { DEFAULT: '#C9A84C', light: '#E8C87A', dark: '#9A7A30' },
        brown:      '#3D2C1E',
        sage:       '#7A8C72',
        rose:       '#C4786A',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        serif:   ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:    ['Jost', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in':   'fadeIn 1s ease-out forwards',
        'slide-up':  'slideUp 0.8s ease-out forwards',
        'fade-in-slow': 'fadeIn 1.6s ease-out forwards',
      },
      keyframes: {
        fadeIn:  { '0%': { opacity: '0' },                            '100%': { opacity: '1' } },
        slideUp: { '0%': { opacity: '0', transform: 'translateY(24px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
      },
    },
  },
  plugins: [],
};
export default config;
