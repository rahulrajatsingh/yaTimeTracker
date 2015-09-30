var express = require('express');
var mongoose = require('mongoose');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

app.set('views', __dirname + '/server/views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('*', function(req, res){
	res.render('index');
}); 

var port = 3333;
app.listen(port);

console.log('server is running on port ' + port);