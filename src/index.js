const getWilayaList = require('./api/getWilayaList');

const data = require('../data/WilayaList.json');

const _getData = () => ([...data]);


module.exports = {
  getWilayaList: getWilayaList(_getData())
};