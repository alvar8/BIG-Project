const mongoose = require('mongoose');

const quizzSchema = new mongoose.Schema({
  studentQuizz:[{
    question : String,
    answer : [{type: String}]
  }],

  tutorQuizz:[{
    question : String,
    answer : [{type: String}]
     }]
});

const Quizz = mongoose.model('Quizz', quizzSchema);

module.exports = Quizz;
