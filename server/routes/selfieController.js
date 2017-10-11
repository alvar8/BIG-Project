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
    selfie: `/uploads/${req.file.filename}`,
    name:req.file.originalname
  });
  newselfie.save()
  .then(s => res.status(200).json(s))
  .catch(e => next(e))
});

selfieRoutes.put('/selfie', (req, res, next) => {
  const{ref,id,filename}=req.body
  const updates="";
  Selfie.findOneAndUpdate({name:filename},{refToOlderBrother:ref, refToYoungerBrother:id},{new:true})
  .then(p => res.status(200).json(p))
  .catch(e => next(e))

})

selfieRoutes.get('/:id',(req,res,next)=>{
  const{id}=req.params;
  Selfie.findOne({ $or:[{refToYoungerBrother:id},{refToOlderBrother:id}]}, {}, { sort: { 'created_at' : -1 } })
  .then(result => res.status(200).json(result))
})


module.exports = selfieRoutes;
