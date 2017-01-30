import packageInfo from './package.json'

let directories = {
  src: 'src',
  dest: 'build',
}

directories = {
  src: directories.src,
  dest: directories.dest,
  assets: `${directories.src}/assets/`,
  sass: `${directories.src}/assets/styles/`,
  sassFilename: `${packageInfo.name}.scss`,
  css: `${directories.dest}/assets/css/`,
  jsSrc: `${directories.src}/assets/js/`,
  jsDest: `${directories.dest}/assets/js/`,
  jsFilename: `${packageInfo.name}.js`,
  templates: `${directories.src}/templates/`,
  templateLayouts: `${directories.src}/templates/layouts/`,
  templatePages: `${directories.src}/templates/pages/`,
  templatePartials: `${directories.src}/templates/partials/`,
  data: `${directories.src}/data/`,
  imagesSrc: `${directories.src}/assets/images/`,
  imagesDest: `${directories.dest}/assets/images/`,
  fontsSrc: `${directories.src}/assets/fonts/`,
  fontsDest: `${directories.dest}/assets/fonts/`
}

export default {
  name: packageInfo.name,
  title: 'Project starter',
  directories: directories,
  //Static true, adds HTML injection via dist folder
  static: true,
  //Server true serves dist folder via BrowserSync server
  server: true,
  //If server is false, BrowserSync will proxy the hostname specified here
  localhost: false,
  //If wordpress is true, several addtional bits of functionality will be added to serve
  wordpress: false,
  tasks: {
    //Default gulp tasks before serve (BrowserSync) is started
    default: ['templates', 'styles', 'lintCSS', 'images', 'fonts'],
    //Tasks that gulp will trigger when files within these tasks are changed
    watch: ['templates', 'styles', 'lintCSS', 'images', 'fonts'],
  }
};
