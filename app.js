var createError = require('http-errors');
var express = require('express');
var logger = require('morgan');

var todoRouter = require('./routes/todos');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/todos', todoRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {

  res.json({
    statusCode: 404
  })
});

// error handler
app.use(function (err, req, res, next) {
  res.json({
    statusCode: 500,
    message: err.message,
    stack: err.stack
  })
});

module.exports = app;
