/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  reactStrictMode: true,
  // `distDir` debe ser relativo al root del proyecto (Next concatena si es absoluto)
  distDir: process.env.NEXT_DIST_DIR || ".next-dist",
  experimental: { esmExternals: true },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "zecat-user-images-prod.s3.amazonaws.com",
        port: "",
      },
      { protocol: 'https', hostname: '**.zecat.com' },
      { protocol: 'https', hostname: '**.cdn**' },
    ],
    domains: [
      "res.cloudinary.com",
      "firebasestorage.googleapis.com",
      "images-cdn.zecat.com",
      "d1yq3fbd6icaus.cloudfront.net",
    ],
  },
};

module.exports = withBundleAnalyzer(nextConfig);
