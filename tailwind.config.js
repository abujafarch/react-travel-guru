/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'bebas': ['Bebas Neue', 'sans-serif'],
      'mont': ['Montserrat', 'sans-serif']
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

