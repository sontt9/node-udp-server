const dgram = require('dgram');
const logger = require('logger');
const config = require('config');

const server = dgram.createSocket('udp4');

server.on('error', error => {
  logger.error(`UDP Server error: ${error.stack}`);
  server.close();
})

server.on('message', (msg, rinfo) => {
  logger.info(`UDP Server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
})

server.on('listening', () => {
  const addr = server.address();
  logger.info(`UDP Server listening on ${addr.address}:${addr.port}`);
})

server.bind(config.port);
