const express = require('express');
const webpack = require('webpack');
const webpacDevkMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config');

const compiler = webpack(config);

try {
  app.use(webpacDevkMiddleware(compiler, {
    publicPath: config.output.publicPath,
  }));
} catch (err) {
  console.log('err', err);
}

app.listen(3001);
