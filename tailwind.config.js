/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        correct: '#9aeabc',
        incorrect: '#ff9393'
      },
    },
  },
  plugins: [],
}

