describe('get the full Wilaya list', () => {
  let getWilayaList;

  beforeEach(() => {
    getWilayaList = require('../../src/api/getWilayaList');
  });

  it('should export a function', () => {
    expect(typeof getWilayaList).toBe('function');
  });

  it('should return return a curried function that returns the data', () => {
    const data = [{ foo: 'bar' }];

    const fn = getWilayaList(data);

    expect(typeof fn).toBe('function');
    expect(fn()).toBe(data);
  });
});
