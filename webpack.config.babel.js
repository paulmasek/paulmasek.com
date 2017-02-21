import webpack from 'webpack'
import path from 'path'
import config from './config'
import WebpackNotifierPlugin from 'webpack-notifier'

const publicPath = config.directories.jsDest.replace(config.directories.dest, '')

export default {
  entry: {
    app: [
      'webpack/hot/dev-server',
      'webpack-hot-middleware/client',
      path.join(process.cwd(), config.directories.jsSrc + config.directories.jsFilename)
    ],
  },

  output: {
    path: path.join(process.cwd(), config.directories.jsDest),
    publicPath: publicPath,
    filename: config.directories.jsFilename
  },

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new WebpackNotifierPlugin({
      title: `${config.name} webpack`,
      excludeWarnings: true,
      skipFirstNotification: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      mangle: false,
      sourceMap: true
    })
  ],

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [path.resolve(__dirname, config.directories.jsSrc + config.directories.jsFilename)],
        exclude: /node_modules/,
        loader: 'eslint-loader',
        enforce: 'pre',
        options: {
          configFile: './.eslintrc',
          failOnWarning: false,
          failOnError: false,
          fix: false,
          quiet: false
        }
      },
      {
        test: /\.jsx?/,
        include: [path.join(process.cwd(), config.directories.jsSrc + config.directories.jsFilename)],
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: 'es2015'
            }
          },
          {
            loader: 'webpack-module-hot-accept'
          }
        ]
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.json', '.jsx'],
    alias: {
        "TweenLite": path.resolve('node_modules', 'gsap/src/uncompressed/TweenLite.js'),
        "TweenMax": path.resolve('node_modules', 'gsap/src/uncompressed/TweenMax.js'),
        "TimelineLite": path.resolve('node_modules', 'gsap/src/uncompressed/TimelineLite.js'),
        "TimelineMax": path.resolve('node_modules', 'gsap/src/uncompressed/TimelineMax.js'),
        "ScrollMagic": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js'),
        "animation.gsap": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'),
        "debug.addIndicators": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js')
    }
  },

  devtool: 'source-map'
}
