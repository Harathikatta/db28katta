var express = require('express');
const dress_controlers= require('../controllers/dress');
var router = express.Router();

/* GET home page. */
router.get('/', dress_controlers.dress_view_all_Page );


module.exports = router;
