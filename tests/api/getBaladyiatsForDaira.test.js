describe('Get baladyiats for a daira', ()=>{
  const baladyiats =  [
    {
      code: 3101,
      name: "ORAN",
      name_en: "ORAN",
      name_ar: "وهران"
    }
  ];

  const mockData = [
    {
      code: 3101,
      name: "ORAN",
      name_ar: "وهران",
      name_en: "ORAN",
      dairats: [
        {
          code: 3101,
          name: "ORAN",
          name_en: "ORAN",
          name_ar: "وهران",
          baladyiats
        }
      ]
    }
  ];
  const DAIRA_WITHOUT_BALADIATS = [
    {
      code: 3101,
      name: "ORAN",
      dairats: [
        {
          code: 3101,
          name: "ORAN",
          baladyiats: undefined
        }
      ]
    }
  ];




  let getBaladyiatsForDaira;

  beforeEach(() => {
    getBaladyiatsForDaira = require('../../src/api/getBaladyiatsForDaira');
  });

  it('should export a function', () => {
    expect(typeof getBaladyiatsForDaira).toBe('function');
  });

  it('should return a curried function that returns data', () => {
    expect(typeof getBaladyiatsForDaira(mockData)).toBe('function');
  });

  it('should return null if the the wilaya with the given daira is not found', () => {
    expect(getBaladyiatsForDaira(mockData)("foo")).toBeNull();
  });

  it('should return null if the there is no daira', () => {
    expect(getBaladyiatsForDaira(mockData)()).toBeNull();
  });
  
    it('should return null if the daira has no baladiats', () => {
    expect(getBaladyiatsForDaira(DAIRA_WITHOUT_BALADIATS)("ORAN")).toBeNull();
  });

  it('should return baladyiats for given daira in English', ()=>{
    expect(getBaladyiatsForDaira(mockData)("ORAN")).toEqual(baladyiats);
  });

  it('should return baladyiats for given daira in French', ()=>{
    expect(getBaladyiatsForDaira(mockData)("ORAN")).toEqual(baladyiats);
  });

  it('should return baladyiats for given daira in Arabic', ()=>{
    expect(getBaladyiatsForDaira(mockData)("وهران")).toEqual(baladyiats);
  });
});