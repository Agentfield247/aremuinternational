/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. Forces Next.js to build a static HTML/CSS/JS package for cPanel
  output: "export",

  // 2. Next.js image optimization requires a Node server. Since cPanel usually serves static files, we must disable standard image optimization.
  images: {
    unoptimized: true,
  },

  // 3. Optional trailing slashes help cPanel's Apache server route directories correctly
  trailingSlash: true,
};

export default nextConfig;
