const getPhoneCodesForWilaya = data =>
/**
   * Takes a wilaya code (mattricule) and returns array of all phone codes for that wilaya.
   *
   * @example Get phone codes for Alger (code: 16)
   *
   * //returns [21, 23]
   * getPhoneCodesForWilaya(16)
   *
   * @param { Number } wilayaCode wilaya code (mattricule)
   * @returns { Number[] | null } Returns wilaya's phone codes, or null
   */

  (wilayaCode) => {
    const { phoneCodes } = data.find((w) => w.mattricule === wilayaCode) || {};
    return phoneCodes || null;
  };

module.exports = getPhoneCodesForWilaya;