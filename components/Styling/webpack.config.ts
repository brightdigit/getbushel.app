import path from "path";
import { Configuration } from "webpack";
import ESLintPlugin from "eslint-webpack-plugin";
import webpack from "webpack";
import dotenv from "dotenv";

// Load environment variables from root .env file
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

// Validate PLAUSIBLE_PAGE_ID is set
const plausiblePageId = process.env.PLAUSIBLE_PAGE_ID;
if (!plausiblePageId) {
  console.warn('\n⚠️  Warning: PLAUSIBLE_PAGE_ID environment variable is not set.');
  console.warn('   Analytics tracking will be disabled. See .env.example for setup instructions.\n');
}

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
  plugins:  [
    new ESLintPlugin({
      extensions : [".ts", ".js"]
    }),
    new webpack.DefinePlugin({
      "process.env.PLAUSIBLE_PAGE_ID": JSON.stringify(process.env.PLAUSIBLE_PAGE_ID || ""),
    })
  ]
};

export default config;
