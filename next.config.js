const webpack = require("webpack");

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.plugins = [
      ...config.plugins,
      new webpack.IgnorePlugin({
        resourceRegExp: /canvas/,
        contextRegExp: /jsdom$/,
      }),
    ];
    return config;
  },
};

module.exports = nextConfig;
