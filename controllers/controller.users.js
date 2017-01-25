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

Update : (req, res)=> {
     User.update({_id:req.params.id},
          req.body,
          (err, up)=>{
               res.send(up);

     })
},

};

/*
Primary email: kevin.lefevre@gmail.com

Full Response:
{"kind":"plus#person",
"etag":"\"FT7X6cYw9BSnPtIywEFNNGVVdio/gXCysf7UQoOp4TEisZx4YpL9rQY\"",
"birthday":"1987-03-16",
"gender":"male",
"emails":[{"value":"kevin.lefevre@gmail.com","type":"account"}],
"objectType":"person",
"id":"104741326602593336474","displayName":"Kevin LeFevre",
"name":{"familyName":"LeFevre","givenName":"Kevin"}

,"url":"https://plus.google.com/104741326602593336474",
"image":{"url":"https://lh3.googleusercontent.com/-FMfjXo_XIu0/AAAAAAAAAAI/AAAAAAAAAQ4/OJutnFDYaKg/photo.jpg?sz=50",
"isDefault":false},
"placesLived":[{"value":"Fort Collins, CO","primary":true}],
"isPlusUser":true,
"circledByCount":29,
"verified":false,
"result":{"kind":"plus#person","etag":"\"FT7X6cYw9BSnPtIywEFNNGVVdio/gXCysf7UQoOp4TEisZx4YpL9rQY\"",
"birthday":"1987-03-16",
"gender":"male",
"emails":[{"value":"kevin.lefevre@gmail.com","type":"account"}],
"objectType":"person",
"id":"104741326602593336474",
"displayName":"Kevin LeFevre",
"name":{"familyName":"LeFevre",
"givenName":"Kevin"},
"url":"https://plus.google.com/104741326602593336474",
"image":{"url":"https://lh3.googleusercontent.com/-FMfjXo_XIu0/AAAAAAAAAAI/AAAAAAAAAQ4/OJutnFDYaKg/photo.jpg?sz=50",
"isDefault":false},
"placesLived":[{"value":"Fort Collins, CO","primary":true}],
"isPlusUser":true,
"circledByCount":29,
"verified":false}}
*/
