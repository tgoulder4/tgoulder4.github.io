/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        mulish: ["Mulish", "sans-serif"],
        merriweather: ["Merriweather", "serif"],
        vt: ["VT323", "monospace"],
      },
    },
  },
  plugins: [],
};
