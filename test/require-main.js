var allTestFiles = [];
//var TEST_REGEXP = /(spec|test)\.js$/i;
var TEST_REGEXP = /^\/base\/test\/assets\/espowered.*\.js$/i;

var pathToModule = function(path) {
  return path.replace(/^\/base\//, '').replace(/\.js$/, '');
};

Object.keys(window.__karma__.files).forEach(function(file) {
  if (TEST_REGEXP.test(file)) {
    // Normalize paths to RequireJS module names.
    allTestFiles.push(pathToModule(file));
  }
});

require.config({

  paths: {
    'power-assert': 'app/assets/bower_components/power-assert/build/power-assert',
  },

  shim: {
  },

  // Karma serves files under /base, which is the basePath from your config file
  baseUrl: '/base',

  // dynamically load all test files
  deps: allTestFiles,

  // we have to kickoff jasmine, as it is asynchronous
  callback: window.__karma__.start
});
