var passport = require('passport'),
    GoogleStrategy = require('passport-google-oauth20').Strategy,
    User = require('../models/user');
    config = require('../config.js')

passport.serializeUser((user, next)=>{
    next(null, user.id)
})

passport.deserializeUser((id, next)=>{
    // Find user in DB
    User.findOne({_id : id}, (err, user)=>{
        next(null, user)
    })
})


passport.use(
    // How we are defining a successful login
    new GoogleStrategy({
        clientID : config.clientID,
        clientSecret : config.clientSecret,
        callbackURL : config.callbackURL
    }, (accessToken, refreshToken, profile, next)=>{
      console.log(profile);
      console.log(accessToken);
      console.log(refreshToken);

      // find or create user in DB
      User.findOne({gid : profile.id}, (err, user)=>{
          if(!user){
               console.log(profile.id);
              var newuser = new User({
                  name : profile.displayName,
                  email : profile.emails[0].value,
                  birthday : profile._json.birthday,
                  image : profile._json.image.url,
                  gid : profile.id,

              })
              newuser.save((err, doc)=>{
                  next(null, doc)
              })
          }
          else{
              next(null, user);
          }
      })

    })

)
