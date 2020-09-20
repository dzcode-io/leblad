const isValidWilayaCode = require('../../src/utils/isValidWilayaCode');

describe('check if a code (matricule) is valid', ()=> {
  it('should return false if the given code is not a valid number', () => {
    expect(isValidWilayaCode(null)).toBe(false);
  });

  it('should return true if the code is greater than 48', () => {
    expect(isValidWilayaCode(49)).toBe(false);
  });

  it('should return true if the code is less than 1', () => {
    expect(isValidWilayaCode(0)).toBe(false);
  });

  it('should return true if the code is an integer between 1 and 48', () => {
    expect(isValidWilayaCode(48)).toBe(true);
    expect(isValidWilayaCode(1)).toBe(true);
  });
});