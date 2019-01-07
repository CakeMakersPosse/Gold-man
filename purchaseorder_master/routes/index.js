const express = require('express');
var router = express.Router();
const sqlite = require('sqlite3').verbose();

/* GET home page. */
router.get('/api/home', function(req, res) {
  res.send('Welcome!');
});
router.get('/api/secret', function(req, res) {
  res.send('The password is potato');
});


module.exports = router;
