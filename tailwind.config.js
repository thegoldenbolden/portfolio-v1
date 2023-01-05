/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
 content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
 theme: {
  extend: {
   fontFamily: {
    sans: ["Raleway", ...defaultTheme.fontFamily.sans],
   },
   screens: {
    "3xl": "1600px",
   },
   colors: {
    dark: "#0c0c0c",
    light: "#fcfcfc",
    linkedin: "#0a66c2",
    twitter: "#1d9bf0",
    github: "#171515",
    spotify: "#1DB954",
    gmail: "#db4437",
    instagram: "#F77737",
    primary: "#ce2d4f",
   },
  },
 },

 plugins: [],
};
