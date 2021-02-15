const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BomPlugin = require('webpack-utf8-bom');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  devServer: {
    contentBase: './build',
    compress: true,
    port: 9000,
  },
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new BomPlugin(true),
  ],
};