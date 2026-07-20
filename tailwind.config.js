/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
          dark: {
              500: '#2A2A2A',
              700: '#181818',
              800: '#111111',
              900: '#0A0A0A',
              950: '#080808',
          },
          gold: {
              200: '#F5E6C8',
              300: '#EBD483',
              400: '#C8A84E',
              500: '#B8952F',
              600: '#9A7A22',
          }
      },
      fontFamily: {
          sans: ['DM Sans', 'sans-serif'],
          serif: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}
