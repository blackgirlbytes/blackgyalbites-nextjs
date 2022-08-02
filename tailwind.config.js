/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'medium-brown': '#653A1E',
        'button-orange': '#FA873E',
      },
      fontSize: {
        'heading-xl': '46px',
      },
      fontFamily: {
        'body': ['Lato', 'sans-serif'],
        'heading': ['Shrikhand', 'cursive'],
        'typewriter': ['Courier Prime', 'monospace'],
      },
      letterSpacing: {
        'small': '2px',
      },
      textShadow: {
        'header-shadow': "2px 2px rgba(252, 64, 40, 0.3)",
      },
      height: {
        "banner-height": "40vh",
        "banner-height-mobile": "10vh",
      },
      backgroundImage: {
        'fish-overlay': "url('/blackgyalbites-nextjs/fish-overlay.png')",
      },
      backgroundColor: {
        'caribbean-yellow': '#FFDE59'
      },
      borderRadius: {
        'button-border-radius': '10px'
      },
      spacing: {
        'button-margin': '15px auto'
      },
      screens: {
        '3xl': '2000px',
      },
      minWidth: {
        "1/3": "30%"
      },
    },
    plugins: [],
  }
}