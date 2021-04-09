describe('get phone codes for a wilaya', () => {
  const mockData = [
    {
      mattricule: 16,
      name: 'Alger',
      phoneCodes: [21, 23],
    },
    {
      mattricule: 31,
      name: 'Oran',
      phoneCodes: [41],
    },
    {
      mattricule: 48,
      name: 'Relizane',
      phoneCodes: [46],
    },
  ];

  let getPhoneCodesForWilaya;

  beforeEach(() => {
    getPhoneCodesForWilaya = require('../../src/api/getPhoneCodesForWilaya');
  });

  it('should export a function', () => {
    expect(typeof getPhoneCodesForWilaya).toBe('function');
  });

  it('should return a curried function that returns the data', () => {
    const fn = getPhoneCodesForWilaya(mockData);

    expect(typeof fn).toBe('function');
  });

  it('should return null if the phone codes for the given wilaya code could not be found', () => {
    const result = getPhoneCodesForWilaya(mockData)(9);

    expect(result).toBeNull();
  });

  it('should return matching phone codes array when given a wilaya code', () => {
    const result = getPhoneCodesForWilaya(mockData)(16);

    expect(result).toEqual([21, 23]);
  });
});
