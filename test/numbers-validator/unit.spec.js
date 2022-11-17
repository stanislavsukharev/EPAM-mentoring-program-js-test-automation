/* eslint-disable max-len */
const NumbersValidator = require('../../app/numbers-validator');
const {expect} = require('chai');

describe('isNumberEven', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });

  it('should return true when provided with an even number', () => {
    expect(validator.isNumberEven(4)).to.be.equal(true);
  });

  it('should return false when provided with an even number', () => {
    expect(validator.isNumberEven(5)).to.be.equal(false);
  });

  it('should throw an error when provided a string', () => {
    expect(() => {
      validator.isNumberEven('4');
    }).to.throw('[4] is not of type "Number" it is of type "string"');
  });
});

describe('getEvenNumbersFromArray', function() {
  let validator;

  beforeEach(function() {
    validator = new NumbersValidator();
  });

  it('should return an array of even numbers when provided with proper data', function() {
    const arrayOfRandomNumbers = [2, 7, 12, 17, 1, 55, 32, 10];
    expect(validator.getEvenNumbersFromArray(arrayOfRandomNumbers)).to.be.eql([
      2, 12, 32, 10,
    ]);
  });

  it('should return false when an array is not an array of numbers', () => {
    const arrayOfRandomNumbers = [2, 7, 12, '17', 1, 55, 32, 10];
    expect(() => {
      validator.getEvenNumbersFromArray(arrayOfRandomNumbers);
    }).to.throw('[2,7,12,17,1,55,32,10] is not an array of "Numbers"');
  });
});

describe('isAllNumbers', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });

  it('should return true when provided with an integer', () => {
    const arrayOfNumbers = [4, 5, 19, 8];
    expect(validator.isAllNumbers(arrayOfNumbers)).to.equal(true);
  });

  it('should return false when provided not an array', () => {
    const arrayOfNumbers = 1;
    expect(() => {
      validator.isAllNumbers(arrayOfNumbers);
    }).to.throw('[1] is not an array');
  });
});

describe('isInteger', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });

  it('should return true when provided with an integer', () => {
    expect(validator.isInteger(4)).to.be.equal(true);
  });

  it('should throw an error when provided data not a number', () => {
    expect(() => {
      validator.isInteger(null);
    }).to.throw('[null] is not a number');
  });
});
