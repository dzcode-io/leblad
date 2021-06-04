const projectBaladiya = require('../utils/projections/projectObject');

const getBaldiyaByCodeForWilaya = (data) =>
/**
   * Takes a wilaya code (mattricule) and a baladiya code  and return a baladiya
   *
   * @example Get the baladiya of adrar  in adrara(mattricule:1 ,code: 101)
   *
   *
   * getBaldiyaByCodeForWilaya(1, 101)
   *
   * @param { Number } mattricule wilaya code (mattricule)
   * @param { Number } code baladiya code (code)
   * @param { String[] } projection a list of Baladyia object attributes to keep
   * @returns { Object[] | null } get baladiya's object
   */

  (mattricule, code, projections) => {
    const wilaya = data.find((w) => w.mattricule === mattricule);
    if (wilaya) {
      const baladyiats = wilaya.dairats.reduce(
        (acc, daira) => [...acc, ...daira.baladyiats],
        [],
      );
      if(baladyiats){
        const baladiya = baladyiats.find((w)=> w.code === code);
        return projectBaladiya(baladiya, projections);
      }

    }
    return null;
  };

module.exports = getBaldiyaByCodeForWilaya;
