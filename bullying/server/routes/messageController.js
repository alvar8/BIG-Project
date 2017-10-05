const express = require('express');
const passport = require('passport');
const path = require('path');
const Quizz = require('../models/Message');
const bcrypt = require('bcrypt');
const debug = require('debug')("angularauth:"+path.basename(__filename).split('.')[0]);

const messageRoutes = express.Router();

messageRoutes.get('/messages', (req, res, next) => {
  Message.find({},(err, messages)
  .then((messages)=>res.status(200).json(places))
  .catch( e => res.status(500).json({error:e.message}))
)
})



module.exports = messageRoutes;
