const getWilayaList = require('./api/getWilayaList');
const getWilayaByZipCode = require('./api/getWilayaByZipCode');

const data = require('../data/WilayaList.json');

const _getData = () => ([...data]);


module.exports = {
  getWilayaList: getWilayaList(_getData()),
  getWilayaByZipCode: getWilayaByZipCode(_getData()),
};