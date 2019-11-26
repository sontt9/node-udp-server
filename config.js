/*eslint no-process-env: "off"*/

require('dotenv').config();

const config = {};
config.port = process.env.PORT || 7475;

module.exports = config;
