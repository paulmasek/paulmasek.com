import dir from 'require-dir'
import gulp from 'gulp'
import gulpConfig from './gulp/gulp-config'

const development = process.env.NODE_ENV === 'development'

dir('./gulp/tasks')

if (development) {
  gulp.task('default', ['serve'])
} else {
  gulp.task('build', gulpConfig.tasks.build)
}
