import gulp from 'gulp'
import stylelint from 'gulp-stylelint'
import gulpNotify from 'gulp-notify'
import gulpConfig from '../gulp-config'

gulp.task(gulpConfig.lintCSS.task, () => {
  return gulp
    .src([gulpConfig.lintCSS.lint, `!${gulpConfig.lintCSS.ignore}`])
    .pipe(
      stylelint({
        debug: true,
        failAfterError: true,
        reporters: [
          {
            formatter: 'string',
            console: true,
          },
        ],
      })
    )
    .on('error', function(err) {
      gulpNotify({
        title: 'SCSS linting failed',
        message: err.message,
        sound: 'Submarine',
      }).write(err)
      this.emit('end')
    })
})
