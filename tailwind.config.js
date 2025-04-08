/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
        'chivo': ['Chivo Mono', 'monospace'],
        'chomsky': ['Chomsky', 'serif'],
      },
      colors: {
        'accent': 'rgba(0, 88, 28, 0.25)',
        'accent-hover': 'rgba(0, 88, 28, 0.4)',
        'border': '#D9D9D9',
        'muted': '#4E4E4E',
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
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
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
        'fadeIn': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fadeUp': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scaleIn': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
