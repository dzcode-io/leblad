const _projectWilayaObject = (wilayaObject, attributes) => {
  return attributes.reduce((acc, attr)=> {
    return {...acc, [attr]: wilayaObject[attr]};
  }, {});
};

/**
 * Get a wilaya object or array of object with only the selected properties
 *
 * @param {Object|Array} data Wilaya data, it could be either a Wilaya object or a list of wilaya Objects
 * @param {String[]} projection a list of attributes to keep
 *
 */
const projectWilaya = (wilayaData, projection) => {
  if (!projection) {
    return wilayaData;
  }

  if (Array.isArray(wilayaData)) {
    return wilayaData.map(w => _projectWilayaObject(w, projection));
  }

  return _projectWilayaObject(wilayaData, projection);
};

module.exports = projectWilaya;