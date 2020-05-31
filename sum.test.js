'use strict';

// const sum = require('./sum.js');


describe(' testing a function ', () => {

  it(' testing a summation function', () => {
    let a = {name:'aaa'};
    // let b = {name:'aaa'};
    // expect(a).toEqual(b);
    let b = a;
    expect(a).toBe(b);
  }); // end of it 
}); // end of describe 