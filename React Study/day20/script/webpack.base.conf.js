/*
 * @Author: zi.yang
 * @Date: 2020-06-16 13:38:41
 * @LastEditTime: 2020-07-02 17:25:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day20\script\webpack.base.conf.js
 */
const { HotModuleReplacementPlugin } = require("webpack")
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const config = {
  target: "web",
  mode: "development",
  entry: {
    app: "./src"
  },
  output: {
    path: path.resolve(__dirname,"../dist"),
    filename: "[hash:8].bundle.js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
    alias: {
      src: path.join(__dirname,"../src"),
      "@": path.join(__dirname,"../src/components"),
      common: path.join(__dirname,"../src/common"),
      static: path.join(__dirname,"../src/static"),
      container: path.join(__dirname,"../src/containers"),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        options: {
          babelrc: true,
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
            },
          },
          "less-loader",
        ],
      },
      {
        test: /\.(jpe?g|png|gif|cur)$/,
        loader: "url-loader",
        options: {
          limit: "1024",
          name: "[hash:8]-[name].[ext]",
        },
      },
      {
        test: /\.(eot|ttf|svg|woff|woff2|otf)$/,
        loader: "file-loader",
      },
    ],
  },

  devServer: {
    host: "0.0.0.0",
    port: "9009",
    open: "Chrome",
    hot: true,
    noInfo: false,
    contentBase: path.join(__dirname,"../dist"),
    overlay: {
      error: true,
      wran: true,
    },
    historyApiFallback: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname,"../public/index.html"),
      favicon: path.join(__dirname,"../public/favicon.ico"),
      filename: "index.html",
      inject: "body",
      showError: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      chunksSortMode:'auto'
    }),
    new CleanWebpackPlugin(),
    new HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin({ analyzerPort: 8919 }),
    new UglifyJSPlugin({
      parallel: 4,
      uglifyOptions: {
        output: {
          comments: false,
          beautify: false,
        },
        // compress: {
        //   warnings: false,
        // },
      },
      cache: true,
    }),
  ],
};

module.exports = config;
