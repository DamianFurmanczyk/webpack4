const path = require("path");

const css = {
  test: /\.css$/,
  use: [{ loader: "style-loader" }, { loader: "css-loader" }]
};

const htmlRules = {
  test: /\.html$/,
  use: [
    {
      loader: "file-loader",
      options: {
        name: "[name].html"
      }
    },
    { loader: "extract-loader" },
    { loader: "html-loader" }
  ]
};

module.exports = {
  entry: {
    main: "./src/main.js"
  },
  mode: "development",
  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/"
  },
  devServer: {
    contentBase: "dist",
    overlay: true
  },
  module: {
    rules: [css, htmlRules]
  }
};
