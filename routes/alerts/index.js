const alertsUiRouter = require('express').Router();

alertsUiRouter.post('/search', function (req, res, next) {
  res.sendFile(process.cwd() + '/mock-data/alerts/search.json');
});

module.exports = alertsUiRouter;
