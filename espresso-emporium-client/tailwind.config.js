/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
        serif: ['Rancho', 'serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#4A321F',
          foreground: '#F9F5F1',
          hover: '#5D4027',
        },
        secondary: {
          DEFAULT: '#D2A76A',
          foreground: '#4A321F',
          hover: '#C79A5B',
        },
        background: {
          DEFAULT: '#F9F5F1',
          secondary: '#F1E8DF',
        },
        text: {
          DEFAULT: '#4A321F',
          secondary: '#6B5D4E',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
