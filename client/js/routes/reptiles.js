var express = require('express');
var router = express.Router();

router.get('/reptiles', function (req, res) {
	res.render('reptiles',
	{title : 'Reptiles'}
)});

module.exports = router;