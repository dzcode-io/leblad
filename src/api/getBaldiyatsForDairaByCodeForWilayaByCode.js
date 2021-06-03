
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
   * @param { String[] } projection a list of Baladyia object attributes to keep
   * @returns { Object[] | null } list of all baladiyas for wilaya
   */

  (mattricule,code) => {
    const wilaya = data.find((w) => w.mattricule === mattricule);
    if (wilaya) {
      daira = data.find((w) => w.code === code);
      if(daira){
        return daira.baladiyats
      }
      
    }
    return null;
  };

module.exports = getBaldiyatsForDairaByCodeForWilayaByCode;
