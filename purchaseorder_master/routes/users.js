var express = require('express');
var router = express.Router();
const sqlite = require('sqlite3').verbose();
var models = require('../models');
const auth = require('../config/auth');
const passport = require('passport');
const connectEnsure = require('connect-ensure-login');

/* REGISTER */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/api/register', function (req, res, next) {
  res.render('signup');
});

router.post('/api/register', function (req, res, next) {
  const hashedPassword = auth.hashPassword(req.body.password);
  models.users
    .findOne({
      where: {
        Username: req.body.username
      }
    })
    .then(user => {
      if (user) {
        res.send('this user already exists');
      } else {
        models.users
          .create({
            FirstName: req.body.firstName,
            LastName: req.body.lastName,
            Email: req.body.email,
            Username: req.body.username,
            Password: hashedPassword
          })
          .then(createdUser => {
            const isMatch = createdUser.comparePassword(req.body.password);

            if (isMatch) {
              const userId = createdUser.UserId;
              console.log(userId);
              const token = auth.signUser(createdUser);
              res.cookie('jwt', token);
              res.redirect('profile/' + userId);
            } else {
              console.error('not a match');
            }
          });
      }
    });
});

/* USER PROFILE */
router.get('/api/profile/:id', function (req, res, next) {
  models.users
    .findOne({
      where: {
        UserId: req.params.id
      }
    })
    .then(user => {
      res.json({
        FirstName: user.FirstName,
        LastName: user.LastName,
        Email: user.Email,
        UserId: user.UserId,
        Username: user.Username
      })
    }) 
});


/* USER LOGIN */
router.get('/api/login', function (req, res, next) {
  res.render('login');
});

router.post('/api/login', function (req, res, next) {
  const hashedPassword = auth.hashPassword(req.body.password);
  models.users.findOne({
    where: {
      Username: req.body.username
    }
  }).then(user => {
    const isMatch = user.comparePassword(req.body.password)

    if (!user) {
      return res.status(401).json({
        message: "Login Failed"
      });
    }
    if (isMatch) {
      const userId = user.UserId
      const token = auth.signUser(user);
      res.cookie('jwt', token);
      res.redirect('profile/' + userId);
      console.log('-------' + userId);
    } else {
      console.log(req.body.password);
      res.send('login')
    }

  });
});

router.get('/logout', function (req, res) {
  res.send('This is a logout');
});
module.exports = router;