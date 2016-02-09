var Character = require('../models/Character.js');

exports.createOne = function(req, res) {
  var newCharacter = req.body;
  Character.create(newCharacter, function(err, response) {
    if (err) {
      return res.json(err);
    }
    res.json(response);
  });
};

exports.retrieve = function(req, res) {
  var query = req.query;
  Character.find(query, function(err, response) {
    if (err) {
      return res.json(err);
    }
    res.json(response);
  });
};

exports.retrieveOne = function(req, res) {
  var query = {_id: req.params.id};
  Character.findOne(query, function(err, response) {
    if (err) {
      return res.json(err);
    }
    res.json(response);
  });
};

exports.updateOne = function(req, res) {
  var query = {_id: req.params.id};
  var updatedProps = req.body;
  var options = {new: true, upsert: true};
  Character.findOneAndUpdate(query, updatedProps, options, function(err, response) {
    if (err) {
      return res.json(err);
    }
    res.json(response);
  });
};

exports.delete = function(req, res) {
  var query = req.query;
  Character.find(query, function(err, response) {
    if (err) {
      return res.json(err);
    }
    Character.remove(query, function(err) {
      if (err) {
        return res.json(err);
      }
      res.json(response);
    });
  });
}

exports.deleteOne = function(req, res) {
  var query = {_id: req.params.id};
  Character.findOneAndRemove(query, function(err, response) {
    if (err) {
      return res.json(err);
    }
    res.json(response);
  });
};
