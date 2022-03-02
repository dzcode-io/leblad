describe('Get baladyiats for a daira', () => {
  const baladyiats = [
    {
      code: 3101,
      name: 'ORAN',
      name_en: 'ORAN',
      name_ar: 'وهران',
    },
  ];

  const mockData = [
    {
      code: 3101,
      name: 'ORAN',
      name_ar: 'وهران',
      name_en: 'ORAN',
      dairats: [
        {
          code: 3101,
          name: 'ORAN',
          name_en: 'ORAN',
          name_ar: 'وهران',
          baladyiats,
        },
      ],
    },
  ];
  const DAIRA_WITHOUT_BALADIATS = [
    {
      code: 3101,
      name: 'ORAN',
      dairats: [
        {
          code: 3101,
          name: 'ORAN',
          baladyiats: undefined,
        },
      ],
    },
  ];

  let getBaladyiatsForDairaCode;

  beforeEach(() => {
    getBaladyiatsForDairaCode = require('../../src/api/getBaladyiatsForDairaCode');
  });

  it('should export a function', () => {
    expect(typeof getBaladyiatsForDairaCode).toBe('function');
  });

  it('should return a curried function that returns data', () => {
    expect(typeof getBaladyiatsForDairaCode(mockData)).toBe('function');
  });

  it('should return null if the the wilaya with the given daira code is not found', () => {
    expect(getBaladyiatsForDairaCode(mockData)(99)).toBeNull();
  });

  it('should return null if the there is no daira code', () => {
    expect(getBaladyiatsForDairaCode(mockData)()).toBeNull();
  });

  it('should return null if the daira has no baladiats', () => {
    expect(getBaladyiatsForDairaCode(DAIRA_WITHOUT_BALADIATS)(3101)).toBeNull();
  });

  it('should return baladyiats for given daira code', () => {
    expect(getBaladyiatsForDairaCode(mockData)(3101)).toEqual(baladyiats);
  });

});
