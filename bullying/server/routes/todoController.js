const express = require('express');
const passport = require('passport');
const path = require('path');
const ToDo = require('../models/ToDo');
const bcrypt = require('bcrypt');
const debug = require('debug')("angularauth:"+path.basename(__filename).split('.')[0]);

const todoRoutes = express.Router();

todoRoutes.get('/', (req, res, next) => {
  ToDo.find({})
  .then((todos)=>res.status(200).json(todos))
  .catch( e => res.status(500).json({error:e.message}))
})

module.exports = todoRoutes;
