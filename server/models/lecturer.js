const mongoose = require("mongoose");



const User = new mongoose.Schema({

    givenName:String,
    familyName:String,
    googleid: String,
    imageUrl:String,
    role:String

});

module.exports = mongoose.model("user", User);