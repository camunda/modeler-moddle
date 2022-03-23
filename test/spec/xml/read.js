'use strict';

var readFile = require('../../helper').readFile,
    createModdle = require('../../helper').createModdle;

describe('read', function() {

  describe('should read extensions', function() {
    var moddle;

    beforeEach(function() {
      moddle = createModdle();
    });


    it('modeler:executionPlatform and modeler:executionPlatformVersion', function() {

      // given
      var xml = readFile('test/fixtures/xml/definitions.xml');

      // when
      return moddle.fromXML(xml, 'bpmn:Definitions')
        .then(function(result) {

          // then
          expect(result.rootElement).to.jsonEqual({
            $type: 'bpmn:Definitions',
            id: 'Definitions_1',
            targetNamespace: 'http://bpmn.io/schema/bpmn',
            executionPlatform: 'Camunda',
            executionPlatformVersion: '7.15.0',
          });
        });
    });
  });
});
