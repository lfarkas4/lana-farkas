/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    // Force Turbopack to treat THIS folder as the root (prevents duplicate React)
    root: __dirname,
  },
};

module.exports = nextConfig;
