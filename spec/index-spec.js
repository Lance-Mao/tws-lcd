'use strict'
let index = require('../index');

describe('lcdDigit()', function() {

  it('when enter the number 910', function() {
    spyOn(console, 'log');

      index.lcd("910");

    let expectText ="._. ... ._.\n|_| ..| |.|\n..| ..| |_|\n";

    expect(console.log).toHaveBeenCalledWith(expectText);
  });

})