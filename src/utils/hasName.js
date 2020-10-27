const _hasName = baladyiaName => {
  return b => b.name.toLowerCase() === baladyiaName || b.name_ar === baladyiaName || b.name_en.toLowerCase() === baladyiaName;
};

module.exports = _hasName;
