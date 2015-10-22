var express = require('express')
var app = express();
var http = require('http').Server(app);

app.get('/', function(req, res){
	res.sendFile(__dirname + '/locaStorage-demo.html');
});

http.listen(3001, function(){
	console.log('listening on port:3001');
});