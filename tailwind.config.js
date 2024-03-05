/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        'DarkBlue' : 'rgb(11, 78, 156)',
        'YellowSun': 'rgb(240, 230, 44)',
        'SuperPink':  'rgb(215, 25, 135)',
        'SkyBlue': 'rgb(105, 199, 234)',
        'VeryBlack': 'rgb(2, 1, 5)'
      }
    },
  },
  plugins: [require("daisyui")],
}

