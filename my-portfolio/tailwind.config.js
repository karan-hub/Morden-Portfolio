/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
        colors: {
        lightGray: "#F1F1F1",
      },
    },
  },
  plugins: [],
}
