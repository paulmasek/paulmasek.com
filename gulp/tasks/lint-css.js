import gulp from 'gulp'
import stylelint from 'gulp-stylelint'
import gulpNotify from 'gulp-notify'
import gulpConfig from '../gulp-config'

gulp.task(gulpConfig.lintCSS.task, () => {
  gulp.src(gulpConfig.styles.src)
    .pipe(stylelint({
      failAfterError: true,
      reporters: [
        {
          formatter: 'string',
          console: true
        }
      ]
    }))
    .on('error', function(err) {
        gulpNotify({
          title: 'SCSS linting failed',
          message: 'See console',
          sound: 'Submarine'
        }).write(err)
        this.emit('end')
    })
})
