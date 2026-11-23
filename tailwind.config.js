/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#050505',
          secondary: '#101010',
          elevated: '#141414',
          surface: '#181818',
        },
        gold: {
          primary: '#E7C58E',
          secondary: '#B99A68',
          light: '#F4DEBA',
          muted: '#8C744D',
          dark: '#4A3B24',
          subtle: 'rgba(231, 197, 142, 0.08)',
          glow: 'rgba(231, 197, 142, 0.25)',
        },
        dark: {
          border: '#292929',
          subtle: '#1C1C1C',
          muted: '#202020',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#A3A3A3',
          muted: '#6E6E6E',
        }
      },
      fontFamily: {
        michroma: ['Michroma', 'sans-serif'],
        sans: ['"DM Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      letterSpacing: {
        'ultra-wide': '0.25em',
        'cinematic': '0.35em',
        'loose-geo': '0.18em',
      },
      boxShadow: {
        'gold-subtle': '0 0 25px -5px rgba(231, 197, 142, 0.15)',
        'gold-glow': '0 0 45px -10px rgba(231, 197, 142, 0.25)',
        'industrial': '0 20px 40px -15px rgba(0, 0, 0, 0.8)',
      },
      backgroundImage: {
        'gold-gradient-subtle': 'linear-gradient(180deg, rgba(231, 197, 142, 0.12) 0%, rgba(231, 197, 142, 0) 100%)',
        'radial-vignette': 'radial-gradient(circle at 50% 40%, rgba(231, 197, 142, 0.04) 0%, rgba(5, 5, 5, 0.8) 70%, #050505 100%)',
      }
    },
  },
  plugins: [],
}
