var express = require('express'),
	mongodb	= require('mongodb'),
	mongoose = require('mongoose'),
	bodyparser = require('body-parser'),
	stylus	= require('stylus'),
	multer = require('multer'),
	io = require('socket.io'),
	http = require('http'),
	serverController = require('./server/controllers/server-controller');

var app = express();
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
//app.use(express.bodyparser());

app.use(express.static(__dirname + '/client/'));
app.use(stylus.middleware({
	src: __dirname + '/css',
	dest: __dirname + '/css',
	debug: true,
	force: true
}));

var server = exports.server = http.createServer(app).listen(3000, function () {
		console.log("Server is listening...");
});

var io = require('socket.io').listen(server);
//for debug
//io.set("log level", 0);
var post_id;
//listener
io.sockets.on('connection', function (socket){
	console.log("connected to socket");

	socket.on('post:id', function (id){
		post_id = id;
		//Give Server controller the id for Image Post
		serverController.postId(id);
		console.log('server.js has ID: ' + post_id);
	})


	// socket.on('post:id', function (id, callback){
	// 	callback = callback || function () {};
	// 	//console.log("server.js: " + id);
	// 	var post_id = id;
	// 	callback(null, "Done.");
	// });

})

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
app.post('/api/image/', [multer({ 
	dest: './server/uploads/',
		rename: function (fieldname, filename) {
		return filename+Date.now();
		}
	}), serverController.uploadImagePath
]);


//Start server on port 3000
// app.listen(3000, function () {
// 	console.log("Server is listening...");
// })
