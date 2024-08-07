/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  [
    "./*.php", 
    "./assets/parts/*.php",
    "./assets/js/*.js"
    ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
    daisyui: {
      themes: ["dark", "light"],
    },
}