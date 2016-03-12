var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('compile-sass', function(){
  return gulp.src('sass/dungeon.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'));
})

gulp.task('default', ['compile-sass'], function(){
  gulp.watch('sass/**/*.scss', ['compile-sass']);
});
