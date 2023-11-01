/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF5733',
        secondary: '#0088CC',
        customColor1: '#FFAABB',
        customColor2: '#55CCFF',
      },
      margin: {
        '16': '4rem',
      },
    },
  },
  plugins: [],
}