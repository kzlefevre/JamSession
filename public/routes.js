var Users = require('./controllers/users');
var Exhibits = require('./controllers/exhibits');
var User = require('./models/users');
var Middleware = require('./middleware');



module.exports = (app) => {
  app.get('/', (req, res)=>{
    res.sendFile('index.html', {root : './public/html'});
  });

  app.get('/api/me', (req, res)=>{
//     res.send(req.session.userID); // send down their ID

    User.findOne({_id : req.session.userID}, (err, user) =>{
      res.send(user) // send down their object
    })

  })

  app.get('/logout', (req, res)=>{
    req.session.reset(); // Destroys user's session
    res.redirect('/')
  });

  app.get('/api/users', Middleware.isLoggedIn, Users.get);
  app.post('/api/users', Users.create);
  app.post('/api/users/login', Users.login);

  app.get('/api/exhibits', Middleware.isLoggedIn, Middleware.isAdmin, Exhibits.get);

}
