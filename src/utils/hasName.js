const hasName = givenName =>
  // eslint-disable-next-line camelcase
  ({ name, name_ar, name_en, name_ber }) => name.toLowerCase() === givenName || name_ar === givenName || name_en.toLowerCase() === givenName || name_ber === givenName
;

module.exports = hasName;
