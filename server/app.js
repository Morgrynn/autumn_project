const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
// const db = require('../database');

const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/users');
const cpuRouter = require('./routes/cpu');
const coolerRouter = require('./routes/cooler');
const motherboardRouter = require('./routes/motherboard');
const gpuRouter = require('./routes/gpu');

const app = express();

// Middleware to allow restricted resources
app.use(cors());

// Middleware to secure HTTP headers
// app.use(helmet());

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

// Routes
app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/cpu', cpuRouter);
app.use('/cooler', coolerRouter);
app.use('/motherboards', motherboardRouter);
app.use('/gpu', gpuRouter);

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
//     cpu_name constCHAR(50) NOT NULL,
//     core_count INTEGER NOT NULL,
//     core_clock constCHAR(50) NOT NULL,
//     boost_clock constCHAR(50) NOT NULL,
//     tdp constCHAR(50) NOT NULL,
//     integrated_graphics constCHAR(50) NOT NULL,
//     smt constCHAR(50) NOT NULL,
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
