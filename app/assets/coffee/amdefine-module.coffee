`if (typeof define !== 'function') { var define = require('amdefine')(module) } // for node.js`
define [], () ->
  class AmdModule
    @echo: (x) ->
      x
    @add: (x,y) ->
      x + y

