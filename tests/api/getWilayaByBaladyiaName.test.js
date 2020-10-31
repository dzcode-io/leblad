describe('get matching wilaya by baladyia name', ()=> {
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

  const noBaladyiaMockData = [
    {
      mattricule: 12,
      dairats: [
        {
          code: 1090,
          name: "TIMIMOUN (wilaya déléguée)",
          name_ar: "تيميمون (ولاية منتدبة)",
          name_en: "TIMIMOUN (wilaya déléguée)"
        },
        {
          code: 1250,
          name: "BORDJ BADJI MOKHTAR (wilaya déléguée)",
          name_ar: "برج باجي مختار (ولاية منتدبة)",
          name_en: "BORDJ BADJI MOKHTAR (wilaya déléguée)",
          baladyiats: [
            {
              code: 4702,
              name: "EL MENIAA",
              name_en: "EL MENIAA",
              name_ar: "المنيعة"
            },
          ]
        }
      ]
    }
  ];

  let getWilayaByBaladyiaName;

  beforeEach(()=> {
    getWilayaByBaladyiaName = require('../../src/api/getWilayaByBaladyiaName');
  });

  it('should export a function', () => {
    expect(typeof getWilayaByBaladyiaName).toBe('function');
  });

  it('should return a curried function that returns the data', () => {
    const fn = getWilayaByBaladyiaName(mockData);

    expect(typeof fn).toBe('function');
  });

  it('should return null for invalid baladyia name', () => {
    const result = getWilayaByBaladyiaName(mockData)("fo");

    expect(result).toBeNull();
  });

  it('should return matching wilaya object for baladyia name', () => {
    const result = getWilayaByBaladyiaName(mockData)("GHARDAIA");

    expect(result).toEqual(mockData[0]);
  });

  it('should return matching wilaya object for arabic baladyia name', () => {
    const result = getWilayaByBaladyiaName(mockData)("غرداية");

    expect(result).toEqual(mockData[0]);
  });

  it('should return matching wilaya for english baladyia name', () => {
    const result = getWilayaByBaladyiaName(mockData)("EL MENIAA");

    expect(result).toEqual(mockData[0]);
  });

  it('should return null object for invalid arabic baladyia name', () => {
    const result = getWilayaByBaladyiaName(noBaladyiaMockData)("امنيعة");

    expect(result).toBeNull();
  });

  it('should return matching wilaya object for baladyia arabe name ( wilaya without dairats list )', () => {
    const result = getWilayaByBaladyiaName(noBaladyiaMockData)("المنيعة");

    expect(result).toEqual(noBaladyiaMockData[0]);
  });
});
