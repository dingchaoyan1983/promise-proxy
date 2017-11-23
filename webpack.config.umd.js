const path = require('path');
const webpack = require('webpack');
const fs = require('fs');

const nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {
  entry: "./src/index.js",

  output: {
    path: path.resolve(__dirname, "dist", "umd"), // string
    filename: "promise-proxy.js", // string
    library: "PromiseProxy", // string,
    libraryTarget: "umd", // universal module definition
  },

  module: {
    rules: [
      {
        test: /\.js?$/,     
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ],
}
