const _hasName = require('../utils/hasName');

const MIN_DAIRA_NAME_LENGTH = 3;

const getBaladyiatsForDaira = data =>
/**
   * Takes a wilaya daira name and returns its baladyiats
   *
   * @example get baladyiats for daira
   * getBaladyiatsForDaira("ORAN")
   *
   * @param { String } daira The Wilaya's "daira"
   * @returns { object[] | null } Returns All baladyiats for daira, or null
   */

  daira => {
    if (!daira || daira.trim().length < MIN_DAIRA_NAME_LENGTH) {
      return null;
    }

    const hasGivenDairaName = _hasName(daira.toLowerCase());

    const wilaya = data.find(w =>
      w.dairats.find(d => hasGivenDairaName(d))
    );

    if (!wilaya) return null;

    const { baladyiats } = wilaya.dairats.find(dn => hasGivenDairaName(dn));

    return baladyiats || null;
  };

module.exports = getBaladyiatsForDaira;
