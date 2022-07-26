/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'jakarta': ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        'primary': '#FF7D35',
        'primary-two': '#F6762F',
        'gray-dark': '#1E1E1E',
        'gray-light': '#DADADA',
        'gray-light-two': '#DEDEDE',
      },
    },
  },
  plugins: [],
}
