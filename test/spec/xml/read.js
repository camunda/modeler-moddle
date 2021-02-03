'use strict';

var readFile = require('../../helper').readFile,
    createModdle = require('../../helper').createModdle;

describe('read', function() {

  describe('should read extensions', function() {
    var moddle;

    beforeEach(function() {
      moddle = createModdle();
    });


    it('modeling:executionPlatform and modeling:executionPlatformVersion', function(done) {

      // given
      var xml = readFile('test/fixtures/xml/definitions.xml');

      // when
      moddle.fromXML(xml, 'bpmn:Definitions', function(err, proc) {

        // then
        expect(proc).to.jsonEqual({
          $type: 'bpmn:Definitions',
          id: 'Definitions_1',
          targetNamespace: 'http://bpmn.io/schema/bpmn',
          executionPlatform: 'Camunda',
          executionPlatformVersion: '7.15.0',
        });

        done(err);
      });
    });
  });
});
