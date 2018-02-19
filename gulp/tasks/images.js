import gulp from 'gulp'
import imagemin from 'gulp-imagemin'
import newer from 'gulp-newer'
import browserSync from '../tasks/browser-sync-create'
import gulpConfig from '../gulp-config'

gulp.task(gulpConfig.images.task, () => {
  gulp
    .src(gulpConfig.images.src)
    .pipe(newer(gulpConfig.images.dest))
    .pipe(
      imagemin({
        progressive: true,
        svgoPlugins: [
          {
            removeViewBox: false,
          },
          {
            mergePaths: false,
          },
        ],
        optimizationLevel: 3,
      })
    )
    .pipe(gulp.dest(gulpConfig.images.dest))
    .pipe(browserSync.stream())
})
