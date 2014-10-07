'use strict';
var black   = '\u001b[30m';
var red     = '\u001b[31m';
var green   = '\u001b[32m';
var yellow  = '\u001b[33m';
var blue    = '\u001b[34m';
var magenta = '\u001b[35m';
var cyan    = '\u001b[36m';
var white   = '\u001b[37m';
var reset   = '\u001b[0m';

var gulp = require('gulp'),
    coffee = require('gulp-coffee'),
    mocha = require('gulp-mocha'),
    espower = require('gulp-espower'),
    //karma = require('gulp-karma'),
    //run = require('gulp-run'),
    karma = require('karma').server,
    merge = require('event-stream').merge,
    runSequence = require('run-sequence');

var config = {
  root: __dirname,
  app: 'app',
  test: 'test',
  dist: 'dist',
};

gulp.task('coffee', function() {
  return merge(
    gulp.src(config.app+ '/assets/coffee/{,**/}*.coffee')
      .pipe(coffee({bare:true}))
      .pipe(gulp.dest(config.app+ '/assets/js/')),
    gulp.src(config.test+ '/assets/coffee/{,**/}*.coffee')
      .pipe(coffee({bare:true}))
      .pipe(gulp.dest(config.test+ '/assets/js/'))
  );
});
// !!! espowerは node v0.11系に未対応 https://github.com/twada/power-assert/issues/12
gulp.task('espower', function() {
  return gulp.src(config.test+ '/assets/js/{,**/}*.js', {base: './test/assets/js/'})
    .pipe(espower())
    .pipe(gulp.dest(config.test+ '/assets/espowered/'));
});
gulp.task('karma', function(done) {
  return karma.start({
    configFile: config.root+ '/karma.conf.js',
    singleRun: true
  //}, done)
  })
});

gulp.task('test', function(cb) {
  runSequence(
    'coffee',
    'espower',
    'karma'
    //,cb
  );
});
