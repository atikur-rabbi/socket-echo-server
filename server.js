const WebSocket = require('ws');
 
const wss = new WebSocket.Server({ port: process.env.PORT || 80 });
 
wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
    ws.send(message);
  });
 
  // ws.send('something');
});