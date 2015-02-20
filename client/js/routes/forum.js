var express = require('express');
var router = express.Router();

router.get('/forum', function (req, res) {
	res.render('forum',
	{title : 'Forum'}
)});

module.exports = router;