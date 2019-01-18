var express = require('express');
var router = express.Router();
const sqlite = require('sqlite3').verbose();
var models = require('../models');

/* REGISTER */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/api/register', function (req, res, next) {
  res.render('signup');
});

router.post('/api/register', function (req, res, next) {
  models.users
    .findOrCreate({
      where: {
        FirstName: req.body.firstName,
        LastName: req.body.lastName,
        Email: req.body.email,
        Username: req.body.username,
        Password: req.body.password
      }
    })
    .spread(function(result, created) {
      if (created) {
        res.redirect('profile/' + result.UserId);
      } else {
        res.send('this user already exists');
      }
    });
});


/* USER PROFILE */
router.get('/api/profile/:id', function (req, res, next) {
  models.users
    .find({
      where: {
        UserId: req.params.id
      }
    })
    .then(user => {
      res.send({
        FirstName: user.FirstName,
        LastName: user.LastName,
        Email: user.Email,
        UserId: user.UserId,
        Username: user.Username
      });
    });
});


/* USER LOGIN */
router.get('/api/login', function (req, res, next) {
  res.render('login');
});

router.post('/api/login', function (req, res, next) {
  models.users
    .findOne({
      where: {
        Username: req.body.username,
        Password: req.body.password,
      }
    })
    .then(user => {
      if (!user) {
        res.send('Not in Database')
      }
      else {
        res.send({
          userdata: {
            FirstName: user.FirstName,
            LastName: user.LastName,
            Email: user.Email,
            UserId: user.UserId,
            Username: user.Username
          }
        })
      }
    })
})

module.exports = router;