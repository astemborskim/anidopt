var mongoose = require('mongoose');

module.exports = mongoose.model('PetProfile', {
	name : String,
	desc : String,
	image_id : String
});