var express = require('express');
var bodyParser = require('body-parser');

Beer = require('./models/beers');

var app = express();

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('port', 123456);

// Connect to MongoDB database via Mongoose library
mongoose.connect('mongodb://localhost/beerFavs');
var db = mongoose.connection;

// RESTful API
app.get('/', (req, res) => {
	res.send('Please use /api/beers');
});

// Get beer list
app.get('/beers', (req, res) => {
	Beer.find((err, beers) => {
		if(err){
			throw err;
		}
		res.json(beers);
	});
});

// Get one specific beer by id
// UNCOMMENT FUNCTION BELOW ONCE YOU SOLVED GETTING ALL BEERS
app.get('/api/beers/_id', (req, res) => {
	Beer.findId(req.params._id, (err, beer) => {
		if(err){
			throw err;
		}
		res.json(beer);
	});
});

// Add new beer to list
// UNCOMMENT FUNCTION BELOW ONCE YOU SOLVED GETTING ONE BEER
app('/api/beers', (req, res) => {
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
	Beer.findOneAndUpdate(query, updatedBeer, {}, (err, beer) => {
		if(err){
			throw err;
		}
		res.json(beer);
	});
});

// Delete one beer from list
// UNCOMMENT FUNCTION BELOW ONCE YOU SOLVED UPADTING ONE BEER
app.delete('/api/beers/:_id', (req, res) => {
	var query = {_id: id};
	Beer.remove(query, (err, beer) => {
		if(err){
			throw err;
		}
		res.json(beer);
	});
});

app.listen(app.get('port'), function() {
  console.log('Web Server started on port ' + app.get('port'));
});