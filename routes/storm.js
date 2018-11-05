const fs = require('fs');

const stormRouter = require('express').Router();

const stormConfig = fs.readFileSync('./mock-data/storm-config.json', 'utf-8');


stormRouter.get('/', function(req, res, next) {
  res.status(200).send(stormConfig);
});

module.exports = stormRouter;
