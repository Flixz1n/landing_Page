const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function styles()  {
    return gulp.src('./src/styles/main.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./dist/css'));
}

function scripts() {
    return gulp.src('./src/scripts/main.js')
    .pipe(gulp.dest('./dist/scripts'));
}

exports.default = gulp.parallel(styles, scripts);
exports.watch = function() {
    gulp.watch('./src/styles/main.scss', gulp.parallel(styles));
    gulp.watch('./src/scripts/main.js', gulp.parallel(scripts));

}