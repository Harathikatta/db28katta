var express = require('express');
const dress_controlers= require('../controllers/dress');
var router = express.Router();

/* GET home page. */
router.get('/', dress_controlers.dress_view_all_Page );


// GET request for one dress.
router.get('/dresss/:id', dress_controlers.dress_detail);

/* GET detail dress page */
router.get('/detail', dress_controlers.dress_view_one_Page);

/* GET create dress page */
router.get('/create', dress_controlers.dress_create_Page);

/* GET create update page */
router.get('/update', dress_controlers.dress_update_Page);     

/* GET create dress page */
router.get('/delete', dress_controlers.dress_delete_Page);

module.exports = router;