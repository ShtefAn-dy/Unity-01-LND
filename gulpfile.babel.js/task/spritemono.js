import gulp from "gulp";

import path from '../config/path.js';

import svgSprite from "gulp-svg-sprite";

const spritemono = () => {
  return gulp.src(path.spritemono.src)
    // .pipe(svgSprite({
    //   mode: {
    //     stack: {
    //       sprite: "../sprite.svg" //sprite file name
    //     }
    //   },
    // }))
    .pipe(svgSprite({
      mode: {
        symbol: {
          sprite: "../sprites/sprite-mono.svg"
        },
      },
      shape: {
        transform: [{
          svgo: {
            plugins: [
              {
                removeAttrs: {
                  attrs: ['class', 'data-name', 'fill', 'stroke.*'],
                },
              },
            ]
          }
        }]
      }
    }))
    .pipe(gulp.dest(path.img.dest))
};

export default spritemono;