var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3000);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  socket.emit('personal', { author: 'server', message: "Hello and welcome "});
  io.emit('personal', {author: 'server', message: 'A user connected to the chat'});

  socket.on('add-message', function (data) {
    console.log(data);
    io.emit('message', data)
  });

  socket.on('info-message', function (data) {
    socket.emit('personal', data);
  })
});