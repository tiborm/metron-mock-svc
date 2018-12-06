const fs = require('fs');
const utils = require('../utils');
const stormConfig = require('../mock-data/storm-config.json');

const stormRouter = require('express').Router();

stormRouter.get('/', function(req, res,) {
  const stormConfigUpdated = stormConfig.map((config) => {
    return {
      ...config,
      throughput: utils.generateRandomThroughput(),
      latency: utils.generateRandomLatency()
    };
  });
  res.status(200).send(JSON.stringify(stormConfigUpdated));
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
