var mongoose = require('mongoose');

var categoryshema = new mongoose.Schema({
    cat_name:{
        type:String
    },

});

module.exports = mongoose.model('category',categoryshema);