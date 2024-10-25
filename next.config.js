/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'Production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? '/datasanceWeb' : "",
  basePath: isProd ? '/datasanceWeb' : "",
  output: 'export',
};

export default nextConfig;