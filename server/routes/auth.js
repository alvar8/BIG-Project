const express = require('express');
const passport = require('passport');
const path = require('path');
const User = require('../models/User');
const Message = require('../models/Message');
const bcrypt = require('bcrypt');
const debug = require('debug')("angularauth:"+path.basename(__filename).split('.')[0]);
const upload = require('../config/multer');

const authRoutes = express.Router();

/* GET home page. */
authRoutes.post('/signup', (req, res, next) => {
  const {username, password, role} = req.body;

  if (!username || !password)
    return res.status(400).json({ message: 'Provide username and password' });

  debug('Find user in DB');

  User.findOne({ username },'_id').exec().then(user =>{
    if(user)
      return res.status(400).json({ message: 'The username already exists' });

    const salt     = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(password, salt);
    debug('creating user');
    const theUser = new User({
      username,
      password: hashPass,
      role
    });
    return theUser.save()
    .then(user =>{
      req.login(user, (err) => {
        if (err)
          return res.status(500).json({ message: 'Something went wrong' });

        res.status(200).json(req.user);
      });
    })
  })
  .catch(e => {
    console.log(e);
    res.status(400).json({ message: 'Something went wrong' })
  });
});

authRoutes.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, failureDetails) => {
    if (err)
      return res.status(500).json({ message: 'Something went wrong' });

    if (!user)
      return res.status(401).json(failureDetails);

    req.login(user, (err) => {
      if (err)
        return res.status(500).json({ message: 'Something went wrong' });

      // We are now logged in (notice req.user)
      res.status(200).json(req.user);
    });
  })(req, res, next);
});

authRoutes.get('/logout', (req, res, next) => {
  req.logout();
  res.status(200).json({ message: 'Success' });
});

authRoutes.get('/loggedin', (req, res, next) => {
  if (req.isAuthenticated())
    return res.status(200).json(req.user);
  res.status(403).json({ message: 'Unauthorized' });
});

authRoutes.post ('/edit', upload.single('file'),(req,res,next) =>{
  const {id, username, password, alias, email,birthday} = req.body;

  const salt     = bcrypt.genSaltSync(10);
  const hashPass = bcrypt.hashSync(password, salt);
  debug('creating user');
  const updates = new User({
    username,
    password: hashPass,
    alias,
    email,
    birthday,
    picture: `/uploads/${req.file.filename}`,
    pictureName:req.file.originalname
  });

  User.findOneAndUpdate({_id:id}, updates, {new:true})
    .then(s => res.status(200).json(s))
    .catch(e => next(e))
})


authRoutes.post ('/bro',(req,res,next) =>{
  const {id} = req.body;

  User.findOneAndUpdate(
    {role:"Tutor", refToBrother:null },
    {$set:
      {
        refToBrother: id,
      }
    },
    {new: true}
  )
    .then(result =>
    User.findByIdAndUpdate(id, {$set:{refToBrother:result._id}}, {new: true})
   .then( result2 => res.status(200).json(result2))
)
})

authRoutes.post('/messages',(req,res,next)=>{
  const {id,message,ref,name} = req.body;
    const newMessage = new Message({
      refToYoungerBrother:id,
      message:name + ": " + message,
      refToOlderBrother:ref,
      refToWriter:id,
    }).save()
    .then(p => res.status(200).json(p))
    .catch(e => next(e))
  })

  authRoutes.post('/bigbrothermessages',(req,res,next)=>{
    const {id,message,ref,name} = req.body;
      const newMessage = new Message({
        refToOlderBrother:id,
        message:name + ": " + message,
        refToYoungerBrother:ref,
        refToWriter:id,
      }).save()
      .then(p => res.status(200).json(p))
      .catch(e => next(e))
    })

  authRoutes.get('/messages/:id',(req,res,next)=>{
    const{id}=req.params;
    Message.find({$or:[{refToYoungerBrother:id},{refToOlderBrother:id}]},(err,messages)=>{
    res.status(200).json(messages);
  }).catch( e => res.status(500).json({error:e.message}));
  })

  authRoutes.get('/last/:id',(req, res, next)=>{
    const {id}= req.params;
    Message.findOne({ $or:[{refToYoungerBrother:id},{refToOlderBrother:id}]}, {}, { sort: { 'created_at' : -1 } })
    .then(result => res.status(200).json(result))
  })

module.exports = authRoutes;
