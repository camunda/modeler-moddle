'use strict';

var validateBpmn = require('../../xml-helper').validateBpmn,
    validateDmn = require('../../xml-helper').validateDmn;

var readFile = require('../../helper').readFile,
    createModdle = require('../../helper').createModdle,
    createDmnModdle = require('../../helper').createDmnModdle;



describe('import -> export roundtrip', function() {

  function stripSpaces(xml) {
    return xml.replace(/\n|\r/g, '')
      .replace(/\s{2,}/g, ' ')
      .replace(/\s\/>/g, '/>')
      .replace(/>\s+</g, '><');
  }

  function validateExport(fileType, file) {

    return function() {

      this.timeout(1000000);

      var xml = stripSpaces(readFile(file));

      var moddle = fileType === 'bpmn' ? createModdle() : createDmnModdle();

      return moddle.fromXML(xml)
        .then(function(definitions) {
          return moddle.toXML(definitions.rootElement);
        })
        .then(function(result) {
          var savedXML = stripSpaces(result.xml);

          expect(savedXML).to.eql(xml);

          return fileType === 'bpmn' ? validateBpmn(savedXML) : validateDmn(savedXML);
        });
    };
  }


  describe('should keep modeler attributes', function() {

    it('modeler:executionPlatform and modeler:executionPlatformVersion (BPMN)', validateExport(
      'bpmn', 'test/fixtures/xml/definitions.xml'));


    it('modeler:executionPlatform and modeler:executionPlatformVersion (DMN)', validateExport(
      'dmn', 'test/fixtures/xml/dmn.xml'));
  });

});
