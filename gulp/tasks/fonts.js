import gulp from 'gulp'
import newer from 'gulp-newer'
import browserSync from '../tasks/browser-sync-create'
import gulpConfig from '../gulp-config'

gulp.task(gulpConfig.fonts.task, () => {
  gulp
    .src(gulpConfig.fonts.src)
    .pipe(newer(gulpConfig.fonts.dest))
    .pipe(gulp.dest(gulpConfig.fonts.dest))
    .pipe(browserSync.stream())
})
