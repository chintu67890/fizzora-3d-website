/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fizz: {
          dark: '#080a11',
          card: 'rgba(20, 26, 43, 0.65)',
          border: 'rgba(255, 255, 255, 0.12)',
          cyan: '#00F0FF',
          blue: '#0066FF',
          lime: '#10B981',
          neonYellow: '#EFFF00',
          orange: '#FF5E00',
          magenta: '#EC4899',
          purple: '#8B5CF6',
        }
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Outfit', 'system-ui', 'sans-serif'],
        display: ['Syne', 'Outfit', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
