/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
          dark: {
              500: '#2A2A2A',
              800: '#141414',
              900: '#0A0A0A',
              950: '#050505',
          },
          gold: {
              300: '#EBD483', // light glow
              400: '#D4AF37', // metallic base
              500: '#C59E30',
              600: '#9A7A22',
          }
      },
      fontFamily: {
          sans: ['Montserrat', 'sans-serif'],
          serif: ['Cinzel', 'serif'],
      }
    },
  },
  plugins: [],
}
