var Character = require('../models/Character.js');

exports.create = function(character, callback) {
  Character.create(character, callback);
};

exports.retrieve = function(query, callback) {
  Character.find(query, callback);
};

exports.retrieveOne = function(query, callback) {
  Character.findOne(query, callback);
};

exports.updateOne = function(id, updated, callback) {
  Character.findOneAndUpdate({_id: id}, updated, {new: true}, callback);
};

exports.delete = function(query, callback) {
  Character.remove(query, callback);
}

exports.deleteOne = function(id, callback) {
  Character.findOneAndRemove({_id: id}, callback);
};