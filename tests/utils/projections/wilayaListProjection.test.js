describe('Wilaya list projection', ()=> {
  const mockDataArray = [{ food: 'mhajeb', drink: 'lben', isBnin: true }, { food: 'zviti', drink: 'rayeb', isBnin: true }];
  const mockDataObject = { food: 'karentika', drink: 'RedBull', isBnin: true };

  let projectWilaya;

  beforeEach(()=> {
    projectWilaya = require('../../../src/utils/projections/wilayaProjection');
  });

  it('should return null if the wilaya parameter is undefined', () => {
    expect(projectWilaya()).toBeNull();
    expect(projectWilaya(undefined, ['food', 'isBnin'])).toBeNull();
  });

  describe('if no projection parameter is passed', ()=> {
    it.each([
      ['array', mockDataArray],
      ['object', mockDataObject]
    ])('should return the "same" data %s as it is if no parameters were passed', (type, data)=> {
      expect(projectWilaya(data)).toEqual(data);
    });
  });

  describe('when passing the projection parameter', ()=> {
    const projection = ['food', 'isBnin'];

    it('should return the data array with only the desired attributes', ()=> {
      expect(projectWilaya(mockDataArray, projection)).toEqual([
        { food: 'mhajeb', isBnin: true },
        { food: 'zviti',  isBnin: true }
      ]);
    });

    it('should return the data object with only the desired attributes', ()=> {
      expect(projectWilaya(mockDataObject, projection)).toEqual({ food: 'karentika', isBnin: true });
    });

    it('should return the same data if the projections array is empty', () => {
      expect(projectWilaya(mockDataArray, [])).toEqual(mockDataArray);
      expect(projectWilaya(mockDataObject, [])).toEqual(mockDataObject);

    });
  });
});