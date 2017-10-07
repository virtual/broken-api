var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

Beer = require('./models/beer');

var app = express();

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('port', 3000);

// Connect to MongoDB database via Mongoose library
mongoose.connect('mongodb://localhost/beerFavs');
var db = mongoose.connection;

// RESTful API
app.get('/', (req, res) => {
	res.redirect('/api/beers');
});

// Get beer list
app.get('/api/beers', (req, res) => {
	Beer.find((err, beers) => {
		if(err){
			throw err;
		}
		res.json(beers);
	});
});

// Get one specific beer by id
// UNCOMMENT FUNCTION BELOW ONCE YOU SOLVED GETTING ALL BEERS
app.get('/api/beers/:_id', (req, res) => {
	Beer.findById(req.params._id, (err, beer) => {
		if(err){
			throw err;
		}
		res.json(beer);
	});
});

// Add new beer to list
// UNCOMMENT FUNCTION BELOW ONCE YOU SOLVED GETTING ONE BEER
app.post('/api/beers', (req, res) => {
	var newBeer = req.body;
	Beer.create(newBeer, (err, beer) => {
		if(err){
			throw err;
		}
		res.json(beer);
	});
});

// Update one specific beer
// UNCOMMENT FUNCTION BELOW ONCE YOU SOLVED GETTING ADDING ONE BEER
app.put('/api/beers/:_id', (req, res) => {
  var query = {_id: req.params._id};   
	Beer.findOneAndUpdate(query, req.body, (err, updatedBeer) => {
		if(err){
			throw err;
		}
		res.json(updatedBeer);
	});
});

// Delete one beer from list
// UNCOMMENT FUNCTION BELOW ONCE YOU SOLVED UPADTING ONE BEER
app.delete('/api/beers/:_id', (req, res) => {
	var query = {_id: req.params._id};
	Beer.findByIdAndRemove(query, (err, beer) => {
		if(err){
			throw err;
		}
		res.json(beer); 
	});
});

app.listen(app.get('port'), function() {
  console.log('Web Server started on port ' + app.get('port'));
});