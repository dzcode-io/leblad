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
          return d.baladyiats.find((b) => b.name.toLowerCase() === baladyiaName);
        }
        return false;
      })
    )


    // console.log(data[0].dairats[0].baladyiats);

    return wilaya;
  }


module.exports = getWilayaByBaladyiaName;
