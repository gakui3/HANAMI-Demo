const path = require("path");

module.exports = {
  mode: "development",

  entry: "./src/App.jsx",
  output: {
    path: `${__dirname}/docs`,
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/react"],
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        // generator: {
        //   filename: "imgs/[name][ext][query]",
        // },
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  target: ["web", "es5"],
  devServer: {
    hot: true,
    // historyApiFallback: true,
    port: 8081,
    watchFiles: ["src/**/*"],
    static: {
      directory: path.join(__dirname, "docs"),
    },
  },
};
