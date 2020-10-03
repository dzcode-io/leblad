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
* @param { Number } phoneCode the phone code
* @param {String[]} projection a list of wilaya object attributes to keep
* @returns { Object | undefined } Returns the target object, or undefined
*/
  (phoneCode, projection) => {
    if(Number.isNaN(phoneCode)){
      return;
    }
    const parsedPhoneCode = Number.parseInt(phoneCode, 10);
    const wilaya = data.find(w => w.phoneCodes.includes(parsedPhoneCode));
    // eslint-disable-next-line consistent-return
    return projectWilaya(wilaya, projection);
  };

module.exports = getWilayaByPhoneCode;
