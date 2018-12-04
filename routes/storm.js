const fs = require('fs');

const stormRouter = require('express').Router();

const stormConfig = fs.readFileSync('./mock-data/storm-config.json', 'utf-8');


stormRouter.get('/', function(req, res, next) {
  res.status(200).send(stormConfig);
});

// /api/v1/storm/bro
stormRouter.get('/:configId', function(req, res, next) {
  // we simply returning the result set of bro config on full dev
  res.status(404).send();
});

stormRouter.get('/parser/start/:configId', function(req, res, next) {
  res.status(200).send();
});

stormRouter.get('/parser/stop/:configId', function(req, res, next) {
  res.status(200).send();
});

stormRouter.get('/parser/activate/:groupName', function(req, res, next) {
  res.status(200).send();
});

stormRouter.get('/parser/deactivate/:groupName', function(req, res, next) {
  res.status(200).send();
});

module.exports = stormRouter;
