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
* @param { Number | String } phoneCode the phone code
* @param {String[]} projection a list of wilaya object attributes to keep
* @returns { Object | null } Returns the target object, or null
*/
  (phoneCode, projection) => {
    const parsedPhoneCode = Number(phoneCode);

    if(Number.isNaN(parsedPhoneCode)){
      return null;
    }

    const wilaya = data.find(w => w.phoneCodes.includes(parsedPhoneCode));
    return projectWilaya(wilaya, projection);
  };

module.exports = getWilayaByPhoneCode;
