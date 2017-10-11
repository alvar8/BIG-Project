require('dotenv').config()

const cors = require('cors');
const path = require('path');
const logger = require('morgan');
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const session = require('express-session');
const authRoutes = require('./routes/auth');
const cookieParser = require('cookie-parser');
const MongoStore = require('connect-mongo')(session);
const todoRoutes = require('./routes/todoController');
const quizzRoutes = require('./routes/quizzController');
const selfieRoutes = require('./routes/selfieController');
const debug = require('debug')("angularauth:" + path.basename(__filename).split('.')[0]);

const app = express();

require('./config/database');

var whitelist = ['http://localhost:4200'];
var corsOptions = {
  origin: function(origin, callback) {
    var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
    callback(null, originIsWhitelisted);
  },
  credentials: true
};
app.use(cors(corsOptions));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'angular auth passport secret shh',
  resave: true,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 365
  },
  store: new MongoStore({
    mongooseConnection: mongoose.connection
  })
}));
require('./passport/serializers');
require('./passport/local');
app.use(passport.initialize());
app.use(passport.session());


app.use('/auth', authRoutes);
app.use('/todo', todoRoutes);
app.use('/quizz', quizzRoutes);
app.use('/selfie', selfieRoutes);

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  console.error(err);
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
