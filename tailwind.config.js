/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
 content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
 theme: {
  extend: {
   fontFamily: {
    serif: ["Nixie One", ...defaultTheme.fontFamily.serif],
    sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
   },

   screens: {
    xs: "480px",
   },

   colors: {
    primary: "rgb(30,30,30)",
    complement: "white",
    inset: "black",
    accent: "rgba(255 255 255 / .75)",
   },
  },
 },

 plugins: [],
};
