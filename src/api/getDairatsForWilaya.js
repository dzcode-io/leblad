const projectWilaya = require('../utils/projections/wilayaProjection');

const getDairatsForWilaya = data =>
/**
 * Takes a wilaya code (matricule) and returns its dairats
 *
 * @example Get dairats for wilaya number 31
 * getDairatsForWilaya(31)
 *
 * @param { Number} mattricule The Wilaya's "matricule"
 * @param {String[]} projection a list of daira object attributes to keep
 * @returns { object[] | null } Returns All dairats for wilaya, or null
 */

  (mattricule, projection) => {
    const { dairats } = data.find(w => w.mattricule === mattricule) || {};
    return projectWilaya(dairats, projection);
  };

module.exports = getDairatsForWilaya;
