'use strict';

//引入gulp包依赖，nodejs代码
var gulp = require('gulp');
//引入gulp-sass 包
var sass = require('gulp-sass');

//创建一个gulp的任务
gulp.task('sass', function () {
    return gulp.src('src/sass/**/*.scss')
      .pipe(sass({ontputStyle: 'expanded'}).on('error', sass.logError))
      .pipe(gulp.dest('src/css/'));
  });

//创建gulp监听任务：sass监听任务 ：watch
gulp.task('sass:watch', function () {
    gulp.watch('src/sass/**/*.scss', ['sass']);
  });

// gulp的默认任务
gulp.task('default',['sass:watch'],function(){

});