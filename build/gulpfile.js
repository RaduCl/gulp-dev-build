'use strict';
var host = '';
var user = '';
var pass = '';
var path = '';

var gulp =      require('gulp'),
    minicss =  require('gulp-minify-css'),
    sass =      require('gulp-sass'),
    watch =     require('gulp-watch');

//Compiles Sass
gulp.task('styles', function(){
    return gulp.src('styles/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(minicss({compatability: 'ie8'}))
        .pipe(gulp.dest('../deploy/styles/'));
        // .pipe(connect.reload());
});

gulp.task('build', function(){
    gulp.run('styles');
});

gulp.task('default', ['styles'], function(){
    gulp.watch('./styles/**/*.scss', ['styles']);
});
