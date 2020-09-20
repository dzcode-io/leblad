// internal functions
const isValidWilayaCode = require('./utils/isValidWilayaCode');
const wilayaProjection = require('./utils/projections/wilayaProjection');
// APIs
const getWilayaList = require('./api/getWilayaList');
const getAdjacentWilayas = require('./api/getAdjacentWilayas');

const data = require('../data/WilayaList.json');

const _getData = () => ([...data]);


module.exports = {
  getWilayaList: getWilayaList(_getData()),
  getAdjacentWilayas: getAdjacentWilayas(_getData()),
  utils: {
    wilayaProjection,
    isValidWilayaCode
  }
};