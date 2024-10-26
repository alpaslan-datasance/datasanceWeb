import path from 'path';

const isProduction = process.env.NODE_ENV === 'production';

export default {
  reactStrictMode: true,

  basePath: isProduction ? '/datasanceWeb' : '',

  images: {
    domains: ['alpaslan-datasance.github.io'],
  },

  webpack: (config, { isServer }) => {
    config.resolve.alias['@'] = path.resolve('./src');
    config.resolve.alias['~'] = path.resolve('./public');

    return config;
  },

  trailingSlash: true,
  output: 'export'
};

