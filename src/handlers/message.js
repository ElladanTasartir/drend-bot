const { client } = require("../client");
const { allowedUsers } = require("../constants/allowedUsers");
const { blackListedWords } = require("../constants/blackListedWords");
const { db } = require('../db');
const { isAlreadySaved } = require("../utils/isAlreadySaved");
const { randomMessageFactory } = require("../utils/randomMessageFactory");
const { wipeData } = require("../utils/wipeData");

const messageHandler = (target, context, msg, self) => {
  try {
    if (self) return;

    const commandName = msg.trim();

    const isUserVerified = allowedUsers.includes(context.username);

    if (commandName === '!wat' && isUserVerified) {
      if (db.count() === 0) return;

      const randomSentence = randomMessageFactory();
      console.log(`${context.username} requested a !wat service`);
      client.say(target, randomSentence);
      wipeData();
      return;
    }
    const arrayOfWords = msg.split(' ');

    for (let word of arrayOfWords) {
      const loweredWord = word.toLowerCase();
      if (blackListedWords.includes(loweredWord) || isAlreadySaved(word)) continue;

      db.push(word);
    }

    console.log(`${context['display-name']} says: ${msg}`);
  } catch (err) {
    console.log('There was an error:');
    console.log(err);
  }
};

module.exports = {
  messageHandler
};