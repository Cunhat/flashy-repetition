/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 0.25rem 0.5rem 0 rgb(0 0 0 / 10%)',
      },
    },
    colors: {
      background: '#2F3136',
      onyx: '#36393E',
      onyx2: '#363749',
      white: '#FFF',
      purple: '#766FF0'
    },
  },
  plugins: [],
};
