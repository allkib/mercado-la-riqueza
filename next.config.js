/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Optimize images - reduce sizes to save build time
  images: {
    formats: ['image/webp'], // Removed AVIF to speed up builds
    deviceSizes: [640, 750, 1080, 1200, 1920], // Reduced sizes
    imageSizes: [16, 32, 64, 96, 128, 256], // Reduced sizes
    minimumCacheTTL: 60, // Cache images
  },
  // Reduce build output for faster builds
  swcMinify: true,
  // Optimize production builds
  compress: true,
  // Disable source maps in production to speed up builds (optional)
  productionBrowserSourceMaps: false,
}

module.exports = nextConfig
