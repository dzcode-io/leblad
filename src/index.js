// internal functions
const isValidWilayaCode = require('./utils/isValidWilayaCode');
const isValidZipCode = require('./utils/isValidZipCode');
const wilayaProjection = require('./utils/projections/wilayaProjection');
// APIs
const getWilayaList = require('./api/getWilayaList');
const getAdjacentWilayas = require('./api/getAdjacentWilayas');
const getWilayaByCode = require('./api/getWilayaByCode');
const getWilayaByZipCode = require('./api/getWilayaByZipCode');
const getZipCodesForWilaya = require('./api/getZipCodesForWilaya');
const getDairatsForWilaya = require('./api/getDairatsForWilaya');
const getWilayaByDairaName = require('./api/getWilayaByDairaName');

const data = require('../data/WilayaList.json');

const _getData = () => [...data];

module.exports = {
  getWilayaList: getWilayaList(_getData()),
  getAdjacentWilayas: getAdjacentWilayas(_getData()),
  getWilayaByCode: getWilayaByCode(_getData()),
  getWilayaByZipCode: getWilayaByZipCode(_getData()),
  getZipCodesForWilaya: getZipCodesForWilaya(_getData()),
  getDairatsForWilaya: getDairatsForWilaya(_getData()),
  getWilayaByDairaName: getWilayaByDairaName(_getData()),
  utils: {
    wilayaProjection,
    isValidWilayaCode,
    isValidZipCode,
  },
};
