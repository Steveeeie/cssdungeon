var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('compile-sass', function(){
  return gulp.src('sass/cssdungeon.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.stream());
})

gulp.task('default', ['compile-sass'], function(){
  browserSync.init({ server: { baseDir: "./" } });
  gulp.watch('sass/**/*.scss', ['compile-sass']);
});
