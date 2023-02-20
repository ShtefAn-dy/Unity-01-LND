import gulp from "gulp";

import path from "../config/path.js";
import app from "../config/app.js"

import plumber from "gulp-plumber";
import notify from "gulp-notify";
import gulppug from "gulp-pug";
import webpHTML from 'gulp-webp-html';

const pug = () => {
  return gulp.src(path.pug.src)
    .pipe(plumber({
      errorHandler: notify.onError(error => ({
        title: "PUG",
        message: error.message

      }))
    }))
    .pipe(gulppug(app.gulppug))
    .pipe(webpHTML())
    .pipe(gulp.dest(path.pug.dest))
};

export default pug;