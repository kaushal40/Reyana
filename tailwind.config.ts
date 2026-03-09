import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory:      '#FDFCFB',
        cream:      '#EAF5F0',
        sand:       '#C5D8D0',
        terracotta: { DEFAULT: '#2B6E5C', light: '#3D8B7A', dark: '#1A4A3C' },
        indigo:     { DEFAULT: '#1E3935', light: '#2D5A52', dark: '#0F2420' },
        gold:       { DEFAULT: '#B8A87C', light: '#D4C8A0', dark: '#8C7C50' },
        brown:      '#1A302A',
        sage:       '#5A9E8A',
        rose:       '#C4786A',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        serif:   ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:    ['Jost', 'system-ui', 'sans-serif'],
        logo:    ['"PT Serif"', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in':          'fadeIn 1s ease-out forwards',
        'slide-up':         'slideUp 0.8s ease-out forwards',
        'fade-in-slow':     'fadeIn 1.6s ease-out forwards',
        'slide-from-left':  'slideFromLeft 0.7s ease-out forwards',
        'slide-from-right': 'slideFromRight 0.7s ease-out forwards',
        'ornament-pop':     'ornamentPop 0.4s ease-out 0.65s forwards',
      },
      keyframes: {
        fadeIn:         { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp:        { '0%': { opacity: '0', transform: 'translateY(24px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        slideFromLeft:  { '0%': { opacity: '0', transform: 'translateX(-18px)' }, '100%': { opacity: '1', transform: 'translateX(0)' } },
        slideFromRight: { '0%': { opacity: '0', transform: 'translateX(18px)' }, '100%': { opacity: '1', transform: 'translateX(0)' } },
        ornamentPop:    { '0%': { opacity: '0', transform: 'scale(0.4)' }, '100%': { opacity: '1', transform: 'scale(1)' } },
      },
    },
  },
  plugins: [],
};
export default config;
