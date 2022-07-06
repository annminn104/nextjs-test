/** @type {import('next').NextConfig} */

module.exports = {
  experimental: {
    styledComponents: true,
  },
  images: {
    loader: "imgix",
    path: "",
  },
};
