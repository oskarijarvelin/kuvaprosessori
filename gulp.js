const gulp = require('gulp');
const webp = require('gulp-webp');
 
gulp.task('default', () =>
    gulp.src('2022/orig/**.*')
        .pipe(webp())
        .pipe(gulp.dest('2022'))
);