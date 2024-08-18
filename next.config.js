/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  webpack: (config, { isServer }) => {
    // Handle JSON parsing issues
    config.module.rules.push({
      test: /\.json$/,
      loader: 'json-loader',
      type: 'javascript/auto',
    });

    // Resolve paths
    config.resolve.alias['@'] = path.resolve(__dirname);
    
    // Other custom webpack configuration...
    
    return config;
  },
};

module.exports = nextConfig;
