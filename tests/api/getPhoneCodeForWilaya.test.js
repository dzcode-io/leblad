describe('get phone codes for a wilaya', ()=> {
  const mockData = [{
    mattricule: 16,
    name: "Alger",
    phoneCodes: [21, 23]
  },
  {
    mattricule: 31,
    name: "Oran",
    phoneCodes: [41]
  },
  {
    mattricule: 48,
    name: "Relizane",
    phoneCodes: [46],
  }];

  let getPhoneCodeForWilaya;

  beforeEach(()=> {
    getPhoneCodeForWilaya = require('../../src/api/getPhoneCodeForWilaya');
  });

  it('should export a function', () => {
    expect(typeof getPhoneCodeForWilaya).toBe('function');
  });

  it('should return a curried function that returns the data', () => {
    const fn = getPhoneCodeForWilaya(mockData);

    expect(typeof fn).toBe('function');
  });

  it('should return null if the phone codes for the given wilaya code could not be found', () => {
    const result = getPhoneCodeForWilaya(mockData)(9);

    expect(result).toBeNull();
  });

  it('should return the correct phone code for a given wilaya', () => {
    const result = getPhoneCodeForWilaya(mockData)(31);

    expect(result).toEqual(41);
  });

  it('should return the first phone code in an array of multiple phone codes for a given wilaya', () => {
    const result = getPhoneCodeForWilaya(mockData)(16);

    expect(result).toEqual(21);
  });
});