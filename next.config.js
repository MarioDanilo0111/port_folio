/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true, // Disable Next.js Image Optimization API for local images
  },
};

module.exports = nextConfig;
