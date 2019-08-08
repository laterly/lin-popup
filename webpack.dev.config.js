const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle-min.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./index.html")
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "./dist"),
    open: false,
    port: 9005
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