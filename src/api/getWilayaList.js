const projectWilaya = require('../utils/projections/projectObject');

const getWilayaList = data => (projection) => projectWilaya(data, projection);

module.exports = getWilayaList;