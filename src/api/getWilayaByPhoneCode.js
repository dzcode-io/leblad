const projectWilaya = require('../utils/projections/wilayaProjection');

const getWilayaByPhoneCode = data =>
/**
* Takes a phone code  or the full phone number and returns its wilaya.
*
* @example Get 34 wilaya
*
* //returns {mattricule: '6', name: 'Béjaïa', ...} because the phone code 34 belongs to Béjaïa
* getWilayaByPhoneCode(34)
*
* @param { Number | String } phoneCode is a number if the latter corresponds to the wilaya's phone code and a string if's the full phone number
* @param {String[]} projection a list of wilaya object attributes to keep
* @returns { Object | undefined } Returns the target object, or undefined
*/
  (phoneCode, projection) => {
    const phoneCodeVar =  typeof phoneCode === "number"
      ? phoneCode
      : parseInt(phoneCode.substring(1, 3), 10);
    const wilaya = data.find(w => w.phoneCodes.includes(phoneCodeVar));
    return projectWilaya(wilaya, projection);
  };
module.exports = getWilayaByPhoneCode;