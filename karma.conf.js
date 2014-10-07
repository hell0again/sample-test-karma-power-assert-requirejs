// Karma configuration
// Generated on Tue Oct 07 2014 00:45:41 GMT+0900 (JST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    //frameworks: ['mocha', 'chai', 'requirejs'], // mocha+chai w/ requirejs
    //frameworks: ['mocha'], // mocha + power-assert
    frameworks: ['mocha', 'requirejs'], // mocha + power-assert w/ requirejs

    // list of files / patterns to load in the browser
    files: [
      // for requirejs
      'test/require-main.js',
      // for power-assert - require.config.pathで指定するものもここに並べる
      {pattern: 'app/assets/bower_components/power-assert/build/power-assert.js', included: false},

      {pattern: 'app/assets/js/amdefine-module.js', included: false},
      {pattern: 'test/assets/espowered/amdefine-module.js', included: false},
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],
    //browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
