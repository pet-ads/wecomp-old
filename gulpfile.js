'use strict';

var gulp = require( 'gulp' );
var connect = require( 'gulp-connect' );
var files = [ 'index.html', '../assets/css/style.css' ];
var surge = require('gulp-surge');


gulp.task('deploy', ['build'], () => {
  return surge({
    project: '/',         // Path to your static build directory
    domain: 'wecomp.surge.sh'  // Your domain or Surge subdomain
  })
});

gulp.task( 'files', function() {
  gulp.src( files ).pipe( connect.reload() );
});

gulp.task( 'watch', function() {
  gulp.watch( files, [ 'files' ]);
});

gulp.task( 'connect', function() {
  connect.server({ livereload: true });
});

gulp.task('default', [ 'connect', 'watch' ]);
