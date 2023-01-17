/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['wp4.z1flexiblesolution.com', 'localhost', 'facebook.com'],
  },
};

module.exports = nextConfig;
