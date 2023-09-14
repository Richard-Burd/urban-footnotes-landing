/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    CLOUDINARY_BASE_URL: process.env.CLOUDINARY_BASE_URL,
  },
};

module.exports = nextConfig;
