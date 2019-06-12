import gulp from 'gulp'
import sass from 'gulp-sass'
import sourcemaps from 'gulp-sourcemaps'
import postcss from 'gulp-postcss'
import autoprefixer from 'autoprefixer'
import cssNano from 'cssnano'
import gulpNotify from 'gulp-notify'
import browserSync from '../tasks/browser-sync-create'
import gulpConfig from '../gulp-config'

const development = process.env.NODE_ENV === 'development'

gulp.task(gulpConfig.styles.task, () => {
  const processors = [
    autoprefixer({
      browsers: gulpConfig.styles.prefix,
    }),
    cssNano({
      browsers: gulpConfig.styles.prefix,
      minifySelectors: false,
      safe: true,
    }),
  ]

  if (development) {
    gulp
      .src(gulpConfig.styles.src)
      .pipe(sourcemaps.init())
      .pipe(sass())
      .on('error', function(err) {
        gulpNotify({
          title: 'SCSS compilation error',
          message: 'See console',
          sound: 'Basso',
        }).write(err)
        this.emit('end')
        console.log(err.formatted)
      })
      .pipe(postcss(processors))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(gulpConfig.styles.dest))
      .pipe(browserSync.stream())
  } else {
    gulp
      .src(gulpConfig.styles.src)
      .pipe(sourcemaps.init())
      .pipe(sass())
      .on('error', function(err) {
        gulpNotify({
          title: 'SCSS compilation error',
          message: 'See console',
          sound: 'Basso',
        }).write(err)
        this.emit('end')
        console.log(err.formatted)
      })
      .pipe(postcss(processors))
      .pipe(gulp.dest(gulpConfig.styles.dest))
  }
})
