var gulp = require('gulp');
var ts = require('gulp-typescript');
var less = require('gulp-less');

gulp.task('less', [], function () {
  return gulp.src('app/**/*.less')
    .pipe(less())
    .pipe(gulp.dest('www'));
});

gulp.task('typescript', [], function () {
    return gulp.src('app/**/*.ts')
    .pipe(ts())
    .js.pipe(gulp.dest('www'));
});

gulp.task('watch', [], function () {
    gulp.watch('./**/*.ts', ['typescript']);
    gulp.watch('./**/*.less', ['less']);
});

gulp.task('default', ['less', 'typescript', 'watch'], function () {
});
