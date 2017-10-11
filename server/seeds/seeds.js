const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

mongoose.connect('mongodb://localhost/bullyingapp');

const User = require('../models/User.js');

const users = [{
  username: "juan",
  password: "1234",
}]
User.create(users, (err, userDocs) => {
  if (err) {
    throw (err)
  }
  console.log(`Created ${userDocs.length} users`);

});

const ToDo = require('../models/ToDo.js');

const todos = [{
  todo: ["¿Has comido con tu hermano pequeño?", "¿Conoces a sus amigos de clase?", "Mejor/Peor primera semana"]
}]
ToDo.create(todos, (err, todoDocs) => {
  if (err) {
    throw (err)
  }
  console.log(`Created ${todoDocs.length} todos`);

});



const Quizz = require('../models/Quizz.js');



const quizzs = [{
    Quizz: [{
      question: "¿Cuantos tipos de bullying o acoso escolar conoces?",
      answer: [{
        answer: "",
        value: 2,
      }],
  },
    {
      question: "¿Qué diferencia hay entre una broma y un caso de acoso?",
      answer: [{
        answer: "Una broma es algo puntual y no hay que darle más importancia",
        value: 3,
      }, {
        answer: "Si se repite, y cada vez es más pesado, deja de ser una broma",
        value: 4,
      },{
        answer: "Cuando los compañeros se ríen, es una broma",
        value: 1,
      }]
    },
    {
      question: "Cuando descubres una conversación en RRSS en la que están acosando a un compañero... ¿qué piensas?",
      answer: [{
        answer: "Leo los comentarios y me río, pero no participo.",
        value: 1,
      }, {
        answer: "Participo de la broma, es solo eso, una broma.",
        value: 0,
      },{
        answer: "Me pongo en contacto con el hermano mayor de la víctima e informo al centro de lo ocurrido.",
        value: 4,
      }]
    }],
  }];



Quizz.create(quizzs, (err, quizzDocs) => {
  if (err) {
    throw (err)
  }
  console.log(`Created ${quizzDocs.length} quizzs`);
  mongoose.connection.close();
});
