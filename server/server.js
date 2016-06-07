var express = require('express');
var mongoose = require('mongoose');
var app = express();
var port = 3000;

// Inject middleware
require('./middleware')(app);

// Connect mongoose to our local database
var dbUri = 'mongodb://localhost/apihackathon';
mongoose.connect(dbUri);

var characterRouter = require('./routers/characterRouter');

app.get('/', function(req, res) {
  res.json({ message: 'HR Hackaton Example API' });
});

// TODO: Use the characterRouter as middleware on the '/api/characters' route

app.listen(port, function() {
  console.log('HR Hackathon Example API listening on ' + port);
});  

module.exports = app;
