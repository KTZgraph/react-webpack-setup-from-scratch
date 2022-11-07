const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(scss|sass|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          // "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
  //   domyślny tryb
  mode: "development",
  output: {
    // za kazdym razemm mają się nadpisywać pliki
    clean: true,
    path: path.join(__dirname, "/dist"),
    filename: "index.bundle.js",
  },
  devServer: {
    // żeby otwierało się w knowej karcie
    open: true,
    static: {
      // konfiguracja katalogu do plików statycznych
      directory: path.join(__dirname, "react-webpack-setup-from-scratch"),
    },
    // comkpresaj dobrze dać
    compress: true,
    port: 9000,
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      // nie chcę korzystać z pamieci podręcznej przeglądarki
      hash: true,
      title: "react-webpack-setup-from-scratch title",
      header: "react-webpack-setup-from-scratch header",
      metaDesc: "react-webpack-setup-from-scratch metaDesc",
      template: "./src/index.html",
      filename: "index.html",
      inject: "body",
    }),
  ],
};
