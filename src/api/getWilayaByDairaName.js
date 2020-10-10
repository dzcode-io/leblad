const projectWilaya = require('../utils/projections/wilayaProjection');

const MIN_DAIRA_LENGTH = 3;

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
    if (!daira || daira.trim().length < MIN_DAIRA_LENGTH) {
      return;
    }

    const dairaName = daira.toLowerCase();

    const wilaya = data.find(w =>
      w.dairats.find(d =>
        d.name.toLowerCase() === dairaName
      || d.name_en.toLowerCase() === dairaName
      || d.name_ar === dairaName
      )
    );

    // eslint-disable-next-line consistent-return
    return projectWilaya(wilaya, projection);
  };


module.exports = getWilayaByDairaName;