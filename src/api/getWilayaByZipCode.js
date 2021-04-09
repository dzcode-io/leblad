const projectWilaya = require('../utils/projections/projectObject');

const getWilayaByZipCode = (data) =>
/**
   * Takes a zip code (postal code) and returns it's wilaya.
   *
   * @example Get 1000 wilaya
   *
   * //returns {mattricule: '1', name: 'Adrar', ...} because the zip code 1000 belongs to Adrar
   * getWilayaByZipCode(31)
   *
   * @param { Number } zipCode postal code
   * @param {String[]} projection a list of  wilaya object attributes to keep
   * @returns { Object | null } Returns the target object, or null
   */

  (zipCode, projection) => {
    const wilaya = data.find((w) => w.postalCodes.includes(zipCode));
    return projectWilaya(wilaya, projection);
  };

module.exports = getWilayaByZipCode;
