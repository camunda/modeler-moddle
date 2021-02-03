'use strict';

var assign = require('min-dash').assign,
    isFunction = require('min-dash').isFunction;

var Helper = require('../../helper');


describe('write', function() {

  var moddle = Helper.createModdle();


  function write(element, options, callback) {
    if (isFunction(options)) {
      callback = options;
      options = {};
    }

    // skip preamble for tests
    options = assign({ preamble: false }, options);

    moddle.toXML(element, options, callback);
  }


  describe('should export types', function() {

    it('Definitions#executionPlatform', function(done) {

      // given
      var definitions = moddle.create('bpmn:Definitions', {
        executionPlatform: 'Camunda'
      });

      var expectedXML =
        '<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" ' +
        'xmlns:modeling="http://camunda.org/schema/1.0/modeling" modeling:executionPlatform="Camunda" />';

      // when
      write(definitions, function(err, result) {

        // then
        expect(result).to.eql(expectedXML);

        done(err);
      });
    });

  });

});
