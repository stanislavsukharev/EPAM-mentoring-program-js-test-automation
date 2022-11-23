/* eslint-disable max-len */
const NumbersValidator = require('../../app/numbers-validator');
const {expect} = require('chai');

describe('isNumberEven', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });

  const arr = [
    [4, true],
    [-10, true],
    [5, false],
    [-3, false],
  ];
  arr.forEach((el) => {
    it(`should return true with an even number or false with an odd number -[${el[1]}]`, () => {
      expect(validator.isNumberEven(el[0])).to.deep.equal(el[1]);
    });
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

  it('should throw an error when provided an undefined', () => {
    expect(() => {
      validator.isNumberEven(undefined);
    }).to.throw('[undefined] is not of type "Number" it is of type "undefined"');
  });

  it('should throw an error when provided a BigInt', () => {
    expect(() => {
      validator.isNumberEven(1234567890123456789012345678901234567890n);
    }).to.throw('[1234567890123456789012345678901234567890] is not of type "Number" it is of type "bigint"');
  });
});

describe('getEvenNumbersFromArray', () => {
  let validator;

  beforeEach(function() {
    validator = new NumbersValidator();
  });

  const arr = [
    [[2, 7, -12, 0, 1, -55, 32, 10], [2, -12, 0, 32, 10]],
    [[160, 13, -8, 1], [160, -8]],
  ];
  arr.forEach((el) => {
    it(`should return an array of even numbers - [${el[1]}]`, () => {
      expect(validator.getEvenNumbersFromArray(el[0])).to.deep.equal(el[1]);
    });
  });

  it('should throw an error when an array is not an array of numbers', () => {
    expect(() => {
      validator.getEvenNumbersFromArray([-12, 11, 'cat', null]);
    }).to.throw('[-12,11,cat,] is not an array of "Numbers"');
  });

  it('should throw an error when an array is not an array of numbers', () => {
    expect(() => {
      validator.getEvenNumbersFromArray([1234567890123456789012345678901234567890n, false, undefined]);
    }).to.throw('[1234567890123456789012345678901234567890,false,] is not an array of "Numbers"');
  });
});

describe('isAllNumbers', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });

  const arr = [
    [[-1, 12, Infinity, undefined, null, undefined], false],
    [['100', 'cat', '34', ''], false],
    [[4, 5, -19, 8, -43, 100], true],

  ];
  arr.forEach((el) => {
    it(`should return true with an array of numbers or false when an array is not an array of numbers - [${el[1]}]`, () => {
      expect(validator.isAllNumbers(el[0])).to.deep.equal(el[1]);
    });
  });

  it('should return true when provided with numbers', () => {
    const arrayOfNumbers = [4, 5, -19, 8, -43, 100];
    expect(validator.isAllNumbers(arrayOfNumbers)).to.equal(true);
  });

  it('should return false when provided not an array', () => {
    expect(() => {
      validator.isAllNumbers(1);
    }).to.throw('[1] is not an array');
  });

  it('should return false when provided not an array', () => {
    expect(() => {
      validator.isAllNumbers(true);
    }).to.throw('[true] is not an array');
  });

  it('should return false when provided not an array', () => {
    expect(() => {
      validator.isAllNumbers({type: 'Fiat'});
    }).to.throw('[[object Object]] is not an array');
  });
});

describe('isInteger', () => {
  let validator;
  beforeEach(() => {
    validator = new NumbersValidator();
  });

  const arr = [
    [7, true],
    [-50, true],
    [0, true],
  ];
  arr.forEach((el) => {
    it(`should return true when provided with an integer - [${el[0]}]`, () => {
      expect(validator.isInteger(el[0])).to.deep.equal(el[1]);
    });
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
