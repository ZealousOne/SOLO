// import { resolve } from 'path';
// import HtmlWebpackPlugin from 'html-webpack-plugin';
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require("dotenv-webpack"); 

module.exports = {
  // updated to reference package.json and change depending on run
  mode : process.env.NODE_ENV,
  entry : {
    index: path.join(__dirname, "src", "index.js")
  },

  // devtool : 'inline-source-map',
  devServer : {
    static: {
      directory: path.join(__dirname, './dist'),
      publicPath: '/'
    },
    host: 'localhost',
    port: 8080,
    proxy: {
      '/api': 'http://localhost:3000'
    }
  },
   plugins : [
    new Dotenv(),
    new HtmlWebpackPlugin({
      title: 'Development',
      template: path.join(__dirname, "src", "index.html"),
    }),
  ],
  output : {
    // filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // clean: true,
    // publicPath: '/',
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
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  
  resolve: {
    extensions: [".js", ".jsx"],
  },
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