import gulp from "gulp";

import path from "./config/path.js";
import app from "./config/app.js";

import browserSync from "browser-sync";

import clear from "./task/clear.js";
import html from "./task/html.js";
// import pug from "./task/pug.js";
// import css from "./task/css.js";
import scss from "./task/scss.js";
import js from "./task/js.js";
import img from "./task/img.js";
// import allfont from "./task/allfont.js";
import wofffont from "./task/wofffonts.js";
import spritemono from "./task/spritemono.js";
import spritemulty from "./task/spritemulty.js";
import favicon from "./task/favicon.js";

const watcher = () => {
  // gulp.watch(path.pug.watch, pug).on("all", browserSync.reload)
  gulp.watch(path.html.watch, html).on("all", browserSync.reload)
  // gulp.watch(path.css.watch, css).on("all", browserSync.reload)
  gulp.watch(path.scss.watch, scss).on("all", browserSync.reload)
  gulp.watch(path.js.watch, js).on("all", browserSync.reload)
  gulp.watch(path.img.watch, img).on("all", browserSync.reload)
  // gulp.watch(path.font.watch, allfont).on("all", browserSync.reload)
  gulp.watch(path.font.watch, wofffont).on("all", browserSync.reload)
  gulp.watch(path.spritemono.watch, spritemono).on("all", browserSync.reload)
  gulp.watch(path.spritemulty.watch, spritemulty).on("all", browserSync.reload)
  gulp.watch(path.favicon.watch, favicon).on("all", browserSync.reload)
};

const server = () => {
  browserSync.init({
    server: {
      baseDir: path.root
    }
  })
}

const build = gulp.series(
  clear,
  gulp.parallel(html, scss, img, wofffont, spritemono, spritemulty, favicon, js)
  //pug, css, allfont
)

const dev = gulp.series(
  build,
  gulp.parallel(watcher, server)
)

export {
  clear, html, scss, js, img, wofffont, spritemono, spritemulty, favicon
  //pug, css, allfont
};

export default app.isProd ? build : dev;

// gulp --prod for production mode / gulp for development mode

// npm run build / npm start