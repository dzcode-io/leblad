const MIN_DAIRA_LENGTH = 3;

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

  (daira) => {
    if (!daira || daira.trim().length < MIN_DAIRA_LENGTH) {
      return null;
    }

    const dairaName = daira.toLowerCase();

    const wilaya = data.find(w =>
      w.dairats.find(d =>
        d.name.toLowerCase() === dairaName
      || d.name_en.toLowerCase() === dairaName
      || d.name_ar === dairaName
      )
    ) || null;

    if(!wilaya) return null;

    const { baladyiats } = wilaya.dairats.find(dn =>
      dn.name.toLowerCase() === dairaName
    || dn.name_en.toLowerCase() === dairaName
    || dn.name_ar === dairaName
    ) || null;

    return baladyiats;
  };

module.exports = getBaladyiatsForDaira;
