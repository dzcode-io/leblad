const WILAYA_COUNT = 48;

/**
 * Check if a given integer is a valid wilaya code (between 1 and 48)
 * @param {Number} code wilaya code (matricule)
 * @returns {Boolean}
 */
const isValidWilayaCode = code => Number.isInteger(code) && code > 0 && code <= WILAYA_COUNT;

module.exports = isValidWilayaCode;