import gulp from "gulp";

import path from'../config/path.js';
import app from"../config/app.js";

import plumber from "gulp-plumber";
import notify from "gulp-notify";
import concat from "gulp-concat";
import cssimport from "gulp-cssimport";
import autoprefixer from "gulp-autoprefixer";
import cleanCSS from "gulp-clean-css";
import rename from "gulp-rename";
import size from "gulp-size";
import shorthand from "gulp-shorthand";
import gcmq from "gulp-group-css-media-queries";
import webpCSS from "gulp-webp-css";

const css = () => {
  return gulp.src(path.css.src, {
      sourcemaps: app.isDev
    })
    .pipe(plumber({
      errorHandler: notify.onError(error => ({
        title: "CSS",
        message: error.message
      }))
    }))
    .pipe(concat("main.css"))
    .pipe(cssimport())
    .pipe(webpCSS())
    .pipe(autoprefixer({
      cascade: false,
      grid: true
    }))
    .pipe(shorthand())
    .pipe(gcmq())
    .pipe(size({title: "main.css"}))
    .pipe(gulp.dest(path.css.dest, {
      sourcemaps: app.isDev
    }))
    .pipe(cleanCSS({
      level: 2
    }))
    .pipe(rename({
      suffix: ".min"
    }))
    .pipe(size({title: "main.min.css"}))
    .pipe(gulp.dest(path.css.dest, {
      sourcemaps: app.isDev
    }))
}

export default css;