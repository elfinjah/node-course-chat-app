const _express = require('express');
const _http = require('http');
const _path = require('path');
const _socketIO = require('socket.io');

const publicPath = _path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = _express();
var server = _http.createServer(app);
var io = _socketIO(server);

app.use(_express.static(publicPath));

io.on('connection', (socket) => {
   console.log('New user connected'); 

   socket.on('disconnect', () => {
    console.log('User was disconnected');
  });
});

server.listen(port, () => {
    console.log('Start up at port ', port);
});