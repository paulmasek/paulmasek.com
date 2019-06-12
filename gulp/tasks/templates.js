import gulp from 'gulp'
import htmlmin from 'gulp-htmlmin'
import gulpNotify from 'gulp-notify'
import frontMatter from 'gulp-front-matter'
import handlebars from 'gulp-hb'
import gulpRename from 'gulp-rename'
import handlebarsLayouts from 'handlebars-layouts'
import handlebarsHelpers from 'handlebars-helpers'
import gulpConfig from '../gulp-config'

gulp.task(gulpConfig.templates.task, () => {
  const handlebarsStream = handlebars({
    bustCache: true,
    debug: false,
  })
    .helpers(handlebarsHelpers)
    .helpers(handlebarsLayouts)
    .partials(gulpConfig.templates.src.partials + gulpConfig.templates.ext)
    .partials(gulpConfig.templates.src.layouts + gulpConfig.templates.ext)
    .data(gulpConfig.templates.src.data)
    .data({
      DEPLOY_URL: process.env.DEPLOY_URL,
      GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID,
    })

  return gulp
    .src(gulpConfig.templates.src.pages)
    .pipe(
      frontMatter({
        property: 'data',
        remove: true,
      })
    )
    .pipe(handlebarsStream)
    .on('error', function(err) {
      gulpNotify({
        title: 'Handlebars render error',
        message: err.message,
      }).write(err)
      this.emit('end')
      console.log(`Error:\n ${err.message}\nFile: ${err.fileName}`)
    })
    .pipe(
      gulpRename({
        extname: '.html',
      })
    )
    .pipe(htmlmin())
    .pipe(gulp.dest(gulpConfig.templates.dest))
})
