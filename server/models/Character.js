var mongoose = require('mongoose');

var characterSchema = new mongoose.Schema({
  name: String,
  gender: String,
  house: String
});

module.exports = mongoose.model('Character', characterSchema);