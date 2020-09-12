describe("Le'Bled SDK", () => {
  let data;

  beforeEach(()=> {
    data  =require('../data/WilayaList.json');
  });

  it('data should be present', () => {
    expect( data).toHaveLength(48);
  });
});
