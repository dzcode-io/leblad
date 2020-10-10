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

  it('should return null if the wilaya with the given phoneCode is not found', () => {
    const result = getWilayaByPhoneCode(mockData)(9);

    expect(result).toBeNull();
  });

  it('should return matching wilaya array when giving phone code', () => {
    const result = getWilayaByPhoneCode(mockData)(34);

    expect(result).toEqual( {
      mattricule: 6,
      name: "BEJAIA",
      phoneCodes: [34],
    });
  });

  it('should return an array of matching wilayas for a given phone number', () => {
    const result = getWilayaByPhoneCode(mockData)('0342345678');

    expect(result).toEqual( {
      mattricule: 6,
      name: "BEJAIA",
      phoneCodes: [34],
    });
  });

  it('should return null if the given number is invalid', () => {
    const result = getWilayaByPhoneCode(mockData)('03d2345678');

    expect(result).toBeNull();
  });
});