/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
module.exports = {
 content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
 theme: {
  extend: {
   fontFamily: {
    sans: ["Raleway", ...defaultTheme.fontFamily.sans],
   },
   screens: {
    xs: "480px",
   },
   colors: {
    dark: colors.black,
    light: colors.white,
   },
  },
 },

 plugins: [],
};
