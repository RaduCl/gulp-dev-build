'use strict';
var host = '';
var user = '';
var pass = '';
var path = '';

var gulp =      require('gulp');
var watch =     require('gulp-watch');
var concat =    require('gulp-concat');
var sass =      require('gulp-sass');
var uglify =    require('gulp-uglify');

//Compiles Sass
gulp.task('styles', function(){
  return gulp.src('styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('../deploy/styles/'));
});

gulp.task('build', function(){
    gulp.run('styles');
});

gulp.task('default', ['styles'], function(){
    gulp.watch('./styles/**/*.scss', ['styles']);
});
