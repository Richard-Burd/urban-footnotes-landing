/** @type {import('next').NextConfig} */
const dotenv = require("dotenv");
dotenv.config();

const distDir =
  process.env.NODE_ENV === "development"
    ? `.next/dev-${process.pid}`
    : ".next";

const nextConfig = {
  distDir,
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
