/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["ufn-website-images-and-documents.s3.us-east-2.amazonaws.com"],
  },
  env: {
    NEXT_PUBLIC_S3_BASE_URL: process.env.NEXT_PUBLIC_S3_BASE_URL,
  },
};

module.exports = nextConfig;
