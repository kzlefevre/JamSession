var express = require('express'),
    bodyParser = require('body-parser'),
    morgan = require('morgan')('dev'),
    mongoose = require('mongoose'),
    routes = require('./routes'),
    PORT = process.env.PORT || 8080,
    app = express(),
    sessions = require('client-sessions')({
      cookieName : "",
      secret : "",
      requestKey : "",
      cookie : {
        httpOnly : true
      }
    });

// Connect to DB
mongoose.connect("mongodb://", (err)=>{
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
