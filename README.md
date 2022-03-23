# modeler-moddle

[![Build Status](https://github.com/camunda/modeler-moddle/workflows/CI/badge.svg)](https://github.com/camunda/modeler-moddle/actions?query=workflow%3ACI)

This project defines the [Camunda Modeler](https://github.com/camunda/camunda-modeler) namespace extensions for BPMN 2.0 as well as DMN 1.3 as [moddle](https://github.com/bpmn-io/moddle) descriptors.

## Usage

### BPMN

Use it together with [bpmn-moddle](https://github.com/bpmn-io/bpmn-moddle) to validate Camunda Modeler BPMN 2.0 extensions.

```javascript
var BpmnModdle = require('bpmn-moddle');

var modelerModdle = require('modeler-moddle/resources/modeler');

var moddle = new BpmnModdle({ modeler: modelerModdle });

var serviceTask = moddle.create('bpmn:Definitions', {
  executionPlatform: 'Camunda Platform',
  executionPlatformVersion: '7.15.0'
});
```

Once serialized, this exports the properties under the `http://camunda.org/schema/modeler/1.0` namespace:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions
    xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL"
    xmlns:modeler="http://camunda.org/schema/modeler/1.0"
    id="Definitions_1"
    modeler:executionPlatform="Camunda Platform"
    modeler:executionPlatformVersion="7.15.0">

  ...
</bpmn:definitions>
```

### DMN

Use it together with [dmn-moddle](https://github.com/bpmn-io/dmn-moddle) to validate Camunda Modeler DMN 1.3 extensions.

```javascript
var DmnModdle = require('dmn-moddle');

var modelerModdle = require('modeler-moddle/resources/dmn-modeler');

var moddle = new DmnModdle({ modeler: modelerModdle });

var serviceTask = moddle.create('dmn:Definitions', {
  executionPlatform: 'Camunda Platform',
  executionPlatformVersion: '7.15.0'
});
```

Once serialized, this exports the properties under the `http://camunda.org/schema/modeler/1.0` namespace:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<dmn:definitions
    xmlns:dmn="https://www.omg.org/spec/DMN/20191111/MODEL/"
    xmlns:modeler="http://camunda.org/schema/modeler/1.0"
    id="Definitions_1"
    modeler:executionPlatform="Camunda Platform"
    modeler:executionPlatformVersion="7.15.0">

  ...
</dmn:definitions>
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
