const projectWilaya = require('../utils/projections/wilayaProjection');

const getWilayaByBaladyiaName = (data) =>
  /**
   * Takes a baladyia name and return the wilaya of baladyia.
   *
   * @example Get wilaya for Baladyia (name:Es-sénia)
   *
   * //returns [21, 23]
   * getPhoneCodesForWilaya(16)
   *
   * @param { Number } wilayaCode wilaya code (mattricule)
   * @returns { Number[] | null } Returns wilaya's phone codes, or null
   */
  (baladyia , projection) => {
    if (!baladyia || baladyia.trim().length < 3) {
      return null;
    }

    const baladyiaName = baladyia.toLowerCase();
    const wilaya = data.find(
      w => w.dairats.find(
      (d) => {
        if(d.baladyiats){
          return d.baladyiats.find((b) => b.name.toLowerCase() === baladyiaName || b.name_en.toLowerCase() === baladyiaName || b.name_ar === baladyiaName);
        }
        return null;
      })
    )

    return projectWilaya(wilaya , projection);
  }


module.exports = getWilayaByBaladyiaName;
