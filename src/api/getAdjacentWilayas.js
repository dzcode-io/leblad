
const getAdjacentWilayas = data =>
/**
 * Takes a wilaya code (matricule) and returns a list of adjacent wilayas codes
 *
 * @example Get Oran's adjacent wilayas
 * //returns [46, 22, 29, 27]
 * getAdjacentWilayas(31)
 *
 * @param { Number} wilayaCode The Wilaya's "matricule"
 * @returns { Number[] | null } Returns adjacent wilayas codes, or null
 */
  (wilayaCode) =>  {
    const { adjacentWilayas } = data.find(w => w.mattricule === wilayaCode) || {};

    return adjacentWilayas || null;

  };

module.exports = getAdjacentWilayas;