var characterRouter = require('express').Router();
var characterController = require('../controllers/characterController.js');

characterRouter.route('/')
  .post(function(req, res) {
    characterController.create(req.body, function(err, result) {
      if (err) {
        return res.json({message: err});
      }
      res.json(result);
    })
  })
  .get(function(req, res) {
    characterController.find(req.query, function(err, characters) {
      if (err) {
        return res.json({message: err});
      }
      res.json(characters);
    });  
  })
  .delete(function(req, res) {
    characterController.delete(req.body, function(err, statusMessage) {
      if (err) {
        return res.json({message: err});
      }
      res.json({messsage: 'Successfully removed ' + statusMessage.result.n + ' characters'});
    })
  });

characterRouter.route('/:id')
  .get(function(req, res) {
    characterController.find({_id: req.params.id}, function(err, character) {
      if (err) {
        return res.json({error: err});
      }
      res.json(character);
    });
  })
  .put(function(req, res) {
    characterController.updateById(req.params.id, req.body, function(err, character) {
      if (err) {
        return res.json({error: err});
      }
      res.json(character);
    });
  })
  .delete(function(req, res) {
    characterController.deleteById(req.params.id, function(err, character, message) {
      if (err) {
        return res.json({error: err});
      }
      res.json(character);
    });
  });

module.exports = characterRouter;