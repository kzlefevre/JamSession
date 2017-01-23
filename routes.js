var Users = require('./controllers/controller.users.js');
var User = require('./models/user');
var Middleware = require('./middleware');
var passport = require('passport');



module.exports = (app) => {
  app.get('/', (req, res)=>{
    res.sendFile('index.html', {root : './public/html'});
  });

  app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email', 'https://www.googleapis.com/auth/gmail.send'] }));

  app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), function(req, res) {
      // Successful authentication, redirect home.
      res.redirect('/');
  });


  app.get('/api/me', (req, res)=>{
       res.send(req.user);
 })
  //   User.findOne({_id : req.session.userID}, (err, user) =>{
  //     res.send(user) // send down their object
  //   })
  //
  // })
  //
  // app.get('/logout', (req, res)=>{
  //   req.session.reset(); // Destroys user's session
  //   res.redirect('/')
  // });
  //
  app.get('/api/users', Users.get);
  // app.post('/api/users', Users.create);
  // app.post('/api/users/login', Users.login);


}
