const _hasName = require('../utils/hasName');
const projectWilaya = require('../utils/projections/wilayaProjection');

const MIN_BALADYA_LENGTH = 3;

const getWilayaByBaladyiaName = (data) =>
  /**
   * Takes a baladyia name and return the wilaya of baladyia.
   *
   * @example Get wilaya for Baladyia (name:Es-sénia)
   *
   * //returns {name : "Oran"}
   * getWilayaByBaladyiaName("ES SENIA")
   *
   * @param { string } baladyia name
   * @param { String[] } projection a list of baladyia object attributes to keep
   * @returns { Object | null } Returns wilaya's object, or null
   */
  (baladyia, projection) => {
    if (!baladyia || baladyia.trim().length < MIN_BALADYA_LENGTH) {
      return null;
    }

    const baladyiaName = baladyia.toLowerCase();
    const hasBaladyiaName = _hasName(baladyiaName);
    const wilaya = data.find(
      w => w.dairats.find(
        (d) => {
          if(d.baladyiats){
            return d.baladyiats.find((b) => hasBaladyiaName(b));
          }
          return null;
        })
    );
    return projectWilaya(wilaya, projection);
  };


module.exports = getWilayaByBaladyiaName;
