let calculator = require('../../src/js/calculator');

describe('calculator model', () => {

  beforeEach(() =>{
    this.calculator = new calculator();
  });

  it('should add numbers', ()=> {
    expect(this.calculator.add(2, 2)).toBe(4);
  });
});