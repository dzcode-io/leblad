const projectBaladiya = require('../utils/projections/projectObject');

const getBaladyiatsForWilaya = (data) =>
/**
   * Takes a wilaya code (mattricule) and returns array of Baladiyates of wilaya.
   *
   * @example Get Baladiyats list of Alger (code: 16)
   *
   *
   * getBaladyiatsForWilaya (16)
   *
   * @param { Number } mattricule wilaya code (mattricule)
   * @param { String[] } projection a list of Baladyia object attributes to keep
   * @returns { Object[] | null } list of all baladiyas for wilaya
   */

  (mattricule, projections) => {
    const wilaya = data.find((w) => w.mattricule === mattricule);
    if (wilaya) {
      const baladyiats = wilaya.dairats.reduce(
        (acc, daira) => [...acc, ...daira.baladyiats],
        [],
      );
      return projectBaladiya(baladyiats, projections);
    }
    return null;
  };

module.exports = getBaladyiatsForWilaya;
