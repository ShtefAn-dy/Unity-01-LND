import gulp from "gulp";

import path from '../config/path.js';

import plumber from "gulp-plumber";
import notify from "gulp-notify";
import newer from "gulp-newer";
import ttf2woff from "gulp-ttf2woff";
import ttf2woff2 from "gulp-ttf2woff2";

// const wofffont = () => {
//   gulp.src(path.font.src)
//     .pipe(plumber({
//       errorHandler: notify.onError(error => ({
//         title: "WoffFONT",
//         message: error.message
//       }))
//     }))
//     .pipe(newer(path.font.dest))
//     .pipe(ttf2woff())
//     .pipe(gulp.dest(path.font.dest))
//   return gulp.src(path.font.src)
//     .pipe(ttf2woff2())
//     .pipe(gulp.dest(path.font.dest))
// }

const woff = () => {
  return gulp.src(path.font.src)
    .pipe(plumber({
      errorHandler: notify.onError(error => ({
        title: "WoffFONT",
        message: error.message
      }))
    }))
    .pipe(newer(path.font.dest))
    .pipe(ttf2woff())
    .pipe(gulp.dest(path.font.dest))
}

const woff2 = () => {
  return gulp.src(path.font.src)
    .pipe(plumber({
      errorHandler: notify.onError(error => ({
        title: "WoffFONT",
        message: error.message
      }))
    }))
    .pipe(newer(path.font.dest))
    .pipe(ttf2woff2())
    .pipe(gulp.dest(path.font.dest))
}

const wofffont = gulp.parallel(woff, woff2);

export default wofffont;