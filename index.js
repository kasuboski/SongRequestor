var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendfile('index.html');
});
app.get('/admin', function(req, res){
	res.sendfile('admin.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
  
  socket.on('song request', function(song){
  	console.log(song);
  	io.emit('song request', song);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});