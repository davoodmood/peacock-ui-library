const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
    return src('./peacock/**/*.scss')
        .pipe(sass())
        .pipe(dest('./assets/css'));

}

function watchTask() {
    watch(['./peacock/**/*.scss'], buildStyles);
}

exports.default = series(buildStyles, watchTask)