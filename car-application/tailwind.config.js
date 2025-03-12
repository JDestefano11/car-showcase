/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#1E1E1E',    // Carbon Black
          light: '#2A2A2A',
          dark: '#111111'
        },
        'secondary': {
          DEFAULT: '#FF0000',    // Racing Red
          light: '#FF3333',
          dark: '#CC0000'
        },
        'accent': {
          DEFAULT: '#C0C0C0',    // Metallic Silver
          light: '#D9D9D9',
          dark: '#A7A7A7'
        },
        'text': {
          DEFAULT: '#FFFFFF',    // White
          muted: '#E0E0E0'
        }
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': 'linear-gradient(135deg, rgba(255, 0, 0, 0.1), rgba(30, 30, 30, 0.2))',
        'card-shine': 'linear-gradient(120deg, rgba(192, 192, 192, 0) 30%, rgba(192, 192, 192, 0.3) 50%, rgba(192, 192, 192, 0) 70%)',
        'cut-out': 'radial-gradient(circle at 70% 50%, transparent 20%, rgba(30, 30, 30, 0.95) 20%)'
      },
      boxShadow: {
        'button': '0 4px 6px -1px rgb(255 0 0 / 0.1), 0 2px 4px -2px rgb(255 0 0 / 0.1)',
        'button-hover': '0 10px 15px -3px rgb(255 0 0 / 0.15), 0 4px 6px -4px rgb(255 0 0 / 0.15)',
        'glow': '0 0 20px rgb(255 0 0 / 0.15), 0 0 40px rgb(255 0 0 / 0.1)'
      }
    },
  },
  plugins: [],
}