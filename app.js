var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('./startup/Mongodbconnection.js');   
var usersRouter = require('./routes/users');
var indexRouter = require('./routes/index');
//var zoosRouter=require('./routes/zoos');
//var animalssRouter=require('./routes/animals');


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/users', usersRouter);


module.exports = app;
