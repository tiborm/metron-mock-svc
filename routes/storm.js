const fs = require('fs');

const stormRouter = require('express').Router();

const stormConfig = fs.readFileSync('./mock-data/storm-config.json', 'utf-8');


stormRouter.get('/', function(req, res, next) {
  res.status(200).send(stormConfig);
});

stormRouter.get('/parser/start/:groupName', function(req, res, next) {
  res.status(200).send();
});

stormRouter.get('/parser/stop/:groupName', function(req, res, next) {
  res.status(200).send();
});

stormRouter.get('/parser/activate/:groupName', function(req, res, next) {
  res.status(200).send();
});

stormRouter.get('/parser/deactivate/:groupName', function(req, res, next) {
  res.status(200).send();
});

module.exports = stormRouter;
