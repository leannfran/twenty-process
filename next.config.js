/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { esmExternals: true },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'zecat-user-images-prod.s3.amazonaws.com',
        port: '',
      },
    ],
    domains: ['res.cloudinary.com','firebasestorage.googleapis.com']
  },
}

module.exports = nextConfig
