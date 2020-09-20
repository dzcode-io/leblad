const getWilayaByZipCode = data =>
  /**
   * Takes a zip code (postal code) and returns it's wilaya.
   *
   * @example <p> Get 1000 wilaya
   * //returns {mattricule: '1', name: 'Adrar', ...} because the zip code 1000 belongs to Adrar 
   * getWilayaByZipCode(31)
   *
   * @param { Number } zipCode postal code
   * @returns { Object | undefined } Returns the target object, or undefined
   */
  (zipCode) => data.find(w => w.postalCodes.includes(zipCode));

module.exports = getWilayaByZipCode;