// const ES_SENIA = "Es-Sénia";


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
          }
        ]
      },
      {
        code: 4702,
        name: "EL MENIA",
        name_ar: "المنيعة",
        name_en: "EL MENIA",
        baladyiats: [
          {
            code: 4702,
            name: "EL MENIAA",
            name_en: "EL MENIAA",
            name_ar: "المنيعة"
          },
        ]
      },
      {
        code: 4702,
        name: "EL MENIA (wilaya déléguée)",
        name_ar: "المنيعة (ولاية منتدبة)",
        name_en: "EL MENIA (wilaya déléguée)",
        baladyiats: [
          {
            code: 4702,
            name: "EL MENIAA",
            name_en: "EL MENIAA",
            name_ar: "المنيعة"
          },
          {
            code: 4712,
            name: "HASSI GARA",
            name_en: "HASSI GARA",
            name_ar: "حاسي القارة"
          }
        ]
      },
      {
        code: 4703,
        name: "DHAYET BEN DHAHOUA",
        name_ar: "ضاية بن ضحوة",
        name_en: "DHAYET BEN DHAHOUA",
        baladyiats: [
          {
            code: 4703,
            name: "DHAYET BENDHAHOUA",
            name_en: "DHAYET BENDHAHOUA",
            name_ar: "ضاية بن ضحوة"
          }
        ]
      },
      {
        code: 4704,
        name: "BERRIANE",
        name_ar: "بريان",
        name_en: "BERRIANE",
        baladyiats: [
          {
            code: 4704,
            name: "BERRIANE",
            name_en: "BERRIANE",
            name_ar: "بريان"
          }
        ]
      }]
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

  it('should return null if the wilaya with the given baladyia is not found', () => {
    const result = getWilayaByBaladyiaName(mockData)("foo");
    expect(result).toBeNull();
  });
  it('should return null if the wilaya with the given baladyia invalid name', () => {
    const result = getWilayaByBaladyiaName(mockData)("fo");

    expect(result).toBeNull();
  });

  it('should return null if there\'s no daira', () => {
    const result = getWilayaByBaladyiaName(mockData)();

    expect(result).toBeNull();
  });

  it('should return null if the wilaya with the given daira is empty', () => {
    const result = getWilayaByBaladyiaName(mockData)("ZRZR");

    expect(result).toBeNull();
  });

  it('should return matching wilaya object with arabic name', () => {
    const result = getWilayaByBaladyiaName(mockData)("GHARDAIA", ["mattricule", "name"]);

    expect(result).toEqual({
      mattricule: 47,
      name: "Ghardaïa",
    });
  });

  it('should return matching wilaya object with english name', () => {
    const result = getWilayaByBaladyiaName(mockData)("EL MENIAA", ["mattricule", "name"]);
    expect(result).toEqual({
      mattricule: 47,
      name: "Ghardaïa",
    });
  });

  it('should return matching wilaya object with baladyia arabe name', () => {
    const result = getWilayaByBaladyiaName(noBaladyiaMockData)("امنيعة");
    expect(result).toBeNull();
  });

  it('should return matching wilaya object with baladyia arabe name', () => {
    const result = getWilayaByBaladyiaName(noBaladyiaMockData)("المنيعة", ["mattricule"]);
    expect(result).toEqual({
      mattricule: 12,
    });
  });
});


