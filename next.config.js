const withPWA = require("next-pwa");

/** @type {import('next').NextConfig} */
const nextConfig = {
  pwa: {
    dest: "public",
    // register: true,
    // skipWaiting: true,
    // disable: process.env.NODE_ENV === "development",
  },
  reactStrictMode: true,
};

module.exports = withPWA(nextConfig);
