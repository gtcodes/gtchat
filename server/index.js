var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3000);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  socket.emit('message', { author: 'server', message: "hello friend" });
  socket.on('add-message', function (data) {
    console.log(data);
    socket.emit('message', data);
    socket.broadcast.emit('message', data)
  });
});