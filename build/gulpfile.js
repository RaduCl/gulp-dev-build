'use strict';
var host = '';
var user = '';
var pass = '';
var path = '';

var gulp =      require('gulp'),
    gutil =     require('gulp-util'),
    minicss =  require('gulp-minify-css'),
    concat =    require('gulp-concat'),
    jade =      require('gulp-jade'),
    sass =      require('gulp-sass'),
    minihtml =  require('gulp-minify-html'),
    gmin =      require('gulp-imagemin'),
    ftp =       require('gulp-ftp'),
    uglify =    require('gulp-uglify'),
    watch =     require('gulp-watch'),
    connect =   require('gulp-connect');

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
