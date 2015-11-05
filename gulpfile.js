var gulp        = require('gulp');
var less        = require('gulp-less');
var combiner    = require('stream-combiner2');
var changed     = require('gulp-changed');
var concat      = require('gulp-concat');
var rename      = require('gulp-rename');
var minifyCSS   = require('gulp-minify-css');



gulp.task('less', function() {
    var combined = combiner.obj([
        gulp.src('src/less/styles.less'),
        changed('path.in.less'),
        less(),
        concat('styles.css'),
        minifyCSS(),
        rename('styles.min.css'),
        gulp.dest('dist/')
      ]);

      combined.on('error', console.error.bind(console));
      return combined;
});

gulp.task('less:watch', ['less'], function() {
  gulp.watch('src/less/**/*.less', ['less']);
});
