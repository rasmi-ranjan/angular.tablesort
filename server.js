var express = require('express'),
	path = require('path'),
	bodyParser = require('body-parser'),
	cookieParser = require('cookie-parser'),
	session = require('express-session');
	var app = express();	
	var http = require('http').Server(app);
	app.use(bodyParser.urlencoded());
	app.use(bodyParser.json());
	app.use(cookieParser());
	app.use(session({secret: '1234567890QWERTY'}));	
	app.use(express.static(path.resolve('./dist')));		
	http.listen(9000);
	console.log('Server running at http://localhost:9000/');
