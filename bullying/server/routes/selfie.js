const express = require('express');
const passport = require('passport');
const path = require('path');
const Quizz = require('../models/Quizz');
const bcrypt = require('bcrypt');
const debug = require('debug')("angularauth:"+path.basename(__filename).split('.')[0]);

const selfieRoutes = express.Router();

selfieRoutes.get('/student', (req, res, next) => {
  
})

selfieRoutes.get('/tutor', (req, res, next) => {


})

module.exports = selfieRoutes;
