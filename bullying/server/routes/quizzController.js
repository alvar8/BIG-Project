const express = require('express');
const passport = require('passport');
const path = require('path');
const Quizz = require('../models/Quizz');
const bcrypt = require('bcrypt');
const debug = require('debug')("angularauth:"+path.basename(__filename).split('.')[0]);

const quizzRoutes = express.Router();

quizzRoutes.get('/quizz', (req, res, next) => {
  Quizz.find()
        .then((quizz)=>res.status(200).json(quizz))
        .catch( e => res.status(500).json({error:e.message}))
})




module.exports = quizzRoutes;
