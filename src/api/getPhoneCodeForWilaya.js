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
   * @returns { Number | Undefined } Returns the first phone code for wilaya, or undefined
   */

  (wilayaCode) => {
    const phoneCodes = getPhoneCodesForWilaya(data)(wilayaCode) || [];
    return phoneCodes[0];
  };

module.exports = getPhoneCodeForWilaya;