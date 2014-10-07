`if (typeof define !== 'function') { var define = require('amdefine')(module) } // for node`
define [
  'power-assert',
  #'../../../../app/assets/bower_components/power-assert/build/power-assert',
  '../../../app/assets/js/amdefine-module'
], (
  assert,
  AmdModule
) ->

  describe 'class AmdModule', () ->
    describe '@echo :: x -> x', () ->
      it 'should return input', () ->
        assert AmdModule.echo(1) == 1
        assert AmdModule.echo("false") == "false"
        assert AmdModule.echo(1) == 2
        assert AmdModule.echo("false") == "true"

  	describe '@add :: a -> b -> c', () ->
      it 'should return added value', () ->
        assert AmdModule.add(1, -1) == 0
        assert AmdModule.add(1, 2) == 3

