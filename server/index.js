var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3000);

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {

  var address = socket.request.connection.remoteAddress.substr(7);
  console.log('connection from ' + address);
  socket.emit('ping', address);
  io.emit('personal', {author: 'server', message: 'A user connected to the chat from ' + address});
  
  socket.emit('personal', { author: 'server', message: "Hello and welcome "});

  socket.on('add-message', function (data) {
    console.log(data);
    io.emit('message', data)
  });

  socket.on('info-message', function (data) {
    socket.emit('personal', data);
  })
});