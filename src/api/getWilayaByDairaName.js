const projectWilaya = require('../utils/projections/projectObject');
const _hasName = require('../utils/hasName');

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
   * @returns { Object | null } Returns matching wilaya, or null
   */
  (daira, projection) => {
    if (!daira || daira.trim().length < MIN_DAIRA_LENGTH) {
      return null;
    }

    const hasGivenDairaName = _hasName(daira.toLowerCase());

    const wilaya = data.find(w =>
      w.dairats.find(d => hasGivenDairaName(d))
    );

    return projectWilaya(wilaya, projection);
  };


module.exports = getWilayaByDairaName;