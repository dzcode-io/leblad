const getWilayaList = require('./api/getWilayaList');
const getWilayaByCode = require('./api/getWilayaByCode');

const data = require('../data/WilayaList.json');

const _getData = () => ([...data]);


module.exports = {
  getWilayaList: getWilayaList(_getData()),
  getWilayaByCode: getWilayaByCode(_getData()),
};