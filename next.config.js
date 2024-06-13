/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["ufn-website-images-and-documents.s3.us-east-2.amazonaws.com"],
  },
  env: {
    CLOUDINARY_BASE_URL: process.env.CLOUDINARY_BASE_URL,
  },
};

module.exports = nextConfig;
