const projectWilaya = require('../utils/projections/wilayaProjection');

const getWilayaByCode = data =>
/**
 * Takes a wilaya code (matricule) and returns its respective wilaya
 *
 * @example <p> Get Oran wilaya
 * //returns ["Oran"]
 * getWilayaByCode(31)
 *
 * @param { Number} mattricule The Wilaya's "matricule"
 * @returns { Number[] | undefined } Returns matching wilaya, or undefined
 */
  (mattricule, projection) =>  {
    const wilaya = data.find(w => w.mattricule === mattricule);
    return projectWilaya(wilaya, projection);
  };

module.exports = getWilayaByCode;