const ZIP_COUNT = 48073;

/**
 * Check if a given integer is a valid zip code (between 1000 and 48073)
 * @param {Number} code zip code
 * @returns {Boolean}
 */
const isValidZipCode = (code) =>
  Number.isInteger(code) && code >= 1000 && code <= ZIP_COUNT;

module.exports = isValidZipCode;
