'use strict';


describe('descriptor', function() {

  it('should provide model', function() {

    // given
    var modelerDescriptor = require('../../resources/modeler');

    // then
    expect(modelerDescriptor).to.exist;

    expect(modelerDescriptor.uri).to.eql('http://camunda.org/schema/modeler/1.0');
    expect(modelerDescriptor.prefix).to.eql('modeler');
  });


  it('should provide model (DMN)', function() {

    // given
    var modelerDescriptor = require('../../resources/dmn-modeler');

    // then
    expect(modelerDescriptor).to.exist;

    expect(modelerDescriptor.uri).to.eql('http://camunda.org/schema/modeler/1.0');
    expect(modelerDescriptor.prefix).to.eql('modeler');
  });
});
