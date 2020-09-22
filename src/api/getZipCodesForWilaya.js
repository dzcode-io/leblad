const getZipCodesForWilaya = (data) =>
/**
  *
  * Takes a wilaya code (matricule) and returns its respective Zip-codes
  *
  * @example Get Zip-codes of wilaya 23
  * getZipCodesForWilaya(23)
  * //returns Array containing Zip-codes for respective wilaya
  *
  * @param { Number} wilayaCode The Wilaya's "matricule"
  * @returns { Number[] | undefined } Returns Zip-codes for wilaya, or undefined
  */

  (wilayaCode) => {
    const { postalCodes } = data.find((w) => w.mattricule === wilayaCode) || {};
    return postalCodes;
  };

module.exports = getZipCodesForWilaya;
