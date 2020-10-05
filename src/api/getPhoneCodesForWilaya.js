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
   * @returns { Number[] | Undefined } Returns wilaya's phone codes, or undefined
   */

  (wilayaCode) => {
    const { phoneCodes } = data.find((w) => w.mattricule === wilayaCode) || {};
    return phoneCodes;
  };

module.exports = getPhoneCodesForWilaya;