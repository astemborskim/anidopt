var express = require('express');
var router = express.Router();

router.get('/dogs', function (req, res) {
	res.render('dogs',
	{title : 'Dogs'}
)});

module.exports = router;