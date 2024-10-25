/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: '/datasanceWeb',
  basePath: '/datasanceWeb',
  output: 'export'
};

export default nextConfig;