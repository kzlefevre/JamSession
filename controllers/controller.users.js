// Require model
var User = require('../models/user');

// Export our route handlers
module.exports = {

  get : (req, res) => {
    User.find({}, (err, users)=>{
      if(err) {
        console.log("Something bad happened! USER-GET".red);
        return res.send(err)
      }

      res.send(users);

    })
  },
};
