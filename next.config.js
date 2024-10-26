import path from 'path';

export default {
  reactStrictMode: true,

  images: {
    domains: ['alpaslan-datasance.github.io'],
  },

  webpack: (config, { isServer }) => {
    config.resolve.alias['@'] = path.resolve('./src');
    config.resolve.alias['~'] = path.resolve('./public');

    return config;
  },

  basePath: '',
  trailingSlash: true,
  output: 'export'
};
