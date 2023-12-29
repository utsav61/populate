var express = require('express');
var router = express.Router();

var catcontroller = require('../controller/categroycontroller');

// cat and sub insert//
 
router.post('/category',catcontroller.cat_insert);
router.post('/subcategory',catcontroller.subcat_insert);

// cat and sub Select //

router.get('/category',catcontroller.cat_select);
router.get('/subcategory',catcontroller.subcat_select);


module.exports = router;
