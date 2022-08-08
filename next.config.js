/** @type {import("next").NextConfig} */
const path = require("path");

const nextConfig = {
 reactStrictMode: true,
 swcMinify: true,
 experimental: {
  images: {
   allowFutureImage: true,
  },
 },
 sassOptions: {
  includePaths: [path.join(__dirname, "styles")],
  prependData: `@import "main.scss";`,
 },
};
module.exports = nextConfig;
