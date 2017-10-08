const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

mongoose.connect('mongodb://localhost/bullyingapp');

const User = require('../models/User.js');

const users = [
  {
username: "juan",
password:"1234",
message:["cuantame", "el que", "que tal"]
}
]
User.create(users, (err, userDocs) => {
  if (err) { throw(err) }
  console.log(`Created ${userDocs.length} users`);

});

const ToDo = require('../models/ToDo.js');

const todos = [
  {
todo: ["Come con tu hermano","Preguntale que tal está","Juega con el"]
}
]
ToDo.create(todos, (err, todoDocs) => {
  if (err) { throw(err) }
  console.log(`Created ${todoDocs.length} todos`);

});



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
