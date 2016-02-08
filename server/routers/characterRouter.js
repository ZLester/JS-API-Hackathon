var characterRouter = require('express').Router();
var characterController = require('../controllers/characterController.js');

characterRouter.route('/')
  .post(characterController.createOne)
  .get(characterController.retrieve)
  .delete(characterController.delete);

characterRouter.route('/:id')
  .get(characterController.retrieveOne)
  .put(characterController.updateOne)
  .delete(characterController.deleteOne);

module.exports = characterRouter;