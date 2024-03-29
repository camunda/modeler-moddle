'use strict';

var fs = require('fs');


function readFile(filename) {
  return fs.readFileSync(filename, { encoding: 'UTF-8' });
}

module.exports.readFile = readFile;


var BpmnModdle = require('bpmn-moddle');

var modelerDescriptor = require('../resources/modeler.json');

function createModdle() {
  return new BpmnModdle({
    modeler: modelerDescriptor
  });
}

module.exports.createModdle = createModdle;

var DmnModdle = require('dmn-moddle');

var dmnModelerDescriptor = require('../resources/dmn-modeler.json');

function createDmnModdle() {
  return new DmnModdle({
    modeler: dmnModelerDescriptor
  });
}

module.exports.createDmnModdle = createDmnModdle;
