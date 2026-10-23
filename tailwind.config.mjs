/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        pine: {
          DEFAULT: '#183A33',
          soft: '#22483F',
          deep: '#0E2A25',
          dark: '#081714',
        },
        lime: {
          DEFAULT: '#C6E79E',
          deep: '#AEDA7E',
          soft: '#E6F3D4',
          wash: '#F1F7E8',
        },
        ink: '#10201C',
        paper: '#F9F9F9',
        mist: '#E7EAE8',
        sage: '#C9D2CE',
        gold: {
          DEFAULT: '#F4B73E',
          dark: '#c48e24',
          soft: '#FEF6E6',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        mono: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      borderRadius: {
        'card': '22px',
        'pill': '100px',
      },
      animation: {
        'marquee': 'marquee 32s linear infinite',
        'marquee-reverse': 'marquee-reverse 32s linear infinite',
        'float-slow': 'assistBob 4s ease-in-out infinite',
        'float-delayed': 'assistBob 4s ease-in-out 2s infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        assistBob: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
};
