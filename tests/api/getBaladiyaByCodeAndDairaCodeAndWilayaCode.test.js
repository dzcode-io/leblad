describe('get matching daira  by code and wilaya mattricule', ()=>{
  const mockData = [
    {
      mattricule: 47,
      name: 'Ghardaïa',
      dairats: [
        {
          code: 4701,
          name: 'GHARDAIA',
          name_ar: 'غرداية',
          name_en: 'GHARDAIA',
          baladyiats: [
            {
              code: 4701,
              name: 'GHARDAIA',
              name_en: 'GHARDAIA',
              name_ar: 'غرداية',
            },
            {
              code: 4702,
              name: 'EL MENIAA',
              name_en: 'EL MENIAA',
              name_ar: 'المنيعة',
            },
          ],
        },
      ],
    },
  ];



  let getBaladiyaByCodeAndDairaCodeAndWilayaCode;
  beforeEach(()=>{
    getBaladiyaByCodeAndDairaCodeAndWilayaCode = require('../../src/api/getBaladiyaByCodeAndDairaCodeAndWilayaCode');
  });

  it('should export a function', () => {
    expect(typeof getBaladiyaByCodeAndDairaCodeAndWilayaCode).toBe('function');
  });

  it('should return a curried function that returns the data', () => {
    const fn = getBaladiyaByCodeAndDairaCodeAndWilayaCode(mockData);

    expect(typeof fn).toBe('function');
  });

  it('should return null for invalid wilaya mattricule and baladiya and daira code ', () => {
    const result = getBaladiyaByCodeAndDairaCodeAndWilayaCode(mockData)(99, 1, 99);

    expect(result).toBeNull();
  });

  it('should return null for invalid baladiya and daira code ', () => {
    const result = getBaladiyaByCodeAndDairaCodeAndWilayaCode(mockData)(47, 88, 99);

    expect(result).toBeNull();
  });


  it('should return null for invalid baladiya code ', () => {
    const result = getBaladiyaByCodeAndDairaCodeAndWilayaCode(mockData)(47, 4701, 99);

    expect(result).toBeNull();
  });

  it('should return a matching baldiya for valide wilaya mattricule,  baladiya and daira code ', () => {
    const result = getBaladiyaByCodeAndDairaCodeAndWilayaCode(mockData)(47, 4701, 4702);
    expect(result).toEqual(mockData[0].dairats[0].baladyiats[1]);
  });

});