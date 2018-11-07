const fs = require('fs');
const parserRouter = require('express').Router();

const parserConfig = fs.readFileSync('./mock-data/parser-config.json', 'utf-8');
const parserGroups = fs.readFileSync('./mock-data/parser-group.json', 'utf-8');

parserRouter.get('/config', function(req, res, next) {
  res.status(200).send(parserConfig);
});

parserRouter.get('/group', function(req, res, next) {
  res.status(200).send(parserGroups);
});

module.exports = parserRouter;
