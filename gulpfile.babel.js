import dir from 'require-dir'
import gulp from 'gulp'

dir('./gulp/tasks')

gulp.task('default', ['serve'])
