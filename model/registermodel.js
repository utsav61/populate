var mongoose = require('mongoose');

var registerschema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
});

module.exports = mongoose.model('sub_category',registerschema );