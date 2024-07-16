

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      screens: {
        'xs' : '440px',
        'sm': '640px',   // Small screens, mobile phones
        'md': '768px',   // Medium screens, tablets
        'lg': '1024px',  // Large screens, small desktops
        'xl': '1280px',  // Extra large screens, large desktops
        '2xl': '1536px', // 2 Extra large screens, larger desktops
        'custom': '1600px' // Example of a custom media query
      },
      colors  : {
        primary : "#b0795f",
        secondary : "#626362"
      },

    },
  },
  plugins: [
    
  ],
}