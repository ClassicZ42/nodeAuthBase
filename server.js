var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var db = require('./config/db');
// register user routes
var UserController = require('./user/UserController');
var AuthController = require('./auth/AuthController');

app.use('/users', UserController);
app.use('/api/auth', AuthController);

var server = app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});