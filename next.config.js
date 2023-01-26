/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['wp4.z1flexiblesolution.com', 'localhost', 'facebook.com'],
  },
};

module.exports = withBundleAnalyzer(nextConfig);
