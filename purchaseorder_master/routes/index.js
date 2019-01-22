const express = require('express');
var router = express.Router();
const sqlite = require('sqlite3').verbose();
var models = require('../models');

/* HOME GET */

router.get('/api/home', function (req, res) {
  res.send('Welcome!');
});

/* USER LOGIN AND SIGN UP GETS */

router.get('/api/profile', function (req, res) {
  res.send('I am a profile.');
});
router.get('/api/register', function (req, res) {
  res.send('I am a register.');
});
router.get('/api/login', function (req, res) {
  res.send('I am a login');
});

/* PROFILE PAGE ROUTES */
router.get('/api/createorder', function (req, res) {
  res.send('I am a create order page');
});

router.get('/api/additem', function (req, res) {
  res.send('I am an add item route');
});

/* ADD ITEM PAGE ROUTE */

router.post('/api/additem', function (req, res, next) {
  models.products
    .findOrCreate({
      where: {
        ProductName: req.body.productName,
        AmountOnHand: req.body.amountOnHand,
        ProductId: req.body.productId
      }
    })
});

/* PURCHASE ORDER PAGE */
router.post('/api/submitorder', function (req, res, next) {
  models.purchase_orders
    .findOrCreate({
      where: {
        AmountOrdered: req.body.amountOrdered
      }
    })
});

router.get('/api/submitorder', function (req, res) {
  res.send('Order Submitted');
});


module.exports = router;
