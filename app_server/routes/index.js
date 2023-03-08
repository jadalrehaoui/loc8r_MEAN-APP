var express = require('express');
var controller = require('../controllers/homepage');
var router = express.Router();

/* GET home page. */
router.get('/', controller.main);

module.exports = router;
