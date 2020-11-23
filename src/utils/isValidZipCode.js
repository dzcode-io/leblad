const ZIP_COUNT = 48073;

/**
 * Check if a given parameter is a valid zip code (between 1000 and 48073)
 * @param {Number | String} code zip code
 * @returns {Boolean}
 */
const isValidZipCode = (code) => {
  const parsedCode = parseInt(code, 10);
  return (
    Number.isInteger(parsedCode) &&
    parsedCode >= 1000 &&
    parsedCode <= ZIP_COUNT
  );
};

module.exports = isValidZipCode;
