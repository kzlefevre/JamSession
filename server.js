var express = require('express'),
    bodyParser = require('body-parser'),
    morgan = require('morgan')('dev'),
    mongoose = require('mongoose'),
    routes = require('./routes'),
    PORT = process.env.PORT || 80,
    app = express(),
    passport = require('passport'),
    sessions = require('express-session');
    // sessions = require('client-sessions')({
    //   cookieName : "",
    //   secret : "",
    //   requestKey : "",
    //   cookie : {
    //     httpOnly : true
    //   }
    // });

// Connect to DB
require('./config/passport'); // include our own passport config

var sessionMiddleware = sessions({
    secret : "jamsession",
    resave : false, // resave the cookie even if it doesn't change
    saveUninitialized : true // save an empty session / cookie for EVERY user that comes to the site
});
mongoose.connect("mongodb://localhost/JamSession", (err)=>{
  if(err){
    return console.log("DB failed to connect");
  }
  console.log("DB Connected");
});

// Middleware
app.use(
  express.static('public'),
  bodyParser.json(),
  bodyParser.urlencoded({extended : true}),
  sessionMiddleware,
  passport.initialize(), // This gives it access to our app
  passport.session(), // gives passport access to our sessions
  morgan,
  sessionMiddleware
);

// Routes
routes(app);



// Listen
app.listen(PORT, (err)=>{
  if(err){
    return console.log(`Our Server stopped `);
  }
  console.log(`Server running on ${PORT}`);
});
