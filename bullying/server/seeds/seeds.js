const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

mongoose.connect('mongodb://localhost/forum-development');

const Quizz = require('../models/Quizz.js');



  const quizzs = [
    {
      question:"",
      answer:["","",""]
    },

  ];

  Quizz.create(quizzs, (err, quizzDocs) => {
    if (err) { throw(err) }
    console.log(`Created ${quizzDocs.length} quizzs`);
    mongoose.connection.close();
});
