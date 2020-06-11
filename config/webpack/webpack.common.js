const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const fs = require('fs');

// grab all app packages (other than shared)
const packages = fs.readdirSync(path.join(__dirname, '../../src/packages')).filter((package) => package !== 'shared');
// generate entry points for all packages
const entry = packages.reduce((map, package) => {
  map[package] = [
    // needed for dynamic import statements
    'core-js',
    'regenerator-runtime/runtime',
    'core-js/modules/es.promise',
    'core-js/modules/es.array.iterator',
    path.join(__dirname, `../../src/packages/${package}/src/index.tsx`),
  ];
  return map;
}, {});
const htmlWebpackPlugins = packages
  // filter out landing.. that needs a specific config
  .filter((package) => package !== 'landing')
  .map(
    (package) =>
      new HtmlWebpackPlugin({
        chunks: [package],
        template: path.join(__dirname, `../../src/packages/${package}/src/index.html`),
        filename: `${package}/index.html`,
      }),
  );
module.exports = {
  entry,
  output: {
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      {
        test: /\.tsx?$/,
        exclude: /\.spec\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              // use the babel.config.js file
              babelrc: true,
            },
          },
          // Use awesome-typescript-loader to transpile
          // TS -> esnext code, then leverage babel to
          // do the rest.

          // This allows us to leave in the es6 module syntax,
          // which will give us treeshaking from webpack 4 out-of-the-box.
          'awesome-typescript-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules\/(?!(debug|informed)\/).*/,
        use: ['babel-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              // use the babel.config.js file
              babelrc: true,
            },
          },
          {
            loader: 'react-svg-loader',
            options: {
              jsx: true,
            },
          },
        ],
      },
      {
        test: /\.(woff|ttf|png)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  optimization: {
    // lets webpack handle loading of scripts
    // this will allow us to dynamically load modules
    runtimeChunk: true,
  },
  plugins: [
    new CleanWebpackPlugin(path.join(__dirname, '../../dist'), { allowExternal: true }),
    new HtmlWebpackPlugin({
      chunks: ['landing'],
      template: path.join(__dirname, '../../src/packages/landing/src/index.html'),
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].[contenthash].css',
      ignoreOrder: false,
    }),
    ...htmlWebpackPlugins,
  ],
};
