describe('get matching wilaya', ()=> {
  const mockData = [{
    mattricule: 47,
    name: "Ghardaïa",
    dairats: [
      {
        code: 4701,
        name: "GHARDAIA",
        name_ar: "غرداية",
        name_en: "GHARDAIA",
        baladyiats: [
          {
            code: 4701,
            name: "GHARDAIA",
            name_en: "GHARDAIA",
            name_ar: "غرداية"
          },
          {
            code: 4702,
            name: "EL MENIAA",
            name_en: "EL MENIAA",
            name_ar: "المنيعة"
          },
        ]
      },
    ]
  }];

  let getDairaByBaladyiaName;

  beforeEach(()=> {
    getDairaByBaladyiaName = require('../../src/api/getDairaByBaladyiaName');
  });

  it('should export a function', () => {
    expect(typeof getDairaByBaladyiaName).toBe('function');
  });

  it('should return a curried function that returns the data', () => {
    const fn = getDairaByBaladyiaName(mockData);

    expect(typeof fn).toBe('function');
  });

  it('should return null for invalid baladyia name', () => {
    const result = getDairaByBaladyiaName(mockData)("fo");

    expect(result).toBeNull();
  });

  it('should return matching daira object for baladyia name', () => {
    const result = getDairaByBaladyiaName(mockData)("GHARDAIA");

    expect(result).toEqual(mockData[0].dairats[0]);
  });

  it('should return matching wilaya object for arabic baladyia name', () => {
    const result = getDairaByBaladyiaName(mockData)("غرداية");

    expect(result).toEqual(mockData[0].dairats[0]);
  });

  it('should return matching daira for english baladyia name', () => {
    const result = getDairaByBaladyiaName(mockData)("EL MENIAA");

    expect(result).toEqual(mockData[0].dairats[0]);
  });

  it('should return null object for invalid arabic baladyia name', () => {
    const result = getDairaByBaladyiaName(mockData)("امنيعة");

    expect(result).toBeNull();
  });

});
