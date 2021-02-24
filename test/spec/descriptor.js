'use strict';


describe('descriptor', function() {

  var modelerDescriptor = require('../../resources/modeler');


  it('should provide model', function() {

    // then
    expect(modelerDescriptor).to.exist;

    expect(modelerDescriptor.uri).to.eql('http://camunda.org/schema/modeler/1.0');
    expect(modelerDescriptor.prefix).to.eql('modeler');
  });

});