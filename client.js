const dgram = require('dgram');
const client = dgram.createSocket('udp4');

const host = 'localhost';
const port = 7475;

const message = Buffer.from('Some bytes');

client.send(message, port, host, (error) => {
  client.close();
});
