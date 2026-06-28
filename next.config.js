/** @type {import('next').NextConfig} */
const nextConfig = {
  // Produce a fully static site in ./out — no Node server needed on Hostinger.
  output: 'export',

  // The static export has no image-optimization server, so images are served as-is.
  // (Assets are pre-compressed to WebP + JPG in /public/assets.)
  images: { unoptimized: true },

  // Emit folder/index.html routes so static hosts (Hostinger/Apache) serve clean URLs.
  trailingSlash: true,

  reactStrictMode: true,
};

module.exports = nextConfig;
