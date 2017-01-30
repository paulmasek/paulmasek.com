import gulp from 'gulp'
import htmlmin from 'gulp-htmlmin'
import extname from 'gulp-extname'
import assemble from 'assemble'
import gulpConfig from '../gulp-config'

const assembleApp = assemble()

gulp.task('assemble-load', (cb) => {
  assembleApp.partials(gulpConfig.templates.src.partials + gulpConfig.templates.ext)
  assembleApp.layouts(gulpConfig.templates.src.layouts + gulpConfig.templates.ext)
  assembleApp.pages(gulpConfig.templates.src.pages + gulpConfig.templates.ext)
  assembleApp.data(gulpConfig.templates.src.data)
  cb()
})

gulp.task(gulpConfig.templates.task, ['assemble-load'], () => {
  return assembleApp.toStream('pages')
    .pipe(assembleApp.renderFile())
    .pipe(htmlmin())
    .pipe(extname())
    .pipe(assembleApp.dest(gulpConfig.templates.dest))
})
