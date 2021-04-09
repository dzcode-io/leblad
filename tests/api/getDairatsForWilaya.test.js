describe('Get dairats for a wilaya', () => {
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

  const dairatsForWilaya33 = [
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
  ];

  let getDairatsForWilaya;

  beforeEach(() => {
    getDairatsForWilaya = require('../../src/api/getDairatsForWilaya');
  });

  it('should export a function', () => {
    expect(typeof getDairatsForWilaya).toBe('function');
  });

  it('should return a curried function that returns data', () => {
    expect(typeof getDairatsForWilaya(mockData)).toBe('function');
  });

  it('should return null if the wilaya with the given code is not found', () => {
    expect(getDairatsForWilaya(mockData)(289)).toBeNull();
  });

  it('should return dairats for given wilaya', () => {
    expect(getDairatsForWilaya(mockData)(33)).toEqual(dairatsForWilaya33);
  });
});
