import gulp from "gulp";

import path from "../config/path.js";
import app from "../config/app.js";

import plumber from "gulp-plumber";
import notify from "gulp-notify";
import size from "gulp-size";
import fileinclude from "gulp-file-include";
import htmlmin from "gulp-htmlmin";
import webpHTML from 'gulp-webp-html';

const html = () => {
  return gulp.src(path.html.src)
    .pipe(plumber({
      errorHandler: notify.onError(error => ({
        title: "HTML",
        message: error.message

      }))
    }))
    .pipe(fileinclude({
      prefix: '@',
      basepath: '@file'
    }))
    .pipe(webpHTML())
    .pipe(size({
      title: "html uncomressed"
    }))
    .pipe(htmlmin(app.htmlmin))
    .pipe(size({
      title: "html compressed"
    }))
    .pipe(gulp.dest(path.html.dest));
};

export default html;