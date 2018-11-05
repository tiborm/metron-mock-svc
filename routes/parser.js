const fs = require('fs');

const parserRouter = require('express').Router();

const parserConfig = fs.readFileSync('./mock-data/parser-config.json', 'utf-8');


parserRouter.get('/config', function(req, res, next) {
  res.status(200).send(parserConfig);
});

module.exports = parserRouter;
