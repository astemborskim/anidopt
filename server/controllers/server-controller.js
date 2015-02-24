var PetModel = require('../models/pet-profiles');

module.exports.uploadList = function(req, res){
	//console.log(req.body);
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

module.exports.updateList = function(req, res){
	//var query = {_id: req.param.id};
	PetModel.update({ _id : req.params.id }, req.body, function (err, results){
	 	if(err){console.log(err);}
	 	res.json(results);
	});
}

module.exports.getOne = function(req, res){
	// var petmodel = new PetModel(req.body);
	// //console.log(JSON.stringify(petmodel));
	// petmodel.find({name : req.body}, function (err, results){
	// 	res.json(results);
	// });
}
module.exports.deleteList = function(req, res){
	//console.log('req.params.id: ' + JSON.stringify(req.params.id));
	PetModel.remove({ _id : req.params.id }, function (err, results){
	 	if(err){console.log(err);}
	 	res.json(results);
	});
}
