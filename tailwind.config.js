/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile-sm': '320px', 
        'mobile-md': '375px', 
        'mobile-lg': '425px',  
        'mobile-xl': '765px',  
        'mobile-xxl': '768px',  
        'mobile-xzl': {'min': '340px', 'max': '375px'},
        'mobile-lgo': {'min': '376px', 'max': '424px'},
        'mobile-xal': {'min': '650px', 'max': '767px'},
      },
      spacing: {
        '13': '3rem',
        '113': '8rem',
        '14': '13rem',
        '16': '18rem',
        '144': '36rem',
      },
    },
  },
  plugins: [],
}