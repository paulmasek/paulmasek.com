import options from '../config'

const { directories } = options

const gulpConfig = {
  tasks: options.tasks,

  styles: {
    task: 'styles',
    watch: `${directories.sass}**/*.scss`,
    src: `${directories.sass}${directories.sassFilename}`,
    dest: `${directories.css}`,
    prefix: ['last 2 versions', 'ie 11', 'ie 10'],
  },

  templates: {
    task: 'templates',
    ext: '.hbs',
    watch: [`${directories.templates}**/*.hbs`, `${directories.data}**/*.json`],
    src: {
      partials: `${directories.templatePartials}*`,
      layouts: `${directories.templateLayouts}*`,
      pages: `${directories.templatePages}*`,
      data: [`${directories.data}*.json`],
    },
    dest: directories.dest,
  },

  lintCSS: {
    task: 'lintCSS',
    lint: `${directories.sass}**/*.scss`,
    ignore: `${directories.sass}vendor/**/*.scss`,
    watch: `${directories.sass}**/*.scss`,
  },

  images: {
    task: 'images',
    src: `${directories.imagesSrc}**/*`,
    dest: directories.imagesDest,
    watch: `${directories.imagesSrc}**/*`,
  },

  fonts: {
    task: 'fonts',
    src: `${directories.fontsSrc}**/*`,
    dest: directories.fontsDest,
    watch: `${directories.fontsSrc}**/*`,
  },

  copy: {
    task: 'copy',
    paths: directories.copy,
  },

  clean: {
    task: 'clean',
    del: `${directories.dest}/**`,
  },

  serve: {
    browserSync: {
      open: false,
      notify: false,
    },
    reload: [`${directories.src}/**/*.php`],
  },
}

export default gulpConfig
