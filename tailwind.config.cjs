/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        default: ['Rubik', 'Inter', 'sans-serif'],
        secondary: ['Inter', 'Rubik', 'sans-serif']
      },
      colors: {
        blue: {
          "custom": "#3a5ce1"
        },
        background: "#02041b"
      }
    },
  },
  plugins: [],
}