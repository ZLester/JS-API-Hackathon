var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var port = process.env.PORT || 8000;
var dbUri = process.env.MONGOLAB_URI || 'mongodb://localhost/apihackathon';

var app = express();

var characterRouter = require('./routers/characterRouter');

mongoose.connect(dbUri);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  res.json({message: 'Hack Reactor API Hackathon Example API'});
});

// TODO: Use the characterRouter as middleware on the '/api/characters' route

app.listen(port, function(err) {
  if (err) {
    return console.log(err);
  }
  console.log('HR Hackathon Example API listening on ' + port);
});  

module.exports = app;
