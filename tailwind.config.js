/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/html/utils/withMT");

module.exports = withMT({
  content: ["./pages/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#2F55D4",
        primaryhover: "#294ab6",
        secondary: "#F1A73B",
        secondaryhover: "#c68a2f",
        success: "#3B8439",
      },
    },
  },
  plugins: [],
});
