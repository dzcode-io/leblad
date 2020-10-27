const _hasName = baladyiaName =>{
  const name = baladyiaName.toLowerCase();
  return b => b.name.toLowerCase() === name || b.name_ar.toLowerCase() === name || b.name_en.toLowerCase() === name;
};

module.exports = _hasName;
