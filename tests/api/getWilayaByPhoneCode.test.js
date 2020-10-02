describe('get matching wilaya', ()=> {
  const mockData = [{
    mattricule: 1,
    name: "Adrar",
    phoneCodes: [49]
  },
  {
    mattricule: 2,
    name: "Chlef",
    phoneCodes: [27]
  },
  {
    mattricule: 6,
    name: "BEJAIA",
    phoneCodes: [34],
  }];

  let getWilayaByPhoneCode;

  beforeEach(()=> {
    getWilayaByPhoneCode = require('../../src/api/getWilayaByPhoneCode');
  });

  it('should export a function', () => {
    expect(typeof getWilayaByPhoneCode).toBe('function');
  });

  it('should return a curried function that returns the data', () => {
    const fn = getWilayaByPhoneCode(mockData);

    expect(typeof fn).toBe('function');
  });

  it('should return undefined if the wilaya with the given phoneCode is not found', () => {
    const result = getWilayaByPhoneCode(mockData)(9);

    expect(result).toBeUndefined();
  });

  it('should return the matching wilayas if the given phone code number is valid', () => {
    const result = getWilayaByPhoneCode(mockData)(34);

    expect(result).toEqual({
      mattricule: 6,
      name: "BEJAIA",
      phoneCodes: [34],
    });
  });

  it('should return undefined if the given phone code is not a number', () => {
    const result = getWilayaByPhoneCode(mockData)("34");

    expect(result).toBeUndefined();
  });
});