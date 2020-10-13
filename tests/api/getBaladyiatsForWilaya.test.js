describe('Get baladiyats for wilaya', () => {
  const mockData = [
    {
      mattricule: 33,
      dairats: [
        {
          code: 3301,
          baladyiats: [
            {
              code: 3301,
            }
          ]
        },
        {
          code: 3302,
          baladyiats: [
            {
              code: 3302,
            },
            {
              code: 3305,
            }
          ]
        },
        {
          code: 3302,
          baladyiats: [
            {
              code: 3302,
            },
            {
              code: 3305,
            }
          ]
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
            }
          ]
        }
      ],
    }
  ];

  const baladyiaFiWilaya33 = [
    { code: 3301 },
    { code: 3302 },
    { code: 3305 },
    { code: 3302 },
    { code: 3305 },
    { code: 3303 },
    { code: 3304 },
    { code: 3306 }
  ];

  let getBaladyiatsForWilaya;


  beforeEach(()=>{
    getBaladyiatsForWilaya = require('../../src/api/getBaladyiatsForWilaya');
  });

  it('should export a function', () => {
    expect(typeof getBaladyiatsForWilaya).toBe('function');
  });

  it('should return a curried function that returns data', () => {
    expect(typeof getBaladyiatsForWilaya(mockData)).toBe('function');
  });

  it('should return Baladiyia List', () => {
    expect(getBaladyiatsForWilaya(mockData)(33)).toEqual(baladyiaFiWilaya33);
  });

  it('should return undefined if the wilaya with the given code is not found', () => {
    expect(getBaladyiatsForWilaya(mockData)(333)).toBeNull();
  });
});
