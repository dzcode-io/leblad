const hasName = require('../../src/utils/hasName');

describe('check if hasName exists or not', () => {
  const mockObject = {
    name: "ES SENIA",
    name_ar: "السانية",
    name_en: "ES SENIAA",
    name_ber: 'ⵙ ⵙⵏⵉⴰ'
  };

  it('should return true if object has correct name', ()=> {
    expect(hasName("ES SENIA".toLowerCase())(mockObject)).toBe(true);
  });

  it('should return true if object has correct arabic name', ()=> {
    expect(hasName("السانية")(mockObject)).toBe(true);
  });

  it('should return true if object has correct english name', ()=> {
    expect(hasName("ES SENIAA".toLowerCase())(mockObject)).toBe(true);
  });

  it('should return true if object has correct tifinagh name', ()=> {
    expect(hasName("ⵙ ⵙⵏⵉⴰ".toLowerCase())(mockObject)).toBe(true);
  });

  it('should false if object does not have name', ()=> {
    expect(hasName("SENIAA".toLowerCase())(mockObject)).toBe(false);
  });

  it('should return true if requested name is in lower case', ()=> {
    expect(hasName("es senia")(mockObject)).toBe(true);
  });

  it('should false if object does not have name', ()=> {
    expect(hasName("Es SeNiA".toLowerCase())(mockObject)).toBe(true);
  });


});
