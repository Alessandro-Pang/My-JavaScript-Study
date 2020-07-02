/*
 * @Author: zi.yang
 * @Date: 2020-06-16 13:38:41
 * @LastEditTime: 2020-07-02 17:16:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day20\script\webpack.prod.conf.js
 */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const config = {
  target: "web",
  mode: "production",
  entry: {
    app: "./src",
    vendor: [
      "react",
      "react-dom",
      "react-router-dom",
      "redux",
      "react-redux",
      "antd",
    ],
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
          limit: 10240,
          name: "[hash:8]-[name].[ext]",
        },
      },
      {
        test: /\.(eot|ttf|svg|woff|woff2|otf)$/,
        loader: "file-loader",
      },
    ],
  },
  //optimization与entry/plugins同级
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: "vendor",
          chunks: "initial",
          minChunks: 2,
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname,"../public/index.html"),
      favicon: path.join(__dirname,"../public/favicon.ico"),
      filename: "index.html",
      inject: "body",
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
    new BundleAnalyzerPlugin({ analyzerPort: 8919 }),
    new UglifyJSPlugin({
      parallel: 4,
      uglifyOptions: {
        output: {
          comments: false,
          beautify: false,
        },
      },
      cache: true,
    }),
  ],
};

module.exports = config;
