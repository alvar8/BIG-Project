const mongoose = require('mongoose');

const quizzSchema = new mongoose.Schema({
  Quizz:[{
    question : String,
    answer : [{
      answer:String,
      value:{
        type:Number,
        default:20
      }
    }],
  }],
});

const Quizz = mongoose.model('Quizz', quizzSchema);

module.exports = Quizz;
