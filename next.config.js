/** @type {import('next').NextConfig} */
module.exports = {
  // reactStrictMode: true,
  images: {
    loader: "imgix",
    path: "http://zine.co.in/",
  },
  trailingSlash: true,
}
