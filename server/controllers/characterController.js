var Character = require('../models/Character.js');

// Create our necessary controller methods to perform all needed CRUD actions
exports.createOne = function(req, res) {
  var newCharacter = req.body;
  Character.create(newCharacter, function(error, createdCharacter) {
    if (err) {
      return res.json({message: 'DB error while creating character', error: error})
    }
    res.json(createdCharacter);
  });
};

exports.retrieve = function(req, res) {
  
};

exports.retrieveOne = function(req, res) {
  
};

exports.updateOne = function(req, res) {

};

exports.delete = function(req, res) {

};

exports.deleteOne = function(req, res) {

};
