'use strict';


describe('descriptor', function() {

  var modelingDescriptor = require('../../resources/modeling');


  it('should provide model', function() {

    // then
    expect(modelingDescriptor).to.exist;

    expect(modelingDescriptor.uri).to.eql('http://camunda.org/schema/1.0/modeling');
    expect(modelingDescriptor.prefix).to.eql('modeling');
  });

});