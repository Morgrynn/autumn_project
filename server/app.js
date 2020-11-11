var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
// const db = require('../database');

var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
var cpuRouter = require('./routes/cpu');
var coolerRouter = require('./routes/cooler');
var registrationRouter = require('./routes/registration');
var loginRouter = require('./routes/login')

var app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/cpu', cpuRouter);
app.use('/cooler', coolerRouter);
app.use('/register', registrationRouter)
app.use('/login', loginRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// DB init
// Promise.all([
//   db.query(`CREATE TABLE IF NOT EXISTS public.cpu_table (
//     id BIGSERIAL NOT NULL PRIMARY KEY,
//     cpu_name VARCHAR(50) NOT NULL,
//     core_count INTEGER NOT NULL,
//     core_clock VARCHAR(50) NOT NULL,
//     boost_clock VARCHAR(50) NOT NULL,
//     tdp VARCHAR(50) NOT NULL,
//     integrated_graphics VARCHAR(50) NOT NULL,
//     smt VARCHAR(50) NOT NULL,
//     rating INTEGER NOT NULL,
//     price DECIMAL(12,2) NOT NULL
// )`),
//   // Add more table create statements if you need more tables
// ])
//   .then(() => {
//     console.log('database initialized');
//   })
//   .catch((error) => console.log(error));

module.exports = app;
