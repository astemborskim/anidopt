var express = require('express');
var router = express.Router();

router.get('/cats', function (req, res) {
	res.render('cats',
	{title : 'Cats'}
)});

module.exports = router;