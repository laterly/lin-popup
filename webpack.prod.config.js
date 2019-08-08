const path = require("path");
module.exports = {
  mode: "production",
  entry: "./dist/bundle.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle-min.js"
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: "babel-loader"
      }
    ]
  }
};