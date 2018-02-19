import webpack from "webpack";
import path from "path";
import config from "./config";
import WebpackNotifierPlugin from "webpack-notifier";

const publicPath = config.directories.jsDest.replace(
  config.directories.dest,
  ""
);

const srcFilePath = path.join(
  process.cwd(),
  config.directories.jsSrc + config.directories.jsFilename
);
const destDirectory = path.join(process.cwd(), config.directories.jsDest);

const env = process.env.NODE_ENV;

const webpackConfig = {
  entry: {
    app: [srcFilePath]
  },

  output: {
    path: destDirectory,
    publicPath,
    filename: config.directories.jsFilename
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        enforce: "pre",
        options: {
          emitWarning: true,
          configFile: "./.eslintrc",
          fix: false
        }
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: "env"
            }
          }
        ]
      },
      {
        test: /\.hbs$/,
        exclude: /node_modules/,
        loader: "handlebars-loader"
      }
    ]
  },

  resolve: {
    extensions: [".js", ".json", ".jsx"],
    alias: {
      "noframework.waypoints": path.resolve(
        "node_modules",
        "waypoints/lib/noframework.waypoints.js"
      )
    }
  },

  plugins: [
    new webpack.EnvironmentPlugin(["NODE_ENV"]),
    new webpack.optimize.OccurrenceOrderPlugin()
  ]
};

if (!(env === "production")) {
  webpackConfig.entry.app.push("webpack/hot/dev-server");
  webpackConfig.entry.app.push("webpack-hot-middleware/client");
  webpackConfig.module.rules[1].use.push({
    loader: "webpack-module-hot-accept"
  });
  webpackConfig.devtool = "source-map";
  webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
  webpackConfig.plugins.push(
    new WebpackNotifierPlugin({
      title: `${config.name} webpack`,
      excludeWarnings: true,
      skipFirstNotification: true
    })
  );
} else {
  webpackConfig.devtool = "cheap-module-source-map";
  webpackConfig.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: false
      },
      mangle: false,
      sourceMap: false
    })
  );
}

export default webpackConfig;
