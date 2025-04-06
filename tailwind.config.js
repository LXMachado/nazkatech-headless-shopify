const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/styles/**/*.{css,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'forest-green': {
          DEFAULT: '#2D6A4F',
          50: '#E6F2EF',
          100: '#C3E3D4',
          200: '#9DD4B8',
          300: '#76C59D',
          400: '#50B582',
          500: '#2D6A4F',
          600: '#275A43',
          700: '#214A38',
          800: '#1B3A2C',
          900: '#152A20',
        },
        'soft-cream': {
          DEFAULT: '#F8F4E3',
          50: '#FFFEF9',
          100: '#F8F4E3',
          200: '#F0E8C0',
          300: '#E8DD9E',
          400: '#E1D17B',
          500: '#D9C659',
          600: '#C9B32C',
          700: '#A68F24',
          800: '#826C1C',
          900: '#5F4A14',
        },
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
}
