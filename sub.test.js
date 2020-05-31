'use strict';

const sub = require('./sub.js');


describe(' testing a function ', () => {

  it(' testing a subtraction function', () => {
    let a = 3;
    let b = 2;
    expect(sub(a,b)).toEqual(1);
  }); // end of it 

}); // end of describe 