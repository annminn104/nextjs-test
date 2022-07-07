/** @type {import('next').NextConfig} */

module.exports = {
  experimental: {
    styledComponents: true,
  },
  images: {
    loader: "imgix",
    path: "",
    domains: ["tmdb.org", "themoviedb.org", "via.placeholder.com"],
    // domains: ["localhost:3000"],
    // formats: ["image/png", "image/webp", "image/jpg"],
  },
};
