/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode:"jit",
  theme: {
    extend: {
      fontFamily: {
        'regular': ['font-regular', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

