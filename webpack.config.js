const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BomPlugin = require('webpack-utf8-bom');

const { checkMODE, checkCONFIG } = require('./utils');

const mode = process.env.MODE;
const config = process.env.CONFIG;
checkMODE(mode);
checkCONFIG(config);

const devtool = mode === 'development' ? 'eval-source-map' : undefined;

module.exports = {
  mode,
  devtool,
  devServer: {
    contentBase: './build',
    compress: true,
    port: 9000,
  },
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                // '@babel/preset-typescript',
                '@babel/preset-react',
                {
                  targets: 'defaults',
                },
              ],
            ],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
        },
        exclude: /node_modules/,
      },
      {
        test: /\.json?$/,
        type: 'javascript/auto',
        use: {
          loader: 'raw-loader',
        },
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: false, // This prevents webpack from injecting <script defer src="./bundle.js"></script> in the header
    }),
    new BomPlugin(true),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    new webpack.DefinePlugin({
      // Here it creates webpack.env.CONFIG from the env var CONFIG
      'webpack.env.CONFIG': JSON.stringify(process.env.CONFIG),
    }),
  ],
  externals: {
    // eslint-disable-next-line global-require
    fs: require('fs'),
  },
};
