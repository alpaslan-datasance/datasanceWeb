const nextConfig = {
  output: "export",
  images: {
    loader: "custom",
    path:'./ImageLoader.js'
  },
  assetPrefix: "./",
};

export default nextConfig;