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
    rules: [
              {
                 test: /\.ts$/,
                 use: [
                     "ts-loader"
                  ],
               },
               {
                  test: /\.css$/,
                  use: [
                     "style-loader",
                     {loader: "css-loader", options: {modules: false}}
                  ],
               }
         ]
  }
}
