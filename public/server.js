var express = require('express'),
    bodyParser = require('body-parser'),
    morgan = require('morgan')('dev'),
    mongoose = require('mongoose'),
    routes = require('./routes'),
    PORT = process.env.PORT || 8080,
    app = express(),
    sessions = require('client-sessions')({
      cookieName : "_zooAuth",
      secret : "keyboardcat3",
      requestKey : "session",
      cookie : {
        httpOnly : true
      }
    });

// Connect to DB
mongoose.connect("mongodb://localhost/zoo", (err)=>{
  if(err){
    return console.log("DB failed to connect".trap);
  }
  console.log("☃☃ DB Connected ☃☃".cyan);
});

// Middleware
app.use(
  express.static('public'),
  bodyParser.json(),
  bodyParser.urlencoded({extended : true}),
  morgan,
  sessions
);

// Routes
routes(app);

// Listen
app.listen(PORT, (err)=>{
  if(err){
    return console.log(`Our Server stopped `);
  }
  console.log(`Server running on ${PORT});
});
