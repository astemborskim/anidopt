var express = require('express');
var router = express.Router();

router.get('/birds', function (req, res) {
	res.render('birds',
		{title : 'Birds'}
)});

module.exports = router;