var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    name : String,
    email : String,
    gid : String
})

module.exports = mongoose.model("User", userSchema)
