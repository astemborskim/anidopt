var PetModel = require('../models/pet-profiles');

module.exports.upload = function(req, res){
	//console.log(req.body);
	var petmodel = new PetModel(req.body);
	petmodel.save(function (err, result){
		res.json(result);
	});
}

module.exports.download = function(req, res){
	PetModel.find({}, function (err, results){
		res.json(results);
	});
}

module.exports.update = function(req, res){
	var query = {_id: req.param.id};
	console.log('update started');
	PetModel.update({ _id : req.params.id }, req.body, function (err, results){
	 	if(err){console.log(err);}
	 	res.json(results);
	 });
	//console.log("update submitted:\n " + req.params.id + " and " + JSON.stringify(req.body));
}

module.exports.getOne = function(req, res){
	var petmodel = new PetModel(req.body);
	console.log(JSON.stringify(petmodel));
	petmodel.find({name : req.body}, function (err, results){
		res.json(results);
	});
}
module.exports.delete = function(req, res){
	//console.log('req.params.id: ' + JSON.stringify(req.params.id));
	PetModel.remove({ _id : req.params.id }, function (err, results){
	 	if(err){console.log(err);}
	 	res.json(results);
	});
}
