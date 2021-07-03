const { db } = require("../db");

const isAlreadySaved = (word) => {
  const { words: savedWords } = db.getData();
  if (savedWords.includes(word)) return true;

  return false;
};

module.exports = {
  isAlreadySaved,
}