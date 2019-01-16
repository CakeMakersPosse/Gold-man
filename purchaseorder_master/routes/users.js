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
            Password: req.body.password
          })
      }
    })
});


//PROFILE
router.get('/profile/:id', function (req, res, next) {
  models.users
    .find({
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
      });
    });
});

//LOGIN
router.get('/api/login', function (req, res, next) {
  res.render('login');
});

router.post('/api/login', function (req, res, next) {
  models.users
    .findOne({
      where: {
        Username: req.body.username,
        Password: req.body.password
      }
    })
    .then(user => {
      if (user) {
      res.redirect('profile/' + user.UserId);
      }
      else{
        res.send("Login Failed. Please try again.");
      }
    });
});


module.exports = router;