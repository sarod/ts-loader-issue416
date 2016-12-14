'use strict';


module.exports = {
  entry: './app.ts',
  output: {
  	path: "dist",
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  }
}
