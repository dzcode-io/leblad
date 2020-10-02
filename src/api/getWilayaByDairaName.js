const projectWilaya = require('../utils/projections/wilayaProjection');

const getWilayaByDairaName = data =>
/**
 * Takes a wilaya daira-name and returns its respective wilaya
 *
 * @example <p> Get Relizane wilaya by 'OUED RHIOU' daira
 * //returns {name: "Relizane", ...}
 * getWilayaByDairaName("")
 *
 * @param { String } daira The Wilaya's daira name(en | ar | fr)
 * @param {String[]} projection a list of  wilaya object attributes to keep
 * @returns { Object | undefined } Returns matching wilaya, or undefined
 */
  (daira, projection) =>  {
    const wilaya = data.find(w =>
      w.dairats.find(d =>
        d.name === daira
        || d.name_ar === daira
        || d.name_en === daira
      )
    );
    return projectWilaya(wilaya, projection);
  };


module.exports = getWilayaByDairaName;