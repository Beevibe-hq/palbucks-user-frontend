/** @type {import('tailwindcss').Config} */

const { screens } = require('tailwindcss/defaultTheme')


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {    
      screens:{
        'fold':'270px',
        'phones':'350px',
        'xphones':'400px',
        'smlaptops':'1100px',
        'mdlaptops':'1230px',
        'lglaptops':'1280px',
        ...screens
      },
      extend:{
        fontFamily:{
          'inter':['inter']
        }
      }
  },
  plugins: [],
}