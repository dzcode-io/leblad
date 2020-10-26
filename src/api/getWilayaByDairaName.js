const projectWilaya = require('../utils/projections/wilayaProjection');

const getWilayaByDairaName = data =>
/**
* Takes a Daira name (French, English or Arabic) and returns either the corresponding wilaya or null.
*
* @example Get wilaya for Charouine
*
* //returns {"mattricule":1,"name":"Adrar"... because Charouine is a Daira of Adrar
* getWilayaByDairaName('Charouine')
*
* @param { String } dairaName is a number if the latter corresponds to the wilaya's phone code and a string if's the full phone number
* @param {String[]} projection a list of wilaya object attributes to keep
* @returns { Object | null } Returns the target object, or null
*/
  (dairaName, projection) => {
    const name = dairaName.toUpperCase();

    const wilaya = data.find(w => w.dairats.some(d => name === d.name || name === d.name_ar || name === d.name_en));

    if (!wilaya) return null;

    return projectWilaya(wilaya, projection);
  };

module.exports = getWilayaByDairaName;
