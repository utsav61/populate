var mongoose = require('mongoose');

var subcategoryshema = new mongoose.Schema({
    sub_cat_name:{
        type:String
    },
    cat_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "category"
    }

});

module.exports = mongoose.model('sub_category',subcategoryshema);