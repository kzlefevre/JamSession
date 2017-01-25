var User = require('./models/user') // may need to change this path if it is incorrect - pull in the model file
var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/JamSession')


var seedUsers = [
    {
        name : 'Keith Moon',
        coords : [40.022728, -105.287957],
        email : 'keithmooningwho@gmail.com',
        favoriteBand : 'The Who',
        genre : 'Rock',
        instrument : 'Drums',
    },
    {
        name : 'Nicole Fiorentino',
        coords : [40.003303, -105.279248],
        email : 'nikkismashingpumpkins@gmail.com',
        favoriteBand : 'The Smashing Pumpkins',
        genre : 'Alternative',
        instrument : 'Bass',
    },
    {
        name : 'Stevie Nicks',
        coords : [40.003812, -105.255055],
        email : 'fleetwoodstevienicks@gmail.com',
        favoriteBand : 'Fleetwood Mac',
        genre : 'Pop Rock',
        instrument : 'Vocals',
    },
    {
        name : 'Bob Marley',
        coords : [40.016707, -105.219978],
        email : 'bobbybejamminmarley@gmail.com',
        favoriteBand : 'Bob Marley',
        genre : 'Reggae',
        instrument : 'Guitar',
    }
]

seedUsers.forEach((user)=>{
    (new User(user)).save()
});
