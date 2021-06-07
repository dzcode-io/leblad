const projectDaira = require('../utils/projections/projectObject');

const getDairaByCodeAndWilayaCode = (data)=>
/**
   * Takes a wilaya mattricule and a daira code and return daira.
   *
   * @example Get a daira  by code and wilaya mattricule(mattricule:1, code:101)
   *
   * //returns {name : "ADRAR"}
   * getWilayaByBaladyiaName(1, 101)
   *
   * @param { integer } mattricule wilaya mattricule
   * @param { integer } code daira code
   * @param { String[] } projection a list of Baladyia object attributes to keep
   * @returns { Object | null } Returns daira's object, or null
   */
  (mattricule, code, projection)=>{
    const wilaya = data.find((w) => w.mattricule === mattricule);
    if (wilaya) {
      const daira = wilaya.dairats.find((d)=> d.code === code);
      return projectDaira(daira, projection);
    }
    return null;
  };

module.exports = getDairaByCodeAndWilayaCode;