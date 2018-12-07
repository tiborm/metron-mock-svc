const utils = require('../utils');
const { stormConfigs, stormConfig } = require('../mock-data');

const stormRouter = require('express').Router();

const DELAY = 3000;

stormRouter.get('/', function(req, res,) {
  const stormConfigUpdated = stormConfigs.map((config) => {
    return {
      ...config,
      throughput: utils.generateRandomThroughput(),
      latency: utils.generateRandomLatency()
    };
  });
  res.status(200).send(stormConfigUpdated);
});

stormRouter.get('/:configId', function(req, res) {
  const { configId } = req.params;
  const config = stormConfigs.find(config => config.name === configId);

  if (!config) {
    res.status(404).send();
  } else {
    req.status(200).send(config);
  }
});

stormRouter.get('/parser/start/:configId', function(req, res) {
  const { configId } = req.params;
  const config = stormConfigs.find(config => config.name === configId);

  setTimeout(() => {
    if (config) {
      config.status = 'ACTIVE';
    } else {
      stormConfigs.push({
        ...stormConfig,
        name: configId,
        throughput: utils.generateRandomThroughput(),
        latency: utils.generateRandomLatency(),
      });
    }

    res.status(200).send({
      status: 'SUCCESS',
    });
  }, DELAY);

});

stormRouter.get('/parser/stop/:configId', function(req, res) {
  const { configId } = req.params;
  const config = stormConfigs.find(config => config.name === configId);

  if (config) {

    const index = stormConfigs.findIndex(config => config.name === configId);

    setTimeout(() => {
      config.status = 'KILLED';
      res.status(200).send({
        status: 'SUCCESS',
      });

      // After some delay, let's remove it from the config
      setTimeout(() => {
        stormConfigs.splice(index, 1);
      }, DELAY);

    }, DELAY);
  } else {
    res.status(404).send();
  }
});

stormRouter.get('/parser/activate/:configId', function(req, res) {
  const { configId } = req.params;
  const config = stormConfigs.find(config => config.name === configId);
  if (config) {
    config.status = 'ACTIVE';
    res.status(200).send({
      status: 'SUCCESS',
    });
  } else {
    res.status(404).send();
  }
});

stormRouter.get('/parser/deactivate/:configId', function(req, res) {
  const { configId } = req.params;
  const config = stormConfigs.find(config => config.name === configId);

  if (config) {
    config.status = 'INACTIVE';
    res.status(200).send({
      status: 'SUCCESS',
    });
  } else {
    res.status(404).send();
  }
});

module.exports = stormRouter;
