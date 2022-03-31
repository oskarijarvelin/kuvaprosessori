'use strict';

const gulp = require('gulp');
const webp = require('gulp-webp');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');

// ERROR-HANDLING
var error = function(err) {
  notify.onError({
    title:    "Gulp",
    subtitle: "Gulp-failure!",
    sound:    "Sosumi"
  })(err);
  this.emit('end');
}; 

gulp.task('2021', () =>
    gulp.src('./2021/orig/*.{png,tiff,jpg,jpeg,JPG}')
        .pipe(plumber({errorHandler: error}))
        .pipe(webp({ resize: { width: 1216, height: 0 } }))
        .pipe(gulp.dest('./2021'))
);
 
gulp.task('2022', () =>
    gulp.src('./2022/orig/*.{png,tiff,jpg,jpeg,JPG}')
        .pipe(plumber({errorHandler: error}))
        .pipe(webp({ resize: { width: 1216, height: 0 } }))
        .pipe(gulp.dest('./2022'))
);

gulp.task('default', gulp.series('2021', '2022')); 