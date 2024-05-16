/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode:"jit", //Run in "jit" mode for faster build times.
  theme: {
    extend: {
      fontFamily: {
        'regular': ['font-regular', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

