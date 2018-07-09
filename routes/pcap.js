const fs = require('fs');

const pcapRouter = require('express').Router();

const pdml = fs.readFileSync('./mock-data/pdml.json', 'utf-8');


pcapRouter.post('/submit', function(req, res, next) {
  res.status(200).send();
});

pcapRouter.get('/status', function(req, res, next) {
  // res.status(200).send("COMPLETE");
  res.status(200).send("Finished");
});


pcapRouter.get('/resultJson', function(req, res, next) {
  res.status(200).send(pdml);
});

module.exports = pcapRouter;
