const hasName = givenName => {
  // eslint-disable-next-line camelcase
  return ({ name, name_ar, name_en }) => name.toLowerCase() === givenName || name_ar === givenName || name_en.toLowerCase() === givenName;
};

module.exports = hasName;
