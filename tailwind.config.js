/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        anime: {
          dark: '#0a0a12',
          card: '#121224',
          cardBorder: '#272744',
          primary: '#ff3366', // Sakuga Crimson/Neon Red
          secondary: '#00f0ff', // Cyber Blue / Cursed Energy Neon Cyan
          accent: '#ffe600', // Electric Gold / Shonen Spark
          purple: '#9d4edd', // Hollow Purple
          ink: '#f5f5f7',
          muted: '#8b8ba7',
        }
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        anime: ['Bangers', 'Impact', 'sans-serif'],
        jp: ['"Noto Sans JP"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      keyframes: {
        'slash-enter': {
          '0%': { transform: 'scaleX(0) skewX(-20deg)', opacity: '0' },
          '100%': { transform: 'scaleX(1) skewX(-20deg)', opacity: '1' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4', filter: 'drop-shadow(0 0 15px rgba(255, 51, 102, 0.4))' },
          '50%': { opacity: '0.8', filter: 'drop-shadow(0 0 25px rgba(0, 240, 255, 0.8))' },
        },
        'glitch': {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        }
      },
      animation: {
        'slash-enter': 'slash-enter 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float-slow': 'float-slow 4s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'glitch': 'glitch 0.3s ease-in-out infinite alternate',
      },
      backgroundImage: {
        'manga-dots': 'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)',
        'speedlines': 'repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 12px)',
      }
    },
  },
  plugins: [],
};
