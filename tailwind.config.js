/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
 content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
 theme: {
  extend: {
   fontFamily: {
    serif: ["Nixie One", ...defaultTheme.fontFamily.serif],
    sans: ["Raleway", ...defaultTheme.fontFamily.sans],
   },

   screens: {
    xs: "480px",
   },

   colors: {
    primary: colors.black,
   },
  },
 },

 plugins: [],
};
