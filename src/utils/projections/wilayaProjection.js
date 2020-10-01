const _projectWilayaObject = (wilayaObject, attributes) => {
  return attributes.reduce((acc, attr) => {
    return { ...acc, [attr]: wilayaObject[attr] };
  }, {});
};

/**
 * Get a wilaya object or array of object with only the selected properties
 *
 * @param {Object|Array} data Wilaya data, it could be either a Wilaya object or a list of wilaya Objects
 * @param {String[]} projection a list of attributes to keep
 *
 * @returns {Object | Array | null } returns an object (or array of objects) with only the selected properties in "projection" array
 */
const projectWilaya = (wilayaData, projection) => {
  if (!wilayaData || !projection) {
    return wilayaData;
  }
  if (Array.isArray(projection)) {
    if (!Array.isArray(wilayaData)) {
      const data = {};
      for (let i = 0; i < projection.length; i += 1) {
        const field = projection[i];
        if (field.includes('.')) {
          const splitFields = projection.split('.');
          let value = wilayaData[splitFields[0]];
          for (let b = 1; b < splitFields.length; b += 1) {
            if (Array.isArray(value)) {
              const findValues = [];
              value.forEach(item => {
                if (value[splitFields[b]] !== null) findValues.push(item[splitFields[b]]);
              });
              value = [];
              findValues.forEach(item => {
                value.push({ [splitFields[b]]: item });
              });
            }
            else {
              value = value[splitFields[b]];
            }
          }
          data[splitFields[0]] = value;
        }
        else {
          data[field] = wilayaData[field];
        }
      }
      return data;
    }
    if (Array.isArray(wilayaData)) {
      const final = [];
      wilayaData.forEach(val => {
        const data = {};
        for (let i = 0; i < projection.length; i += 1) {
          const field = projection[i];

          if (field.includes('.')) {
            const splitFields = field.split('.');
            let value = val[splitFields[0]];
            for (let b = 1; b < splitFields.length; b += 1) {
              if (Array.isArray(value)) {
                const findValues = [];
                value.forEach(item => {
                  if (value[splitFields[b]] !== null) findValues.push(item[splitFields[b]]);
                });
                value = [];
                findValues.forEach(item => {
                  value.push({ [splitFields[b]]: item });
                });
              }
              else {
                value = value[splitFields[b]];
              }
            }
            data[splitFields[0]] = value;
          }
          else {
            data[field] = val[field];
          }
        }
        final.push(data);
      });
      return final;

    }
  }
  if (Array.isArray(wilayaData)) {
    return wilayaData.map(w => _projectWilayaObject(w, projection));
  }

  return _projectWilayaObject(wilayaData, projection);
};

module.exports = projectWilaya;