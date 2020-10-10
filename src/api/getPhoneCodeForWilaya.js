const getPhoneCodesForWilaya = require('./getPhoneCodesForWilaya');

const getPhoneCodeForWilaya = data =>
/**
   * Takes a wilaya code (mattricule) and returns the first phone code in wilaya's phone code list.
   *
   * @example Get phone codes for Alger (code: 16)
   *
   * //returns 21
   * getPhoneCodeForWilaya(16)
   *
   * @param { Number } wilayaCode wilaya code (mattricule)
   * @returns { Number | null } Returns the first phone code for wilaya, or null
   */

  (wilayaCode) => {
    const phoneCodes = getPhoneCodesForWilaya(data)(wilayaCode) || [];
    return phoneCodes[0] || null;
  };

module.exports = getPhoneCodeForWilaya;