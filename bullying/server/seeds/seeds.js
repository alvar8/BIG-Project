const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

mongoose.connect('mongodb://localhost/bullyingapp');

const Quizz = require('../models/Quizz.js');



  const quizzs = [{
  studentQuizz:[{
    question : "como?",
    answer : ["ad","c"]
  }],
  tutorQuizz:[{
    question : "que?",
    answer : ["o","u"]
  }]
},{
  studentQuizz:[{
    question : "hh?",
    answer : ["w","k"]
  }],
  tutorQuizz:[{
    question : "cuando",
    answer : ["12","34"]
  }]
}

];


  Quizz.create(quizzs, (err, quizzDocs) => {
    if (err) { throw(err) }
    console.log(`Created ${quizzDocs.length} quizzs`);
    mongoose.connection.close();
});
