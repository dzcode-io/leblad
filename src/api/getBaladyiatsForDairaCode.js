const getBaladyiatsForDairaCode = (data) =>
/**
   * Takes a wilaya daira name and returns its baladyiats
   *
   * @example get baladyiats for daira
   * getBaladyiatsForDaira(31)
   *
   * @param { Number } daira The Wilaya's "daira"
   * @returns { object[] | null } Returns All baladyiats for daira, or null
   */

  (daira) => {


    const wilaya = data.find((w) =>
      w.dairats.find((d) => d.code === daira ),
    );

    if (!wilaya) return null;

    const { baladyiats } = wilaya.dairats.find((d) => d.code === daira);

    return baladyiats || null;
  };

module.exports = getBaladyiatsForDairaCode;
