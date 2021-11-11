var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var dressRouter = require('./routes/dress');
var addmodsRouter = require('./routes/addmods');
var SelectorRouter = require('./routes/Selector');
var dress = require("./models/dress");
var resourceRouter = require('./routes/resource');




  
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/dress', dressRouter);
app.use('/addmods', addmodsRouter);
app.use('/Selector', SelectorRouter);
app.use('/resource', resourceRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

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

const connectionString =process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,
{useNewUrlParser: true,
useUnifiedTopology: true});

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connectionerror:'));
db.once("open", function(){
console.log("Connection to DB succeeded")})

// We can seed the collection if needed on

async function recreateDB(){
 // Delete everything
 await dress.deleteMany();
 let instance1 = new
dress({types:"ghost", fabric:'large',
cost:25.4});
 instance1.save( function(err,doc) {
 if(err) return console.error(err);
 console.log("First object saved")
 });

 let instance2 = new
dress({types:"girly", fabric:'long',
cost:30.4});
 instance2.save( function(err,doc) {
 if(err) return console.error(err);
 console.log("second object saved")
 });

 let instance3 = new
dress({types:"lehanga", fabric:'short',
cost:25.4});
 instance3.save( function(err,doc) {
 if(err) return console.error(err);
 console.log("third object saved")
 });
}
let reseed = true;
if (reseed) { recreateDB();}




