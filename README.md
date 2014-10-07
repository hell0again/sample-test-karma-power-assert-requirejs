sample-test-karma-power-assert-requirejs
========================================

Example using Karma + power-assert + RequireJS

- karma
- power-assert
- requirejs + amdefine
- mocha
- gulp
- coffee-script
- phantomjs

## setup

``` sh
$ npm install karma-cli -g
$ npm install
$ bower install
```

## run test

``` sh
$ gulp test
[01:07:52] Using gulpfile ~/git/sample-test-karma-power-assert-requirejs/gulpfile.js
[01:07:52] Starting 'test'...
[01:07:52] Starting 'coffee'...
[01:07:52] Finished 'coffee' after 63 ms
[01:07:52] Starting 'espower'...
[01:07:52] Finished 'espower' after 38 ms
[01:07:52] Starting 'karma'...
INFO [karma]: Karma v0.12.24 server started at http://localhost:9876/
INFO [launcher]: Starting browser Chrome
INFO [Chrome 37.0.2062 (Mac OS X 10.9.4)]: Connected on socket -hcxVl02lS-3Gf2yXeSL with id 53651295
Chrome 37.0.2062 (Mac OS X 10.9.4) class AmdModule @echo :: x -> x should return input FAILED
	...

	assert(AmdModule.echo(1) === 2)
	       |         |       |
	       |         1       false
	       #function#

	[number] 2
	=> 2
	[number] AmdModule.echo(1)
	=> 1

	AssertionError: false == true
	...
```


