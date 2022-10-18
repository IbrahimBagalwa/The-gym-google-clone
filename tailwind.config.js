/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: {
        arial: ['Arial,sans-serif'],
      },
      fontSize: {
        primarySize: '0.813rem',
        secondarySize: '0.875rem',
        extreSize: '0.937rem',
      },
      colors: {
        'primary-color': '#f2f2f2',
        'secondary-color': '#70757a',
        'linkk-color': '#1A0DAB',
      },
      spacing: {
        mid: '500px',
      },
      screens: {
        '300p': '378px',
      },
    },
  },
  plugins: [],
};
