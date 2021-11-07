const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const fileupload = require('express-fileupload')

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const revealRouter = require('./routes/reveal');
const addRouter = require('./routes/add');
const pledgesRouter = require('./routes/pledges');
const deleteRouter = require('./routes/delete');
const loginRouter = require('./routes/login');
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(fileupload());

app.use(express.static(path.join(__dirname, '../frontend/build')));
app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
})

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/add', addRouter);
app.use('/reveal', revealRouter);
app.use('/pledges', pledgesRouter);
app.use('/delete', deleteRouter);
app.use('/login', loginRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

//for dev
// app.use(express.static(path.join(__dirname, 'public')));

//for production, comment this section out if working dev
// const port = process.env.PORT || 9000;
// app.listen(port);

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;