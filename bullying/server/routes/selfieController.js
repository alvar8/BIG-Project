const express = require('express');
const passport = require('passport');
const path = require('path');
const Selfie = require('../models/Selfie');
const bcrypt = require('bcrypt');
const upload = require('../config/multer');
const debug = require('debug')("angularauth:"+path.basename(__filename).split('.')[0]);

const selfieRoutes = express.Router();

selfieRoutes.post('/', upload.single('file'),(req,res,next) => {
  console.log("entro en backselfie")
  const{ref,id}=req.body
  console.log(id)
  const newselfie = new Selfie({
    refToOlderBrother:ref,
    refToYoungerBrother:id,
    selfie: `/uploads/${req.file.filename}`
  });
  newselfie.save()
  .then(s => res.status(200).json(s))
  .catch(e => next(e))
});

selfieRoutes.get('/tutor', (req, res, next) => {


})

module.exports = selfieRoutes;
