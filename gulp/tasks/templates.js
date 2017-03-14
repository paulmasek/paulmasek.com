import gulp from 'gulp'
import htmlmin from 'gulp-htmlmin'
import gulpConfig from '../gulp-config'
import gulpNotify from 'gulp-notify'
import frontMatter from 'gulp-front-matter'
import handlebars from 'gulp-hb'
import gulpRename from 'gulp-rename'
import handlebarsLayouts from 'handlebars-layouts'

gulp.task(gulpConfig.templates.task, () => {
  const handlebarsStream = handlebars({
    bustCache: true,
    debug: true
  })
  .helpers(handlebarsLayouts)
  .partials(gulpConfig.templates.src.partials + gulpConfig.templates.ext)
  .partials(gulpConfig.templates.src.layouts + gulpConfig.templates.ext)
  .data(gulpConfig.templates.src.data)

  return gulp.src(gulpConfig.templates.src.pages)
    .pipe(frontMatter({
      property: 'data',
      remove: true
    }))
    .pipe(handlebarsStream)
    .on('error', function(err) {
      gulpNotify({
        title: 'Handlebars render error',
        message: err.message
      }).write(err)
      this.emit('end')
      console.log(`Error:\n ${err.message}\nFile: ${err.fileName}`)
    })
    .pipe(gulpRename({
      extname: '.html'
    }))
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(gulpConfig.templates.dest))
})
