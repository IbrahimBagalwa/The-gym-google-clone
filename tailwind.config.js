/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Quicksand', 'arial'],
      },
      colors: {
        primary: '#f2f2f2',
        secondary: '#70757a',
        link: '#1A0DAB',
      },
      spacing: {
        mid: '500px',
      },
      minWidth: {
        mobile: '640px',
      },
      minHeight: {
        mobile: '170vh',
      },
    },
  },
  plugins: [],
};
