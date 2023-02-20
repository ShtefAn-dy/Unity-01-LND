import gulp from "gulp";

import path from '../config/path.js';

import svgSprite from "gulp-svg-sprite";

const spritemulty = () => {
  return gulp.src(path.spritemulty.src)
    // .pipe(svgSprite({
    //   mode: {
    //     stack: {
    //       sprite: "../sprite.svg" //sprite file name
    //     }
    //   },
    // }))
    .pipe(svgSprite({
      mode:{
        symbol:{
          sprite: "../sprites/sprite-multy.svg"
        },
      },
      shape: {
        transform: [
          {
            svgo: {
              plugins: [
                {
                  removeAttrs: {
                    attrs: ['class', 'data-name'],
                  },
                },
                {
                  removeUselessStrokeAndFill: false,
                },
                {
                  inlineStyles: true,
                },
              ],
            },
          },
        ],
      },
    }))
    .pipe(gulp.dest(path.img.dest))
};

export default spritemulty;