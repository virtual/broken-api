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
	Beer.getBeers((err) => {
		if(err){
			throw err;
		}
		res.json(beers);
	});
});

// Get one specific beer by id
app.get('/api/beers/_id', (req, res) => {
	Beer.getBeer(req.params._id, (err, beer) => {
		if(err){
			throw err;
		}
		res.json(beer);
	});
});

// Add new beer to list
app('/api/beers', (req, res) => {
	var newBeer = req.body;
	Beer.addBeer(newBeer, (err, beer) => {
		if(err){
			throw err;
		}
		res.json(beer);
	});
});

// Update one specific beer
app.put('/api/beers/:_id', (req, res) => {
	var id = req.params._id;
	var updatedBeer = req.body;
	Beer.updateBeer(id, updatedBeer, {}, (err, beer) => {
		if(err){
			throw err;
		}
		res.json(beer);
	});
});

// Delete one beer from list
app.delete('/api/beers/:_id', (req, res) => {
	var id = req.params._id;
	Beer.removeBeer(id, (err, beer) => {
		if(err){
			throw err;
		}
		res.json(beer);
	});
});

app.listen(app.get('port'), function() {
  console.log('Web Server started on port ' + app.get('port'));
});