/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Required for static export
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable Image Optimization API
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com", // For external images
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
