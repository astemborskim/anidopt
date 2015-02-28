var express = require('express'),
	app 	= express(),
	mongodb	= require('mongodb'),
	mongoose = require('mongoose'),
	bodyparser = require('body-parser'),
	stylus	= require('stylus'),
	multer = require('multer'),
	done = false,
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

app.use(multer({ dest: './uploads/',
	rename: function (fieldname, filename) {
		return filename+Date.now();
	},
onFileUploadStart: function (file) {
	console.log(file.originalname + ' is starting...')
},
onFileUploadComplete: function (file) {
	console.log(file.fieldname + ' uploaded to ' + file.path);
	done = true;
}
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
app.post('/api/listing', serverController.uploadList);
app.get('/api/listing', serverController.downloadList);
app.get('/api/listing/:id', serverController.getOne);
app.delete('/api/listing/:id', serverController.deleteList);
app.put('/api/listing/:id', serverController.updateList);
app.post('/api/photo', function (req, res){
	if(done==true){
		console.log(req.files);
		res.end("File uploaded.");
	}
	else{
		res.end('File Failed to store to destination');
	}
});

//Start server on port 3000
app.listen(3000, function () {
	console.log("Server is listening...");
})
