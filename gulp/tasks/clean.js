import gulp from 'gulp'
import del from 'del'
import gulpConfig from '../gulp-config'

gulp.task(gulpConfig.clean.task, () => {
  del.sync(gulpConfig.clean.del)
})
