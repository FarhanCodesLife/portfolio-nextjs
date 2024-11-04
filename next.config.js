/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['your-image-domain.com'], // Add your image domains here
  },
  // If you're using experimental features, make sure they're properly configured
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig 