const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const combineLoaders = require('webpack-combine-loaders');


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
        test: /\.module\.scss$/,
        loader: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]',
              camelCase: true,
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        exclude: /\.module.(scss)$/,
        loader: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
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
