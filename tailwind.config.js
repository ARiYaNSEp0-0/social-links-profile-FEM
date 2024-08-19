/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      screen: {
        mobile: "375px",
        desktop: "1440px",
      },
      fontFamily: {
        serif: ['"Inter"', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        green: {
          DEFAULT: "#c5f82a",
        },
        gray: {
          700: "#333333",
          800: "#1f1f1f",
          900: "#141414",
        },
      },
    },
  },
  plugins: [],
};
