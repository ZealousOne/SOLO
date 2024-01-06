const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const path = require('path');

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }));
// look in dist folder to serve files
app.use(express.static(path.resolve(__dirname, "../dist")));

// server html to homepage index.html 
app.get("/", (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, "../src/index.html"));
});
// catch all route for any unknown routes
app.use("*", (req, res) => {
  res.status(404).send("Page not found");
});


// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
// app.use(
//   webpackDevMiddleware(compiler, {
//     publicPath: config.output.publicPath,
//   })
// );

// Serve the files on port 3000.
app.listen(3000, function () {
  console.log('Example app listening on port 3000!\n');
});
