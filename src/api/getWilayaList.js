const projectWilaya = require('../utils/projections/wilayaProjection');

const getWilayaList = data => (projection) =>  projectWilaya(data, projection);

module.exports = getWilayaList;