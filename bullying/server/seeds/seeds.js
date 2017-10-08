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
    answer : [{
      answer: "aa",
      value: 20,
    },{
      answer:"fdgw",
      value: 40,
    }]
  }],
  tutorQuizz:[{
    question : "que?",
    answer : [{
      answer: "ie",
      value: 20,
    },{
      answer:"asdf",
      value: 40,
    }]
  }]
},{
  studentQuizz:[{
    question : "hh?",
    answer : [{
      answer: "uu",
      value: 20,
    },{
      answer:"ooo",
      value: 40,
    }]
  }],
  tutorQuizz:[{
    question : "cuando",
    answer : [{
      answer: "12",
      value: 20,
    },{
      answer:"34",
      value: 40,
    }]
  }]
}

];


  Quizz.create(quizzs, (err, quizzDocs) => {
    if (err) { throw(err) }
    console.log(`Created ${quizzDocs.length} quizzs`);
    mongoose.connection.close();
});
