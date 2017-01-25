var User = require('./models/user') // may need to change this path if it is incorrect - pull in the model file
var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/JamSession')


var seedUsers = [
    {
        name : 'Billy Bobbo',
        coords : [-105, 40],
        email : 'billy@bob.gmail.com'
    },
    {
        name : 'Alice Anteater',
        coords : [-104.998928, 40.00283710],
        email : 'alice@anteater.gmail.com'
    },
    {
        name : 'George Glass',
        coords : [-104.598928, 39.00283710],
        email : 'george@glass.gmail.com'
    },
    {
        name : 'Jill Jillson',
        coords : [-104.3528, 40.10283710],
        email : 'jill@jillson.gmail.com'
    }
]

seedUsers.forEach((user)=>{
    (new User(user)).save()
});
