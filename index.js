//
// (c) Redman Technologies 2017
// Author: Zeeshan Hooda
// Sources: Socket.io, Node.js, Express.js
//
// index.js gateway/entrypoint
//
//
//
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var ngrok = require('ngrok');

var port = 3000;
var startServerFunction = function(){console.log('listening on port ' + port)};


app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
	console.log('a user connected');
  socket.on('chat message', function(msg){
  	console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
});

http.listen(port, startServerFunction);
