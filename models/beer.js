var mongoose = require('mongoose');

// Beer Schema
var beerSchema = mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	brewery:{
		type: String,
		required: true
	},
	alcoholContent:{
		type: Number,
		required: true
	}
});

var Beer = module.exports = mongoose.model('Beer', beerSchema);