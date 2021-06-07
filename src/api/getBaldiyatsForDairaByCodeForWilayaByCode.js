const projectBaladiya = require('../utils/projections/projectObject');

const getBaldiyatsForDairaByCodeForWilayaByCode = (data) =>
/**
   * Takes a wilaya code (mattricule), daira code (code) and returns array of Baladiyates of wilaya.
   *
   * @example Get Baladiyats list of adrar daira in  adrar wilaya (mattricule:1 ,code: 101)
   *
   *
   * getBaldiyatsForDairaByCodeForWilayaByCode(1, 101)
   *
   * @param { Number } mattricule wilaya code (mattricule)
   * @param { Number } code baladiya code (code)
   * @param { String[] } projections a list of Baladyia object attributes to keep
   * @returns { Object[] | null } list of all baladiyas for wilaya
   */

  (mattricule, code, projections) => {
    const wilaya = data.find((w) => w.mattricule === mattricule);
    if (wilaya) {
      const daira = wilaya.dairats.find((d) => d.code === code);

      if(daira){
        return  projectBaladiya(daira.baladyiats, projections);
      }

    }
    return null;
  };

module.exports = getBaldiyatsForDairaByCodeForWilayaByCode;
