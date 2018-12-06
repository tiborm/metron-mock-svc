const globalConfigRouter = require('express').Router();

globalConfigRouter.get('/config', function (req, res, next) {
  res.sendFile(process.cwd() + '/mock-data/alerts/config.json');
});

module.exports = globalConfigRouter;
