const express = require('express');
const passport = require('passport');
const path = require('path');
const Quizz = require('../models/Quizz');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const debug = require('debug')("angularauth:" + path.basename(__filename).split('.')[0]);

const quizzRoutes = express.Router();

quizzRoutes.get('/', (req, res, next) => {
  Quizz.find({})
  .then((quizzs)=>res.status(200).json(quizzs))
  .catch( e => res.status(500).json({error:e.message}))
})

quizzRoutes.post('/points',(req,res,next)=>{
  const id =req.body.id;
  const addpoints =req.body.points;
  const points = addpoints.answer;
  User.findByIdAndUpdate(id,{$inc:{point:points}},{new: true})
  .then(r => res.status(200).json(r))
  .catch(e => next(e))
})

module.exports = quizzRoutes;
