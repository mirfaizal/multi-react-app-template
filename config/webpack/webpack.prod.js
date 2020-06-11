const merge = require('webpack-merge');
const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');

const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    // generate naming scheme using hashing for cache busting
    filename: '[name].[contenthash].js',
  },
  optimization: {
    splitChunks: {
      // split all possible chunks
      chunks: 'all',
    },
  },
  plugins: [
    // Bases part of hash on directory structure.
    // This will allow us to long-term cache vendor
    // chunks.
    new webpack.HashedModuleIdsPlugin(),
    // create gzipped compressed files
    new CompressionPlugin({
      algorithm: 'gzip',
    }),
  ],
});
