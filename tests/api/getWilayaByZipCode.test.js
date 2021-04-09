describe('get wilaya by zip code', () => {
  const mockData = [
    {
      mattricule: 1,
      name: 'Adrar',
      postalCodes: [1000, 1001, 1002, 1003, 1004],
    },
    {
      mattricule: 2,
      name: 'Chlef',
      postalCodes: [2008, 2009, 2010, 2011, 2012],
    },
  ];

  let getWilayaByZipCode;

  beforeEach(() => {
    getWilayaByZipCode = require('../../src/api/getWilayaByZipCode');
  });

  it('should return return a curried function that returns the data', () => {
    const fn = getWilayaByZipCode(mockData);

    expect(typeof fn).toBe('function');
  });

  it('should return the target wialaya object', () => {
    let result = getWilayaByZipCode(mockData)(2009);
    expect(result.mattricule).toEqual(2);

    result = getWilayaByZipCode(mockData)(2012);
    expect(result.mattricule).toEqual(2);

    result = getWilayaByZipCode(mockData)(2008);
    expect(result.mattricule).toEqual(2);
  });

  it("should return null if the zip code doesn't exists", () => {
    const result = getWilayaByZipCode(mockData)(99999);

    expect(result).toBeNull();
  });
});
