/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      colors: {
        background: '#080808',
        surface: '#121212',
        primary: '#eeeeee',
        secondary: '#888888',
        // winfluence-Akzent: warmes Coral-Rot (das "in" im Wortzeichen).
        accent: '#F0483C',
        'accent-glow': '#F46A5F',
      },
      backgroundImage: {
        'glow-gradient': 'radial-gradient(circle at center, rgba(240, 72, 60, 0.12) 0%, rgba(0, 0, 0, 0) 70%)',
        'grid-pattern': 'linear-gradient(to right, #1f1f1f 1px, transparent 1px), linear-gradient(to bottom, #1f1f1f 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}

