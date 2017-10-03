const mongoose = require('mongoose');

const quizzSchema = new mongoose.Schema({
  quizz:[{
    question : String,
    answer : [{type: String}]
     }]
});

const Quizz = mongoose.model('Quizz', quizzSchema);

module.exports = Quizz;
