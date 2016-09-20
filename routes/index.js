var express = require('express');
var router = express.Router();
var db = require('../db/api');
var path = require('path');


/* GET home page. */
router.get('/', function(req, res, next) {
  db.getScores().then(function(data) {
    res.json(data)
  })
});

module.exports = router;
