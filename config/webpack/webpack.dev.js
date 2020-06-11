const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common');
const path = require('path');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, '../../dist'),
    open: true, // open in default browser
    inline: true, // run logs inline
    hot: true, // enable hot loading
    port: 4000,
    historyApiFallback: {
      rewrites: [
        // redirects all request to 'user' app to index.html, so the
        // client router can handle requests
        { from: /\/admin/, to: '/admin/index.html' },
        { from: /\/student/, to: '/student/index.html' },
        { from: /\/teacher/, to: '/support/index.html' },
        // Add any apps that need a router here
      ],
    },
  },
  plugins: [
    // Add plugin for HMR
    new webpack.HotModuleReplacementPlugin(),
  ],
});
