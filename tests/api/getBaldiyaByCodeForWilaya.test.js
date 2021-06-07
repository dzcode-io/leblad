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

  const mockDataNoBaladiyats = [
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

          ],
        },
      ],
    },
  ];
  let getBaldiyaByCodeForWilaya;

  beforeEach(()=>{
    getBaldiyaByCodeForWilaya = require('../../src/api/getBaldiyaByCodeForWilaya');
  });



  it('should export a function', () => {
    expect(typeof getBaldiyaByCodeForWilaya).toBe('function');
  });

  it('should return a curried function that returns the data', () => {
    const fn = getBaldiyaByCodeForWilaya(mockData);

    expect(typeof fn).toBe('function');
  });

  it('should return null for invalid wilaya mattricule and baldiya code ', () => {
    const result = getBaldiyaByCodeForWilaya(mockData)(99, 1);

    expect(result).toBeNull();
  });

  it('should return null for invalid  baldiya code ', () => {
    const result = getBaldiyaByCodeForWilaya(mockData)(47, 22);

    expect(result).toBeNull();
  });


  it('should return a matching baldiya for a valide baladiya code and wilaya mattricule ', () => {
    const result =getBaldiyaByCodeForWilaya(mockData)(47, 4702);

    expect(result).toEqual(mockData[0].dairats[0].baladyiats[1]);
  });

  it('should return null for an empty data set', () => {
    const result =getBaldiyaByCodeForWilaya(mockDataNoBaladiyats)(47, 4702);

    expect(result).toBeNull();
  });

});