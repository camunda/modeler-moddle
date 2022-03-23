'use strict';

var assign = require('min-dash').assign;

var Helper = require('../../helper');


describe('write', function() {

  function write(moddle, element, options) {
    if (!options) {
      options = {};
    }

    // skip preamble for tests
    options = assign({ preamble: false }, options);

    return moddle.toXML(element, options);
  }


  describe('should export types', function() {

    it('Definitions#executionPlatform (BPMN)', function() {

      // given
      var moddle = Helper.createModdle();
      var definitions = moddle.create('bpmn:Definitions', {
        executionPlatform: 'Camunda'
      });

      var expectedXML =
        '<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" ' +
        'xmlns:modeler="http://camunda.org/schema/modeler/1.0" modeler:executionPlatform="Camunda" />';

      // when
      return write(moddle, definitions)
        .then(function(result) {

          // then
          expect(result.xml).to.eql(expectedXML);
        });
    });


    it('Definitions#executionPlatform (DMN)', function() {

      // given
      var moddle = Helper.createDmnModdle();
      var definitions = moddle.create('dmn:Definitions', {
        executionPlatform: 'Camunda'
      });

      var expectedXML =
        '<dmn:definitions xmlns:dmn="https://www.omg.org/spec/DMN/20191111/MODEL/" ' +
        'xmlns:modeler="http://camunda.org/schema/modeler/1.0" modeler:executionPlatform="Camunda" />';

      // when
      return write(moddle, definitions)
        .then(function(result) {

          // then
          expect(result.xml).to.eql(expectedXML);
        });
    });

  });

});
