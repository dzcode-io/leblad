describe('get matching wilaya', ()=> {
  const mockData = [{
    mattricule: 1,
    name: "Adrar",
    dairats: [
      {
        name: "ADRAR",
        name_ar: "أدرار",
        name_en: "ADRAR",
      },
      {
        name: "CHAROUINE",
        name_ar: "شروين",
        name_en: "CHAROUINE",
      },
      {
        name: "REGGANE",
        name_ar: "رقان",
        name_en: "REGGANE",
      },
      {
        name: "TSABIT",
        name_ar: "تسابيت",
        name_en: "TSABIT",
      }
    ]
  },
  {
    mattricule: 25,
    name: "Constantine",
    dairats: [
      {
        name: "CONSTANTINE",
        name_ar: "قسنطينة",
        name_en: "CONSTANTINE",
      },
      {
        name: "HAMMA BOUZIANE",
        name_ar: "حامة بوزيان",
        name_en: "HAMMA BOUZIANE",
      },
      {
        name: "ZIGHOUD YOUCEF",
        name_ar: "زيغود يوسف",
        name_en: "ZIGHOUD YOUCEF",
      },
      {
        name: "EL KHROUB",
        name_ar: "الخروب",
        name_en: "EL KHROUB",
      },
      {
        name: "AIN ABID",
        name_ar: "عين عبيد",
        name_en: "AIN ABID",
      },
      {
        name: "IBN ZIAD",
        name_ar: "ابن زياد",
        name_en: "IBN ZIAD",
      }
    ]
  }];

  let getWilayaByDairaName;

  beforeEach(()=> {
    getWilayaByDairaName = require('../../src/api/getWilayaByDairaName');
  });

  it('should export a function', () => {
    expect(typeof getWilayaByDairaName).toBe('function');
  });

  it('should return a curried function that returns the data', () => {
    const fn = getWilayaByDairaName(mockData);

    expect(typeof fn).toBe('function');
  });

  it('should return undefined if the wilaya with the given daira is not found', () => {
    const result = getWilayaByDairaName(mockData)('Ouled Djellal');

    expect(result).toBeNull();
  });

  it('should return matching wilaya when given Arabic daira name', () => {
    const result = getWilayaByDairaName(mockData)('شروين');

    expect(result).toEqual(mockData[0]);
  });

  it('should return matching wilaya when given English daira name', () => {
    const result = getWilayaByDairaName(mockData)('hamma bouziane');

    expect(result).toEqual(mockData[1]);
  });
});
