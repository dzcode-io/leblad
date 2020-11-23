describe('Object list projection', ()=> {
  const mockDataArray = [{ food: 'mhajeb', drink: 'lben', isBnin: true }, { food: 'zviti', drink: 'rayeb', isBnin: true }];
  const mockDataObject = { food: 'karentika', drink: 'RedBull', isBnin: true };

  let projectObject;

  beforeEach(()=> {
    projectObject = require('../../../src/utils/projections/projectObject');
  });

  it('should return null if the object parameter is undefined', () => {
    expect(projectObject()).toBeNull();
    expect(projectObject(undefined, ['food', 'isBnin'])).toBeNull();
  });

  describe('if no projection parameter is passed', ()=> {
    it.each([
      ['array', mockDataArray],
      ['object', mockDataObject]
    ])('should return the "same" data %s as it is if no parameters were passed', (type, data)=> {
      expect(projectObject(data)).toEqual(data);
    });
  });

  describe('when passing the projection parameter', ()=> {
    const projection = ['food', 'isBnin'];

    it('should return the data array with only the desired attributes', ()=> {
      expect(projectObject(mockDataArray, projection)).toEqual([
        { food: 'mhajeb', isBnin: true },
        { food: 'zviti',  isBnin: true }
      ]);
    });

    it('should return the data object with only the desired attributes', ()=> {
      expect(projectObject(mockDataObject, projection)).toEqual({ food: 'karentika', isBnin: true });
    });

    it('should return the same data if the projections array is empty', () => {
      expect(projectObject(mockDataArray, [])).toEqual(mockDataArray);
      expect(projectObject(mockDataObject, [])).toEqual(mockDataObject);

    });
  });
});