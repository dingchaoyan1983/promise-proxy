const path = require('path');

module.exports = {
  entry: "./index.js",

  output: {
    path: path.resolve(__dirname, "dist"), // string
    filename: "promise-proxy.js", // string
    library: "PromiseProxy", // string,
    libraryTarget: "umd", // universal module definition
  }
}