describe("Le'Bled SDK", () => {
  let data;
  let lbledSdk;

  beforeEach(()=> {
    data = require('../data/WilayaList.json');
    lbledSdk = require('../src/index');
  });

  it('data should be present', () => {
    expect(data).toHaveLength(48);
  });

  it('should export API functions', () => {
    expect(lbledSdk).toMatchObject({
      getWilayaList: expect.any(Function),
      getAdjacentWilayas: expect.any(Function),
      utils: {
        wilayaProjection: expect.any(Function),
        isValidWilayaCode: expect.any(Function)
      }
    });
  });
});
