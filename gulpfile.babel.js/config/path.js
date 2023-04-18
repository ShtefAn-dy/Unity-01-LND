const pathSrc = "./src";
const pathDest = "./dist";

export default {
  root: pathDest,

  html: {
    src: `${pathSrc}/html/*.html`,
    watch: `${pathSrc}/html/**/*.html`,
    dest: pathDest
  },
  pug: {
    src: `${pathSrc}/pug/*.pug`,
    watch: `${pathSrc}/pug/**/*.pug`,
    dest: pathDest
  },
  css: {
    src: `${pathSrc}/css/*.css`,
    watch: `${pathSrc}/css/**/*.css`,
    dest: `${pathDest}/css`
  },
  scss: {
    src: `${pathSrc}/scss/*.{sass,scss}`,
    watch: `${pathSrc}/scss/**/*.{sass,scss}`,
    dest: `${pathDest}/css`
  },
  js: {
    src: `${pathSrc}/js/*.js`,
    watch: `${pathSrc}/js/**/*.js`,
    dest: `${pathDest}/js`
  },
  img: {
    src: `${pathSrc}/img/**/*.{jpg,jpeg,png,svg,gif}`,
    watch: `${pathSrc}/img/**/*.{jpg,jpeg,png,svg,gif}`,
    dest: `${pathDest}/img`
  },
  font: {
    src: `${pathSrc}/font/**/*.{eot,otf,ttf,woff,woff2,svg}`,
    watch: `${pathSrc}/font/**/*.{eot,otf,ttf,woff,woff2,svg}`,
    dest: `${pathDest}/font`
  },
  spritemono: {
    src: `${pathSrc}/icons/mono/**/*.svg`,
    watch: `${pathSrc}/icons/mono/**/*.svg`,
    dest: `${pathDest}/`
  },
  spritemulty: {
    src: `${pathSrc}/icons/multy/**/*.svg`,
    watch: `${pathSrc}/icons/multy/**/*.svg`,
    dest: `${pathDest}/`
  },
  favicon: {
    src: `${pathSrc}/icons/favicon/favicon.svg`,
    watch: `${pathSrc}/icons/favicon/favicon.svg`,
    dest: `${pathDest}/img/favicon`
  },
  icomoon: {
    src: `${pathSrc}/icons/icomoon/**/*.svg`,
    watch: `${pathSrc}/icons/icomoon/**/*.svg`,
    dest: `${pathDest}/img/icomoon`
  }
}