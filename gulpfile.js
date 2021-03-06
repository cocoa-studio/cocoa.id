'use strict';

var gulp = require('gulp');
var less = require('gulp-less');
var browserSync = require('browser-sync').create();

// Static Server + watching less/html files
gulp.task('serve', ['less'], function () {

  browserSync.init({
    server: "./public"
  });

  gulp.watch('public/css/*.less', ['less']);
  gulp.watch('public/js/*.js').on('change', browserSync.reload);
  gulp.watch("public/*.html").on('change', browserSync.reload);
});

// Compile less into CSS & auto-inject into browsers
gulp.task('less', function () {
  return gulp.src("public/css/*.less")
    .pipe(less())
    .pipe(gulp.dest("public/css"))
    .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);



