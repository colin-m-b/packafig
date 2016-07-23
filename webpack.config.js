const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './client/app.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.css$/, loader: 'style!css',
      },
    ],
  },
};
