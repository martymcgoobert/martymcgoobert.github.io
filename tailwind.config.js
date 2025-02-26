/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'geist': ['Geist', 'sans-serif'],
      },
      screens: {
        'sm': '375px',
        'md': '810px',
        'lg': '1440px',
      },
      spacing: {
        'page-mobile': '16px',
        'page-desktop': '20px',
      },
      maxWidth: {
        'container': '1440px',
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-position': '0% 50%',
            'background-size': '200% 200%',
          },
          '50%': {
            'background-position': '100% 50%',
            'background-size': '200% 200%',
          },
        },
      },
    },
  },
  plugins: [],
}
