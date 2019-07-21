const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {

  entry: [
    './src/client/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|png|svg|jpg|gif|mp4|webm)$/,
        loader: 'url-loader'
      },
    ]
  },
  devServer: {
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    publicPath: '/',
    historyApiFallback: true,
    proxy: {
      '/': 'http://localhost:8080',
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([{
      from: './public'
    }]),
    new HtmlWebpackPlugin({ template: './public/index.html' }),
  ]
};