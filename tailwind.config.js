/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mustang: {
          red: '#E10600',
          dark: '#0A0A0A',
          gray: '#1C1C1C',
          light: '#F5F5F5',
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        tech: ['"JetBrains Mono"', 'monospace'],
        display: ['"Syncopate"', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.25em',
      }
    },
  },
  plugins: [],
}
