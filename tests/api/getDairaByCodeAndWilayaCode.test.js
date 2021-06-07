
describe('get matching daira by code and wilaya mattricule', ()=>{
  const mockData = [
    {
      mattricule: 33,
      dairats: [
        {
          code: 3301,
          baladyiats: [
            {
              code: 3301,
            },
          ],
        },
        {
          code: 3302,
          baladyiats: [
            {
              code: 3302,
            },
            {
              code: 3305,
            },
          ],
        },
        {
          code: 3302,
          baladyiats: [
            {
              code: 3302,
            },
            {
              code: 3305,
            },
          ],
        },
        {
          code: 3306,
          baladyiats: [
            {
              code: 3303,
            },
            {
              code: 3304,
            },
            {
              code: 3306,
            },
          ],
        },
      ],
    },
  ];

  let getDairaByCodeAndWilayaCode;
  beforeEach(()=>{
    getDairaByCodeAndWilayaCode = require('../../src/api/getDairaByCodeAndWilayaCode');
  });

  it('should export a function', () => {
    expect(typeof getDairaByCodeAndWilayaCode).toBe('function');
  });

  it('should return a curried function that returns the data', () => {
    const fn = getDairaByCodeAndWilayaCode(mockData);

    expect(typeof fn).toBe('function');
  });

  it('should return null for invalid wilaya mattricule and daira code ', () => {
    const result = getDairaByCodeAndWilayaCode(mockData)(99, 1);

    expect(result).toBeNull();
  });

  it('should return null for invalid  daira code ', () => {
    const result = getDairaByCodeAndWilayaCode(mockData)(33, 99);

    expect(result).toBeNull();
  });



  it('should return a matching baldiya for valide wilaya mattricule and daira code ', () => {
    const result = getDairaByCodeAndWilayaCode(mockData)(33, 3302);
    expect(result).toEqual(mockData[0].dairats[1]);
  });

});