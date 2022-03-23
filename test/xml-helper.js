'use strict';

var SchemaValidator = require('xsd-schema-validator');

var BPMN_XSD = 'test/fixtures/xsd/bpmn/BPMN20.xsd';
var DMN_XSD = 'test/fixtures/xsd/dmn/DMN13.xsd';

var Helper = require('./helper');


module.exports.fromFile = function(moddle, file) {
  var fileContents = Helper.readFile(file);

  return moddle.fromXML(fileContents, 'bpmn:Definitions');
};

module.exports.fromDmnFile = function(moddle, file) {
  var fileContents = Helper.readFile(file);

  return moddle.fromXML(fileContents, 'dmn:Definitions');
};

module.exports.toXML = function(element, opts) {
  return element.$model.toXML(element, opts);
};

module.exports.validateBpmn = function(xml) {
  return validateWithSchema(BPMN_XSD, xml);
};

module.exports.validateDmn = function(xml) {
  return validateWithSchema(DMN_XSD, xml);
};

function validateWithSchema(xsd, xml) {
  if (!xml) {
    throw new Error('XML is not defined');
  }

  return new Promise(function(resolve, reject) {
    SchemaValidator.validateXML(xml, xsd, function(err, result) {

      if (err) {
        return reject(err);
      }

      expect(result.valid).to.be.true;
      resolve();
    });
  });
}
