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
const cpuRouter = require('./routes/cpu');
const coolerRouter = require('./routes/cooler');
const motherboardRouter = require('./routes/motherboard');
const gpuRouter = require('./routes/gpu');
const memoryRouter = require('./routes/memory');
const storageRouter = require('./routes/storage');
const powerRouter = require('./routes/power');
const casesRouter = require('./routes/cases');

const app = express();

// Middleware to allow restricted resources
app.use(cors());

// Middleware to secure HTTP headers
app.use(helmet());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

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
app.use('/cpu', cpuRouter);
app.use('/cooler', coolerRouter);
app.use('/motherboards', motherboardRouter);
app.use('/gpu', gpuRouter);
app.use('/memory', memoryRouter);
app.use('/storage', storageRouter);
app.use('/power', powerRouter);
app.use('/cases', casesRouter);

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

module.exports = app;
