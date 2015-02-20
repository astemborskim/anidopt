var express = require('express');
var router = express.Router();

router.get('/list', function (req, res) {
	res.render('list',
	{title : 'Add Listing'}
)});

module.exports = router;