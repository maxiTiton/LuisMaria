/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1B5E20', // verde acento
        secondary: '#795548', // marrón acento
        black: '#000',
        white: '#fff',
        crema: '#f8f5f2',
        marron: '#7c4f2c',
        marronOscuro: '#4e2e1e',
        dorado: '#e6b980',
        doradoSuave: '#f3e1c7',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 