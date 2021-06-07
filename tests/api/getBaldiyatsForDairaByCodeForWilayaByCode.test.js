describe('get matching baldiyats  by  daira code and wilaya mattricule', ()=>{
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

  let getBaldiyatsForDairaByCodeForWilayaByCode;

  beforeEach(()=>{
    getBaldiyatsForDairaByCodeForWilayaByCode = require('../../src/api/getBaldiyatsForDairaByCodeForWilayaByCode');
  });



  it('should export a function', () => {
    expect(typeof getBaldiyatsForDairaByCodeForWilayaByCode).toBe('function');
  });

  it('should return a curried function that returns the data', () => {
    const fn = getBaldiyatsForDairaByCodeForWilayaByCode(mockData);

    expect(typeof fn).toBe('function');
  });

  it('should return null for invalid wilaya mattricule and daira code ', () => {
    const result = getBaldiyatsForDairaByCodeForWilayaByCode(mockData)(99, 1);

    expect(result).toBeNull();
  });

  it('should return null for invalid  daira code ', () => {
    const result = getBaldiyatsForDairaByCodeForWilayaByCode(mockData)(47, 22);

    expect(result).toBeNull();
  });


  it('should return null for invalid baladiya code ', () => {
    const result = getBaldiyatsForDairaByCodeForWilayaByCode(mockData)(47, 4701);

    expect(result).toEqual(mockData[0].dairats[0].baladyiats);
  });


});