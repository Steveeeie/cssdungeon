var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();

gulp.task('compile-sass', function(){
  return gulp.src('sass/cssdungeon.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.stream());
})

gulp.task('default', ['compile-sass'], function(){
  browserSync.init({ server: { baseDir: "./" } });
  gulp.watch('sass/**/*.scss', ['compile-sass']);
});
