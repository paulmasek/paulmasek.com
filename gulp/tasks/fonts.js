import gulp from 'gulp'
import browserSync from '../tasks/browser-sync-create'
import gulpConfig from '../gulp-config'
import newer from 'gulp-newer'

gulp.task(gulpConfig.fonts.task, () => {
  gulp.src(gulpConfig.fonts.src)
		.pipe(newer(gulpConfig.fonts.dest))
		.pipe(gulp.dest(gulpConfig.fonts.dest))
    .pipe(browserSync.stream())
})
