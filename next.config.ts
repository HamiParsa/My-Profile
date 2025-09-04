/** 
 * @type {import('next').NextConfig} 
 *
 * Next.js configuration file:
 * - Enables React Strict Mode for highlighting potential problems in development.
 * - Configures remotePatterns for loading images from "raw.githubusercontent.com".
 * - Prepares project for static export (GitHub Pages).
 * - Sets basePath and assetPrefix for GitHub Pages deployment.
 */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Export as static HTML for GitHub Pages
  basePath: '/my-portfolio', // Replace 'my-portfolio' with your repo name
  assetPrefix: '/my-portfolio/',
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
