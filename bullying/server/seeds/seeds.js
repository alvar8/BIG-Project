const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

mongoose.connect('mongodb://localhost/bullyingapp');

const Quizz = require('../models/Quizz.js');



  const quizzs = [{
  studentQuizz:[{
    question : "eh?",
    answer : ["a","e"]
  }],
  tutorQuizz:[{
    question : "ah?",
    answer : ["o","u"]
  }]
},{
  studentQuizz:[{
    question : "?",
    answer : ["i","e"]
  }],
  tutorQuizz:[{
    question : "??",
    answer : ["i","u"]
  }]
}

];


  Quizz.create(quizzs, (err, quizzDocs) => {
    if (err) { throw(err) }
    console.log(`Created ${quizzDocs.length} quizzs`);
    mongoose.connection.close();
});
