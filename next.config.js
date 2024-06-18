/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ufn-website-images-and-documents.s3.us-east-2.amazonaws.com",
        pathname: "**",
      },
    ],
  },
  env: {
    NEXT_PUBLIC_S3_BASE_URL: process.env.NEXT_PUBLIC_S3_BASE_URL,
  },
};

module.exports = nextConfig;
