var gulp = require('gulp');
var umd  = require('gulp-umd');

gulp.task('default', function() {
  return gulp.src('./index.js')
    .pipe(umd())
    .pipe(gulp.dest('build'));
});
