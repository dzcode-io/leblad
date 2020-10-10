describe('get matching wilaya', ()=> {
  const mockData = [{
    mattricule: 1,
    name: "Adrar"
  },
  {
    mattricule: 2,
    name: "Chlef"
  },
  {
    mattricule: 3,
    name: "Laghouat"
  }];

  let getWilayaByCode;

  beforeEach(()=> {
    getWilayaByCode = require('../../src/api/getWilayaByCode');
  });

  it('should export a function', () => {
    expect(typeof getWilayaByCode).toBe('function');
  });

  it('should return a curried function that returns the data', () => {
    const fn = getWilayaByCode(mockData);

    expect(typeof fn).toBe('function');
  });

  it('should return null if the wilaya with the given mattricule is not found', () => {
    const result = getWilayaByCode(mockData)(31);

    expect(result).toBeNull();
  });

  it('should return matching wilaya array', () => {
    const result = getWilayaByCode(mockData)(2);

    expect(result).toEqual({
      mattricule: 2,
      name: "Chlef"
    });
  });
});