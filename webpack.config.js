// import { resolve } from 'path';
// import HtmlWebpackPlugin from 'html-webpack-plugin';
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode :'development',
  entry : {
    index: './index.js'
  },

  devtool : 'inline-source-map',
  devServer : {
    static: {
      directory: path.join(__dirname, './dist'),
    },
    host: 'localhost',
    port: 8080,
  },
   plugins : [
    new HtmlWebpackPlugin({
      title: 'Development',
    }),
  ],
  output : {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/',
  },
  module : {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  }
}


// older code 

// export const mode = 'development';
// export const entry = {
//   index: './index.js'
// };
// export const devtool = 'inline-source-map';
// export const devServer = {
//   static: './dist',
//   host: 'localhost',
//   port: 8080,
// };
// export const plugins = [
//   new HtmlWebpackPlugin({
//     title: 'Development',
//   }),
// ];
// export const output = {
//   filename: '[name].bundle.js',
//   path: resolve(__dirname, 'dist'),
//   clean: true,
//   publicPath: '/',
// };
// export const module = {
//   rules: [
//     {
//       test: /\.(js|jsx)$/,
//       exclude: /node_modules/,
//       use: {
//         loader: 'babel-loader',
//         options: {
//           presets: ['@babel/preset-env', '@babel/preset-react'],
//         },
//       },
//     },
//   ],
// };