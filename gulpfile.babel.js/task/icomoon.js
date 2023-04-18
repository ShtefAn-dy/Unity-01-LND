import gulp from "gulp";

import path from '../config/path.js';
import app from "../config/app.js";

import plumber from "gulp-plumber";
import notify from "gulp-notify";



const icomoon = () => {
  return gulp.src(path.icomoon.src)
    .pipe(plumber({
      errorHandler: notify.onError(error => ({
        title: "ICOMOON",
        message: error.message
      }))
    }))
    .pipe(gulp.dest(path.icomoon.dest));
};

export default icomoon;