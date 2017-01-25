var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    name : String,
    email : String,
    placesLived : String,
    gid : String,
    birthday : String,
    instrument : String,
    favoriteBand : String,
    genre : String,
    coords : Array,
    image : String,

})

module.exports = mongoose.model("User", userSchema)
