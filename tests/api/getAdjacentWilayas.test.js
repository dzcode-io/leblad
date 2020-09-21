describe('get adjacent wilayas', ()=> {
  const mockData = [{
    mattricule: 1,
    name: "Adrar",
    adjacentWilayas: [37, 8, 32, 3, 47, 11]
  },
  {
    mattricule: 2,
    name: "Chlef",
    adjacentWilayas: [27, 48, 7, 38, 44, 42]
  },
  {
    mattricule: 3,
    name: "Laghouat",
    adjacentWilayas: [32, 47, 17, 14]
  }];

  let getAdjacentWilayas;

  beforeEach(()=> {
    getAdjacentWilayas = require('../../src/api/getAdjacentWilayas');
  });

  it('should export a function', () => {
    expect(typeof getAdjacentWilayas).toBe('function');
  });

  it('should return return a curried function that returns the data', () => {
    const fn = getAdjacentWilayas(mockData);

    expect(typeof fn).toBe('function');
  });

  it('should return undefined if the wilaya with the given code is not found', () => {
    const result = getAdjacentWilayas(mockData)(31);

    expect(result).toBeUndefined();
  });

  it('should return adjacent wilayas array', () => {
    const result = getAdjacentWilayas(mockData)(2);

    expect(result).toEqual([27, 48, 7, 38, 44, 42]);
  });
});