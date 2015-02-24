var express = require('express'),
	app 	= express(),
	mongodb	= require('mongodb'),
	mongoose = require('mongoose'),
	bodyparser = require('body-parser'),
	stylus	= require('stylus'),
	serverController = require('./server/controllers/server-controller');

//DB connection
mongoose.connect('mongodb://localhost:27017/anidopt');

//routes defined
var routes = require('./client/js/routes/index');
var cats = require('./client/js/routes/cats');
var dogs = require('./client/js/routes/dogs');
var fish = require('./client/js/routes/fish');
var birds = require('./client/js/routes/birds');
var reptiles = require('./client/js/routes/reptiles');
var small_animals = require('./client/js/routes/small_animals');
var forum = require('./client/js/routes/forum');
var list = require('./client/js/routes/list');

//View engine config
app.set('views', __dirname + '/client/views');
app.set('view engine', 'jade');

app.use(bodyparser.json());

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
app.get('/birds', birds);
app.get('/reptiles', reptiles);
app.get('/small_animals', small_animals);
app.get('/forum', forum);
app.get('/list', list);

//REST API Routes
app.post('/api/listing', serverController.upload);
app.get('/api/listing', serverController.download);
app.get('/api/listing/:id', serverController.getOne);
app.delete('/api/listing/:id', serverController.delete);
app.put('/api/listing/:id', serverController.update);

//Start server on port 3000
app.listen(3000, function () {
	console.log("Server is listening...");
})
