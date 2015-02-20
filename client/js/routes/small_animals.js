var express = require('express');
var router = express.Router();

router.get('/small_animals', function (req, res) {
	res.render('small_animals',
	{title : 'Small Animals'}
)});

module.exports = router;