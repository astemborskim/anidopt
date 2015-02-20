var mongoose = require('mongoose');

module.exports = mongoose.model('PetProfile', {
	objectId : Number,
	name: String,
	age : String,
	breed : String,
	colors : [String],
	health : String
});