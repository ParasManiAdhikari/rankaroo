/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pgreen: {
          '700' : '#373d34',
          '800' : '#2d322b',
        }

      },
      width: {
        '100': '30rem',
      },
      height: {
        '100': '30rem',
      },
    },
  },
  plugins: [],
}

