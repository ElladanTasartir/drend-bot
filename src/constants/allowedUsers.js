const allowedUsers = process.env.ALLOWED_USERS.split(',');

if (!allowedUsers) {
  throw new Error('There are no allowed users');
}

module.exports = {
  allowedUsers,
}