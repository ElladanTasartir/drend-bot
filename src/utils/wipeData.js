const { db } = require('../db');

const wipeData = () => {
  db.resetData();
};

module.exports = {
  wipeData,
}