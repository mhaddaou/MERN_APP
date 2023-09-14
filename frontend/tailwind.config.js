/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'bg' : '#112033',
      }
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: '0', transform: 'translateX(100px)' },
        '100%': { opacity: '1', transform: 'translateX(0px) translateY(0px)' },
      },
      
    },
    animation: {
      'fade-in': 'fadeIn 0.5s ease-in-out', 
    },
  
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}

