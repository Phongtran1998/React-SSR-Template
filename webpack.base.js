const HtmlWebpackPlugin = require("copy-webpack-plugin");
module.exports = {
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            "react",
            "stage-0",
            ["env", { targets: { browsers: ["last 2 versions"] } }]
          ]
        }
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg|ico)$/,
        use: ["file-loader"]
      }
    ]
  }
};
