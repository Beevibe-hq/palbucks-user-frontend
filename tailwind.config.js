/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'smlaptops':'1100px',
        'mdlaptops':'1230px',
        'lglaptops':'1280px'
      }
    },
  },
  plugins: [],
}