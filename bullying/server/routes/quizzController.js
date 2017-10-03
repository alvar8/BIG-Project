const express = require('express');
const passport = require('passport');
const path = require('path');
const Quizz = require('../models/Quizz');
const bcrypt = require('bcrypt');
const debug = require('debug')("angularauth:"+path.basename(__filename).split('.')[0]);

const quizzRoutes = express.Router();

quizzRoutes.get('/student', (req, res, next) => {
  Quizz.find({},(err, quizzs) => {
    var quizzMap = [];

    quizzs.forEach(quizz => {
      quizzMap.push(quizz.studentQuizz)
    })

    res.send(quizzMap);
})
})

quizzRoutes.get('/tutor', (req, res, next) => {
  Quizz.find({},(err, quizzs) => {
    var quizzMap = [];

    quizzs.forEach(quizz => {
      quizzMap.push(quizz.tutorQuizz)
    })

    res.send(quizzMap);
})
})

module.exports = quizzRoutes;
