import path from "path";
import { Configuration } from "webpack";
import ESLintPlugin from "eslint-webpack-plugin";

const config: Configuration = {
  entry: "./scripts/index.ts",
  output: {
    path: path.resolve(__dirname),
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-typescript"],
          },
        },
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, "styles"),
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
        type: "asset",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  plugins:  [new ESLintPlugin({
    extensions : [".ts", ".js"]
  })]
};

export default config;
