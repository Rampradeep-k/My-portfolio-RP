// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // If you're doing static export
  trailingSlash: true,
  images: {
    unoptimized: true // If using next/image in static export
  }
}

module.exports = nextConfig