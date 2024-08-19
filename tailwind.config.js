/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/*.html"],
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
      width: {
        card: "24rem",
        avatar: "5.625rem",
      },
      height: {
        avatar: "5.625rem",
      },
    },
  },
  plugins: [],
};
