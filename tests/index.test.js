describe("Le'Bled SDK", () => {
  let data;
  let lbledSdk;

  beforeEach(() => {
    data = require('../data/WilayaList.json');
    lbledSdk = require('../src/index');
  });

  it('data should be present', () => {
    expect(data).toHaveLength(48);
  });

  it('should export API functions', () => {
    expect(lbledSdk).toEqual({
      getWilayaList: expect.any(Function),
      getAdjacentWilayas: expect.any(Function),
      getWilayaByCode: expect.any(Function),
      getZipCodesForWilaya: expect.any(Function),
      getWilayaByZipCode: expect.any(Function),
      getDairatsForWilaya: expect.any(Function),
      getWilayaByPhoneCode: expect.any(Function),
      getPhoneCodesForWilaya: expect.any(Function),
      getPhoneCodeForWilaya: expect.any(Function),
      utils: {
        wilayaProjection: expect.any(Function),
        isValidZipCode: expect.any(Function),
        isValidWilayaCode: expect.any(Function),
      },
    });
  });
});