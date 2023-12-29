var catmodel =   require('../model/categorymodel');
var subcatmodel = require('../model/subcategorymodel');

exports.cat_insert = async (req,res) => {

    var data = await catmodel.create(req.body);

    res.status(200).json({
        status:'success',
        data
    })
}

exports.subcat_insert = async (req,res) => {

    var data = await subcatmodel.create(req.body);

    res.status(200).json({
        status:'success',
        data
    })
}

exports.cat_select = async (req,res) => {

    var data = await catmodel.find();

    res.status(200).json({
        status:'success',
        data
    })
}

exports.subcat_select = async (req,res) => {
    
    var data = await subcatmodel.find().populate("cat_id");

    res.status(200).json({
        status:"success",
        data
    })
}


exports.register_user = async (req,res) => {
    
    var b_pass = await bcrypt.hash(req.body.password, 10);

    req.body.password = b_pass;

    var data = await registermodel.create(req.body);

    res.status(200).json({
        status:"success",
        data
    })
}


exports.get_user = async (req,res) => {
    
    var data = await registermodel.find();

    res.status(200).json({
        status:"success",
        data
    })
}




