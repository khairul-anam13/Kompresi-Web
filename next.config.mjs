/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    remotePatterns: [],
    unoptimized: false,
  },
  // Ensure proper routing
  trailingSlash: false,
  // Optimize for production
  reactStrictMode: true,
  swcMinify: true,
}

export default nextConfig
