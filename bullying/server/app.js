const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const session    = require('express-session');
const MongoStore = require('connect-mongo')(session);
const logger = require('morgan');
const passport   = require('passport');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const debug = require('debug')("angularauth:"+path.basename(__filename).split('.')[0]);
const authRoutes = require('./routes/auth');
const quizzRoutes = require('./routes/quizzController');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// app.use(function(req, res, next) { //allow cross origin requests
//         res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
//         res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//         res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//         res.header("Access-Control-Allow-Credentials", true);
//         next();
//     });
    // var gulp   = require( 'gulp' ),
    //     server = require( 'gulp-develop-server' )
    //     jshint = require('gulp-jshint');
    //
    // gulp.task('lint', function() {
    //   return gulp.src('app.js')
    //     .pipe(jshint())
    //     .pipe(jshint.reporter('default'));
    // });
    //
    //     // run server
    // gulp.task( 'server:start', function() {
    //     server.listen( { path: './app.js' } );
    // });
    //
    // // restart server if app.js changed
    // gulp.task( 'server:restart', function() {
    //     gulp.watch( [ './app.js' ], server.restart );
    // });
    //
    // gulp.task('default', ['lint','server:start','server:restart']);

require('./config/database');

var whitelist = [
    'http://localhost:4200',
];
var corsOptions = {
    origin: function(origin, callback){
        var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
        callback(null, originIsWhitelisted);
    },
    credentials: true
};
app.use(cors(corsOptions));

/// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'angular auth passport secret shh',
  resave: true,
  saveUninitialized: true,
  cookie : { httpOnly: true, maxAge: 60*60*24*365 },
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}));
require('./passport/serializers');
require('./passport/local');
app.use(passport.initialize());
app.use(passport.session());


app.use('/auth', authRoutes);
app.use('/quizz', quizzRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  console.error(err);
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
