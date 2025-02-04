/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'ticker': 'ticker 30s linear infinite',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        }
      },
      fontFamily: {
        'cormorant': ['"Cormorant Garamond"', 'serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 