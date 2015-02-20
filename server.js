var express = require('express'),
	app 	= express(),
	stylus	= require('stylus');

//routes defined
var routes = require('./client/js/routes/index');
var cats = require('./client/js/routes/cats');
var dogs = require('./client/js/routes/dogs');
var fish = require('./client/js/routes/fish');
var reptiles = require('./client/js/routes/reptiles');
var small_animals = require('./client/js/routes/small_animals');
var forum = require('./client/js/routes/forum');
var list = require('./client/js/routes/list');

//View engine config
app.set('views', __dirname + '/client/views');
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/client/'));
app.use(stylus.middleware({
	src: __dirname + '/css',
	dest: __dirname + '/css',
	debug: true,
	force: true
}));

//get route
app.get('/', routes);
app.get('/cats', cats);
app.get('/dogs', dogs);
app.get('/fish', fish);
app.get('/reptiles', reptiles);
app.get('/small_animals', small_animals);
app.get('/forum', forum);
app.get('/list', list);

//Start server on port 3000
app.listen(3000, function () {
	console.log("Server is listening...");
})
