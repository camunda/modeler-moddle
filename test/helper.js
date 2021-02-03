'use strict';

var fs = require('fs');


function readFile(filename) {
  return fs.readFileSync(filename, { encoding: 'UTF-8' });
}

module.exports.readFile = readFile;


var BpmnModdle = require('bpmn-moddle');

var modelingDescriptor = require('../resources/modeling.json');

function createModdle() {
  return new BpmnModdle({
    modeling: modelingDescriptor
  });
}

module.exports.createModdle = createModdle;