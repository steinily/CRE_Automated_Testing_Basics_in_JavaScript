const NumbersValidator = require("../../app/app");
const expect = require("chai").expect

describe('isNumberEven Positive Test', () => {
    let validator;
    beforeEach(() => {
      validator = new NumbersValidator();
    });
    afterEach(() => {
      validator = null;
    });

    it('It should return true when provided whit positive even number', () => {
        var range = 1000
        var number = Math.floor( Math.random() * range / 2 ) * 2;
        const validatorResult = validator.isNumberEven(number)
        expect(validatorResult).to.be.equal(true);
        
    });
    it('It should return false when provided whit positive odd number', () => {
        var range = 1000
        var number = (Math.floor( Math.random() * range / 2 ) * 2) + 1;
        const validatorResult = validator.isNumberEven(number)
        expect(validatorResult).to.be.equal(false);
    });
    it('It should return false  when provided whit number zero', () => {
        const validatorResult = validator.isNumberEven(0)
        expect(validatorResult).to.be.equal(true);
    });
    it('It should return true when provided whit negativ even number', () => {
      var range = 1000
      var number = 0 - Math.floor( Math.random() * range / 2 ) * 2;
      const validatorResult = validator.isNumberEven(number)
      expect(validatorResult).to.be.equal(true);
      
  });
  it('It should return false when provided whit negative odd number', () => {
      var range = 1000
      var number = 0 - (Math.floor( Math.random() * range / 2 ) * 2) + 1;
      const validatorResult = validator.isNumberEven(number)
      expect(validatorResult).to.be.equal(false);
  });

});

describe('isNumber Negative Testing', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });
  afterEach(() => {
    validator = null;
  });

  it('It should throw an error message when provided with string', () => {
    expect(() =>{
      validator.isNumberEven('Hello World');
    }).to.throw('[Hello World] is not of type "Number" it is of type "string"');
  });

  it('It should throw an error message when provided with number as string', () => {
    expect(() =>{
      validator.isNumberEven('4');
    }).to.throw('[4] is not of type "Number" it is of type "string"');
  });
  it('It should throw an error message when provided with array', () => {
    expect(() =>{
      validator.isNumberEven([1,2,3,4]);
    }).to.throw('[1,2,3,4] is not of type "Number" it is of type "object"');
  });
});