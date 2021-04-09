const _projectSingleObject = (object, attributes) =>
  attributes.reduce((acc, attr) => ({ ...acc, [attr]: object[attr] }), {});

/**
 * Get an object or array of object with only the selected properties
 *
 * @param {Object|Array} dataObject data object, it could be either a object or a list of objects (example: Wilaya, Baladiya, Daira)
 * @param {String[]} projection a list of attributes to keep
 *
 * @returns {Object | Array | null } returns an object (or array of objects) with only the selected properties in "projection" array
 */
const projectObject = (dataObject, projection) => {
  if (!dataObject || !projection || !projection.length) {
    return dataObject || null;
  }

  if (Array.isArray(dataObject)) {
    return dataObject.map((w) => _projectSingleObject(w, projection));
  }

  return _projectSingleObject(dataObject, projection);
};

module.exports = projectObject;
