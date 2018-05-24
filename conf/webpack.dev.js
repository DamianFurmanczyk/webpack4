const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

const css = {
  test: /\.css$/,
  use: [
    {
      loader: "style-loader"
    }, {
      loader: "css-loader"
    }
  ]
};

const js = {
  test: /\.js$/,
  use: [
    {
      loader: "babel-loader",
      exclude: /node_modules/,
      options: {
        presets: ["es2015"]
      }
    }
  ]
}

const htmlRules = {
  test: /\.html$/,
  use: [
    {
      loader: "file-loader",
      options: {
        name: "[name].html"
      }
    }, {
      loader: "extract-loader"
    }, {
      loader: "html-loader",
      options: {
        attrs: ["img:src"]
      }
    }
  ]
};

const styl = {
  test: /\.styl$/,
  use: [
    {
      loader: "style-loader"
    }, {
      loader: "css-loader"
    }, {
      loader: "stylus-loader"
    }
  ]
};

const sass = {
  test: /.\sass$/,
  use: [
    {
      loader: 'style-loader'
    }, {
      loader: 'css-loader'
    }, {
      loader: 'sass-loader'
    }
  ]
};

const pug = {
  test: /\.pug$/,
  use: [
    {
      loader: "pug-loader"
    }
  ]
}

const images = {
  test: /\.(jpg|gif|png)$/,
  use: {
    loader: "file-loader",
    options: {
      name: "imgs/[name].[ext]"
    }
  }
};

module.exports = {
  entry: {
    main: ["core-js/fn/promise", "./src/main.js"]
  },
  mode: "development",
  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/"
  },
  devServer: {
    contentBase: "dist",
    overlay: true,
    port: 3000
  },
  devtool: "source-map",
  module: {
    rules: [
      css,
      styl,
      sass,
      htmlRules,
      pug,
      images
    ]
  },
  plugins: [new htmlWebpackPlugin({template: './src/index.pug', title: "Boilerplatee"})]
};
