const express = require('express');
var router = express.Router();
const sqlite = require('sqlite3').verbose();

/* HOME GET */

router.get('/api/home', function(req, res) {
  res.send('Welcome!');
});

/* USER LOGIN AND SIGN UP GETS */

router.get('/api/profile', function(req, res) {
  res.send('I am a profile.');
});
router.get('/api/register', function(req, res) {
  res.send('I am a register.');
});
router.get('/api/login', function(req, res) {
  res.send('I am a login');
});

/* PROFILE PAGE ROUTES */
router.get('/api/createorder', function(req, res) {
  res.send('I am a create order page');
});

router.get('/api/additem', function(req, res) {
  res.send('I am an add item route');
});

/* PURCHASE ORDER PAGE */



module.exports = router;
