const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

function styles()  {
    return gulp.src('./src/styles/main.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./dist/css'));
}

function scripts() {
    return gulp.src('./src/scripts/main.js')
    .pipe(gulp.dest('./dist/scripts'));
}

function image () {
    return gulp.src('./src/img/**/**')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/img'))
}

exports.default = gulp.parallel(styles, scripts, image);
exports.watch = function() {
    gulp.watch('./src/styles/main.scss', gulp.parallel(styles));
    gulp.watch('./src/scripts/main.js', gulp.parallel(scripts));

}