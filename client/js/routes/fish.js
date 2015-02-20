var express = require('express');
var router = express.Router();

router.get('/fish', function (req, res) {
	res.render('fish',
	{title : 'Fish'}
)});

module.exports = router;