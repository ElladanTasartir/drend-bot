const { db } = require('../db');

const randomMessageFactory = () => {
  const numberOfWords = Math.floor(Math.random() * 15);
  const randomSentence = [];
  const dataLength = db.count();
  for (let index = 0; index <= numberOfWords; index++) {
    const randomIndex = Math.floor(Math.random() * dataLength);
    const word = db.getData().words[randomIndex];
    randomSentence.push(word);
  }

  return randomSentence.join(' ');
};

module.exports = {
  randomMessageFactory,
};