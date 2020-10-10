const OUED_RHIOU = "OUED RHIOU";
const OUED_RHIOU_EN = `${OUED_RHIOU  }_en`;
describe('get matching wilaya', ()=> {
  const mockData = [{
    mattricule: 48,
    name: "Relizane",
    dairats: [
      { name: "RELIZANE", name_ar: "غليزان", name_en: "RELIZANE" },
      { name: OUED_RHIOU, name_ar: "وادي رهيو", name_en: OUED_RHIOU_EN }
    ]
  }];

  let getWilayaByDairaName;

  beforeEach(()=> {
    getWilayaByDairaName = require('../../src/api/getWilayaByDairaName');
  });

  it('should export a function', () => {
    expect(typeof getWilayaByDairaName).toBe('function');
  });

  it('should return a curried function that returns the data', () => {
    const fn = getWilayaByDairaName(mockData);

    expect(typeof fn).toBe('function');
  });

  it('should return undefined if the wilaya with the given daira is not found', () => {
    const result = getWilayaByDairaName(mockData)("foo");

    expect(result).toBeUndefined();
  });

  it('should return undefined if there\'s no daira', () => {
    const result = getWilayaByDairaName(mockData)();

    expect(result).toBeUndefined();
  });

  it('should return undefined if the wilaya with the given daira is empty', () => {
    const result = getWilayaByDairaName(mockData)("");

    expect(result).toBeUndefined();
  });

  it('should return matching wilaya object with arabic name', () => {
    const result = getWilayaByDairaName(mockData)("وادي رهيو");

    expect(result).toEqual({
      mattricule: 48,
      name: "Relizane",
      dairats: [
        { name: "RELIZANE", name_ar: "غليزان", name_en: "RELIZANE" },
        { name: OUED_RHIOU, name_ar: "وادي رهيو", name_en: OUED_RHIOU_EN }
      ]
    });
  });

  it('should return matching wilaya object with english name', () => {
    const result = getWilayaByDairaName(mockData)(OUED_RHIOU_EN);

    expect(result).toEqual({
      mattricule: 48,
      name: "Relizane",
      dairats: [
        { name: "RELIZANE", name_ar: "غليزان", name_en: "RELIZANE" },
        { name: OUED_RHIOU, name_ar: "وادي رهيو", name_en: OUED_RHIOU_EN }
      ]
    });
  });

  it('should return matching wilaya object with french name', () => {
    const res = getWilayaByDairaName(mockData)(OUED_RHIOU);

    expect(res).toEqual({
      mattricule: 48,
      name: "Relizane",
      dairats: [
        { name: "RELIZANE", name_ar: "غليزان", name_en: "RELIZANE" },
        { name: OUED_RHIOU, name_ar: "وادي رهيو", name_en: OUED_RHIOU_EN }
      ]
    });
  });
});