var PetModel = require('../models/pet-profiles');

module.exports.upload = function(req, res){
	console.log(req.body);
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