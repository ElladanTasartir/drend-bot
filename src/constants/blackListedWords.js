const blackListedWords = process.env.BLACKLIST.split(',');

if (!blackListedWords) {
  throw new Error('There are no blacklisted words');
}

module.exports = {
  blackListedWords
};