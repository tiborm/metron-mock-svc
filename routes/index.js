const fs = require('fs');

const express = require('express');
const router = express.Router();

const pdml = fs.readFileSync('./mock-data/pdml.json', 'utf-8');

router.get('/submit', function(req, res, next) {
  res.status(200).send(pdml);
});

router.get('/status', function(req, res, next) {
  res.status(200).send("");
});


router.get('/resultJson', function(req, res, next) {
  res.status(200).send("");
});

module.exports = router;
