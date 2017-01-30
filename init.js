import config from './config'
import fs from 'fs'

const directories = config.directories
let paths = {}

paths.assetsPaths = {
  fonts: directories.fontsSrc,
  js: directories.jsSrc,
  images: directories.imagesSrc,
  styles: directories.sass
}

if (!config.wordpress) {
  paths.templates = {
    templates: directories.templates,
    layouts: directories.templateLayouts,
    pages: directories.templatePages,
    partials: directories.templatePartials,
    data: directories.data
  }
}

let makePaths = [
  directories.src,
  directories.assets
]

for (var key in paths) {
  for (var i in paths[key]) {
    makePaths.push(paths[key][i])
  }
}

for (var i = 0; i < makePaths.length; i++) {
  let path = makePaths[i]

  fs.exists(path, (exists) => {
    if (!exists) {
      fs.mkdirSync(path)
    }
  })
}

let initialJS =
`if (module.hot) {
  module.hot.accept()
}
`

let files = [
  {
    path: directories.jsSrc + config.directories.jsFilename,
    contents: initialJS
  },
  {
    path: directories.sass + config.directories.sassFilename
  }
]

let indexFile =
`<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>{{global.title}}</title>
    <link href="/assets/css/{{global.name}}.css" rel="stylesheet">
  </head>
  <body>
    {{global.title}}
    <script src="assets/js/{{global.name}}.js"></script>
  </body>
</html>`


let initialData = {
  name: config.name,
  title: config.title,
}

initialData = JSON.stringify(initialData);

if (!config.wordpress) {
  files.push(
    {
      path: `${directories.data}global.json`,
      contents: initialData
    },
    {
      path: `${directories.templatePages}index.hbs`,
      contents: indexFile
    }
  )
}

for (let i = 0; i < files.length; i++) {
  let fileObj = files[i]

  fs.exists(fileObj.path, (exists) => {
    if (!exists) {
      let contents = ''

      if (typeof fileObj.contents !== 'undefined') {
        contents = fileObj.contents
      }

      fs.writeFileSync(fileObj.path, contents)
    }
  })
}
