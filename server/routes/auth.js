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

authRoutes.post ('/edit', upload.single('filename'),(req,res,next) =>{
  console.log("entro en backend")
  const {username, password, role, picture} = req.body;
    // const userId = req.params.id;

  const salt     = bcrypt.genSaltSync(10);
  const hashPass = bcrypt.hashSync(password, salt);
  debug('creating user');
  const updates = new User({
    username,
    password: hashPass,
    role,
    picture: `/uploads/${req.file.filename}`,
  });
  console.log(updates)

  User.findOneAndUpdate({username:username}, updates,(err, user) => {
    if (err)
      return res.status(500).json({ message: 'Something went wrong' });
      res.status(200).json(req.user);
  });
})


authRoutes.post ('/bro',(req,res,next) =>{
  const {id} = req.body;
  console.log(id)

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


// authRoutes.post('/messages',(req,res,next)=>{
//   const {id} = req.body;
//   const {message}=req.body;
//   console.log(id)
//   console.log(message)
//   User.findByIdAndUpdate({_id:id}, {$push: {message: message}}, {new:true},(err, user) => {
//     if (err)
//       return res.status(500).json({ message: 'Something went wrong' });
//       res.status(200).json(req.user);
//   })
//
//   User.findOneAndUpdate({refToBrother:id}, {$push: {message: message}}, {new:true},(err, user) => {
//     if (err)
//       return res.status(500).json({ message: 'Something went wrong' });
//       res.status(200).json(req.user);
//   })
//
// })

authRoutes.post('/messages',(req,res,next)=>{
  const {id,message,ref,name} = req.body;
    console.log(id)
    console.log(message)
    console.log(ref)
    const newMessage = new Message({
      refToYoungerBrother:id,
      message:name + ": " + message,
      refToOlderBrother:ref,
    }).save()
    .then(p => res.status(200).json(p))
    .catch(e => next(e))
  })

  authRoutes.post('/bigbrothermessages',(req,res,next)=>{
    const {id,message,ref,name} = req.body;
      console.log(id)
      console.log(message)
      console.log(ref)
      const newMessage = new Message({
        refToOlderBrother:id,
        message:name + ": " + message,
        refToYoungerBrother:ref,
      }).save()
      .then(p => res.status(200).json(p))
      .catch(e => next(e))
    })

  authRoutes.get('/messages/:id',(req,res,next)=>{
    const{id}=req.params;
    console.log(id)
    Message.find({$or:[{refToYoungerBrother:id},{refToOlderBrother:id}]},(err,messages)=>{
    res.status(200).json(messages);
  }).catch( e => res.status(500).json({error:e.message}));
  })


module.exports = authRoutes;
