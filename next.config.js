/** @type {import('next').NextConfig} */
module.exports = {
  // assetPrefix: "./", //uncommnet it out when running on dev
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com"
      }
    ]
  }
};
