const nextConfig = {
  output: "export",
  images: {
    loader: "custom",
    loaderFile:'./ImageLoader.js'
  },
};

export default nextConfig;