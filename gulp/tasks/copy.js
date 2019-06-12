import gulp from 'gulp'
import gulpConfig from '../gulp-config'

gulp.task(gulpConfig.copy.task, () => {
  gulpConfig.copy.paths.forEach(item => {
    gulp.src(item.from, { dot: true }).pipe(gulp.dest(item.to))
  })
})
