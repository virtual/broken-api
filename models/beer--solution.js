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

// Get Beers
module.exports.getBeers = (callback, limit) => {
	Beer.find(callback).limit(limit);
}

// Get one beer
module.exports.getBeerById = (id, callback) => {
	Beer.findById(id, callback);
}

// Add Beer
module.exports.addBeer = (newBeer, callback) => { // Missing first argument "newBeer"
	Beer.create(newBeer, callback);
}

// Update Beer
module.exports.updateBeer = (id, beer, options, callback) => {
	var query = {_id: id};
	var update = {
		name: beer.name,
		brewery: beer.brewery,
		alcoholContent: beer.alcoholContent
	}
	Beer.findOneAndUpdate(query, update, options, callback);
}

// Delete Beer
module.exports.removeBeer = (id, callback) => {
	var query = {_id: id};
	Beer.remove(query, callback);
}