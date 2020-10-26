const projectWilaya = require("../utils/projections/wilayaProjection");

const _hasName = baladyiaName =>
  b => b.name === baladyiaName || b.name_ar === baladyiaName || b.name_en === baladyiaName;

const getDairaByBaladyiaName = data =>
/**
   * Takes a baladyia name and returns the daira of baladyia.
   *
   * @example Get daira for baladyia (name:Es-sénia)
   *
   *
   * getDairaByBaladyiaName("ES SENIA")
   *
   * @param { string } baladyia name
   * @param { String[] } projection a list of baladyia object attributes to keep
   * @returns { Object | null } Returns baladyia object, or null
   */
  (baladyiaName, projection) => {
    const hasBaladyiaName = _hasName(baladyiaName);
    let d;
    for(let w=0;w<data.length;w+=1) {
      const wilaya = data[w];
      for(let da=0;da<wilaya.dairats.length;da+=1){
        const daira = wilaya.dairats[da];
        if(daira.baladyiats && daira.baladyiats.find((b) => hasBaladyiaName(b))){
          d = daira;
          break;
        }
      }
    }

    return projectWilaya(d, projection);
  };

module.exports = getDairaByBaladyiaName;
