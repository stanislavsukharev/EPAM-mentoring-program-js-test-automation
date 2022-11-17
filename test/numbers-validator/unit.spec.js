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

  it('should return false when provided with a negative odd number', () => {
    expect(validator.isNumberEven(-3)).to.be.equal(false);
  });

  it('should return false when provided with an even negative number', () => {
    expect(validator.isNumberEven(-10)).to.be.equal(true);
  });

  it('should return false when provided with an odd number', () => {
    expect(validator.isNumberEven(5)).to.be.equal(false);
  });

  it('should throw an error when provided a string', () => {
    expect(() => {
      validator.isNumberEven('4');
    }).to.throw('[4] is not of type "Number" it is of type "string"');
  });

  it('should throw an error when provided a null', () => {
    expect(() => {
      validator.isNumberEven(null);
    }).to.throw('[null] is not of type "Number" it is of type "object"');
  });

  it('should throw an error when provided a boolean', () => {
    expect(() => {
      validator.isNumberEven(true);
    }).to.throw('[true] is not of type "Number" it is of type "boolean"');
  });

  it('should throw an error when provided a boolean', () => {
    expect(() => {
      validator.isNumberEven(false);
    }).to.throw('[false] is not of type "Number" it is of type "boolean"');
  });

  it('should throw an error when provided a undefined', () => {
    expect(() => {
      validator.isNumberEven(undefined);
    }).to.throw('[undefined] is not of type "Number" it is of type "undefined"');
  });

  it('should throw an error when provided a BigInt', () => {
    expect(() => {
      validator.isNumberEven(1234567890123456789012345678901234567890n);
    }).to.throw('[1234567890123456789012345678901234567890] is not of type "Number" it is of type "bigint"');
  });

  it('should return false when provided with a floating number', () => {
    expect(validator.isNumberEven(3)).to.be.equal(false);
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

  it('should throw an error when an array is not an array of numbers', () => {
    const arrayOfRandomNumbers = [2, 7, 12, '17', 1, 55, 32, 10];
    expect(() => {
      validator.getEvenNumbersFromArray(arrayOfRandomNumbers);
    }).to.throw('[2,7,12,17,1,55,32,10] is not an array of "Numbers"');
  });

  it('should throw an error when an array is not an array of numbers', () => {
    const arrayOfRandomNumbers = ['24', 'eleven', 'cat', null];
    expect(() => {
      validator.getEvenNumbersFromArray(arrayOfRandomNumbers);
    }).to.throw('[24,eleven,cat,] is not an array of "Numbers"');
  });

  it('should throw an error when an array is not an array of numbers', () => {
    const arrayOfRandomNumbers = [1234567890123456789012345678901234567890n, false, undefined];
    expect(() => {
      validator.getEvenNumbersFromArray(arrayOfRandomNumbers);
    }).to.throw('[1234567890123456789012345678901234567890,false,] is not an array of "Numbers"');
  });
});

describe('isAllNumbers', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });

  it('should return true when provided with a number', () => {
    const arrayOfNumbers = [4, 5, 19, 8];
    expect(validator.isAllNumbers(arrayOfNumbers)).to.equal(true);
  });

  it('should return true when provided with a negative number', () => {
    const arrayOfNumbers = [-100, -43, -54, -18];
    expect(validator.isAllNumbers(arrayOfNumbers)).to.equal(true);
  });

  it('should return false when provided with a string', () => {
    const arrayOfNumbers = ['100', 'cat', 34, ''];
    expect(validator.isAllNumbers(arrayOfNumbers)).to.equal(false);
  });

  it('should return false when provided data not numbers', () => {
    const arrayOfNumbers = [null, true, Infinity, undefined];
    expect(validator.isAllNumbers(arrayOfNumbers)).to.equal(false);
  });

  it('should return false when provided not an array', () => {
    const arrayOfNumbers = 1;
    expect(() => {
      validator.isAllNumbers(arrayOfNumbers);
    }).to.throw('[1] is not an array');
  });

  it('should return false when provided not an array', () => {
    const arrayOfNumbers = true;
    expect(() => {
      validator.isAllNumbers(arrayOfNumbers);
    }).to.throw('[true] is not an array');
  });

  it('should return false when provided not an array', () => {
    const arrayOfNumbers = {type: 'Fiat'};
    expect(() => {
      validator.isAllNumbers(arrayOfNumbers);
    }).to.throw('[[object Object]] is not an array');
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

  it('should return true when provided with an negative integer', () => {
    expect(validator.isInteger(-50)).to.be.equal(true);
  });

  it('should throw an error when provided data not a number', () => {
    expect(() => {
      validator.isInteger(null);
    }).to.throw('[null] is not a number');
  });

  it('should throw an error when provided data not a number', () => {
    expect(() => {
      validator.isInteger('meaw');
    }).to.throw('[meaw] is not a number');
  });

  it('should throw an error when provided data not a number', () => {
    expect(() => {
      validator.isInteger([-100, -43, -54, -18]);
    }).to.throw('[-100,-43,-54,-18] is not a number');
  });

  it('should throw an error when provided data not a number', () => {
    expect(() => {
      validator.isInteger({type: 'Whale'});
    }).to.throw('[[object Object]] is not a number');
  });

  it('should throw an error when provided data not a number', () => {
    expect(() => {
      validator.isInteger(1234567890123456789012345678901234567890n);
    }).to.throw('[1234567890123456789012345678901234567890] is not a number');
  });

  it('should throw an error when provided data not a number', () => {
    expect(() => {
      validator.isInteger(false);
    }).to.throw('[false] is not a number');
  });
});
