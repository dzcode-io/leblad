const getWilayaList = require('./api/getWilayaList');
const getAdjacentWilayas = require('./api/getAdjacentWilayas');
const getWilayaByCode = require('./api/getWilayaByCode');
const getWilayaByZipCode = require('./api/getWilayaByZipCode');

const data = require('../data/WilayaList.json');

const _getData = () => ([...data]);


module.exports = {
  getWilayaList: getWilayaList(_getData()),
  getAdjacentWilayas: getAdjacentWilayas(_getData())
  getWilayaByCode: getWilayaByCode(_getData()),
  getWilayaByZipCode: getWilayaByZipCode(_getData()),
};