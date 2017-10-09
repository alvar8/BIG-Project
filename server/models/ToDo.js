const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const todoSchema = new mongoose.Schema({
  todo:[{type: String}]
});

const ToDo = mongoose.model('ToDo', todoSchema);

module.exports = ToDo;
