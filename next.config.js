/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true
  },
  // Add basePath for GitHub Pages deployment
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  // Disable trailing slashes
  trailingSlash: false,
};

module.exports = nextConfig;
