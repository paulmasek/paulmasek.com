import gulp from 'gulp'
import browserSync from '../tasks/browser-sync-create'
import htmlInjector from 'bs-html-injector'
import config from '../../config'
import gulpConfig from '../gulp-config'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpack from 'webpack'
import webpackSettings from '../../webpack.config.babel'

const bundler = webpack(webpackSettings)


gulp.task('serve', gulpConfig.tasks.default, () => {
  let middleware = false

  if (config.static) {
    browserSync.use(htmlInjector, {
      files: `${config.directories.dest}/**/*.html`
    })
  }

  let browserSyncSettings = {
    open: false,
    notify: false
  }

  if (process.env.NODE_ENV === 'development') {
    middleware = [
      webpackDevMiddleware(bundler, {
        noInfo: true,
        publicPath: webpackSettings.output.publicPath,
        stats: {
          colors: true
        }
      }),
      webpackHotMiddleware(bundler)
    ]
  }

  if (config.server) {
    browserSyncSettings.server = {
      baseDir: config.directories.dest,
      middleware: middleware
    }
  } else if (config.localhost) {
    browserSyncSettings.proxy = {
      target: config.localhost,
      middleware: middleware
    }
  }

  if (config.wordpress) {
    browserSyncSettings.snippetOptions = {
      whitelist: ['/wp-admin/admin-ajax.php'],
      blacklist: ['/wp-admin/**']
    }
  }

  browserSync.init(browserSyncSettings)

  if (typeof config.tasks.watch!== 'undefined') {
    config.tasks.watch.forEach((task) => {
      if (typeof gulpConfig[task] !== 'undefined') {
        gulp.watch(gulpConfig[task].watch, [task])
      }
    })
  }

  if (typeof gulpConfig.serve.reload !== 'undefined') {
    gulpConfig.serve.reload.forEach((directory) => {
      gulp.watch(directory).on('change', browserSync.reload)
    })
  }
})
