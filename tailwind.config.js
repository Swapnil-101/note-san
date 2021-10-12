const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      gray:colors.gray,
      white: colors.white,
      pink:colors.pink,
      blue:colors.blue,
      m_dark_blue:'#00A9CC',
      red:colors.red,
      footer_bg: '#f1f1f1',
      m_purple: '#B894FF',
      m_dark_orange:'#FF9B73',
      m_lime: '#E4EE8E',
      m_blue:'#01D4FF',
      m_light_orange:'#FFC972',
      yellow:colors.yellow
    },
    extend: {
      fontFamily:{
        'poppins': ['Poppins'],
      },
      spacing:{
        
      }
    },
  },
  variants: {
    extend: {
      ringWidth:['hover','active']
    },
  },
  plugins: [],
}
