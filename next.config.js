/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/datasanceWeb",
    output: "export",
    reactStrictMode: true,
    experimental: {
      appDir: true,
    },
    distDir: "out",
    images: {
      loader: "custom",
      loaderFile: './ImageLoader.js'
    },
  };

export default nextConfig;
