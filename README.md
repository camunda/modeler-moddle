# modeler-moddle

[![Build Status](https://github.com/camunda/modeler-moddle/workflows/CI/badge.svg)](https://github.com/camunda/modeler-moddle/actions?query=workflow%3ACI)

This project defines the [Camunda Modeler](https://github.com/camunda/camunda-modeler) namespace extensions for BPMN 2.0 as a [moddle](https://github.com/bpmn-io/moddle) descriptor.

## Usage

Use it together with [bpmn-moddle](https://github.com/bpmn-io/bpmn-moddle) to validate Camunda BPMN 2.0 extensions.

```javascript
var BpmnModdle = require('bpmn-moddle');

var modelerModdle = require('modeler-moddle/resources/modeler');

var moddle = new BpmnModdle({ modeler: modelerModdle });

var serviceTask = moddle.create('bpmn:Definitions', {
  executionPlatform: 'Camunda',
  executionPlatformVersion: '7.15.0'
});
```

## Building the Project

To run the test suite that includes XSD schema validation you must have a Java JDK installed and properly exposed through the `JAVA_HOME` variable.

Execute the test via

```sh
npm test
```

Perform a complete build of the application via

```sh
npm run all
```


## License

Use under the terms of the [MIT license](http://opensource.org/licenses/MIT).
