/** @type {import('next').NextConfig} */
const nextConfig = {
  // For local development, basePath is '/'
  // This file will be overwritten during deployment with the appropriate basePath
  images: {
    domains: ["images.unsplash.com", "app.packli.hu", "packli.hu"],
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
