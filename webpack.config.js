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
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      proxy: 'http://localhost:8080/',
      reload: false,
      injectCss: true,
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
  },
  resolve: {
    fallback: {
      assert: require.resolve('assert/'),
      async_hooks: require.resolve('async_hooks/'),
      net: require.resolve('net/'),
      path: require.resolve('path-browserify'),
      querystring: require.resolve('querystring-es3'),
      crypto: require.resolve('crypto-browserify'),
      fs: false,
      stream: require.resolve('stream-browserify'),
      http: require.resolve('stream-http'),
      util: require.resolve('util/'),
      url: require.resolve('url/'),
      buffer: require.resolve('buffer/'),
      zlib: require.resolve('browserify-zlib'),
    },
  },
};