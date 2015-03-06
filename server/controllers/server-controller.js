var PetModel = require('../models/pet-profiles');
var mongoose = require('mongoose');
//var formidable = require('formidable');
var util = require('util');
var fs = require('fs');
var post_id;
module.exports.uploadList = function(req, res){
	//console.log('Output: ' + JSON.stringify(req.body));
	var petmodel = new PetModel(req.body);
	petmodel.save(function (err, result){
		res.json(result);
	});
}

module.exports.downloadList = function(req, res){
	PetModel.find({}, function (err, results){
		res.json(results);
	});
}

module.exports.getOne = function(req, res){
	PetModel.find({ _id : req.params.id }, function (err, results){
		res.json(results);
	});
}

module.exports.updateList = function(req, res){
	//var query = {_id: req.param.id};
	PetModel.update({ _id : req.params.id }, req.body, function (err, results){
	 	if(err){console.log(err);}
	 	res.json(results);
	});
}

module.exports.deleteList = function(req, res){
	//console.log('req.params.id: ' + JSON.stringify(req.params.id));
	PetModel.remove({ _id : req.params.id }, function (err, results){
	 	if(err){console.log(err);}
	 	res.json(results);
	});
}

module.exports.uploadImagePath = function(req, res){
		//NEED the id from mongo for the first submission here so i can update with image path
		//console.log('Body: ' + JSON.stringify(req.body));
		console.log('File Path to Update: ' + JSON.stringify(req.files.image.path));
		console.log('serverController.uploadImage has ID: ' + post_id);
		console.log('req.params.id : ' + req.params.id);
	PetModel.update({ _id : post_id }, {image_path: req.files.image.path}, function (err, results){
	 	if(err){console.log(err);}
		//console.log('id: ' + $scope.prof.post_id);
		//post_id = null;
		//console.log('After Update ID: ' + post_id);
		res.json(results);
	});
}

module.exports.postId = function (id){
		post_id = id;
		//console.log("postId function: " + id)
}

