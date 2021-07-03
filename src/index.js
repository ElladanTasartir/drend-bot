const { config } = require('dotenv');
config();

const { client } = require('./client');
const { connectionHandler } = require('./handlers/connect');
const { messageHandler } = require('./handlers/message');

client.on('connected', connectionHandler);
client.on('message', messageHandler);

client.connect();



