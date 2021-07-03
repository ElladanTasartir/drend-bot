const fs = require('fs');
const { resolve } = require('path');

const db = {
  path: resolve(__dirname, '..', 'data.json'),
  push: function (data) {
    const wordsData = this.getData();
    wordsData.words.push(data);
    const newWordsData = JSON.stringify(wordsData);
    fs.writeFileSync(this.path, newWordsData, {
      encoding: 'utf-8',
    });
  },
  count: function () {
    return this.getData().words.length;
  },
  getData: function () {
    const wordsJson = fs.readFileSync(this.path, "utf-8");
    return JSON.parse(wordsJson);
  },
  resetData: function () {
    const resetData = JSON.stringify({
      words: [],
    });

    fs.writeFileSync(resolve(__dirname, '..', 'data.json'), resetData, {
      encoding: 'utf-8',
    });
  }
};

module.exports = {
  db,
};