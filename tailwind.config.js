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
        'minitablet':'550px',
        'brkpoint':'940px',       
        ...screens,
        'smlaptops':'1150px',
        'mdlaptops':'1230px',
        'lglaptops':'1300px',
        
      },
      extend:{
        fontFamily:{
          'merriweather': ['Merriweather', 'serif'],
        },
        transitionProperty:{
          'width':'width'
        },
        screens:{
          'endmobile':'940px'
        }
      }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    
  ],
}