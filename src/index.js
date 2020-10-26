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
const getWilayaByPhoneCode = require("./api/getWilayaByPhoneCode");
const getPhoneCodesForWilaya = require('./api/getPhoneCodesForWilaya');
const getPhoneCodeForWilaya = require('./api/getPhoneCodeForWilaya');
const getBaladyiatsForWilaya = require('./api/getBaladyiatsForWilaya');
const getBaladyiatsForDaira = require('./api/getBaladyiatsForDaira');
const getWilayaByBaladyiaName = require('./api/getWilayaByBaladyiaName');
const getDairaByBaladyiaName = require('./api/getDairaByBaladyiaName');

const data = require('../data/WilayaList.json');

const _getData = () => [...data];

module.exports = {
  getWilayaList: getWilayaList(_getData()),
  getAdjacentWilayas: getAdjacentWilayas(_getData()),
  getWilayaByCode: getWilayaByCode(_getData()),
  getWilayaByZipCode: getWilayaByZipCode(_getData()),
  getZipCodesForWilaya: getZipCodesForWilaya(_getData()),
  getDairatsForWilaya: getDairatsForWilaya(_getData()),
  getWilayaByPhoneCode: getWilayaByPhoneCode(_getData()),
  getPhoneCodesForWilaya: getPhoneCodesForWilaya(_getData()),
  getPhoneCodeForWilaya: getPhoneCodeForWilaya(_getData()),
  getBaladyiatsForWilaya: getBaladyiatsForWilaya(_getData()),
  getBaladyiatsForDaira: getBaladyiatsForDaira(_getData()),
  getWilayaByBaladyiaName: getWilayaByBaladyiaName(_getData()),
  getDairaByBaladyiaName: getDairaByBaladyiaName(_getData()),
  utils: {
    wilayaProjection,
    isValidWilayaCode,
    isValidZipCode,
  },
};


