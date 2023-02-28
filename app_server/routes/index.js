var express = require('express');
var mainCTRL = require('../controllers/homepage');
var router = express.Router();

/* GET home page. */
router.get('/', mainCTRL.index);

module.exports = router;
